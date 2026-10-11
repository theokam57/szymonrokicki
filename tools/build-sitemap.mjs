import { readdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
import { dirname, join, relative, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const baseUrl = "https://szymonrokicki.pl";
const ignoredDirectories = new Set([".git", "node_modules", "tools"]);

function walk(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) {
      return ignoredDirectories.has(entry.name) ? [] : walk(path);
    }
    return entry.name === "index.html" ? [path] : [];
  });
}

function routeFor(file) {
  const path = relative(root, file).split(sep).join("/");
  return path === "index.html" ? "/" : `/${path.replace(/index\.html$/, "")}`;
}

function escapeXml(value) {
  return value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
}

function metaContent(html, property) {
  const escaped = property.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return html.match(new RegExp(`<meta[^>]+(?:property|name)=["']${escaped}["'][^>]+content=["']([^"']+)["']`, "i"))?.[1];
}

const pages = walk(root)
  .map((file) => {
    const route = routeFor(file);
    const html = readFileSync(file, "utf8");
    const modified = metaContent(html, "article:modified_time")?.slice(0, 10)
      ?? statSync(file).mtime.toISOString().slice(0, 10);
    return {
      route,
      modified,
      image: metaContent(html, "og:image"),
      priority: route === "/" ? "1.0" : ["/historia-lelowa/", "/projekty/", "/sredniowiecze/"].includes(route) ? "0.9" : route.includes("/artykul/") || route.startsWith("/sredniowiecze/") ? "0.7" : "0.5",
      changefreq: route === "/" ? "weekly" : "monthly",
    };
  })
  .sort((a, b) => a.route === "/" ? -1 : b.route === "/" ? 1 : a.route.localeCompare(b.route, "pl"));

const entries = pages.map(({ route, modified, image, priority, changefreq }) => {
  const imageEntry = image
    ? `\n        <image:image><image:loc>${escapeXml(image)}</image:loc></image:image>`
    : "";
  return `    <url>\n        <loc>${baseUrl}${escapeXml(route)}</loc>\n        <lastmod>${modified}</lastmod>\n        <changefreq>${changefreq}</changefreq>\n        <priority>${priority}</priority>${imageEntry}\n    </url>`;
}).join("\n");

const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n${entries}\n</urlset>\n`;
writeFileSync(join(root, "sitemap.xml"), xml, "utf8");
console.log(`Wygenerowano sitemap.xml: ${pages.length} stron.`);
