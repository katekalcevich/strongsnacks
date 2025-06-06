import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navigation from "@/components/navigation"
import NewsletterPopup from "@/components/newsletter-popup"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Strong Snacks | 3-Ingredient Protein Powerhouse",
  description: "Simple, high-protein snacks for athletes, weight lifters, and weight loss",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <NewsletterPopup />
        <Footer />
      </body>
    </html>
  )
}
