export type MarineRouteType = "home" | "service" | "blog" | "project";

export type MarineRouteDecision =
  | "current-canonical-owner"
  | "preserve-pending-evidence";

export interface MarineRouteRecord {
  id: string;
  path: `/${string}`;
  pageType: MarineRouteType;
  sourceDefined: true;
  currentDirectHttpStatus: 200 | 404;
  currentSitemapListed: boolean;
  currentIndexable: boolean;
  decision: MarineRouteDecision;
  approvedForRouteRestoration: boolean;
  proposedSitemapMembership: boolean;
  evidenceRequired?: string[];
}

const serviceIds = [
  "mechanical-electrical-repairs",
  "engine-diagnostics-refits",
  "engine-service",
  "generator-service",
  "electronics-navigation-audio",
  "ac-refrigeration-systems",
  "hull-painting-antifouling",
  "fiberglass-composite-repairs",
  "yacht-polishing-detailing",
  "touch-up-gelcoat-repair",
  "upholstery-soft-furnishings",
  "teak-deck-restoration",
  "interior-restoration-deck-refinishing",
] as const;

const blogIds = ["hull-antifouling", "engine-diagnostics", "dubai-yachting"] as const;

const projectIds = [
  "azimut-refit",
  "sunseeker-restoration",
  "gulf-craft-upgrade",
  "princess-restoration",
] as const;

const pendingRoute = (
  pageType: Exclude<MarineRouteType, "home">,
  id: string,
): MarineRouteRecord => ({
  id: `${pageType}-${id}`,
  path: `/${pageType}/${id}`,
  pageType,
  sourceDefined: true,
  currentDirectHttpStatus: 404,
  currentSitemapListed: false,
  currentIndexable: false,
  decision: "preserve-pending-evidence",
  approvedForRouteRestoration: false,
  proposedSitemapMembership: false,
  evidenceRequired: [
    "URL-level Search Console evidence",
    "claim and identity approval",
    "media-rights approval",
    "canonical ownership approval",
  ],
});

export const marineRouteManifest: readonly MarineRouteRecord[] = [
  {
    id: "home",
    path: "/",
    pageType: "home",
    sourceDefined: true,
    currentDirectHttpStatus: 200,
    currentSitemapListed: true,
    currentIndexable: true,
    decision: "current-canonical-owner",
    approvedForRouteRestoration: false,
    proposedSitemapMembership: true,
  },
  ...serviceIds.map((id) => pendingRoute("service", id)),
  ...blogIds.map((id) => pendingRoute("blog", id)),
  ...projectIds.map((id) => pendingRoute("project", id)),
];

export const sourceRouteCounts = Object.freeze({
  home: 1,
  service: serviceIds.length,
  blog: blogIds.length,
  project: projectIds.length,
  total: 1 + serviceIds.length + blogIds.length + projectIds.length,
});
