import type { Metadata } from "next"
import { Mail, Phone, MapPin, Clock } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact Us - PawfectStore",
  description: "Get in touch with the PawfectStore team. We're here to help with any questions or concerns.",
}

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
          Get in Touch
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-zinc-600">
          Have a question about a product, your order, or need pet advice? We&apos;d love to hear from you.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        <div className="rounded-2xl border border-zinc-200 bg-white p-8">
          <h2 className="mb-6 text-xl font-semibold text-zinc-900">Send Us a Message</h2>
          <form
            className="space-y-4"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-1 block text-sm font-medium text-zinc-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full rounded-lg border border-zinc-300 px-4 py-2.5 text-sm text-zinc-900 placeholder:text-zinc-500 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-1 block text-sm font-medium text-zinc-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full rounded-lg border border-zinc-300 px-4 py-2.5 text-sm text-zinc-900 placeholder:text-zinc-500 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
                  placeholder="you@example.com"
                />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="mb-1 block text-sm font-medium text-zinc-700">
                Subject
              </label>
              <select
                id="subject"
                className="w-full rounded-lg border border-zinc-300 px-4 py-2.5 text-sm text-zinc-900 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
              >
                <option>General Inquiry</option>
                <option>Order Issue</option>
                <option>Product Question</option>
                <option>Returns & Refunds</option>
                <option>Wholesale</option>
              </select>
            </div>
            <div>
              <label htmlFor="message" className="mb-1 block text-sm font-medium text-zinc-700">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                className="w-full rounded-lg border border-zinc-300 px-4 py-2.5 text-sm text-zinc-900 placeholder:text-zinc-500 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
                placeholder="How can we help you?"
              />
            </div>
            <button
              type="button"
              className="rounded-full bg-amber-500 px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-amber-600"
            >
              Send Message
            </button>
          </form>
        </div>

        <div className="space-y-6">
          <div className="rounded-2xl border border-zinc-200 bg-white p-6">
            <h2 className="mb-4 text-xl font-semibold text-zinc-900">Contact Information</h2>
            <div className="space-y-4">
              {[
                { icon: Mail, label: "Email", value: "hello@pawfectstore.com" },
                { icon: Phone, label: "Phone", value: "+1 (555) 123-4567" },
                { icon: MapPin, label: "Address", value: "123 Pet Street, New York, NY 10001" },
                {
                  icon: Clock,
                  label: "Hours",
                  value: "Monday - Friday: 9am - 6pm EST\nSaturday: 10am - 4pm EST",
                },
              ].map((c) => (
                <div key={c.label} className="flex gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-100">
                    <c.icon className="h-5 w-5 text-amber-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-zinc-900">{c.label}</p>
                    <p className="whitespace-pre-line text-sm text-zinc-600">{c.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-zinc-200 bg-amber-50 p-6">
            <h3 className="mb-2 text-lg font-semibold text-zinc-900">FAQ</h3>
            <p className="mb-4 text-sm text-zinc-600">
              Check our frequently asked questions for quick answers to common inquiries.
            </p>
            <a
              href="#"
              className="text-sm font-semibold text-amber-600 hover:text-amber-700"
            >
              View FAQ &rarr;
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
