# Ocean Recipes – Next.js Frontend

A simple recipe browser built with Next.js App Router and Tailwind CSS. It follows the Ocean Professional theme:
- Primary: #2563EB
- Secondary/Success: #F59E0B
- Error: #EF4444
- Background: #f9fafb
- Surface: #ffffff
- Text: #111827
- Gradient: from-blue-500/10 to-gray-50 accents in headers

Features:
- Home page: responsive grid of recipe cards with images, title, description, tags, and meta (prep/cook/servings).
- Detail page: hero image, tags, times, servings, ingredients, and step-by-step instructions.
- Navbar with search filtering (client-side), and a minimal Footer.
- Local mock data (no external APIs or services).

## Getting Started

1) Install dependencies and run dev:
```bash
npm install
npm run dev
```

2) Open http://localhost:3000

No additional environment variables are required. If available, NEXT_PUBLIC_* env vars will be respected but are not necessary.

## Project Structure

- src/app/page.tsx – Home grid
- src/app/recipes/[slug]/page.tsx – Recipe detail route (statically generated)
- src/components/ – Navbar, RecipeCard, Tag, Footer
- src/data/recipes.ts – Mock recipe data source
- public/images/ – Placeholder images (SVG)

## Theming

Theme variables are defined in src/app/globals.css under the :root selector. Adjust these values to tweak the Ocean Professional palette, corner radii, and shadows.

## Accessibility

- Semantic HTML structure with landmarks
- Alt text for images
- Focus styles via focus-ring utilities
- Sufficient contrast within theme colors

## Notes

- No external services are required.
- Images are simple SVG placeholders to keep the app self-contained.
