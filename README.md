# TheKameragrapher Portfolio

Premium React portfolio for a photographer with:

- Full-screen landing hero with centered `THEKAMERAGRAPHER` branding
- Sticky navigation that appears after the first page
- Five separate category pages: automotive, portrait, travel, street, and drone
- Reusable category cards and gallery grid
- Full-screen lightbox modal
- Featured-on logo marquee
- Contact section
- Separate asset folders for each image category

## Run

```bash
npm install
npm run dev
```

## Structure

- `src/components/layout`: app shell and sticky navigation
- `src/components/home`: landing page sections
- `src/components/gallery`: category-page hero, grid, and lightbox
- `src/components/common`: shared transition wrapper
- `src/pages`: route-level pages
- `src/data`: central content and gallery metadata
- `src/assets/images`: per-category image folders
- `src/assets/logos`: featured platform logo assets
- `src/styles`: global theme and component styling
