import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { Heart, Award, Shield, Users } from "lucide-react"

export const metadata: Metadata = {
  title: "About Us - PawfectStore",
  description: "Learn about PawfectStore's mission to provide the best pet supplies for your furry friends.",
}

const values = [
  {
    icon: Heart,
    title: "Pet-First Philosophy",
    desc: "Every product we sell is tested and approved by real pets. If we wouldn't give it to our own pets, we don't sell it.",
  },
  {
    icon: Award,
    title: "Quality Guaranteed",
    desc: "We source only from trusted manufacturers who meet our strict quality and safety standards.",
  },
  {
    icon: Shield,
    title: "Safety Tested",
    desc: "All products undergo rigorous safety testing to ensure they're safe for your beloved pets.",
  },
  {
    icon: Users,
    title: "Community Driven",
    desc: "We listen to our community of pet parents to constantly improve and expand our product range.",
  },
]

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
          Our Story
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-zinc-600">
          PawfectStore was born from a simple belief — our pets deserve the best.
        </p>
      </div>

      <div className="mb-16 grid items-center gap-8 lg:grid-cols-2">
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-zinc-100">
          <Image
            src="https://images.unsplash.com/photo-1553882809-a4f57e595701?w=800&q=80"
            alt="Happy pets together"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
        <div>
          <h2 className="mb-4 text-2xl font-bold text-zinc-900 sm:text-3xl">
            From Pet Parents to Pet Parents
          </h2>
          <div className="space-y-4 text-zinc-600 leading-relaxed">
            <p>
              We started PawfectStore in 2024 when our founder, a lifelong pet lover, realized
              how hard it was to find high-quality pet products that were both affordable and safe.
            </p>
            <p>
              What began as a small operation from a home garage has grown into a trusted
              destination for thousands of pet parents across the country. But our mission
              remains the same — to make pet parenthood easier, happier, and more affordable.
            </p>
            <p>
              Today, we work directly with manufacturers to bring you premium pet supplies
              at honest prices. Every product in our catalog is hand-selected by our team
              of pet experts.
            </p>
          </div>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="mb-8 text-center text-3xl font-bold tracking-tight text-zinc-900">
          What We Stand For
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v) => (
            <div key={v.title} className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6 text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-amber-100">
                <v.icon className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-zinc-900">{v.title}</h3>
              <p className="text-sm text-zinc-600">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-3xl bg-gradient-to-br from-amber-500 to-orange-600 px-8 py-12 text-center text-white">
        <h2 className="mb-4 text-3xl font-bold tracking-tight">Join Our Pack</h2>
        <p className="mb-6 text-lg text-amber-100">
          Become part of the Pawfect family and get 10% off your first order.
        </p>
        <Link
          href="/shop"
          className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3 text-sm font-semibold text-amber-600 transition-colors hover:bg-amber-50"
        >
          Start Shopping
        </Link>
      </div>
    </div>
  )
}
