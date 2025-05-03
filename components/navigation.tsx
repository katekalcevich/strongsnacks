"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Dumbbell } from "lucide-react"

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="border-b border-black">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <Dumbbell className="h-8 w-8 text-primary" />
            <span className="font-extrabold text-xl uppercase">Strong Snacks</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="font-bold hover:text-primary transition-colors">
              HOME
            </Link>
            <Link href="/about" className="font-bold hover:text-primary transition-colors">
              ABOUT
            </Link>
            <Link href="/recipes" className="font-bold hover:text-primary transition-colors">
              RECIPES
            </Link>
            <Link href="/blog" className="font-bold hover:text-primary transition-colors">
              BLOG
            </Link>
            <Link href="/contact" className="font-bold hover:text-primary transition-colors">
              CONTACT
            </Link>
          </nav>

          <Button
            variant="ghost"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              )}
            </svg>
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-black">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col gap-4">
              <Link
                href="/"
                className="font-bold py-2 hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                HOME
              </Link>
              <Link
                href="/about"
                className="font-bold py-2 hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                ABOUT
              </Link>
              <Link
                href="/recipes"
                className="font-bold py-2 hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                RECIPES
              </Link>
              <Link
                href="/blog"
                className="font-bold py-2 hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                BLOG
              </Link>
              <Link
                href="/contact"
                className="font-bold py-2 hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                CONTACT
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
