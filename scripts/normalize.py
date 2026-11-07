"""Normalize raw Shopify feeds + Adidas Kaggle rows into candidates.json, with category rules."""
import json,glob,os,re,csv,html,collections,sys
csv.field_size_limit(10**8)
ROOT=sys.argv[1]
BRAND={"www.theblacktux.com":"The Black Tux","www.stateandliberty.com":"State & Liberty","www.tiebar.com":"Tie Bar","www.taylorstitch.com":"Taylor Stitch","www.thursdayboots.com":"Thursday","www.stussy.com":"Stüssy","kith.com":None,"www.mackweldon.com":"Mack Weldon","bdgastore.com":None}
EXCL=re.compile(r"\[W\]|mini ball|sleigh|gift wrapped|bulldog|game day|skull|\bmeta\b|\| ?sets$|\| ?gifting$|\bset$|\bset\b.*\||suit and belt|x the tie bar|tie & |socks? & | & .*(tie|socks?|square|belt)\b|swatch|home try|voucher|gift ?card|e-gift|hidden|\bbundle|\blaces?\b|shoe care|keychain|decor|custom|fabric|wom[ae]n|wmns|ladies|\bgirls?\b|\bkids?\b|toddler|junior|\binfant|\bbaby\b|\btd\b|\bgs\b|\bps\b|one piece|swimsuit|\bdress\b(?! (shirt|pant|shoe|sock|boot|trouser))|skirt|\bbra\b|bikini|sample|insurance|shipping|protection|sticker|poster|candle|\btowel|mug\b|gift box|\b\d-pack bundle",re.I)
FOOT=r"footwear|shoes|boots|sneakers|low top|high top|sandals|slides"
R=[ # (category, subcategory, regex on title|type)
("Sport Coats","Sport Coat",r"sport ?coat|blazer"),
("Accessories","Bag",r"(?<!heavy )\bbag\b|backpack|\btote\b|duffel"),
("Footwear","Sandals",r"sandal|adilette|flip.?flop|pool slide|\bslides\b"),
("Tuxedos","Tuxedo Outfit",r"\|tuxedo outfits$|\|tuxedos$"),
("Tuxedos","Tuxedo Jacket",r"tuxedo jacket|dinner jacket"),
("Tuxedos","Tuxedo Pants",r"tuxedo pants"),
("Tuxedos","Tuxedo Vest",r"tuxedo vest"),
("Formal Accessories","Cummerbund",r"cummerbund"),
("Suits","Suit",r"\|suit outfits$|\|suits$|\|suit$|\|online suit$"),
("Suit Separates","Suit Jacket",r"\|suit jackets$"),
("Suit Separates","Suit Pants",r"\|suit pants$"),
("Suit Separates","Vest",r"\|suit vests$"),
("Sport Coats","Sport Coat",r"sport ?coat|blazer"),
("Neckwear","Bow Tie",r"bow ?tie"),
("Neckwear","Necktie",r"\|neckties$|\|ties$"),
("Formal Accessories","Pocket Square",r"pocket square"),
("Formal Accessories","Cufflinks",r"cufflink"),
("Formal Accessories","Tie Bar",r"\|tie bars$"),
("Formal Accessories","Suspenders",r"suspender"),
("Belts","Belt",r"\bbelts?\b"),
("Socks","Socks",r"\bsocks?\b"),
("Swim","Swim Trunks",r"swim trunk|swim short|board short|swim\b"),
("Underwear","Underwear",r"boxer|(?<!- )brief|undershirt|\|underwear$"),
("Footwear","Loafers",r"loafer|^penny\b|driver\b"),
("Footwear","Dress Shoes",r"\|dress shoes$|oxford.*\|("+FOOT+")|derby|monk strap|cap toe"),
("Footwear","Boots",r"\|boots$|\bboots?\b.*\|("+FOOT+")"),
("Footwear","Sandals",r"sandal|slides?\b.*\|("+FOOT+")"),
("Footwear","Sneakers",r"\|(sneakers|low top sneakers|high top sneakers|footwear|shoes)$"),
("Swim","Swim Trunks",r"$^"),
("Shorts","Shorts",r"\bshorts\b|\bshort\b(?! ?-?sleeve)(?=.*\|(bottoms|pants))"),
("Denim","Jeans",r"\bjeans?\b|\|denim|denim pant"),
("Trousers","Joggers & Sweats",r"jogger|sweatpant|track pant"),
("Trousers","Chinos",r"\bchinos?\b"),
("Trousers","Dress Pants",r"dress pant|trouser|\|pants$|\|bottoms$|\bpant\b"),
("Outerwear","Overcoat",r"overcoat|topcoat|peacoat|trench"),
("Hoodies & Sweatshirts","Hoodie",r"hood|\|fleece$"),
("Hoodies & Sweatshirts","Sweatshirt",r"sweatshirt|crew ?neck.*fleece"),
("Sweaters","Sweater",r"sweater|cardigan|quarter.?zip|\|knit$|\|sweaters$"),
("Polos","Polo",r"\bpolos?\b"),
("Dress Shirts","Dress Shirt",r"\|dress shirts$|\|classic fit$|tuxedo shirt|dress shirt"),
("Tees","Tee",r"\btees?\b|t-shirt|\|short sleeve tees$|\|long sleeve tees$"),
("Shirts","Button-Up",r"button|oxford|\bshirts?\b|flannel|overshirt|\|wovens$|\|casual button down$|ssbd"),
("Outerwear","Jacket",r"jacket|coat\b|parka|bomber|vest\b|\|outerwear$|\|jackets$"),
("Headwear","Hat",r"\bcap\b|\bhat\b|beanie|bucket|\|headwear$|\|beanies$"),
("Accessories","Sunglasses",r"sunglass|\|eyewear$"),
("Accessories","Wallet",r"wallet|card holder"),
("Accessories","Bag",r"\bbag\b|backpack|tote|duffel"),
("Accessories","Scarf",r"scarf|scarves"),
]
R=[(c,s,re.compile(x,re.I)) for c,s,x in R]
def classify(title,ptype):
    t=f"{title}|{ptype}".strip()
    for c,s,x in R:
        if x.search(t): return c,s
    return None,None
def clean(h):
    h=h or ""
    li=[html.unescape(re.sub(r"<[^>]+>"," ",x)).strip() for x in re.findall(r"<li[^>]*>(.*?)</li>",h,re.S|re.I)]
    li=[re.sub(r"\s+"," ",x) for x in li if x.strip()]
    body=re.sub(r"<li[^>]*>.*?</li>"," ",h,flags=re.S|re.I)
    body=html.unescape(re.sub(r"<[^>]+>"," ",re.sub(r"<(style|script)[^>]*>.*?</\1>"," ",body,flags=re.S|re.I)))
    return re.sub(r"\s+"," ",body).strip(),li
out=[];seen=set();drop=collections.Counter()
for f in sorted(glob.glob(ROOT+"/data/raw/feeds/*.json")):
    store=os.path.basename(f).split(".p")[0]
    for p in json.load(open(f))["products"]:
        if (store,p["id"]) in seen: continue
        seen.add((store,p["id"]))
        tags=" ".join(p["tags"]) if isinstance(p["tags"],list) else str(p["tags"])
        if EXCL.search(p["title"]+"|"+p["product_type"]) or re.search(r"wom[ae]n|wmns|\bkids\b",tags+" "+(p.get("vendor") or ""),re.I): drop["excl"]+=1; continue
        c,s=classify(p["title"],p["product_type"])
        if not c: drop["uncat:"+store]+=1; continue
        d,li=clean(p.get("body_html"))
        d=re.sub(r"\b(Product Features|Shipping Info|Details|Description)\b","",d).strip()
        if len(d)<40 and li: d=". ".join(x.rstrip(".") for x in li[:4])+"."
        imgs=[i["src"] for i in p["images"]]
        opts={o["name"].lower():o["values"] for o in p["options"]}
        pr=[float(v["price"]) for v in p["variants"] if float(v["price"])>0]
        if "purchase type" in opts and "Buy" not in opts["purchase type"]: drop["rent"]+=1; continue
        out.append(dict(src=store,src_id=str(p["id"]),url=f"https://{store}/products/{p['handle']}",title=re.sub(r"^\[S\]\s*","",p["title"]),brand=BRAND[store] or p.get("vendor") or store,ptype=p["product_type"],tags=p["tags"] if isinstance(p["tags"],list) else [],category=c,subcategory=s,description=d,details=li,images=imgs,options=opts,price=min(pr) if pr else None))
a=csv.DictReader(open(ROOT+"/data/raw/kaggle/adidas-us-retail-products-dataset/adidas.csv",encoding="utf-8",errors="replace"))
for r in a:
    if not r["breadcrumbs"].lower().startswith("men"): continue
    t=r["name"]; c,s=classify(t,{"Shoes":"footwear","Clothing":"","Accessories":""}[r["category"]])
    if not c: c,s={"Shoes":("Footwear","Sneakers"),"Clothing":("Tees","Tee"),"Accessories":("Accessories","Bag")}[r["category"]]
    out.append(dict(src="adidas-kaggle",src_id=r["sku"],url=r["url"],title=t,brand="adidas",ptype=r["breadcrumbs"],tags=[],category=c,subcategory=s,description=r["description"],details=[],images=r["images"].split("~"),options={"color":[r["color"]]},price=float(r["selling_price"] or 0) or None))
json.dump(out,open(ROOT+"/data/interim_candidates.json","w"))
print(len(out),drop.most_common(14))
t=collections.Counter((x["category"],x["subcategory"]) for x in out)
for k,v in sorted(t.items()):
    b=collections.Counter(x["brand"] for x in out if (x["category"],x["subcategory"])==k).most_common(5)
    print(k,v,b)
g=[x for x in out if len(x["images"])>=3 and len(x["description"])>=60]
print("quality ok",len(g))
