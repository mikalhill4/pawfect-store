import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { CartDrawer } from "@/components/CartDrawer"
import { CartProvider } from "@/lib/cart-context"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "PawfectStore - Premium Pet Supplies for Happy Paws",
  description:
    "Discover premium pet supplies, toys, beds, and accessories for your furry friends. Free shipping on orders over $49. Shop the best for your pet at PawfectStore.",
  keywords: ["pet supplies", "dog toys", "cat bed", "pet store", "dog harness", "cat tree"],
  openGraph: {
    title: "PawfectStore - Premium Pet Supplies",
    description: "Premium pet supplies for happy paws. Free shipping over $49.",
    type: "website",
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f59e0b",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-white font-sans text-zinc-900">
        <CartProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  )
}
