import Link from "next/link"
import { Dumbbell } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t border-black bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Dumbbell className="h-8 w-8 text-primary" />
              <span className="font-extrabold text-xl uppercase">Strong Snacks</span>
            </Link>
            <p className="text-gray-400 mb-4">
              Simple, powerful, effective. 3-ingredient protein snacks for athletes, weight lifters, and weight loss.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-instagram"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-twitter"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-youtube"
                >
                  <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.56 49.56 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                  <path d="m10 15 5-3-5-3z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-facebook"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 uppercase">Quick Links</h3>
            <nav className="flex flex-col gap-2">
              <Link href="/" className="text-gray-400 hover:text-primary transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-gray-400 hover:text-primary transition-colors">
                About
              </Link>
              <Link href="/recipes" className="text-gray-400 hover:text-primary transition-colors">
                Recipes
              </Link>
              <Link href="/blog" className="text-gray-400 hover:text-primary transition-colors">
                Blog
              </Link>
              <Link href="/contact" className="text-gray-400 hover:text-primary transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 uppercase">Categories</h3>
            <nav className="flex flex-col gap-2">
              <Link href="/recipes" className="text-gray-400 hover:text-primary transition-colors">
                Weight Loss
              </Link>
              <Link href="/recipes" className="text-gray-400 hover:text-primary transition-colors">
                Muscle Building
              </Link>
              <Link href="/recipes" className="text-gray-400 hover:text-primary transition-colors">
                Athletes
              </Link>
              <Link href="/recipes" className="text-gray-400 hover:text-primary transition-colors">
                Vegetarian
              </Link>
              <Link href="/recipes" className="text-gray-400 hover:text-primary transition-colors">
                Quick Prep
              </Link>
            </nav>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 uppercase">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to get the latest recipes, tips, and news directly in your inbox.
            </p>
            <form className="flex flex-col gap-4">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-2 bg-gray-800 border border-gray-700 text-white rounded-none"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-primary text-white font-bold hover:bg-primary/80 transition-colors"
              >
                SUBSCRIBE
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-6 text-gray-400 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} Strong Snacks. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="#" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-primary transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-primary transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
