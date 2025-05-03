import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import AdBanner from "@/components/ad-banner"
import { notFound } from "next/navigation"

interface RecipePageProps {
  params: {
    slug: string
  }
}

export default function RecipePage({ params }: RecipePageProps) {
  const recipes = {
    "greek-yogurt-protein-bowl": {
      title: "Greek Yogurt Protein Bowl",
      description: "A simple, high-protein snack that takes seconds to prepare and keeps you full for hours.",
      image: "https://raw.githubusercontent.com/katekalcevich/strongsnacks/main/images/yogurt-nuts.png",
      category: "weight-loss",
      prepTime: "2 min",
      calories: 250,
      protein: 24,
      carbs: 15,
      fat: 10,
      ingredients: [
        "1 cup Greek yogurt (0% fat)",
        "1/4 cup mixed berries (fresh or frozen)",
        "1/2 cup mixed nuts",
      ],
      optional: ["Cinnamon", "Vanilla extract", "Chia seeds", "Honey or maple syrup"],
      instructions: [
        "Add Greek yogurt to a bowl",
        "Top with berries",
        "Sprinkle with nuts",
        "Add optional toppings if desired",
      ],
      tips: "For extra protein, mix in a scoop of unflavored or vanilla protein powder. For a lower-sugar version, use stevia instead of honey.",
    },
    "cottage-cheese-avocado-toast": {
      title: "Cottage Cheese Avocado Toast",
      description: "The perfect post-workout snack with complete proteins and healthy fats to support muscle recovery.",
      image: "https://raw.githubusercontent.com/katekalcevich/strongsnacks/main/images/avocado-toast.jpg",
      category: "muscle-building",
      prepTime: "5 min",
      calories: 300,
      protein: 20,
      carbs: 25,
      fat: 15,
      ingredients: ["1 slice whole grain bread", "1/2 ripe avocado", "1/4 cup cottage cheese (4% fat)"],
      optional: ["Everything bagel seasoning", "Red pepper flakes", "Lemon juice"],
      instructions: [
        "Toast the bread until golden brown",
        "Mash avocado and spread on toast",
        "Top with cottage cheese",
        "Add seasonings as desired",
      ],
      tips: "For extra protein, use a high-protein bread. For a lower-carb version, use a lettuce wrap instead of bread.",
    },
    "protein-peanut-butter-balls": {
      title: "Protein Peanut Butter Balls",
      description: "No-bake protein balls perfect for on-the-go energy and muscle recovery.",
      image: "https://raw.githubusercontent.com/katekalcevich/strongsnacks/main/images/peanut-balls.png",
      category: "athletes",
      prepTime: "10 min",
      calories: 200,
      protein: 15,
      carbs: 12,
      fat: 12,
      ingredients: [
        "1/2 cup natural peanut butter",
        "1/4 cup vanilla protein powder",
        "1 tablespoon honey or maple syrup",
      ],
      optional: ["Cinnamon", "Cocoa powder", "Mini chocolate chips"],
      instructions: [
        "Mix all ingredients in a bowl until well combined",
        "If mixture is too dry, add a splash of almond milk; if too wet, add more protein powder",
        "Roll into 1-inch balls",
        "Refrigerate for at least 30 minutes before serving",
      ],
      tips: "Store in the refrigerator for up to a week or freeze for up to 3 months. Great for pre-workout energy or post-workout recovery.",
    },
    "tuna-cucumber-boats": {
      title: "Tuna Cucumber Boats",
      description: "Low-carb, high-protein snack that's refreshing and filling.",
      image: "https://raw.githubusercontent.com/katekalcevich/strongsnacks/main/images/cucumber-boat.jpg",
      category: "weight-loss",
      prepTime: "5 min",
      calories: 180,
      protein: 22,
      carbs: 5,
      fat: 8,
      ingredients: ["1 can tuna (in water, drained)", "1 large cucumber", "2 tablespoons Greek yogurt"],
      optional: ["Lemon juice", "Dill", "Black pepper"],
      instructions: [
        "Cut cucumber in half lengthwise and scoop out seeds to create boats",
        "Mix tuna with Greek yogurt and any optional seasonings",
        "Fill cucumber boats with tuna mixture",
        "Slice into 2-inch sections and serve",
      ],
      tips: "For extra flavor without calories, add herbs, spices, or a splash of hot sauce. For a complete meal, serve with a side salad.",
    },
    "protein-iced-coffee": {
      title: "Protein Iced Coffee",
      description: "Your morning coffee with a protein boost for sustained energy.",
      image: "https://raw.githubusercontent.com/katekalcevich/strongsnacks/main/images/iced-coffee.png",
      category: "athletes",
      prepTime: "3 min",
      calories: 150,
      protein: 20,
      carbs: 5,
      fat: 3,
      ingredients: ["1 cup cold brew coffee", "1 scoop vanilla protein powder", "1/4 cup unsweetened almond milk"],
      optional: ["Ice cubes", "Cinnamon", "Stevia or monk fruit sweetener"],
      instructions: [
        "Add protein powder to a shaker bottle",
        "Add cold brew coffee and almond milk",
        "Shake vigorously until well mixed",
        "Pour over ice and enjoy",
      ],
      tips: "For a creamier texture, blend all ingredients with ice in a blender. For a pre-workout boost, add a shot of espresso.",
    },
    "egg-white-bites": {
      title: "Egg Bites",
      description: "Savory, portable protein snacks for meal prep.",
      image: "https://raw.githubusercontent.com/katekalcevich/strongsnacks/main/images/egg-bites.png",
      category: "muscle-building",
      prepTime: "15 min",
      calories: 120,
      protein: 18,
      carbs: 2,
      fat: 5,
      ingredients: ["1 cup liquid egg whites", "5 whole eggs", "1/4 cup cottage cheese", "1/4 cup chopped spinach"],
      optional: ["Salt and pepper", "Garlic powder", "Red pepper flakes"],
      instructions: [
        "Preheat oven to 350°F (175°C) and spray a muffin tin with cooking spray",
        "Whisk together egg whites and cottage cheese",
        "Stir in spinach and any optional seasonings",
        "Pour mixture into muffin tin, filling each cup about 3/4 full",
        "Top with one whole egg",
        "Bake for 20-25 minutes until set and slightly golden",
        "Let cool before removing from tin",
      ],
      tips: "Make a big batch and store in the refrigerator for up to 5 days. Reheat in the microwave for 20-30 seconds when ready to eat.",
    },
  }

  const recipe = recipes[params.slug as keyof typeof recipes]

  if (!recipe) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <Link href="/recipes" className="inline-flex items-center mb-6 text-accent font-bold">
        ← BACK TO RECIPES
      </Link>

      <div className="grid lg:grid-cols-2 gap-12 mb-16">
        <div>
          <span className="inline-block bg-accent text-white px-3 py-1 mb-4 font-bold uppercase">
            {recipe.category}
          </span>
          <h1 className="mb-6 text-primary">{recipe.title}</h1>
          <p className="text-xl mb-8">{recipe.description}</p>

          <div className="grid grid-cols-4 gap-4 mb-8">
            <div className="brutalist-box-sm p-4 text-center">
              <p className="font-bold text-accent">{recipe.prepTime}</p>
              <p className="text-sm">Prep Time</p>
            </div>
            <div className="brutalist-box-sm p-4 text-center">
              <p className="font-bold text-accent">{recipe.calories}</p>
              <p className="text-sm">Calories</p>
            </div>
            <div className="brutalist-box-sm p-4 text-center">
              <p className="font-bold text-accent">{recipe.protein}g</p>
              <p className="text-sm">Protein</p>
            </div>
            <div className="brutalist-box-sm p-4 text-center">
              <p className="font-bold text-accent">{recipe.carbs}g</p>
              <p className="text-sm">Carbs</p>
            </div>
          </div>

          <div className="brutalist-box p-6 bg-white mb-8">
            <h2 className="text-secondary mb-4">INGREDIENTS</h2>
            <ul className="space-y-2 mb-6">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index} className="flex items-center">
                  <span className="inline-block w-4 h-4 bg-primary mr-3"></span>
                  {ingredient}
                </li>
              ))}
            </ul>

            <h3 className="text-secondary mb-4">OPTIONAL ADD-INS</h3>
            <ul className="space-y-2">
              {recipe.optional.map((item, index) => (
                <li key={index} className="flex items-center">
                  <span className="inline-block w-4 h-4 bg-accent mr-3"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="brutalist-box p-6 bg-white">
            <h2 className="text-secondary mb-4">INSTRUCTIONS</h2>
            <ol className="space-y-4">
              {recipe.instructions.map((step, index) => (
                <li key={index} className="flex">
                  <span className="inline-block w-6 h-6 bg-secondary text-white font-bold flex items-center justify-center mr-3">
                    {index + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <div>
          <div className="brutalist-box overflow-hidden mb-8">
            <Image
              src={recipe.image || "/placeholder.svg"}
              alt={recipe.title}
              width={600}
              height={800}
              className="w-full h-auto"
            />
          </div>

          <div className="brutalist-box p-6 bg-primary/10 mb-8">
            <h2 className="text-primary mb-4">PRO TIPS</h2>
            <p className="text-lg">{recipe.tips}</p>
          </div>

          <AdBanner text="GET OUR PROTEIN RECIPE EBOOK - 50 EXCLUSIVE RECIPES - FREE DOWNLOAD" />

          <div className="brutalist-box p-6 bg-white mt-8">
            <h2 className="text-secondary mb-4">SHARE THIS RECIPE</h2>
            <div className="flex gap-4">
              <Button variant="outline" className="brutalist-box-sm">
                FACEBOOK
              </Button>
              <Button variant="outline" className="brutalist-box-sm">
                INSTAGRAM
              </Button>
              <Button variant="outline" className="brutalist-box-sm">
                EMAIL
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-secondary mb-8">YOU MIGHT ALSO LIKE</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {Object.entries(recipes)
            .filter(([slug]) => slug !== params.slug)
            .slice(0, 3)
            .map(([slug, recipeData]) => (
              <Link key={slug} href={`/recipes/${slug}`} className="recipe-card overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={recipeData.image || "/placeholder.svg"}
                    alt={recipeData.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <span className="inline-block bg-accent text-white px-2 py-0.5 text-xs mb-2 font-bold uppercase">
                    {recipeData.category}
                  </span>
                  <h3 className="text-primary mb-2">{recipeData.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {recipeData.prepTime} | {recipeData.protein}g protein
                  </p>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  )
}
