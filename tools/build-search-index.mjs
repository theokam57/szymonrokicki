import { readdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join, relative, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const searchPage = join(root, "szukaj", "index.html");
const ignored = new Set([".git", "node_modules", "tools", "szukaj"]);
const curated = new Map([
  ["/historia-lelowa/stary-lelow/", ["Staromieście", "stary lelów", "przedlokacyjny lelów"]],
  ["/historia-lelowa/zamek-lelowski-1629/", ["1629", "inwentarz zamku"]],
  ["/historia-lelowa/zamek-lelowski-1792/", ["1792", "inwentarz zamku"]],
  ["/historia-lelowa/zamek-lelowski/", ["zamek w lelowie", "zamek lelowski", "castrum in lelow"]],
]);

function walk(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const file = join(directory, entry.name);
    if (entry.isDirectory()) return ignored.has(entry.name) ? [] : walk(file);
    return entry.name === "index.html" ? [file] : [];
  });
}

function routeFor(file) {
  const path = relative(root, file).split(sep).join("/");
  return path === "index.html" ? "/" : `/${path.replace(/index\.html$/, "")}`;
}

function escapeHtml(value) {
  return value.replaceAll("&", "&amp;").replaceAll('"', "&quot;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
}

function plainText(value) {
  return value.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, " ")
    .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ").replace(/&nbsp;/g, " ").replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"').replace(/&#39;|&apos;/g, "'")
    .replace(/&lt;/g, "<").replace(/&gt;/g, ">")
    .replace(/\s+/g, " ").trim();
}

function meta(html, name) {
  const escaped = name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return html.match(new RegExp(`<meta[^>]+name=["']${escaped}["'][^>]+content=["']([^"']*)["']`, "i"))?.[1] ?? "";
}

const items = walk(root).map((file) => {
  const route = routeFor(file);
  const html = readFileSync(file, "utf8");
  const title = plainText(html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1] ?? "");
  const description = meta(html, "description");
  const heading = plainText(html.match(/<h1\b[^>]*>([\s\S]*?)<\/h1>/i)?.[1] ?? "");
  const keywords = curated.get(route) ?? [];
  const section = route.startsWith("/sredniowiecze/") ? "średniowiecze"
    : route.startsWith("/historia-lelowa/") ? "historia lelowa" : "serwis";
  return { route, title: heading || title, description: plainText(description), keywords, section };
}).filter((item) => item.route !== "/404.html" && item.route !== "/generator/");

const html = readFileSync(searchPage, "utf8");
const start = "            <div class=\"related-grid\" data-search-results>";
const end = "            </div>\n            </section>";
const beginAt = html.indexOf(start);
const endAt = html.indexOf(end, beginAt);
if (beginAt < 0 || endAt < 0) throw new Error("Nie znaleziono kontenera wyników wyszukiwania.");

const cards = items.map((item) => {
  const haystack = [...item.keywords, item.title, item.description].join(" ").toLocaleLowerCase("pl-PL");
  const attrs = `href="${escapeHtml(item.route)}" class="related-card" data-search-item data-title="${escapeHtml(item.title.toLocaleLowerCase("pl-PL"))}" data-description="${escapeHtml(item.description.toLocaleLowerCase("pl-PL"))}" data-keywords="${escapeHtml(haystack)}" data-section="${escapeHtml(item.section)}"`;
  return `\n                <a ${attrs}>\n                    <span>${escapeHtml(item.section)}</span>\n                    <strong>${escapeHtml(item.title)}</strong>\n                    <small>${escapeHtml(item.description)}</small>\n                </a>`;
}).join("");

writeFileSync(searchPage, `${html.slice(0, beginAt + start.length)}${cards}\n${html.slice(endAt)}`, "utf8");
console.log(`Wygenerowano indeks wyszukiwarki: ${items.length} stron.`);
