# Folio

Jay Arcement’s site. The home page is an introduction, then two sections of work.

1. Product Releases: the January 10, 2025 Nasdaq release on Phillips 66, Mach 1, NCR Voyix Halo checkout, and Everseen.
2. Patents and Projects: US 12,725,481 B2, US 12,711,285 B2, US 2024/0005750 A1, and Tray Tables, a travel app at [traytablesdining.com](https://www.traytablesdining.com/).

The introduction lives in `src/lib/profile.ts`. The grant pages store the USPTO PDFs and the full patent text. The 2024 application stores the published specification. The press page stores a clipping of the announcement and links to the Nasdaq and Business Wire wording. A fuller inventor listing remains at `/inventors/jay-arcement`.

## Run locally

```bash
npm install
npm run dev
```

The dev server listens on port 3847. Open [http://127.0.0.1:3847](http://127.0.0.1:3847).

```bash
npm run lint
npm run build
npm start
```

## Add a page

Add a route under `src/app`, then add an entry to `src/lib/shelf.ts` with `group: "releases"` or `group: "patents"` so it appears in that section on the home page.
