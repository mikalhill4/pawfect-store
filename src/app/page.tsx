import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Star, Shield, Truck, Heart, RefreshCcw } from "lucide-react"
import { ProductCard } from "@/components/ProductCard"
import { getAllProducts, getFeaturedProducts, categories } from "@/lib/products"

export default function HomePage() {
  const featured = getFeaturedProducts()
  const allProducts = getAllProducts()

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-amber-50 via-white to-orange-50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="mb-4 inline-block rounded-full bg-amber-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-amber-800">
                New Collection 2026
              </span>
              <h1 className="mb-6 text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl lg:text-6xl">
                Everything Your
                <span className="text-amber-500"> Pet </span>
                Deserves
              </h1>
              <p className="mb-8 max-w-lg text-lg leading-relaxed text-zinc-600">
                Premium pet supplies crafted with love. From cozy beds to durable toys,
                we bring the best to your furry family members.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/shop"
                  className="inline-flex items-center gap-2 rounded-full bg-amber-500 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-amber-200 transition-all hover:bg-amber-600 hover:shadow-xl"
                >
                  Shop Now
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 rounded-full border border-zinc-300 bg-white px-8 py-3.5 text-sm font-semibold text-zinc-900 transition-all hover:bg-zinc-50"
                >
                  Our Story
                </Link>
              </div>

              <div className="mt-8 flex items-center gap-6 text-sm">
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                  <span className="font-semibold text-zinc-900">4.7</span>
                  <span className="text-zinc-500">(2,500+ reviews)</span>
                </div>
                <span className="text-zinc-300">|</span>
                <span className="text-zinc-600">10,000+ happy pets</span>
              </div>
            </div>
            <div className="relative">
              <div className="relative aspect-square overflow-hidden rounded-3xl bg-zinc-100">
                <Image
                  src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80"
                  alt="Happy pet on a cozy bed"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                  preload
                />
              </div>
              <div className="absolute -bottom-4 -left-4 rounded-2xl bg-white p-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-green-100 p-2">
                    <Truck className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-zinc-900">Free Shipping</p>
                    <p className="text-xs text-zinc-500">On orders over $49</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-zinc-100 bg-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              { icon: Truck, label: "Free Shipping", sub: "Orders $49+" },
              { icon: Shield, label: "Secure Checkout", sub: "SSL encrypted" },
              { icon: RefreshCcw, label: "Easy Returns", sub: "30-day guarantee" },
              { icon: Heart, label: "Pet Approved", sub: "Quality tested" },
            ].map((f) => (
              <div key={f.label} className="flex items-center gap-3 rounded-xl bg-zinc-50 p-4">
                <f.icon className="h-6 w-6 shrink-0 text-amber-500" />
                <div>
                  <p className="text-sm font-semibold text-zinc-900">{f.label}</p>
                  <p className="text-xs text-zinc-500">{f.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex items-end justify-between">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
                Featured Products
              </h2>
              <p className="mt-2 text-zinc-600">Our most loved items, handpicked for your pet.</p>
            </div>
            <Link
              href="/shop"
              className="hidden items-center gap-1 text-sm font-semibold text-amber-600 hover:text-amber-700 sm:flex"
            >
              View All
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featured.slice(0, 8).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="mt-8 text-center sm:hidden">
            <Link
              href="/shop"
              className="inline-flex items-center gap-1 text-sm font-semibold text-amber-600 hover:text-amber-700"
            >
              View All Products
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-zinc-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
              Shop by Category
            </h2>
            <p className="mt-2 text-zinc-600">Find exactly what your pet needs.</p>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/shop?category=${cat.slug}`}
                className="group relative overflow-hidden rounded-2xl bg-white shadow-sm transition-all hover:shadow-md"
              >
                <div className="aspect-[4/3] overflow-hidden bg-zinc-100">
                  <Image
                    src={cat.image}
                    alt={cat.name}
                    width={400}
                    height={300}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-3">
                  <h3 className="text-sm font-semibold text-zinc-900 group-hover:text-amber-600">
                    {cat.name}
                  </h3>
                  <p className="text-xs text-zinc-500">{cat.count} products</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-amber-500 to-orange-600">
            <div className="grid items-center gap-8 px-6 py-12 sm:px-12 lg:grid-cols-2 lg:gap-12">
              <div>
                <h2 className="mb-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  10% Off Your First Order
                </h2>
                <p className="mb-6 text-lg text-amber-100">
                  Join the Pawfect family and get exclusive deals, pet care tips, and first access
                  to new products.
                </p>
                <form
                  className="flex max-w-md gap-3"
                >
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 rounded-full border border-white/30 bg-white/20 px-5 py-3 text-sm text-white placeholder:text-amber-200 backdrop-blur focus:bg-white/30 focus:outline-none"
                  />
                  <button
                    type="button"
                    className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-amber-600 transition-colors hover:bg-amber-50"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
              <div className="relative hidden lg:block">
                <div className="relative aspect-square overflow-hidden rounded-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1591946614720-90a587da4a36?w=600&q=80"
                    alt="Happy pet"
                    fill
                    sizes="400px"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-zinc-100 bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
              What Pet Parents Say
            </h2>
            <p className="mt-2 text-zinc-600">Join thousands of happy customers.</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Sarah M.",
                pet: "Golden Retriever",
                text: "The orthopedic bed changed my dog's life. His joint pain is so much better and he sleeps through the night now!",
                rating: 5,
              },
              {
                name: "James K.",
                pet: "Maine Coon Cat",
                text: "The cat tree is incredibly sturdy and my cat absolutely loves it. Best purchase I've made for him.",
                rating: 5,
              },
              {
                name: "Emily R.",
                pet: "French Bulldog",
                text: "The no-pull harness fits perfectly and walks are so much more enjoyable now. Highly recommend!",
                rating: 5,
              },
            ].map((testimonial) => (
              <div key={testimonial.name} className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6">
                <div className="mb-3 flex">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="mb-4 text-sm leading-relaxed text-zinc-600">&ldquo;{testimonial.text}&rdquo;</p>
                <div>
                  <p className="text-sm font-semibold text-zinc-900">{testimonial.name}</p>
                  <p className="text-xs text-zinc-500">{testimonial.pet}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
