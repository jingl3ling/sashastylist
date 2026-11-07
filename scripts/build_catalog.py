"""Select ~500 items, force outfit pieces in, add simulated commerce fields. Deterministic."""
import json,re,sys,random,hashlib,collections,os
ROOT=sys.argv[1]; random.seed(42)
C=json.load(open(ROOT+"/data/interim_candidates.json"))
live=set(open(ROOT+"/data/adidas_live.txt").read().split())
bad=set(json.load(open(ROOT+"/data/exclude.json"))) if os.path.exists(ROOT+"/data/exclude.json") else set()
CORE={"The Black Tux","State & Liberty","Tie Bar","Taylor Stitch","Thursday","Stüssy","Kith","Mack Weldon","adidas"}
EXTRA={"Footwear":{"Nike","New Balance","Birkenstock","Havaianas","Clarks","Timberland","Puma","Asics","Salomon"},"Accessories":{"Ray-Ban","Oakley"}}
def ok(c):
    if c["src"]=="adidas-kaggle" and c["src_id"] not in live: return False
    if c["src"]+c["src_id"] in bad: return False
    if len(c["images"])<3 or len(c["description"])<40: return False
    return c["brand"] in CORE or c["brand"] in EXTRA.get(c["category"],())
P=[c for c in C if ok(c)]
for c in P: c["key"]=c["src"]+":"+c["src_id"]
def pick(sub,rx,brand=None,no=None):
    r=[c for c in P if c["subcategory"]==sub and re.search(rx,c["title"],re.I) and (not brand or c["brand"]==brand) and not (no and re.search(no,c["title"],re.I))]
    r.sort(key=lambda c:(-min(len(c["images"]),6),c["title"]))
    return r[0] if r else None
S,BT,TB,MW,TS,TH="State & Liberty","The Black Tux","Tie Bar","Mack Weldon","Taylor Stitch","Thursday"
BLK=("Socks",r"Solid Black|SILVER Extended Crew Dress Sock$")
NOV=r"dice|aces|skull|bulldog|bowling|game|drama|star of|napkin|people"
SQW=("Pocket Square",r"Solid.*(white|ivory)|^white|\bwhite pocket square",None,NOV+r"|swan|miller|cocktail")
SQN=("Pocket Square",r"Solid Knit Navy")
SQB=("Pocket Square",r"Solid Knit Black")
CUF=("Cufflinks",r"Laurel Silver|Trader Silver",TB)
BOW=("Bow Tie",r"black",None,r"dot|stripe|pattern|velvet|floral")
SHOE=("Dress Shoes",r"patent")
BRN=("Belt",r"Solid Leather Belt - Mid Brown",S)
LOAF=("Loafers",r"The Loafer in Tan Suede",TS)
PEN=("Loafers",r"^Penny|Loafer in",None,r"black")
L=[
("formal-wedding","Classic Black Tuxedo","The traditional black-tie choice for an evening wedding.",[("Tuxedo Jacket",r"Black with Peak Lapel",S),("Tuxedo Pants",r"Flat Front Tuxedo Pants - Black",S),("Dress Shirt",r"Solid White Tuxedo Shirt$",S),BOW,("Cummerbund",r"black|."),CUF,SQW,SHOE,BLK]),
("formal-wedding","White Dinner Jacket","A warm-weather black-tie look with an ivory jacket and black trousers.",[("Tuxedo Jacket",r"Solid Cream with White",S),("Tuxedo Pants",r"Flat Front Tuxedo Pants - Black",S),("Dress Shirt",r"Fly-Front Dress Shirt - Slim",BT),BOW,CUF,SQB,SHOE,BLK]),
("formal-wedding","Midnight Navy Tuxedo","A modern formal option in deep navy with a peak lapel.",[("Tuxedo Jacket",r"Navy with Peak Lapel",S),("Tuxedo Pants",r"Flat Front Tuxedo Pants - Navy",S),("Dress Shirt",r"Solid White Tuxedo Shirt",S),("Bow Tie",r"solid.*(navy|midnight)",None,r"dot|stripe|pattern|floral"),CUF,SQN,SHOE,BLK]),
("beach-wedding","Solid Tan Suit","A classic destination-wedding suit, worn with linen and no tie.",[("Suit",r"Suit - Solid Tan",S),("Button-Up",r"^Linen Button Up",MW),LOAF,BRN,SQN]),
("beach-wedding","Seersucker Separates","A light blue seersucker jacket with flax linen trousers.",[("Sport Coat",r"Light Blue & White Seersucker",S),("Dress Pants",r"Linen Flax",TB),("Button-Up",r"Tech Linen Button Up",MW),LOAF,BRN,("Bow Tie",r"blue",None,r"dot|floral")]),
("beach-wedding","Stone Crosshatch Suit","An unstructured stone suit for a relaxed ceremony on the sand.",[("Suit",r"Suit - Unstructured Stone",S),("Button-Up",r"Light Blue Printed Linen|Navy Linen",S),LOAF,BRN,("Necktie",r"linen|blue",None,r"stripe|denim")]),
("beach-vacation","Poolside Linen","A camp shirt and swim trunks for long days by the water.",[("Swim Trunks",r"Swim Trunks - Navy",S),("Button-Up",r"^Linen Camp Shirt",MW),("Sandals",r"adilette comfort"),("Sunglasses",r".","Stüssy"),("Hat",r"bucket","Stüssy")]),
("beach-vacation","Boardwalk Casual","Linen shorts and a soft tee for dinner or a walk into town.",[("Shorts",r"Linen Drawstring Short",MW),("Tee",r"crew neck",MW),("Sandals",r"flip"),("Sunglasses",r"wayfarer"),("Bag",r"tote|duffel|weekender",TH)]),
("beach-vacation","Surf Day","Board shorts with an easy streetwear tee.",[("Swim Trunks",r"board short","Stüssy"),("Tee",r"tee","Stüssy"),("Sandals",r"adilette|slide"),("Hat",r"bucket","Stüssy"),("Sunglasses",r".","Stüssy")]),
("business-casual","Navy Blazer Classic","A navy sport coat, oxford shirt and chinos for client days.",[("Sport Coat",r"navy",None,r"seersucker|velvet"),("Button-Up",r"oxford.*(white|blue)|(white|blue).*oxford|solid (white|light blue)"),("Chinos",r"Tech Chino - Mid Khaki",S),PEN,BRN,("Socks",r"Solid.*Navy|SILVER Extended Crew Dress Sock$|navy")]),
("business-casual","Quarter-Zip Office","A knit quarter-zip layered over a shirt for everyday work.",[("Sweater",r"quarter.?zip"),("Button-Up",r"bengal|oxford|stripe",S),("Dress Pants",r"grey|gray|charcoal",S),("Boots",r"captain|chukka|scout",TH,r"black"),BRN,("Socks",r"grey|gray|charcoal")]),
("business-casual","Polo and Trousers","A smart polo and tailored trousers for warm office days.",[("Polo",r"navy|white|blue",S),("Dress Pants",r"stone|tan|khaki",S),PEN,BRN,("Socks",r"navy|grey|gray")]),
]
looks=[];forced={};miss=[]
for theme,name,desc,slots in L:
    items=[]
    for s in slots:
        c=pick(s[0],s[1],*(s[2:]))
        if not c: miss.append((name,s)); continue
        forced[c["key"]]=c; items.append((s[0],c["key"]))
    looks.append(dict(theme=theme,name=name,description=desc,items=items))
print("MISSING",miss)
Q={"Tuxedo Outfit":10,"Tuxedo Jacket":12,"Tuxedo Pants":8,"Tuxedo Vest":2,"Suit":26,"Suit Jacket":4,"Suit Pants":4,"Vest":2,"Sport Coat":16,"Dress Shirt":18,"Bow Tie":14,"Necktie":20,"Pocket Square":10,"Cufflinks":8,"Tie Bar":4,"Suspenders":4,"Cummerbund":4,"Belt":12,"Socks":16,"Underwear":6,"Dress Shoes":8,"Loafers":10,"Boots":10,"Sneakers":18,"Sandals":6,"Button-Up":28,"Polo":14,"Tee":20,"Sweater":16,"Hoodie":14,"Sweatshirt":6,"Chinos":14,"Dress Pants":14,"Joggers & Sweats":12,"Jeans":14,"Shorts":18,"Swim Trunks":14,"Jacket":14,"Overcoat":6,"Hat":12,"Sunglasses":8,"Wallet":5,"Bag":6,"Scarf":3}
def base(t): return re.sub(r"\s*(-| in )\s.*$","",t).strip().lower()
sel=dict(forced)
for sub,q in Q.items():
    have=[c for c in sel.values() if c["subcategory"]==sub]
    by=collections.defaultdict(list)
    for c in P:
        if c["subcategory"]==sub and c["key"] not in sel: by[c["brand"]].append(c)
    for b in by: random.shuffle(by[b]); by[b].sort(key=lambda c:len(c["images"])<4)
    used=collections.Counter(base(c["title"]) for c in have)
    while len(have)<q and any(by.values()):
        for b in sorted(by):
            while by[b]:
                c=by[b].pop(0)
                if used[base(c["title"])]<2:
                    used[base(c["title"])]+=1; sel[c["key"]]=c; have.append(c); break
            if len(have)>=q: break
ath=[c for c in P if c["brand"]=="adidas" and c["key"] not in sel]
random.shuffle(ath)
for c in [x for x in ath if x["category"]!="Footwear"][:30]+[x for x in ath if x["category"]=="Footwear"][:8]: sel[c["key"]]=c
mw=[c for c in P if c["brand"]=="Mack Weldon" and c["key"] not in sel and c["subcategory"] in("Tee","Shorts","Joggers & Sweats","Hoodie","Sweatshirt","Jacket")]
random.shuffle(mw)
for c in mw[:24]: sel[c["key"]]=c
COL="black white ivory cream navy midnight blue indigo grey gray charcoal silver brown tan khaki stone sand camel cognac chestnut tobacco olive green sage forest burgundy maroon wine red rust orange yellow gold marigold pink lavender purple teal natural oatmeal flax coffee chocolate".split()
def colors(c):
    o=c["options"]
    v=next((o[k] for k in o if "color" in k or "colour" in k),None)
    if v and v[0].lower() not in("default title",): return v[:8],"feed"
    m=re.search(r"(?: - | \| | in )([^-|]+)$",c["title"])
    if m and not re.fullmatch(r"(extra )?slim|classic|tall|short|regular|.*\bfit\b.*|\d.*",m.group(1).strip(),re.I): return [m.group(1).strip().title()],"title"
    f=[w.title() for w in COL if re.search(rf"\b{w}\b",c["title"],re.I)]
    return (f[:2] or ["Assorted"]),"title"
SIM={"suit":[f"{a}{l}" for a in range(36,54,2) for l in "SRL"],"shirt":[f"{n} / {s}" for n in(14.5,15,15.5,16,16.5,17,17.5) for s in("32-33","34-35")],"waist":[f"{w}x{i}" for w in range(28,44,2) for i in(30,32,34)],"shoe":[str(x/2).rstrip("0").rstrip(".") for x in range(14,28)],"alpha":["XS","S","M","L","XL","XXL"],"belt":[str(x) for x in range(30,46,2)],"one":["One Size"]}
def stype(c):
    s=c["subcategory"]
    if s in("Tuxedo Outfit","Tuxedo Jacket","Suit","Suit Jacket","Sport Coat","Tuxedo Vest","Vest"): return "suit"
    if s=="Dress Shirt": return "shirt"
    if s in("Tuxedo Pants","Suit Pants","Dress Pants","Chinos","Jeans"): return "waist"
    if c["category"]=="Footwear": return "shoe"
    if s=="Belt": return "belt"
    if s in("Bow Tie","Necktie","Pocket Square","Cufflinks","Tie Bar","Suspenders","Cummerbund","Sunglasses","Wallet","Bag","Scarf"): return "one"
    return "alpha"
def sizes(c):
    o=c["options"]; t=stype(c)
    v=next((o[k] for k in o if k=="size" or "size" in k),None); ln=o.get("length")
    if v and v[0].lower()!="default title" and len(v)>1:
        if t=="shoe":
            k=[x for x in v if not re.match(r"[\d.]+$",x) or float(x)>=6]; v=k or v
        if t in("suit","waist","shirt") and v[0].upper() in("XS","S","M","L","XL"): t="alpha"
        if ln and t=="suit": return t,[f"{a}{l}" for a in v for l in ln][:30],"feed"
        return t,v,"feed"
    return t,SIM[t],"simulated"
FLOOR={"Tuxedo Outfit":795,"Tuxedo Jacket":395,"Tuxedo Pants":150,"Tuxedo Vest":95,"Suit":495,"Suit Jacket":350,"Suit Pants":140,"Vest":95,"Dress Shirt":85,"Bow Tie":35,"Necktie":45,"Dress Shoes":160,"Cufflinks":35,"Pocket Square":25,"Cummerbund":45,"Suspenders":45}
def style(c):
    s,b=c["subcategory"],c["brand"]
    if c["category"] in("Tuxedos","Suits","Suit Separates","Neckwear","Formal Accessories","Dress Shirts") or s=="Dress Shoes": return "Formal"
    if b=="adidas" or (b=="Mack Weldon" and s in("Tee","Shorts","Joggers & Sweats","Hoodie","Sweatshirt","Jacket")): return "Athletic"
    if b in("Stüssy","Kith") or c["src"] in("bdgastore.com","kith.com"): return "Streetwear"
    if s in("Sport Coat","Chinos","Dress Pants","Polo","Sweater","Overcoat","Loafers") or b in("State & Liberty","Tie Bar"): return "Business Casual"
    return "Casual"
OCC={"Formal":["wedding","black tie","formal event"],"Business Casual":["office","client meeting","dinner"],"Casual":["weekend","everyday"],"Streetwear":["everyday","weekend"],"Athletic":["gym","running","travel"]}
items=sorted(sel.values(),key=lambda c:(c["category"],c["subcategory"],c["title"]))
out=[];idm={}
for i,c in enumerate(items,1):
    pid=f"MW-{i:04d}"; idm[c["key"]]=pid
    col,cs=colors(c); st,sz,ss=sizes(c)
    h=int(hashlib.md5(c["key"].encode()).hexdigest(),16); r=random.Random(h)
    price=max(c["price"] or 0,FLOOR.get(c["subcategory"],0)) or 60.0
    price=float(int(price)) if price>=20 else round(price,2)
    sale=r.random()<.15; disc=r.choice([.15,.2,.25,.3])
    tags=[]
    txt=(c["title"]+" "+c["description"]).lower()
    if re.search(r"linen|seersucker|swim|short|sandal|camp",txt): tags.append("summer")
    if c["subcategory"] in("Swim Trunks","Sandals") or "linen" in txt: tags.append("vacation")
    sty=style(c)
    out.append(dict(id=pid,title=c["title"],brand=c["brand"],category=c["category"],subcategory=c["subcategory"],style=sty,occasions=OCC[sty],season_tags=tags,description=c["description"],details=c["details"],colors=col,color_source=cs,size_type=st,sizes=sz,size_source=ss,
        images=[],image_dir=hashlib.md5(c["key"].encode()).hexdigest()[:12],source_images=c["images"][:5],source_url=c["url"],source=c["src"],source_id=c["src_id"],
        simulated=dict(price=price if not sale else round(price*(1-disc),2),compare_at_price=price if sale else None,on_sale=sale,sku=f"{pid}-{hashlib.md5(c['title'].encode()).hexdigest()[:5].upper()}",rating=round(r.uniform(3.8,4.9),1),review_count=r.randint(4,380),inventory={s:r.choice([0,2,3,5,8,12,20]) for s in sz})))
for l in looks: l["items"]=[dict(slot=s,product_id=idm[k]) for s,k in l["items"]]
os.makedirs(ROOT+"/data/catalog",exist_ok=True)
json.dump(out,open(ROOT+"/data/catalog/products.json","w"),ensure_ascii=False,indent=1)
json.dump(looks,open(ROOT+"/data/catalog/outfits.json","w"),ensure_ascii=False,indent=1)
print(len(out),"items; forced",len(forced))
print(collections.Counter(x["style"] for x in out)); print(collections.Counter(x["brand"] for x in out).most_common(20))
by={x["id"]:x for x in out}
for l in looks:
    print("\n"+l["theme"],"/",l["name"])
    for i in l["items"]: x=by[i["product_id"]]; print("   ",i["slot"],"->",x["brand"],"|",x["title"][:58],"|",x["simulated"]["price"])
