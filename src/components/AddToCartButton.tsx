"use client"

import { ShoppingCart } from "lucide-react"
import { useCart } from "@/lib/cart-context"
import type { Product } from "@/lib/products"

export function AddToCartButton({ product }: { product: Product }) {
  const { addItem } = useCart()

  return (
    <button
      onClick={() => addItem(product)}
      disabled={!product.inStock}
      className="flex w-full items-center justify-center gap-2 rounded-full bg-amber-500 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-amber-200 transition-all hover:bg-amber-600 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-50"
    >
      <ShoppingCart className="h-4 w-4" />
      {product.inStock ? "Add to Cart" : "Out of Stock"}
    </button>
  )
}
