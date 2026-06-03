import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Star, Check, Truck, Shield, RefreshCcw } from "lucide-react"
import { getProductBySlug, getRelatedProducts } from "@/lib/products"
import { ProductCard } from "@/components/ProductCard"
import { AddToCartButton } from "@/components/AddToCartButton"
import { formatPrice } from "@/lib/utils"
import type { Metadata } from "next"

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await props.params
  const product = getProductBySlug(slug)
  if (!product) return { title: "Product Not Found" }
  return {
    title: `${product.name} - PawfectStore`,
    description: product.description,
  }
}

export default async function ProductPage(props: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await props.params
  const product = getProductBySlug(slug)
  if (!product) notFound()

  const related = getRelatedProducts(product)
  const discount = product.compareAtPrice
    ? Math.round(((product.compareAtPrice - product.price) / product.compareAtPrice) * 100)
    : 0

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <nav className="mb-8 text-sm text-zinc-500">
        <Link href="/" className="hover:text-zinc-900">
          Home
        </Link>
        <span className="mx-2">/</span>
        <Link href="/shop" className="hover:text-zinc-900">
          Shop
        </Link>
        <span className="mx-2">/</span>
        <Link href={`/shop?category=${product.category.toLowerCase().replace(/\s+/g, "-")}`} className="hover:text-zinc-900">
          {product.category}
        </Link>
        <span className="mx-2">/</span>
        <span className="text-zinc-900">{product.name}</span>
      </nav>

      <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
        <div className="relative aspect-square overflow-hidden rounded-2xl bg-zinc-100">
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
            preload
          />
          {discount > 0 && (
            <span className="absolute left-3 top-3 rounded-full bg-red-500 px-3 py-1.5 text-sm font-semibold text-white">
              -{discount}% Off
            </span>
          )}
        </div>

        <div className="flex flex-col justify-center">
          <p className="mb-2 text-sm font-medium uppercase tracking-wider text-amber-600">
            {product.category}
          </p>
          <h1 className="mb-2 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
            {product.name}
          </h1>

          <div className="mb-4 flex items-center gap-2">
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${
                    i < Math.floor(product.rating)
                      ? "fill-amber-400 text-amber-400"
                      : "text-zinc-300"
                  }`}
                />
              ))}
            </div>
            <span className="text-sm font-medium text-zinc-700">{product.rating}</span>
            <span className="text-sm text-zinc-400">({product.reviewCount} reviews)</span>
          </div>

          <div className="mb-6 flex items-baseline gap-2">
            <span className="text-3xl font-bold text-zinc-900">{formatPrice(product.price)}</span>
            {product.compareAtPrice && (
              <span className="text-lg text-zinc-400 line-through">
                {formatPrice(product.compareAtPrice)}
              </span>
            )}
          </div>

          <p className="mb-6 leading-relaxed text-zinc-600">{product.description}</p>

          {product.inStock ? (
            <div className="mb-6 flex items-center gap-2 text-sm text-green-600">
              <Check className="h-4 w-4" />
              <span className="font-medium">In Stock</span>
            </div>
          ) : (
            <div className="mb-6 text-sm font-medium text-red-500">Out of Stock</div>
          )}

          <AddToCartButton product={product} />

          <div className="mt-8 grid grid-cols-2 gap-3 border-t border-zinc-200 pt-6 text-sm">
            {[
              { icon: Truck, label: "Free shipping on orders $49+" },
              { icon: Shield, label: "Secure checkout" },
              { icon: RefreshCcw, label: "30-day easy returns" },
              { icon: Check, label: "1-year warranty" },
            ].map((f) => (
              <div key={f.label} className="flex items-center gap-2 text-zinc-600">
                <f.icon className="h-4 w-4 shrink-0 text-amber-500" />
                <span>{f.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <section className="mt-16 border-t border-zinc-200 pt-16">
          <h2 className="mb-8 text-2xl font-bold tracking-tight text-zinc-900">
            You May Also Like
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
