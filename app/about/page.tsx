import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import AdBanner from "@/components/ad-banner"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="mb-12 text-primary">ABOUT STRONG SNACKS</h1>

      <div className="grid md:grid-cols-2 gap-12 mb-16">
        <div className="brutalist-box overflow-hidden">
          <Image
            src="https://raw.githubusercontent.com/katekalcevich/strongsnacks/main/images/chick-peas.png"
            alt="Founder preparing protein snacks"
            width={600}
            height={500}
            className="w-full h-auto"
          />
        </div>

        <div>
          <h2 className="text-accent mb-6">OUR MISSION</h2>
          <p className="text-lg mb-6">
            Strong Snacks was born from a simple frustration: why are protein-rich snacks so complicated?
          </p>
          <p className="text-lg mb-6">
            As a couple who lifts weights and wants to build muscle, we spent years struggling with complex meal
            prep and expensive protein options. The solution was clear: strip it down to the essentials.
          </p>
          <p className="text-lg mb-6">
            Our mission is to make high-protein nutrition accessible to everyone through simple, 3-ingredient recipes
            that deliver maximum results with minimum effort.
          </p>
          <Button asChild className="brutalist-box-sm">
            <Link href="/contact">GET IN TOUCH</Link>
          </Button>
        </div>
      </div>

      <AdBanner text="JOIN OUR PROTEIN MASTERCLASS - LIVE WEBINAR THIS SATURDAY - REGISTER NOW" />

      <div className="brutalist-box p-8 bg-secondary/10 mb-16">
        <h2 className="text-secondary mb-8">WHO WE SERVE</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="brutalist-box-sm bg-white p-6">
            <h3 className="text-primary mb-4">WEIGHT LIFTERS</h3>
            <p className="mb-4">
              Building and maintaining muscle requires consistent protein intake. Our snacks make it easy to hit your
              macros between meals.
            </p>
            <Image
              src="https://raw.githubusercontent.com/katekalcevich/strongsnacks/main/images/weigth-lifter.jpg"
              alt="Weightlifter with protein shake"
              width={300}
              height={200}
              className="w-full h-auto"
            />
          </div>
          <div className="brutalist-box-sm bg-white p-6">
            <h3 className="text-accent mb-4">ATHLETES</h3>
            <p className="mb-4">
              Whether you're running, swimming, or playing team sports, our quick protein snacks help with recovery and
              performance.
            </p>
            <Image
              src="https://raw.githubusercontent.com/katekalcevich/strongsnacks/main/images/athlete.jpg"
              alt="Runner eating protein bar"
              width={300}
              height={200}
              className="w-full h-auto"
            />
          </div>
          <div className="brutalist-box-sm bg-white p-6">
            <h3 className="text-secondary mb-4">WEIGHT LOSS</h3>
            <p className="mb-4">
              High protein snacks keep you fuller longer and help preserve muscle while losing fat. Simple ingredients
              mean fewer hidden calories.
            </p>
            <Image
              src="https://raw.githubusercontent.com/katekalcevich/strongsnacks/main/images/weight-loss.jpg"
              alt="Person measuring waist"
              width={300}
              height={200}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>

      <div className="brutalist-box p-8 bg-primary/10 mb-16">
        <h2 className="text-primary mb-6">OUR VALUES</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-accent mb-4">SIMPLICITY</h3>
            <p className="mb-6">
              We believe nutrition doesn't have to be complicated to be effective. Three quality ingredients can deliver
              everything your body needs.
            </p>

            <h3 className="text-accent mb-4">ACCESSIBILITY</h3>
            <p className="mb-6">
              Everyone deserves access to good nutrition. Our recipes use affordable, widely available ingredients.
            </p>
          </div>
          <div>
            <h3 className="text-accent mb-4">SCIENCE-BACKED</h3>
            <p className="mb-6">
              All our recipes are designed with optimal protein absorption and nutritional balance in mind, based on
              current research.
            </p>

            <h3 className="text-accent mb-4">SUSTAINABILITY</h3>
            <p className="mb-6">
              Simple recipes you'll actually make consistently, creating sustainable habits for long-term health and
              fitness.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
