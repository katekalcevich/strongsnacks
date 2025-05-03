import { Input } from "@/components/ui/input"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import AdBanner from "@/components/ad-banner"

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="mb-12 text-primary">THE STRONG SNACKS BLOG</h1>

      <div className="brutalist-box overflow-hidden mb-16">
        <div className="grid md:grid-cols-2">
          <div className="p-8">
            <span className="inline-block bg-accent text-white px-3 py-1 mb-4 font-bold">FEATURED</span>
            <h2 className="text-primary mb-4">WHY PROTEIN IS KING FOR WEIGHT LOSS</h2>
            <p className="mb-6">
              Discover how high-protein snacks can actually help you lose weight while preserving muscle mass. The
              science behind protein's role in fat loss and appetite control.
            </p>
            <Button asChild className="brutalist-box-sm">
              <Link href="/blog/protein-for-weight-loss">READ ARTICLE</Link>
            </Button>
          </div>
          <div className="relative h-[300px] md:h-auto">
            <Image
              src="https://raw.githubusercontent.com/katekalcevich/strongsnacks/main/images/fit-woman.jpg"
              alt="Person measuring protein powder"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      <AdBanner text="NEW PROTEIN RECIPE EBOOK - 50 EXCLUSIVE RECIPES - FREE DOWNLOAD" />

      <div className="mb-16">
        <h2 className="text-secondary mb-8">COMING SOON</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="brutalist-box-sm bg-white overflow-hidden">
            <div className="relative h-48">
              <Image
                src="https://raw.githubusercontent.com/katekalcevich/strongsnacks/main/images/protein-pancakes.jpg"
                alt="Protein pancakes with berries"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-primary mb-2">THE BEST PROTEIN SOURCES FOR VEGANS</h3>
              <p className="text-muted-foreground mb-4">Coming May 15</p>
            </div>
          </div>

          <div className="brutalist-box-sm bg-white overflow-hidden">
            <div className="relative h-48">
              <Image src="https://raw.githubusercontent.com/katekalcevich/strongsnacks/main/images/morning-sun.jpg" alt="Protein shake ingredients" fill className="object-cover" />
            </div>
            <div className="p-6">
              <h3 className="text-primary mb-2">PROTEIN TIMING: DOES IT MATTER?</h3>
              <p className="text-muted-foreground mb-4">Coming May 22</p>
            </div>
          </div>

          <div className="brutalist-box-sm bg-white overflow-hidden">
            <div className="relative h-48">
              <Image src="https://raw.githubusercontent.com/katekalcevich/strongsnacks/main/images/protein-shake.jpg" alt="Athlete eating protein bar" fill className="object-cover" />
            </div>
            <div className="p-6">
              <h3 className="text-primary mb-2">PROTEIN SUPPLEMENTS: WORTH IT?</h3>
              <p className="text-muted-foreground mb-4">Coming May 29</p>
            </div>
          </div>
        </div>
      </div>

      <div className="brutalist-box p-8 bg-primary/10 mb-16">
        <h2 className="text-primary mb-6">SUBSCRIBE TO OUR NEWSLETTER</h2>
        <p className="text-lg mb-6">
          Get the latest articles, recipes, and fitness tips delivered straight to your inbox.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Input placeholder="Your email address" className="brutalist-box-sm flex-1" />
          <Button className="brutalist-box-sm">SUBSCRIBE</Button>
        </div>
      </div>
    </div>
  )
}
