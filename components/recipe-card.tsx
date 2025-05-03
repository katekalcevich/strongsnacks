import Link from "next/link"
import Image from "next/image"

interface Recipe {
  id: string
  title: string
  description: string
  image: string
  category: string
  prepTime: string
}

interface RecipeCardProps {
  recipe: Recipe
}

export default function RecipeCard({ recipe }: RecipeCardProps) {
  return (
    <Link href={`/recipes/${recipe.id}`} className="recipe-card overflow-hidden">
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
  )
}
