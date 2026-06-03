"use client"

import Image from "next/image"
import Link from "next/link"
import { Minus, Plus, Trash2, ShoppingBag, ArrowLeft } from "lucide-react"
import { useCart } from "@/lib/cart-context"
import { formatPrice } from "@/lib/utils"

export default function CartPage() {
  const { items, removeItem, updateQuantity, subtotal, itemCount, clearCart } = useCart()

  const shipping = subtotal >= 49 ? 0 : 5.99
  const total = subtotal + shipping

  if (items.length === 0) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-20 text-center">
        <ShoppingBag className="mx-auto mb-6 h-20 w-20 text-zinc-300" />
        <h1 className="mb-2 text-2xl font-bold text-zinc-900">Your Cart is Empty</h1>
        <p className="mb-8 text-zinc-500">Looks like you haven&apos;t added anything to your cart yet.</p>
        <Link
          href="/shop"
          className="inline-flex items-center gap-2 rounded-full bg-amber-500 px-8 py-3 text-sm font-semibold text-white hover:bg-amber-600"
        >
          <ArrowLeft className="h-4 w-4" />
          Continue Shopping
        </Link>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-900">
          Shopping Cart ({itemCount})
        </h1>
        <button
          onClick={clearCart}
          className="text-sm text-zinc-500 transition-colors hover:text-red-500"
        >
          Clear All
        </button>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <ul className="divide-y divide-zinc-200 rounded-2xl border border-zinc-200 bg-white">
            {items.map((item) => (
              <li key={item.product.id} className="flex gap-4 p-4 sm:gap-6 sm:p-6">
                <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-xl bg-zinc-100 sm:h-28 sm:w-28">
                  <Image
                    src={item.product.images[0]}
                    alt={item.product.name}
                    fill
                    sizes="112px"
                    className="object-cover"
                  />
                </div>

                <div className="flex flex-1 flex-col justify-between">
                  <div className="flex justify-between">
                    <div>
                      <Link
                        href={`/shop/${item.product.slug}`}
                        className="text-sm font-semibold text-zinc-900 hover:text-amber-600 sm:text-base"
                      >
                        {item.product.name}
                      </Link>
                      <p className="text-xs text-zinc-500">{item.product.category}</p>
                    </div>
                    <p className="text-sm font-bold text-zinc-900 sm:text-base">
                      {formatPrice(item.product.price * item.quantity)}
                    </p>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        className="rounded-full border border-zinc-300 p-1.5 transition-colors hover:bg-zinc-100"
                        aria-label="Decrease"
                      >
                        <Minus className="h-3.5 w-3.5" />
                      </button>
                      <span className="flex h-9 w-10 items-center justify-center rounded-lg border border-zinc-200 text-sm font-medium">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        className="rounded-full border border-zinc-300 p-1.5 transition-colors hover:bg-zinc-100"
                        aria-label="Increase"
                      >
                        <Plus className="h-3.5 w-3.5" />
                      </button>
                    </div>
                    <button
                      onClick={() => removeItem(item.product.id)}
                      className="rounded-full p-2 text-zinc-400 transition-colors hover:bg-red-50 hover:text-red-500"
                      aria-label="Remove"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-1">
          <div className="rounded-2xl border border-zinc-200 bg-white p-6">
            <h2 className="mb-4 text-lg font-semibold text-zinc-900">Order Summary</h2>

            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-zinc-600">Subtotal</span>
                <span className="font-medium text-zinc-900">{formatPrice(subtotal)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-600">Shipping</span>
                <span className="font-medium text-zinc-900">
                  {shipping === 0 ? "Free" : formatPrice(shipping)}
                </span>
              </div>
              {subtotal < 49 && (
                <p className="text-xs text-amber-600">
                  Add {formatPrice(49 - subtotal)} more for free shipping!
                </p>
              )}
              <div className="border-t border-zinc-200 pt-3">
                <div className="flex justify-between text-base">
                  <span className="font-semibold text-zinc-900">Total</span>
                  <span className="font-bold text-zinc-900">{formatPrice(total)}</span>
                </div>
              </div>
            </div>

            <Link
              href="/cart"
              className="mt-6 flex w-full items-center justify-center rounded-full bg-amber-500 py-3 text-sm font-semibold text-white shadow-lg shadow-amber-200 transition-all hover:bg-amber-600 hover:shadow-xl"
            >
              Proceed to Checkout
            </Link>

            <Link
              href="/shop"
              className="mt-3 flex items-center justify-center gap-1 text-sm text-zinc-500 hover:text-zinc-900"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              Continue Shopping
            </Link>

            <div className="mt-6 space-y-2 text-xs text-zinc-500">
              <p>✓ Secure checkout with SSL encryption</p>
              <p>✓ 30-day easy returns</p>
              <p>✓ Free shipping on orders over $49</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
