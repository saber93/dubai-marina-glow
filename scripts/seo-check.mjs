import { readFile } from "node:fs/promises";

const productionOrigin = "https://michealmarineservices.com";
const index = await readFile("dist/index.html", "utf8");
const sitemap = await readFile("dist/sitemap.xml", "utf8");
const robots = await readFile("dist/robots.txt", "utf8");
const app = await readFile("src/App.tsx", "utf8");
const main = await readFile("src/main.tsx", "utf8");

const assert = (condition, message) => {
  if (!condition) throw new Error(message);
};

assert(/<html\s+lang=["']en["']/.test(index), "Homepage output must declare English");
assert(/<title>[^<]+<\/title>/.test(index), "Homepage output must contain a title");
assert(/<meta\s+name=["']description["']/.test(index), "Homepage output must contain a description");
assert(
  sitemap.match(/<loc>/g)?.length === 1 && sitemap.includes(`${productionOrigin}/`),
  "Phase 0 sitemap must contain only the homepage",
);
assert(
  robots.includes(`Sitemap: ${productionOrigin}/sitemap.xml`),
  "robots.txt must reference the production sitemap",
);
assert(!/hreflang|x-default/i.test(index + sitemap + robots), "No live language alternates are approved");
assert(!app.includes("route-manifest") && !main.includes("route-manifest"), "Runtime must not import governance manifest");
assert(!sitemap.includes("netlify.app"), "Preview authority must not enter the sitemap");

console.log("SEO foundation check passed: homepage-only sitemap; 20 inner routes remain deferred.");
