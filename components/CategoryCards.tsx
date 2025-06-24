import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Mic, Music, Headphones, MessageSquare } from "lucide-react"

/**
 * Category Cards Component
 * Displays the main artist categories with icons and descriptions
 */
export function CategoryCards() {
  const categories = [
    {
      title: "Singers",
      description: "Vocal artists for all genres and events",
      icon: Mic,
      count: "150+ artists",
      href: "/artists?category=Singer",
    },
    {
      title: "Dancers",
      description: "Professional dancers and choreographers",
      icon: Music,
      count: "120+ artists",
      href: "/artists?category=Dancer",
    },
    {
      title: "DJs",
      description: "Music mixers and party entertainers",
      icon: Headphones,
      count: "80+ artists",
      href: "/artists?category=DJ",
    },
    {
      title: "Speakers",
      description: "Motivational and keynote speakers",
      icon: MessageSquare,
      count: "60+ artists",
      href: "/artists?category=Speaker",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {categories.map((category) => {
        const IconComponent = category.icon
        return (
          <Link key={category.title} href={category.href}>
            <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer group">
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="p-3 bg-purple-100 rounded-full group-hover:bg-purple-200 transition-colors">
                    <IconComponent className="h-8 w-8 text-purple-600" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-purple-600 transition-colors">
                  {category.title}
                </h3>
                <p className="text-gray-600 mb-3">{category.description}</p>
                <p className="text-sm text-purple-600 font-medium">{category.count}</p>
              </CardContent>
            </Card>
          </Link>
        )
      })}
    </div>
  )
}
