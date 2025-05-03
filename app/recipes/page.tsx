import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import AdBanner from "@/components/ad-banner"
import RecipeCard from "@/components/recipe-card"

export default function RecipesPage() {
  const recipes = [
    {
      id: "greek-yogurt-protein-bowl",
      title: "Greek Yogurt Protein Bowl",
      description: "A simple, high-protein snack that takes seconds to prepare.",
      image: "https://raw.githubusercontent.com/katekalcevich/strongsnacks/main/images/yogurt-nuts.png",
      category: "weight-loss",
      prepTime: "2 min",
    },
    {
      id: "cottage-cheese-avocado-toast",
      title: "Cottage Cheese Avocado Toast",
      description: "The perfect post-workout snack with complete proteins.",
      image: "https://raw.githubusercontent.com/katekalcevich/strongsnacks/main/images/avocado-toast.jpg",
      category: "muscle-building",
      prepTime: "5 min",
    },
    {
      id: "protein-peanut-butter-balls",
      title: "Protein Peanut Butter Balls",
      description: "No-bake protein balls perfect for on-the-go energy.",
      image: "https://raw.githubusercontent.com/katekalcevich/strongsnacks/main/images/peanut-balls.png",
      category: "athletes",
      prepTime: "10 min",
    },
    {
      id: "tuna-cucumber-boats",
      title: "Tuna Cucumber Boats",
      description: "Low-carb, high-protein snack that's refreshing and filling.",
      image: "https://raw.githubusercontent.com/katekalcevich/strongsnacks/main/images/cucumber-boat.jpg",
      category: "weight-loss",
      prepTime: "5 min",
    },
    {
      id: "protein-iced-coffee",
      title: "Protein Iced Coffee",
      description: "Your morning coffee with a protein boost for sustained energy.",
      image: "https://raw.githubusercontent.com/katekalcevich/strongsnacks/main/images/iced-coffee.png",
      category: "athletes",
      prepTime: "3 min",
    },
    {
      id: "egg-white-bites",
      title: "Egg White Bites",
      description: "Savory, portable protein snacks for meal prep.",
      image: "https://raw.githubusercontent.com/katekalcevich/strongsnacks/main/images/egg-bites.png",
      category: "muscle-building",
      prepTime: "15 min",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="mb-6 text-primary">3-INGREDIENT PROTEIN RECIPES</h1>
      <p className="text-xl mb-12 max-w-3xl">
        Simple, powerful, effective. Each recipe uses just 3 main ingredients and packs a serious protein punch.
      </p>

      <div className="flex flex-wrap gap-4 mb-12">
        <Button className="brutalist-box-sm">ALL RECIPES</Button>
        <Button variant="outline" className="brutalist-box-sm">
          WEIGHT LOSS
        </Button>
        <Button variant="outline" className="brutalist-box-sm">
          MUSCLE BUILDING
        </Button>
        <Button variant="outline" className="brutalist-box-sm">
          ATHLETES
        </Button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>

      <AdBanner text="GET OUR PROTEIN RECIPE EBOOK - 50 EXCLUSIVE RECIPES - FREE DOWNLOAD" />

      <div className="brutalist-box p-8 bg-secondary/10 my-16">
        <h2 className="text-secondary mb-6">RECIPE GUIDELINES</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="brutalist-box-sm bg-white p-6">
            <h3 className="text-primary mb-4">PROTEIN FIRST</h3>
            <p>Every recipe features at least one high-quality protein source as the main ingredient.</p>
          </div>
          <div className="brutalist-box-sm bg-white p-6">
            <h3 className="text-primary mb-4">JUST 3 INGREDIENTS</h3>
            <p>We count main ingredients only. Spices, herbs, and seasonings are free additions.</p>
          </div>
          <div className="brutalist-box-sm bg-white p-6">
            <h3 className="text-primary mb-4">NUTRITION FOCUSED</h3>
            <p>Each recipe is designed with specific nutritional goals in mind, whether for muscle gain or fat loss.</p>
          </div>
        </div>
      </div>

      <div className="brutalist-box p-8 bg-primary/10 mb-16">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <h2 className="text-primary mb-6">SUBMIT YOUR RECIPE</h2>
            <p className="text-lg mb-6">
              Got a killer 3-ingredient protein snack? Share it with our community and it might be featured on our site!
            </p>
            <Button asChild className="brutalist-box-sm">
              <Link href="/contact">SUBMIT RECIPE</Link>
            </Button>
          </div>
          <div className="md:w-1/2">
            <Image
              src="https://raw.githubusercontent.com/katekalcevich/strongsnacks/main/images/pineapple-cottage.png"
              alt="Person preparing protein snack"
              width={600}
              height={400}
              className="w-full h-auto brutalist-box-sm"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
