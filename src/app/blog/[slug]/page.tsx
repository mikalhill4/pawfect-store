import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { Calendar, User, ArrowLeft } from "lucide-react"
import type { Metadata } from "next"

interface BlogPost {
  title: string
  content: string
  date: string
  author: string
  image: string
}

const posts: Record<string, BlogPost> = {
  "best-dog-beds-2026": {
    title: "10 Best Dog Beds for Every Breed in 2026",
    date: "June 1, 2026",
    author: "Sarah",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1200&q=80",
    content: `
Choosing the right bed for your dog is one of the most important decisions you'll make as a pet parent. A good bed supports joint health, regulates temperature, and gives your pup a cozy spot to call their own.

<h3>1. Orthopedic Memory Foam Beds — Best for Seniors</h3>
<p>If your dog is entering their golden years, an orthopedic bed is a must. Memory foam conforms to their body, relieving pressure on joints and reducing pain from arthritis. Look for beds with at least 4 inches of high-density foam.</p>

<h3>2. Elevated Cooling Beds — Best for Summer</h3>
<p>For dogs who overheat easily or spend time outdoors, an elevated bed allows air to circulate underneath, keeping them cool. The mesh fabric is breathable and easy to clean. Great for camping, patios, and hot climates.</p>

<h3>3. Heated Beds — Best for Winter</h3>
<p>Self-warming beds use your dog's body heat to create a cozy environment without electricity. For extreme cold, electric heated beds with auto shut-off provide extra warmth. Ideal for short-haired breeds and seniors.</p>

<h3>4. Donut/Cuddler Beds — Best for Burrowers</h3>
<p>Dogs who love to curl up will adore a donut bed with raised edges. The bolstered sides provide a sense of security and a place to rest their head. Perfect for small to medium breeds like French Bulldogs and Corgis.</p>

<h3>5. Waterproof Beds — Best for Accidents</h3>
<p>For puppies, incontinent seniors, or dogs who love water, a waterproof bed is essential. Look for removable, machine-washable covers with a waterproof liner that protects the foam inside.</p>

<h3>How to Choose</h3>
<p>Consider your dog's sleeping position, age, size, and any health issues. Measure your dog from nose to tail and add 6-12 inches for the ideal bed size. Always check the washing instructions before buying.</p>
    `.trim(),
  },
  "how-to-choose-cat-tree": {
    title: "How to Choose the Perfect Cat Tree: A Complete Guide",
    date: "May 28, 2026",
    author: "Mike",
    image: "https://images.unsplash.com/photo-1545249390-6bdfa286032f?w=1200&q=80",
    content: `
A cat tree is more than just furniture — it's your cat's personal playground, lookout tower, and safe haven. Here's everything you need to know to pick the perfect one.

<h3>Consider Your Cat's Age</h3>
<p>Kittens need short trees with lots of toys and ramps. Adult cats appreciate height and scratching surfaces. Senior cats benefit from lower platforms and easy access ramps.</p>

<h3>Stability is Key</h3>
<p>Look for trees with a wide, heavy base. Wobbly trees can scare your cat and tip over during play. Many premium trees come with wall anchors for extra safety.</p>

<h3>Material Matters</h3>
<p>Sisal rope is the gold standard for scratching posts — it's durable and satisfying for cats. Carpet-covered posts can snag claws. Avoid trees with glued-on decorations that could be chewed off.</p>

<h3>Size and Space</h3>
<p>Measure your ceiling height before buying. Most trees range from 3-7 feet tall. Consider multi-cat households — you may need a tree with multiple perches to prevent territorial disputes.</p>

<h3>Features to Look For</h3>
<p>Dangling toys, hammocks, hideaway cubbies, and removable/washable perches are all valuable features. The more variety, the more your cat will use it.</p>
    `.trim(),
  },
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await props.params
  const post = posts[slug]
  if (!post) return { title: "Post Not Found" }
  return {
    title: `${post.title} - PawfectStore Blog`,
    description: post.content.replace(/<[^>]*>/g, "").slice(0, 160),
  }
}

export default async function BlogPostPage(props: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await props.params
  const post = posts[slug]
  if (!post) notFound()

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <Link
        href="/blog"
        className="mb-6 inline-flex items-center gap-1 text-sm text-zinc-500 hover:text-zinc-900"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Blog
      </Link>

      <div className="relative mb-8 aspect-[2/1] overflow-hidden rounded-2xl bg-zinc-100">
        <Image
          src={post.image}
          alt={post.title}
          fill
          sizes="(max-width: 768px) 100vw, 768px"
          className="object-cover"
          preload
        />
      </div>

      <div className="mb-6 flex items-center gap-4 text-sm text-zinc-500">
        <span className="flex items-center gap-1">
          <Calendar className="h-4 w-4" />
          {post.date}
        </span>
        <span className="flex items-center gap-1">
          <User className="h-4 w-4" />
          {post.author}
        </span>
      </div>

      <h1 className="mb-8 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
        {post.title}
      </h1>

      <article
        className="prose prose-zinc max-w-none prose-headings:mt-8 prose-headings:font-bold prose-headings:text-zinc-900 prose-p:leading-relaxed prose-p:text-zinc-600"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </div>
  )
}
