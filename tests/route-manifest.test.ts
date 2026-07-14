import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

import { marineRouteManifest, sourceRouteCounts } from "../src/seo/route-manifest";

describe("Phase 0 Michael Marine route governance", () => {
  it("records the homepage and exactly 20 source-defined inner routes", () => {
    expect(sourceRouteCounts).toEqual({
      home: 1,
      service: 13,
      blog: 3,
      project: 4,
      total: 21,
    });
    expect(marineRouteManifest).toHaveLength(21);
    expect(new Set(marineRouteManifest.map((route) => route.id)).size).toBe(21);
    expect(new Set(marineRouteManifest.map((route) => route.path)).size).toBe(21);
  });

  it("keeps all inner routes blocked from restoration and sitemap output", () => {
    const innerRoutes = marineRouteManifest.filter((route) => route.path !== "/");
    expect(innerRoutes).toHaveLength(20);
    expect(innerRoutes.every((route) => route.currentDirectHttpStatus === 404)).toBe(true);
    expect(innerRoutes.every((route) => !route.approvedForRouteRestoration)).toBe(true);
    expect(innerRoutes.every((route) => !route.proposedSitemapMembership)).toBe(true);
  });

  it("keeps the public sitemap limited to the current homepage owner", () => {
    const sitemap = readFileSync("public/sitemap.xml", "utf8");
    const locations = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
    expect(locations).toEqual(["https://michealmarineservices.com/"]);
  });

  it("does not integrate governance data into runtime application code", () => {
    const app = readFileSync("src/App.tsx", "utf8");
    const main = readFileSync("src/main.tsx", "utf8");
    expect(app).not.toContain("route-manifest");
    expect(main).not.toContain("route-manifest");
  });

  it("publishes no hreflang or cross-network link", () => {
    const sourceFiles = ["index.html", "src/App.tsx", "public/sitemap.xml", "public/robots.txt"];
    const output = sourceFiles.map((file) => readFileSync(file, "utf8")).join("\n");
    expect(output).not.toMatch(/hreflang|x-default/i);
    expect(output).not.toMatch(/yachtrentaldxb|theyachtrentaldubai|evaliyacht|yacht-dxb/i);
  });
});
