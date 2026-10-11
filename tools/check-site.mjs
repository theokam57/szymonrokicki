import { existsSync, readdirSync, readFileSync } from "node:fs";
import { dirname, join, relative, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";
import { parse } from "parse5";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const baseUrl = "https://szymonrokicki.pl";
const ignoredDirectories = new Set([".git", "node_modules", "tools"]);
const legacyRoutes = new Set([
  "/dawny-lelow-na-mapach/", "/lelow-historia-miasta/", "/mury-miejskie-lelowa/",
  "/rynek-w-lelowie/", "/sredniowieczny-lelow/", "/stary-lelow/", "/zamek-w-lelowie/",
  "/co-zobaczyc-w-lelowie/", "/galeria-map/", "/kalendarium/", "/mapa-interaktywna/",
  "/mapy-lelowa/", "/zrodla-do-historii-lelowa/", "/zrodla-i-bibliografia/",
  "/o-projekcie-historia-lelowa/",
]);
const htaccess = readFileSync(join(root, ".htaccess"), "utf8");
const redirects = new Map([...htaccess.matchAll(/^\s*RewriteRule\s+\^([^$]+?)\/?\$\s+\/([^\s]+)\s+\[R=301,L\]/gm)]
  .map(([, source, target]) => [`/${source}/`, `/${target.replace(/\/$/, "")}/`]));
const obsoleteClasses = ["article-summary", "article-footer-nav", "mini-glossary", "reading-bar", "reveal"];

function walk(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) {
      return ignoredDirectories.has(entry.name) ? [] : walk(path);
    }
    return entry.name.endsWith(".html") ? [path] : [];
  });
}

function routeFor(file) {
  const path = relative(root, file).split(sep).join("/");
  if (path === "index.html") return "/";
  if (path.endsWith("/index.html")) return `/${path.replace(/index\.html$/, "")}`;
  return `/${path}`;
}

function localTargetExists(pathname) {
  const clean = decodeURIComponent(pathname);
  const target = join(root, ...clean.split("/").filter(Boolean));
  return existsSync(target) || existsSync(join(target, "index.html"));
}

function walkNodes(node, visit) {
  visit(node);
  for (const child of node.childNodes ?? []) walkNodes(child, visit);
  if (node.content) walkNodes(node.content, visit);
}

function textContent(node) {
  if (node.nodeName === "#text") return node.value;
  return (node.childNodes ?? []).map(textContent).join("");
}

function attr(node, name) {
  return node.attrs?.find((item) => item.name === name)?.value;
}

function metaValue(nodes, name, key = "name") {
  const metaNode = nodes.find((node) => node.tagName === "meta" && attr(node, key) === name);
  return metaNode ? attr(metaNode, "content") : undefined;
}

const errors = [];
const pages = walk(root);

for (const file of pages) {
  const rel = relative(root, file).split(sep).join("/");
  const route = routeFor(file);
  const html = readFileSync(file, "utf8");
  const document = parse(html);
  const nodes = [];
  walkNodes(document, (node) => nodes.push(node));
  const ids = nodes.map((node) => attr(node, "id")).filter(Boolean);
  const duplicateIds = ids.filter((id, index) => ids.indexOf(id) !== index);
  const h1Count = nodes.filter((node) => node.tagName === "h1").length;
  const title = nodes.find((node) => node.tagName === "title");

  if (h1Count !== 1) errors.push(`${rel}: oczekiwano jednego h1, znaleziono ${h1Count}.`);
  if (!title || !textContent(title).trim()) errors.push(`${rel}: brak tytułu strony.`);
  if (duplicateIds.length) errors.push(`${rel}: powtórzone id: ${[...new Set(duplicateIds)].join(", ")}.`);

  if (rel !== "404.html") {
    const canonical = nodes.find((node) => node.tagName === "link" && attr(node, "rel")?.split(/\s+/).includes("canonical"));
    const canonicalUrl = canonical ? attr(canonical, "href") : undefined;
    const expected = `${baseUrl}${route}`;
    if (canonicalUrl !== expected) errors.push(`${rel}: canonical '${canonicalUrl ?? "brak"}', oczekiwano '${expected}'.`);
    const openGraphUrl = metaValue(nodes, "og:url", "property");
    if (openGraphUrl !== canonicalUrl) errors.push(`${rel}: og:url '${openGraphUrl ?? "brak"}' nie zgadza się z canonicalem.`);
  }

  const structuredData = [];
  for (const block of nodes.filter((node) => node.tagName === "script" && attr(node, "type") === "application/ld+json")) {
    try { structuredData.push(JSON.parse(textContent(block))); }
    catch (error) { errors.push(`${rel}: niepoprawny JSON-LD (${error.message}).`); }
  }
  if (metaValue(nodes, "article", "property") === "article") {
    const articles = structuredData.flatMap((data) => data["@graph"] ?? [data]).filter((data) => data["@type"] === "Article" || data["@type"] === "BlogPosting");
    if (!articles.length) errors.push(`${rel}: strona Article nie ma danych JSON-LD Article.`);
    for (const article of articles) {
      if (!article.datePublished || !article.dateModified) errors.push(`${rel}: JSON-LD Article wymaga datePublished i dateModified.`);
      if (article.mainEntityOfPage?.["@id"] !== `${baseUrl}${route}`) errors.push(`${rel}: mainEntityOfPage nie zgadza się z canonicalem.`);
    }
  }

  for (const node of nodes) {
    for (const name of ["href", "src"]) {
      const value = attr(node, name);
      if (!value?.startsWith("/")) continue;
      const pathname = value.split(/[?#]/, 1)[0] || "/";
      if (legacyRoutes.has(pathname)) errors.push(`${rel}: wewnętrzny link używa starego adresu '${pathname}'.`);
      const redirectTarget = redirects.get(pathname);
      if (redirectTarget) {
        if (!localTargetExists(redirectTarget)) errors.push(`${rel}: przekierowanie '${pathname}' wskazuje na brakujący cel '${redirectTarget}'.`);
      } else if (!localTargetExists(pathname)) {
        errors.push(`${rel}: brak celu dla '${pathname}'.`);
    }
    }
  }

  for (const node of nodes) {
    const href = attr(node, "href");
    if (href?.startsWith("#") && !ids.includes(href.slice(1))) errors.push(`${rel}: brak kotwicy '${href}'.`);
  }

  if (route.startsWith("/artykul/") || route.startsWith("/sredniowiecze/")) {
    for (const className of obsoleteClasses) {
      if (nodes.some((node) => attr(node, "class")?.split(/\s+/).includes(className))) {
        errors.push(`${rel}: używa wycofanej klasy '${className}'.`);
      }
    }
  }

  if (route === "/szukaj/") {
    const searchItems = nodes.filter((node) => node.tagName === "a" && attr(node, "data-search-item") !== undefined);
    const searchRoutes = searchItems.map((node) => attr(node, "href"));
    const duplicateSearchRoutes = searchRoutes.filter((item, index) => searchRoutes.indexOf(item) !== index);
    if (duplicateSearchRoutes.length) errors.push(`${rel}: powtórzone adresy w wyszukiwarce: ${[...new Set(duplicateSearchRoutes)].join(", ")}.`);
  }
}

if (errors.length) {
  console.error(`Kontrola strony: ${errors.length} problemów.`);
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log(`Kontrola strony OK: ${pages.length} plików HTML.`);
