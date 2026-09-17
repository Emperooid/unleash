"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ShoppingCart, X, Minus, Plus } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { PRODUCTS, PRODUCT_CATEGORIES, type ProductCategory } from "@/lib/shop";
import { PRODUCT_ICONS } from "@/lib/productIcons";

type SortKey = "featured" | "price-asc" | "price-desc" | "name";

const SORT_LABELS: Record<SortKey, string> = {
  featured: "Featured",
  "price-asc": "Price: Low to High",
  "price-desc": "Price: High to Low",
  name: "Name: A–Z",
};

export default function ShopPage() {
  const [activeCategory, setActiveCategory] = useState<ProductCategory | "All">("All");
  const [sort, setSort] = useState<SortKey>("featured");
  const [cart, setCart] = useState<Record<string, number>>({});
  const [cartOpen, setCartOpen] = useState(false);

  const products = useMemo(() => {
    let list = PRODUCTS.filter(
      (p) => activeCategory === "All" || p.category === activeCategory
    );
    if (sort === "price-asc") list = [...list].sort((a, b) => a.price - b.price);
    if (sort === "price-desc") list = [...list].sort((a, b) => b.price - a.price);
    if (sort === "name") list = [...list].sort((a, b) => a.name.localeCompare(b.name));
    return list;
  }, [activeCategory, sort]);

  const cartItems = Object.entries(cart)
    .map(([slug, qty]) => ({ product: PRODUCTS.find((p) => p.slug === slug)!, qty }))
    .filter((item) => item.qty > 0);
  const cartCount = cartItems.reduce((sum, item) => sum + item.qty, 0);
  const cartTotal = cartItems.reduce((sum, item) => sum + item.qty * item.product.price, 0);

  function addToCart(slug: string) {
    setCart((c) => ({ ...c, [slug]: (c[slug] ?? 0) + 1 }));
  }

  function changeQty(slug: string, delta: number) {
    setCart((c) => ({ ...c, [slug]: Math.max(0, (c[slug] ?? 0) + delta) }));
  }

  return (
    <div className="bg-paper">
      <section className="bg-orange-500 py-14 sm:py-20">
        <Container className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <span className="inline-flex items-center rounded-full bg-white/15 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-white">
              Shop Unleash
            </span>
            <h1 className="mt-4 font-display text-4xl font-bold text-white sm:text-5xl">
              Merch for the movement.
            </h1>
            <p className="mt-3 max-w-md text-white/85">
              Mock catalogue for now — checkout and payments aren&apos;t wired up yet.
            </p>
          </div>

          <button
            type="button"
            onClick={() => setCartOpen(true)}
            className="flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-orange-600 shadow-lg transition-transform hover:-translate-y-0.5"
          >
            <ShoppingCart size={18} />
            Cart
            {cartCount > 0 && (
              <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-orange-600 px-1 text-xs text-white">
                {cartCount}
              </span>
            )}
          </button>
        </Container>
      </section>

      <Container className="py-10 sm:py-14">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-2">
            {(["All", ...PRODUCT_CATEGORIES] as const).map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                  activeCategory === cat
                    ? "bg-orange-500 text-white"
                    : "bg-cream text-ink/70 hover:text-ink"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as SortKey)}
            className="rounded-full border border-ink/10 bg-paper px-4 py-2 text-sm font-medium text-ink/80 outline-none focus:border-orange-400"
          >
            {Object.entries(SORT_LABELS).map(([key, label]) => (
              <option key={key} value={key}>
                {label}
              </option>
            ))}
          </select>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-4 sm:mt-10 sm:gap-6 lg:grid-cols-4">
          {products.map((product) => {
            const Icon = PRODUCT_ICONS[product.icon];
            return (
              <div
                key={product.slug}
                className="flex flex-col overflow-hidden rounded-3xl bg-white ring-1 ring-ink/5"
              >
                <div className="relative flex aspect-square items-center justify-center bg-orange-500">
                  <Icon size={44} className="text-white/90" strokeWidth={1.5} />
                </div>
                <div className="flex flex-1 flex-col gap-1 p-4 sm:p-5">
                  <p className="font-display text-sm font-bold text-ink sm:text-base">
                    {product.name}
                  </p>
                  <p className="text-xs text-ink/55">{product.blurb}</p>
                  <div className="mt-2 flex items-center justify-between">
                    <p className="text-sm font-semibold text-orange-600">
                      ₦{product.price.toLocaleString()}
                    </p>
                    <button
                      type="button"
                      onClick={() => addToCart(product.slug)}
                      className="rounded-full bg-ink px-3 py-1.5 text-xs font-bold text-white transition-colors hover:bg-orange-600"
                    >
                      Add
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {products.length === 0 && (
          <p className="mt-10 text-center text-sm text-ink/50">
            Nothing in this category yet.
          </p>
        )}
      </Container>

      <AnimatePresence>
        {cartOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setCartOpen(false)}
              className="fixed inset-0 z-40 bg-ink/50"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="fixed inset-y-0 right-0 z-50 flex w-full max-w-sm flex-col bg-paper shadow-2xl"
            >
              <div className="flex items-center justify-between border-b border-ink/10 p-5">
                <p className="font-display text-lg font-bold text-ink">Your Cart</p>
                <button
                  type="button"
                  onClick={() => setCartOpen(false)}
                  aria-label="Close cart"
                  className="flex h-9 w-9 items-center justify-center rounded-full hover:bg-cream"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-5">
                {cartItems.length === 0 ? (
                  <p className="text-sm text-ink/50">Your cart is empty.</p>
                ) : (
                  <ul className="space-y-4">
                    {cartItems.map(({ product, qty }) => (
                      <li key={product.slug} className="flex items-center gap-3">
                        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-orange-500">
                          {(() => {
                            const Icon = PRODUCT_ICONS[product.icon];
                            return <Icon size={22} className="text-white" strokeWidth={1.5} />;
                          })()}
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-semibold text-ink">{product.name}</p>
                          <p className="text-xs text-ink/50">
                            ₦{product.price.toLocaleString()}
                          </p>
                        </div>
                        <div className="flex items-center gap-2">
                          <button
                            type="button"
                            onClick={() => changeQty(product.slug, -1)}
                            className="flex h-7 w-7 items-center justify-center rounded-full border border-ink/10 hover:border-orange-400"
                          >
                            <Minus size={12} />
                          </button>
                          <span className="w-4 text-center text-sm font-semibold">{qty}</span>
                          <button
                            type="button"
                            onClick={() => changeQty(product.slug, 1)}
                            className="flex h-7 w-7 items-center justify-center rounded-full border border-ink/10 hover:border-orange-400"
                          >
                            <Plus size={12} />
                          </button>
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <div className="border-t border-ink/10 p-5">
                <div className="flex items-center justify-between text-sm font-semibold text-ink">
                  <span>Total</span>
                  <span>₦{cartTotal.toLocaleString()}</span>
                </div>
                <Button
                  className="mt-4 w-full justify-center"
                  size="lg"
                  onClick={() => alert("Checkout isn't wired up yet — front-end preview only.")}
                >
                  Checkout
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
