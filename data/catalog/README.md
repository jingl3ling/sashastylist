# Fashion Barn demo catalog

Hackathon demo data. Not for commercial use.

- `products.json`: full catalog. `products.csv`: flat version with the first 3 photos.
- `outfits.json`: 24 outfits across 4 themes, 12 women’s and 12 men’s. Each item points to a product `id`.
- `images/`: local photos. Paths in `products.json` are relative to this folder.

## What is real and what is simulated

Real, from source feeds: titles, descriptions, details, photos, brands, most sizes and colors.

Simulated, under each product's `simulated` key: final price, sale status, SKU, rating, review count, inventory.
Prices start from the source price, with a minimum per category because some Black Tux prices are rental rates.

`size_source` and `color_source` say where sizes and colors came from. `simulated` sizes follow standard ranges for the category.

## Sources

Shopify `/products.json` feeds: The Black Tux, State & Liberty, Tie Bar, Taylor Stitch, Thursday, Stüssy, Kith, Mack Weldon, BDGA.
Women’s feeds: Birdy Grey, Staud, Ulla Johnson, Show Me Your Mumu, M.M.LaFleur, Cuyana, Anine Bing, Agolde, Mother, Jenni Kayne, Naadam, Alo, Beyond Yoga, Outdoor Voices, L*Space, Solid & Striped, Vitamin A, Sarah Flint, Dolce Vita, Birdies, Loeffler Randall, Gorjana, Kith.
Kaggle: `whenamancodes/adidas-us-retail-products-dataset`.

Photos and copy belong to their brands. `source_url` records each item's origin.

## Rebuild

    bash scripts/pull_feeds.sh data/raw/feeds
    python3 -I scripts/normalize.py "$PWD"
    python3 -I scripts/build_catalog.py "$PWD"
    bash scripts/fetch_images.sh "$PWD"
    python3 -I scripts/finalize.py "$PWD"
