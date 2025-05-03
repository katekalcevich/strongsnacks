import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import AdBanner from "@/components/ad-banner"
import ProductAd from "@/components/product-ad"

export default function BlogPostPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <Link href="/blog" className="inline-flex items-center mb-6 text-accent font-bold">
          ← BACK TO BLOG
        </Link>

        <h1 className="mb-6 text-primary">WHY PROTEIN IS KING FOR WEIGHT LOSS</h1>

        <div className="flex items-center mb-8">
          <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
            <Image
              src="https://raw.githubusercontent.com/katekalcevich/strongsnacks/main/images/author.jpg"
              alt="Author"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <p className="font-bold">Dr. Alex Strong</p>
            <p className="text-muted-foreground">Published May 1, 2024</p>
          </div>
        </div>

        <div className="brutalist-box overflow-hidden mb-8">
          <Image
            src="https://raw.githubusercontent.com/katekalcevich/strongsnacks/main/images/fit-woman.jpg"
            alt="Person measuring protein powder"
            width={1200}
            height={600}
            className="w-full h-auto"
          />
        </div>

        <div className="prose prose-lg max-w-none mb-12">
          <p className="text-xl font-bold">
            If you're trying to lose weight, protein might be your most powerful ally. Here's why high-protein snacks
            should be a cornerstone of your weight loss strategy.
          </p>

          <h2 className="text-accent mt-12 mb-6">THE SATIETY EFFECT</h2>
          <p>
            Protein is the most satiating macronutrient, meaning it keeps you fuller longer than equal calories from
            carbs or fats. This is crucial for weight loss because it helps control hunger and reduces overall calorie
            intake.
          </p>
          <p>
            Research has consistently shown that high-protein meals and snacks reduce hunger hormones and increase
            satiety hormones. In one study, participants who increased their protein intake to 30% of calories
            automatically consumed 441 fewer calories per day and lost 11 pounds over 12 weeks.
          </p>

          {/* First Ad: Protein Powder */}
          <ProductAd
            title="GAINS GEEK: PREMIUM WHEY ISOLATE"
            description="Our premium whey protein isolate delivers 27g of protein per serving with minimal carbs and fat. Perfect for supporting your weight loss goals while preserving lean muscle mass."
            imageSrc="https://raw.githubusercontent.com/katekalcevich/strongsnacks/main/images/protein-powder.png"
            imageAlt="Gains Geek Protein Whey Isolate container"
            ctaText="SHOP NOW"
            ctaLink="#"
            bgColor="bg-primary/10"
          />

          <h2 className="text-accent mt-12 mb-6">THE THERMIC EFFECT</h2>
          <p>
            Your body burns calories just digesting and processing the food you eat. This is called the thermic effect
            of food (TEF). Protein has a much higher thermic effect (20-30% of calories) compared to carbs (5-10%) and
            fats (0-3%).
          </p>
          <p>
            What does this mean? If you eat 100 calories of protein, your body uses 20-30 calories just processing it,
            leaving only 70-80 calories. With carbs, you'd net 90-95 calories, and with fat, almost all 100 calories.
          </p>

          <div className="brutalist-box-sm p-6 bg-secondary/10 my-8">
            <h3 className="text-secondary mb-4">PROTEIN BY THE NUMBERS</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Protein: 4 calories per gram, 20-30% thermic effect</li>
              <li>Carbs: 4 calories per gram, 5-10% thermic effect</li>
              <li>Fat: 9 calories per gram, 0-3% thermic effect</li>
            </ul>
          </div>

          <h2 className="text-accent mt-12 mb-6">MUSCLE PRESERVATION</h2>
          <p>
            When you're in a calorie deficit, your body doesn't just burn fat—it can also break down muscle for energy.
            This is problematic because muscle is metabolically active tissue that helps you burn more calories at rest.
          </p>
          <p>
            Adequate protein intake, especially combined with resistance training, helps preserve lean muscle mass
            during weight loss. This means the weight you lose comes primarily from fat, not muscle, resulting in a
            better body composition and a higher metabolic rate.
          </p>

          {/* Second Ad: Digital Scale */}
          <ProductAd
            title="GLYDN PRECISION BODY COMPOSITION SCALE"
            description="Track your weight loss journey with accuracy. Our digital scale measures weight, body fat percentage, muscle mass, and more to help you see the real progress beyond just pounds."
            imageSrc="https://raw.githubusercontent.com/katekalcevich/strongsnacks/main/images/digital-scale.jpg"
            imageAlt="GLYDN Precision digital body composition scale"
            ctaText="GET YOURS"
            ctaLink="#"
            bgColor="bg-secondary/10"
          />

          <h2 className="text-accent mt-12 mb-6">BLOOD SUGAR REGULATION</h2>
          <p>
            Protein has minimal impact on blood sugar levels compared to carbohydrates. By including protein in your
            snacks, you can help prevent the blood sugar spikes and crashes that often lead to cravings and overeating.
          </p>
          <p>
            Stable blood sugar means stable energy and fewer cravings—both crucial for sticking to a calorie deficit in
            the long term.
          </p>

          <h2 className="text-accent mt-12 mb-6">HOW MUCH PROTEIN DO YOU NEED?</h2>
          <p>
            For weight loss while preserving muscle, research suggests consuming between 1.6-2.2g of protein per kg of
            body weight daily. For a 70kg (154lb) person, that's about 112-154g of protein per day.
          </p>
          <p>
            Spreading your protein intake throughout the day with protein-rich snacks between meals can optimize muscle
            protein synthesis and keep hunger at bay.
          </p>

          {/* Third Ad: Strong Workout App */}
          <div className="brutalist-box bg-accent/10 p-4 my-8 overflow-hidden">
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <div className="md:w-1/3">
                <div className="brutalist-box-sm overflow-hidden bg-black">
                  <video autoPlay muted loop playsInline className="w-full h-auto">
                    <source
                      src="https://raw.githubusercontent.com/katekalcevich/strongsnacks/main/images/workout.mp4"
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
              <div className="md:w-2/3 space-y-3">
                <span className="inline-block bg-accent text-white px-3 py-1 mb-1 text-sm font-bold">FEATURED APP</span>
                <h3 className="text-primary text-xl font-bold">STRONG WORKOUT APP</h3>
                <p>
                  Maximize your protein-powered weight loss with our workout app. Track your workouts, monitor your
                  protein intake, and see real results with guided exercise programs designed for fat loss.
                </p>
                <Button asChild className="brutalist-box-sm">
                  <Link href="#">DOWNLOAD FREE</Link>
                </Button>
              </div>
            </div>
          </div>

          <h2 className="text-accent mt-12 mb-6">3-INGREDIENT PROTEIN SNACKS FOR WEIGHT LOSS</h2>
          <p>
            Our 3-ingredient approach to protein snacks makes it easy to boost your protein intake without complicated
            recipes or excessive calories. Here are some of our favorites for weight loss:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>Greek yogurt + berries + cinnamon (high protein, low sugar, antioxidants)</li>
            <li>Cottage cheese + cucumber + everything bagel seasoning (high protein, low carb, high volume)</li>
            <li>Hard-boiled eggs + avocado + hot sauce (protein + healthy fats, very satiating)</li>
          </ul>
          <p>
            Check out our{" "}
            <Link href="/recipes" className="text-accent font-bold">
              recipes section
            </Link>{" "}
            for more high-protein, weight-loss friendly snack ideas.
          </p>

          <h2 className="text-accent mt-12 mb-6">THE BOTTOM LINE</h2>
          <p>
            Protein is not just for bodybuilders—it's a powerful tool for anyone looking to lose weight. By increasing
            your protein intake with simple, nutritious snacks, you can reduce hunger, boost your metabolism, preserve
            muscle mass, and ultimately achieve better weight loss results.
          </p>
          <p>
            Remember: weight loss is about creating a sustainable calorie deficit, and protein makes that process
            significantly easier and more effective.
          </p>
        </div>

        <AdBanner text="TRY OUR NEW PROTEIN CALCULATOR - FIND YOUR OPTIMAL DAILY INTAKE" />

        <div className="brutalist-box p-8 bg-primary/10 mt-12">
          <h3 className="text-primary mb-6">SHARE THIS ARTICLE</h3>
          <div className="flex gap-4">
            <Button variant="outline" className="brutalist-box-sm">
              FACEBOOK
            </Button>
            <Button variant="outline" className="brutalist-box-sm">
              TWITTER
            </Button>
            <Button variant="outline" className="brutalist-box-sm">
              EMAIL
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
