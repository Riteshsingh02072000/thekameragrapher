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

## Add More Photos

1. Drop new shots into the matching folder in `public/portfolio`
2. Run `npm run optimize:portfolio` to batch-resize/compress everything for the web
3. Update `src/data/galleryConfig.js` only if you want some specific files to appear first
4. Run `npm run generate:gallery`
5. Run `npm run build` and push

`featuredPhotos` in `src/data/galleryConfig.js` control the priority order and custom captions. Everything else in a category folder is added automatically after those featured files.

## Structure

- `src/components/layout`: app shell and sticky navigation
- `src/components/home`: landing page sections
- `src/components/gallery`: category-page hero, grid, and lightbox
- `src/components/common`: shared transition wrapper
- `src/pages`: route-level pages
- `src/data`: content config plus generated gallery metadata
- `src/assets/images`: per-category image folders
- `src/assets/logos`: featured platform logo assets
- `scripts`: automation for image optimization and gallery generation
- `src/styles`: global theme and component styling
