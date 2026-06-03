import { Suspense } from "react"
import Link from "next/link"
import { ProductCard } from "@/components/ProductCard"
import { getAllProducts, categories } from "@/lib/products"
import { Filter } from "lucide-react"

export default async function ShopPage(props: {
  searchParams?: Promise<{ category?: string; sort?: string }>
}) {
  const searchParams = await props.searchParams ?? {}
  const categorySlug = searchParams.category
  const sort = searchParams.sort

  let products = getAllProducts()

  if (categorySlug) {
    const cat = categories.find((c) => c.slug === categorySlug)
    if (cat) {
      products = products.filter((p) => p.category === cat.name)
    }
  }

  if (sort === "price-asc") {
    products = [...products].sort((a, b) => a.price - b.price)
  } else if (sort === "price-desc") {
    products = [...products].sort((a, b) => b.price - a.price)
  } else if (sort === "rating") {
    products = [...products].sort((a, b) => b.rating - a.rating)
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-900">
          {categorySlug
            ? categories.find((c) => c.slug === categorySlug)?.name ?? "Shop"
            : "All Products"}
        </h1>
        <p className="mt-1 text-zinc-600">{products.length} products</p>
      </div>

      <div className="mb-6 flex flex-wrap items-center gap-3">
        <Link
          href="/shop"
          className={`rounded-full px-4 py-2 text-xs font-medium transition-colors ${
            !categorySlug
              ? "bg-amber-500 text-white"
              : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200"
          }`}
        >
          All
        </Link>
        {categories.map((cat) => (
          <Link
            key={cat.slug}
            href={`/shop?category=${cat.slug}`}
            className={`rounded-full px-4 py-2 text-xs font-medium transition-colors ${
              categorySlug === cat.slug
                ? "bg-amber-500 text-white"
                : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200"
            }`}
          >
            {cat.name}
          </Link>
        ))}
      </div>

      <div className="mb-6 flex items-center justify-between">
        <p className="text-sm text-zinc-500">
          Showing {products.length} product{products.length !== 1 ? "s" : ""}
        </p>
        <div className="flex items-center gap-2">
          <Filter className="h-4 w-4 text-zinc-400" />
          <select
            className="rounded-lg border border-zinc-300 bg-white px-3 py-1.5 text-sm text-zinc-700 focus:border-amber-500 focus:outline-none"
            defaultValue={sort}
          >
            <option value="">Default</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="rating">Top Rated</option>
          </select>
        </div>
      </div>

      {products.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20">
          <p className="text-lg font-medium text-zinc-900">No products found</p>
          <p className="text-sm text-zinc-500">Try a different category.</p>
          <Link
            href="/shop"
            className="mt-4 rounded-full bg-amber-500 px-6 py-2.5 text-sm font-medium text-white hover:bg-amber-600"
          >
            View All Products
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  )
}
