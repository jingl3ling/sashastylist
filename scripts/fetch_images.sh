#!/bin/bash
# Download up to 5 photos per product, 4 at a time. Skips files already present.
ROOT="$1"; IMG="$ROOT/data/catalog/images"; mkdir -p "$IMG"
python3 -I - "$ROOT" <<'P' > "$ROOT/data/image_jobs.tsv"
import json,sys,re
for p in json.load(open(sys.argv[1]+"/data/catalog/products.json")):
    for i,u in enumerate(p["source_images"],1):
        if "cdn.shopify" in u or "/cdn/shop/" in u: u+=("&" if "?" in u else "?")+"width=900"
        ext=re.search(r"\.(jpe?g|png|webp)",u,re.I); ext=ext.group(1).lower() if ext else "jpg"
        print(p["image_dir"],i,ext,u,sep="\t")
P
export IMG
cat "$ROOT/data/image_jobs.tsv" | xargs -P 4 -L 1 bash -c 'd="$IMG/$0"; f="$d/$1.$2"; mkdir -p "$d"; [ -s "$f" ] && exit 0; c=$(curl -s -m 30 -A "fashion-hackathon-catalog/0.1 (non-commercial hackathon demo)" -o "$f" -w "%{http_code}" "$3"); [ "$c" = 200 ] || { rm -f "$f"; echo "fail $c $3"; }; sleep 0.3'
find "$IMG" -type f | wc -l; du -sh "$IMG"
