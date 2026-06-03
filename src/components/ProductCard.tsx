"use client"

import Link from "next/link"
import Image from "next/image"
import { ShoppingCart, Star } from "lucide-react"
import { useCart } from "@/lib/cart-context"
import { formatPrice } from "@/lib/utils"
import type { Product } from "@/lib/products"
import { cn } from "@/lib/utils"

export function ProductCard({ product, className }: { product: Product; className?: string }) {
  const { addItem } = useCart()
  const discount = product.compareAtPrice
    ? Math.round(((product.compareAtPrice - product.price) / product.compareAtPrice) * 100)
    : 0

  return (
    <div
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white transition-all hover:shadow-lg hover:-translate-y-0.5",
        className,
      )}
    >
      <Link href={`/shop/${product.slug}`} className="relative aspect-square overflow-hidden bg-zinc-100">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {discount > 0 && (
          <span className="absolute left-2 top-2 rounded-full bg-red-500 px-2.5 py-1 text-xs font-semibold text-white">
            -{discount}%
          </span>
        )}
        {product.featured && !discount && (
          <span className="absolute left-2 top-2 rounded-full bg-amber-500 px-2.5 py-1 text-xs font-semibold text-white">
            Best Seller
          </span>
        )}
      </Link>

      <div className="flex flex-1 flex-col p-4">
        <p className="mb-1 text-xs font-medium uppercase tracking-wider text-zinc-500">
          {product.category}
        </p>
        <Link href={`/shop/${product.slug}`}>
          <h3 className="mb-1 text-sm font-semibold text-zinc-900 transition-colors hover:text-amber-600 line-clamp-2">
            {product.name}
          </h3>
        </Link>

        <div className="mb-2 flex items-center gap-1">
          <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
          <span className="text-xs font-medium text-zinc-700">{product.rating}</span>
          <span className="text-xs text-zinc-400">({product.reviewCount})</span>
        </div>

        <div className="mt-auto flex items-center justify-between">
          <div className="flex items-baseline gap-1.5">
            <span className="text-lg font-bold text-zinc-900">{formatPrice(product.price)}</span>
            {product.compareAtPrice && (
              <span className="text-sm text-zinc-400 line-through">{formatPrice(product.compareAtPrice)}</span>
            )}
          </div>
          <button
            onClick={() => addItem(product)}
            className="rounded-full bg-amber-500 p-2 text-white transition-colors hover:bg-amber-600"
            aria-label="Add to cart"
          >
            <ShoppingCart className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  )
}
