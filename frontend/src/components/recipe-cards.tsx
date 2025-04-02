import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ChefHat, Star } from "lucide-react"

interface Recipe {
  id: number
  title: string
  image: string
  complexity: number
  author: string
}

const recipes: Recipe[] = [
  {
    id: 1,
    title: "Spaghetti Carbonara",
    image: "/placeholder.svg?height=300&width=400",
    complexity: 2,
    author: "Chef Mario",
  },
  {
    id: 2,
    title: "Vegetable Stir Fry",
    image: "/placeholder.svg?height=300&width=400",
    complexity: 1,
    author: "Chef Lisa",
  },
  {
    id: 3,
    title: "Chocolate Soufflé",
    image: "/placeholder.svg?height=300&width=400",
    complexity: 3,
    author: "Chef Pierre",
  },
  {
    id: 3,
    title: "Chocolate Soufflé",
    image: "/placeholder.svg?height=300&width=400",
    complexity: 3,
    author: "Chef Pierre",
  },
  {
    id: 3,
    title: "Chocolate Soufflé",
    image: "/placeholder.svg?height=300&width=400",
    complexity: 3,
    author: "Chef Pierre",
  },
  {
    id: 3,
    title: "Chocolate Soufflé",
    image: "/placeholder.svg?height=300&width=400",
    complexity: 3,
    author: "Chef Pierre",
  },
  // Add more recipes as needed
]

export default function RecipeCards() {
  return (
    <div className="container mx-auto px-8 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 center">
        {recipes.map((recipe) => (
          <Card key={recipe.id} className="overflow-hidden">
            <CardHeader className="p-0">
            </CardHeader>
            <CardContent className="p-4">
              <CardTitle className="text-xl mb-2">{recipe.title}</CardTitle>
            </CardContent>
            <CardFooter className="flex justify-between items-center p-4 bg-gray-50">
              <span className="text-sm text-gray-600">{recipe.author}</span>
              <div className="flex items-center mb-2">
                {Array.from({ length: recipe.complexity }).map((_, index) => (
                  <ChefHat key={index} className="w-4 h-4 fill-grey-400 text-grey-400" />
                ))}
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

