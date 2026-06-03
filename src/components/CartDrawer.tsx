"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { X, Minus, Plus, ShoppingBag } from "lucide-react"
import { useCart } from "@/lib/cart-context"
import { formatPrice } from "@/lib/utils"

export function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, subtotal, itemCount } = useCart()
  const drawerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") closeCart()
    }
    if (isOpen) window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isOpen, closeCart])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[60]">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={closeCart} />

      <div
        ref={drawerRef}
        className="absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-white shadow-xl"
      >
        <div className="flex items-center justify-between border-b border-zinc-200 px-4 py-4">
          <div className="flex items-center gap-2">
            <ShoppingBag className="h-5 w-5 text-zinc-900" />
            <h2 className="text-lg font-semibold text-zinc-900">Cart ({itemCount})</h2>
          </div>
          <button
            onClick={closeCart}
            className="rounded-full p-1.5 text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-900"
            aria-label="Close cart"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-4 px-4">
            <ShoppingBag className="h-16 w-16 text-zinc-300" />
            <p className="text-lg font-medium text-zinc-900">Your cart is empty</p>
            <p className="text-sm text-zinc-500">Looks like you haven&apos;t added anything yet.</p>
            <button
              onClick={closeCart}
              className="rounded-full bg-amber-500 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-amber-600"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-4 py-4">
              <ul className="divide-y divide-zinc-100">
                {items.map((item) => (
                  <li key={item.product.id} className="flex gap-4 py-4">
                    <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl bg-zinc-100">
                      <Image
                        src={item.product.images[0]}
                        alt={item.product.name}
                        fill
                        sizes="80px"
                        className="object-cover"
                      />
                    </div>

                    <div className="flex flex-1 flex-col justify-between">
                      <div className="flex justify-between">
                        <Link
                          href={`/shop/${item.product.slug}`}
                          onClick={closeCart}
                          className="text-sm font-medium text-zinc-900 hover:text-amber-600"
                        >
                          {item.product.name}
                        </Link>
                        <button
                          onClick={() => removeItem(item.product.id)}
                          className="ml-2 text-zinc-400 hover:text-red-500"
                          aria-label="Remove item"
                        >
                          <X className="h-4 w-4" />
                        </button>
                      </div>

                      <p className="text-sm font-semibold text-zinc-900">
                        {formatPrice(item.product.price)}
                      </p>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          className="rounded-full border border-zinc-300 p-1 transition-colors hover:bg-zinc-100"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="w-8 text-center text-sm font-medium text-zinc-900">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          className="rounded-full border border-zinc-300 p-1 transition-colors hover:bg-zinc-100"
                          aria-label="Increase quantity"
                        >
                          <Plus className="h-3 w-3" />
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-zinc-200 px-4 py-4">
              <div className="mb-1 flex items-center justify-between text-sm text-zinc-600">
                <span>Subtotal</span>
                <span className="font-medium text-zinc-900">{formatPrice(subtotal)}</span>
              </div>
              <p className="mb-4 text-xs text-zinc-500">Shipping & taxes calculated at checkout</p>
              <Link
                href="/cart"
                onClick={closeCart}
                className="flex w-full items-center justify-center rounded-full bg-amber-500 py-3 text-sm font-semibold text-white transition-colors hover:bg-amber-600"
              >
                View Cart & Checkout
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
