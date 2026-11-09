# Folio

Jay Arcement’s portfolio archive of five public records, saved November 8, 2026, and built so more routes can be added beside them.

1. The January 10, 2025 Nasdaq release on Phillips 66, Mach 1, NCR Voyix Halo checkout, and Everseen.
2. US 12,725,481 B2, *Personalized and themed transaction interface*, including the official USPTO PDF.
3. US 12,711,285 B2, *Smart cart security with auditing*, including the official USPTO PDF.
4. The public inventor listing for Jay Arcement.
5. US 2024/0005750 A1, the published application on event-triggered item image capture.

The grant pages store the USPTO PDFs and the full patent text. The inventor page stores all six listings. The 2024 application stores the published specification. The press page stores a clipping of the announcement and links to the Nasdaq and Business Wire wording.

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

Add a route under `src/app`, then add an entry to `src/lib/shelf.ts` so it appears in the shelf navigation.
