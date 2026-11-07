#!/bin/bash
# Keep adidas rows whose first and third images still load. Writes one SKU per line.
python3 -I - "$1" <<'P' > "$2.urls"
import json,sys
for c in json.load(open(sys.argv[1]+"/data/interim_candidates.json")):
    if c["src"]=="adidas-kaggle" and len(c["images"])>=3: print(c["src_id"],c["images"][0],c["images"][2])
P
: > "$2"
while read sku a b; do
  x=$(curl -s -m 10 -o /dev/null -w '%{http_code}' -I "$a"); y=$(curl -s -m 10 -o /dev/null -w '%{http_code}' -I "$b")
  [ "$x" = 200 ] && [ "$y" = 200 ] && echo "$sku" >> "$2"
  sleep 0.3
done < "$2.urls"
wc -l "$2.urls" "$2"
