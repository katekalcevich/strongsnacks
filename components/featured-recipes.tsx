import Link from "next/link"
import Image from "next/image"

export default function FeaturedRecipes() {
  const featuredRecipes = [
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
  ]

  return (
    <div className="grid md:grid-cols-3 gap-8">
      {featuredRecipes.map((recipe) => (
        <Link key={recipe.id} href={`/recipes/${recipe.id}`} className="recipe-card overflow-hidden">
          <div className="relative h-48">
            <Image src={recipe.image || "/placeholder.svg"} alt={recipe.title} fill className="object-cover" />
          </div>
          <div className="p-6">
            <span className="inline-block bg-accent text-white px-2 py-0.5 text-xs mb-2 font-bold uppercase">
              {recipe.category}
            </span>
            <h3 className="text-primary mb-2">{recipe.title}</h3>
            <p className="text-sm text-muted-foreground mb-4">{recipe.prepTime} prep time</p>
            <p>{recipe.description}</p>
          </div>
        </Link>
      ))}
    </div>
  )
}
