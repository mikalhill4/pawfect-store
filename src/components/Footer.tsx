"use client"

import Link from "next/link"
import { Heart, Truck, Shield, RefreshCcw } from "lucide-react"

const footerLinks = {
  shop: {
    title: "Shop",
    links: [
      { label: "All Products", href: "/shop" },
      { label: "Beds & Furniture", href: "/shop?category=beds-furniture" },
      { label: "Collars & Leashes", href: "/shop?category=collars-leashes" },
      { label: "Toys", href: "/shop?category=toys" },
      { label: "Grooming", href: "/shop?category=grooming" },
    ],
  },
  support: {
    title: "Support",
    links: [
      { label: "Contact Us", href: "/contact" },
      { label: "Shipping Info", href: "/shipping" },
      { label: "Returns & Exchanges", href: "/returns" },
      { label: "FAQ", href: "/faq" },
    ],
  },
  company: {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Blog", href: "/blog" },
      { label: "Careers", href: "#" },
      { label: "Privacy Policy", href: "#" },
    ],
  },
}

const features = [
  { icon: Truck, label: "Free Shipping", sub: "On orders over $49" },
  { icon: Shield, label: "Secure Checkout", sub: "SSL encrypted" },
  { icon: RefreshCcw, label: "Easy Returns", sub: "30-day guarantee" },
  { icon: Heart, label: "Pet Loved", sub: "Quality guaranteed" },
]

export function Footer() {
  return (
    <footer className="mt-auto border-t border-zinc-200 bg-zinc-50">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 pb-8 sm:grid-cols-2 lg:grid-cols-4">
          {Object.values(footerLinks).map((section) => (
            <div key={section.title}>
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-zinc-900">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-zinc-600 transition-colors hover:text-zinc-900"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-zinc-900">
              Subscribe
            </h3>
            <p className="mb-3 text-sm text-zinc-600">
              Get 10% off your first order & exclusive deals.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex gap-2"
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 placeholder:text-zinc-500 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
              />
              <button
                type="submit"
                className="rounded-lg bg-amber-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-amber-600"
              >
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 border-t border-zinc-200 py-6 sm:grid-cols-4">
          {features.map((f) => (
            <div key={f.label} className="flex items-center gap-2">
              <f.icon className="h-5 w-5 shrink-0 text-amber-500" />
              <div>
                <p className="text-sm font-medium text-zinc-900">{f.label}</p>
                <p className="text-xs text-zinc-500">{f.sub}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-zinc-200 pt-6 sm:flex-row">
          <p className="text-sm text-zinc-500">
            &copy; {new Date().getFullYear()} PawfectStore. All rights reserved.
          </p>
          <div className="flex gap-4">
            {["Payment", "Visa", "Mastercard", "PayPal"].map((p) => (
              <span key={p} className="text-xs text-zinc-400">
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
