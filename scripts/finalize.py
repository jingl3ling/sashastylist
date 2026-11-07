"""Attach local photos, verify they are real images, list items under 3 photos, export CSV."""
import json,glob,os,sys,csv,collections
ROOT=sys.argv[1]; D=ROOT+"/data/catalog"
P=json.load(open(D+"/products.json"))
SIG=(b"\xff\xd8\xff",b"\x89PNG",b"RIFF",b"GIF8")
short=[]
for p in P:
    fs=[]
    for f in sorted(glob.glob(f"{D}/images/{p['image_dir']}/*")):
        h=open(f,"rb").read(12)
        if h.startswith(SIG) or h[4:8]==b"ftyp": fs.append(os.path.relpath(f,D))
        else: os.remove(f)
    p["images"]=fs
    if len(fs)<3: short.append(p)
print("items",len(P),"photos",sum(len(p["images"]) for p in P),"under3",len(short))
for p in short[:20]: print("  ",p["id"],p["brand"],p["title"][:50],len(p["images"]))
json.dump(P,open(D+"/products.json","w"),ensure_ascii=False,indent=1)
keep={p["image_dir"] for p in P}
import shutil
for d in os.listdir(D+"/images"):
    if d not in keep: shutil.rmtree(f"{D}/images/{d}")
with open(D+"/products.csv","w",newline="",encoding="utf-8") as f:
    w=csv.writer(f); w.writerow("id title brand category subcategory style colors size_type sizes price compare_at_price on_sale description image_1 image_2 image_3 source_url".split())
    for p in P:
        s=p["simulated"]; i=p["images"]
        w.writerow([p["id"],p["title"],p["brand"],p["category"],p["subcategory"],p["style"],"|".join(p["colors"]),p["size_type"],"|".join(p["sizes"]),s["price"],s["compare_at_price"],s["on_sale"],p["description"],i[0],i[1],i[2],p["source_url"]])
if short:
    ex=ROOT+"/data/exclude.json"; old=json.load(open(ex)) if os.path.exists(ex) else []
    json.dump(old+[p["source"]+p["source_id"] for p in short],open(ex,"w"))
