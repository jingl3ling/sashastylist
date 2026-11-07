#!/bin/bash
# Pull public Shopify feeds slowly. Stops a store on any non-200 response.
UA='fashion-hackathon-catalog/0.1 (non-commercial hackathon demo)'
OUT="$1"
for s in www.theblacktux.com www.stateandliberty.com www.tiebar.com www.taylorstitch.com www.thursdayboots.com www.stussy.com kith.com www.mackweldon.com bdgastore.com; do
  for p in 1 2 3 4 5 6; do
    f="$OUT/$s.p$p.json"
    c=$(curl -s -m 30 -A "$UA" -o "$f" -w '%{http_code}' "https://$s/products.json?limit=250&page=$p")
    n=$(wc -c < "$f")
    echo "$s p$p http=$c bytes=$n"
    sleep 8
    [ "$c" != "200" ] && { rm -f "$f"; break; }
    [ "$n" -lt 100 ] && { rm -f "$f"; break; }
  done
done
echo DONE
