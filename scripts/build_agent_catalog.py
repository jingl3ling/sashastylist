#!/usr/bin/env python3
"""Build data/catalog/agent-catalog.json: a slim catalog for the ZooWork stylist agent.

Keeps only the fields the agent reasons with and skips products with no stock.
Run from the repo root: python3 scripts/build_agent_catalog.py
"""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SRC = ROOT / "data" / "catalog" / "products.json"
OUT = ROOT / "data" / "catalog" / "agent-catalog.json"


def slim(p):
    sim = p["simulated"]
    return {
        "id": p["id"],
        "title": p["title"],
        "brand": p["brand"],
        "category": p["category"],
        "subcategory": p["subcategory"],
        "style": p["style"],
        "occasions": p["occasions"],
        "seasons": p["season_tags"],
        "colors": p["colors"],
        "price": sim["price"],
        "on_sale": sim["on_sale"],
        # Keep the catalog's size order, but only sizes that can actually be bought.
        "in_stock_sizes": [s for s in p["sizes"] if sim["inventory"].get(s, 0) > 0],
    }


def main():
    products = json.loads(SRC.read_text())
    rows = [slim(p) for p in products]
    kept = [r for r in rows if r["in_stock_sizes"]]
    # One product per line: small enough for the agent, still readable and diff-friendly.
    body = "[\n" + ",\n".join(json.dumps(r, ensure_ascii=False, separators=(",", ":")) for r in kept) + "\n]\n"
    OUT.write_text(body)
    print(f"{len(kept)} products kept, {len(rows) - len(kept)} skipped (no stock), {OUT.stat().st_size / 1024:.0f} KB -> {OUT.relative_to(ROOT)}")


if __name__ == "__main__":
    main()
