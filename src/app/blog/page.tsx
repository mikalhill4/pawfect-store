import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"
import { Calendar, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Blog - PawfectStore",
  description: "Pet care tips, product guides, and advice from pet experts.",
}

const posts = [
  {
    slug: "best-dog-beds-2026",
    title: "10 Best Dog Beds for Every Breed in 2026",
    excerpt: "Finding the perfect bed for your dog can be overwhelming. We break down the best options for every size, age, and sleeping style.",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80",
    date: "June 1, 2026",
    author: "Sarah",
    category: "Product Guides",
  },
  {
    slug: "how-to-choose-cat-tree",
    title: "How to Choose the Perfect Cat Tree: A Complete Guide",
    excerpt: "From multi-level towers to simple scratching posts, learn what features matter most for your feline friend.",
    image: "https://images.unsplash.com/photo-1545249390-6bdfa286032f?w=800&q=80",
    date: "May 28, 2026",
    author: "Mike",
    category: "Cat Care",
  },
  {
    slug: "pet-summer-safety-tips",
    title: "Essential Summer Safety Tips for Your Pets",
    excerpt: "Keep your furry friends safe and comfortable during the hot summer months with these expert tips.",
    image: "https://images.unsplash.com/photo-1591946614720-90a587da4a36?w=800&q=80",
    date: "May 20, 2026",
    author: "Emily",
    category: "Pet Care",
  },
  {
    slug: "gps-tracker-vs-microchip",
    title: "GPS Trackers vs. Microchips: What's Best for Your Pet?",
    excerpt: "We compare the pros and cons of GPS trackers and microchips to help you make an informed decision about your pet's safety.",
    image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=800&q=80",
    date: "May 15, 2026",
    author: "Sarah",
    category: "Safety",
  },
  {
    slug: "grooming-tips-long-haired-dogs",
    title: "Pro Grooming Tips for Long-Haired Dog Breeds",
    excerpt: "Keep your long-haired pup looking their best with these professional grooming techniques and product recommendations.",
    image: "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?w=800&q=80",
    date: "May 10, 2026",
    author: "Mike",
    category: "Grooming",
  },
  {
    slug: "introducing-new-cat-to-home",
    title: "How to Introduce a New Cat to Your Home: Step-by-Step",
    excerpt: "Make the transition smooth for your new feline family member with our proven introduction process.",
    image: "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=800&q=80",
    date: "May 5, 2026",
    author: "Emily",
    category: "Cat Care",
  },
]

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
          Pawfect Blog
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-zinc-600">
          Tips, guides, and advice from pet experts to help you give your furry friends the best life possible.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group overflow-hidden rounded-2xl border border-zinc-200 bg-white transition-all hover:shadow-lg hover:-translate-y-0.5"
          >
            <div className="relative aspect-[16/9] overflow-hidden bg-zinc-100">
              <Image
                src={post.image}
                alt={post.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-5">
              <div className="mb-2 flex items-center gap-3 text-xs text-zinc-500">
                <span className="rounded-full bg-amber-100 px-2.5 py-1 text-xs font-medium text-amber-700">
                  {post.category}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  {post.date}
                </span>
              </div>
              <h2 className="mb-2 text-lg font-semibold leading-snug text-zinc-900 group-hover:text-amber-600">
                {post.title}
              </h2>
              <p className="mb-3 text-sm leading-relaxed text-zinc-600 line-clamp-2">
                {post.excerpt}
              </p>
              <span className="flex items-center gap-1 text-sm font-semibold text-amber-600">
                Read More
                <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
