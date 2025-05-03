import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import AdBanner from "@/components/ad-banner"
import FeaturedRecipes from "@/components/featured-recipes"
import VideoAd from "@/components/video-ad"

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      <section className="flex flex-col md:flex-row gap-8 items-center mb-16">
        <div className="flex-1">
          <h1 className="mb-6 text-primary">
            3-INGREDIENT
            <br />
            <span className="text-accent">PROTEIN</span>
            <br />
            POWERHOUSE
          </h1>
          <p className="text-xl mb-8 max-w-xl">
            Simple, powerful, effective. Build muscle, fuel your workouts, and support weight loss with our minimalist
            high-protein snacks.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg" className="brutalist-box-sm">
              <Link href="/recipes">EXPLORE RECIPES</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="brutalist-box-sm">
              <Link href="/blog">READ THE BLOG</Link>
            </Button>
          </div>
        </div>
        <div className="flex-1">
          <div className="brutalist-box overflow-hidden">
            <Image
              src="https://raw.githubusercontent.com/katekalcevich/strongsnacks/main/images/hero.jpg"
              alt="Collection of high protein snacks"
              width={600}
              height={600}
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      <AdBanner text="NEW PROTEIN POWDER FLAVORS - 30% OFF THIS WEEK ONLY - USE CODE: STRONG30" />

      <section className="mb-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-secondary">FEATURED RECIPES</h2>
          <Button asChild variant="outline" className="brutalist-box-sm">
            <Link href="/recipes">VIEW ALL</Link>
          </Button>
        </div>
        <FeaturedRecipes />
      </section>

      {/* Video Ad Section */}
      <VideoAd />

      <section className="mb-16 brutalist-box p-8 bg-secondary/10">
        <h2 className="text-secondary mb-6">WHY 3 INGREDIENTS?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="brutalist-box-sm bg-white p-6">
            <h3 className="text-primary mb-4">SIMPLICITY</h3>
            <p>No complicated recipes or long ingredient lists. Just grab three things and make something amazing.</p>
          </div>
          <div className="brutalist-box-sm bg-white p-6">
            <h3 className="text-accent mb-4">EFFICIENCY</h3>
            <p>Save time and money while still getting the protein you need to build and maintain muscle.</p>
          </div>
          <div className="brutalist-box-sm bg-white p-6">
            <h3 className="text-secondary mb-4">CONSISTENCY</h3>
            <p>Simple recipes mean you're more likely to stick with them and reach your fitness goals.</p>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-accent">FROM THE BLOG</h2>
          <Button asChild variant="outline" className="brutalist-box-sm">
            <Link href="/blog">READ MORE</Link>
          </Button>
        </div>
        <div className="brutalist-box overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="p-8">
              <h3 className="text-primary mb-4">WHY PROTEIN IS KING FOR WEIGHT LOSS</h3>
              <p className="mb-4">
                Discover how high-protein snacks can actually help you lose weight while preserving muscle mass...
              </p>
              <Button asChild variant="default" className="brutalist-box-sm">
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
      </section>

      <AdBanner text="GET OUR PROTEIN RECIPE EBOOK - 50 EXCLUSIVE RECIPES - FREE DOWNLOAD" />
    </div>
  )
}
