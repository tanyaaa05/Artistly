"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Star, IndianRupee } from "lucide-react"
import type { Artist } from "@/types/artist"
import { useToast } from "@/hooks/use-toast"

interface ArtistCardProps {
  artist: Artist
}

/**
 * Artist Card Component
 * Displays individual artist information in a card format
 */
export function ArtistCard({ artist }: ArtistCardProps) {
  const { toast } = useToast()

  const handleQuoteRequest = () => {
    toast({
      title: "Quote Request Sent! 🎭",
      description: `Your quote request has been sent to ${artist.name}. They will contact you within 24 hours to discuss your event requirements.`,
      duration: 5000,
    })
  }

  return (
    <Card className="h-full hover:shadow-lg transition-all duration-300 hover:scale-105 group">
      <CardContent className="p-0">
        {/* Artist Image */}
        <div className="relative overflow-hidden">
          <img
            src={artist.image || "/placeholder.svg"}
            alt={artist.name}
            className="w-full h-48 object-cover rounded-t-lg transition-transform duration-300 group-hover:scale-110"
            onError={(e) => {
              const target = e.target as HTMLImageElement
              target.src = "/placeholder.svg?height=300&width=300"
            }}
          />
          {artist.rating > 0 && (
            <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center space-x-1 shadow-md">
              <Star className="h-3 w-3 text-yellow-500 fill-current" />
              <span className="text-xs font-medium">{artist.rating}</span>
            </div>
          )}
          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>

        {/* Artist Info */}
        <div className="p-4">
          <h3 className="font-semibold text-lg mb-2 line-clamp-1 group-hover:text-purple-600 transition-colors duration-300">
            {artist.name}
          </h3>

          {/* Categories */}
          <div className="flex flex-wrap gap-1 mb-3">
            {artist.categories.slice(0, 2).map((category) => (
              <Badge key={category} variant="secondary" className="text-xs">
                {category}
              </Badge>
            ))}
            {artist.categories.length > 2 && (
              <Badge variant="outline" className="text-xs">
                +{artist.categories.length - 2}
              </Badge>
            )}
          </div>

          {/* Location and Price */}
          <div className="space-y-2 mb-4">
            <div className="flex items-center text-sm text-gray-600">
              <MapPin className="h-4 w-4 mr-1" />
              <span className="line-clamp-1">{artist.location}</span>
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <IndianRupee className="h-4 w-4 mr-1" />
              <span>{artist.priceRange}</span>
            </div>
          </div>

          {/* Bio Preview */}
          <p className="text-sm text-gray-600 mb-4 line-clamp-2">{artist.bio}</p>

          {/* CTA Button */}
          <Button
            className="w-full transition-all duration-300 hover:scale-105 hover:shadow-md"
            onClick={handleQuoteRequest}
          >
            Ask for Quote
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
