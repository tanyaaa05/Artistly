"use client"

import { useArtistContext } from "@/contexts/ArtistContext"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, MapPin, IndianRupeeIcon, Star } from "lucide-react"

/**
 * Manager Dashboard Component
 * Displays a table/grid of all registered artists with their details
 */
export default function DashboardPage() {
  const { artists } = useArtistContext()

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Dashboard Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Artist Dashboard</h1>
        <p className="text-gray-600">Manage and view all registered artists on the platform</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Artists</CardTitle>
            <Star className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{artists.length}</div>
            <p className="text-xs text-muted-foreground">Registered on platform</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Categories</CardTitle>
            <Badge variant="secondary">8</Badge>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{new Set(artists.flatMap((a) => a.categories)).size}</div>
            <p className="text-xs text-muted-foreground">Active categories</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Locations</CardTitle>
            <MapPin className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{new Set(artists.map((a) => a.location)).size}</div>
            <p className="text-xs text-muted-foreground">Cities covered</p>
          </CardContent>
        </Card>
      </div>

      {/* Artists List */}
      {artists.length > 0 ? (
        <div className="space-y-4">
          <h2 className="text-xl font-semibold mb-4">Registered Artists</h2>
          <div className="grid gap-4">
            {artists.map((artist) => (
              <Card key={artist.id} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between space-y-4 md:space-y-0">
                    {/* Artist Info */}
                    <div className="flex-1">
                      <div className="flex items-start space-x-4">
                        <img
                          src={artist.image || "/placeholder.svg"}
                          alt={artist.name}
                          className="w-16 h-16 rounded-full object-cover border-2 border-gray-200 shadow-sm"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement
                            target.src = "/placeholder.svg?height=64&width=64"
                          }}
                        />
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold">{artist.name}</h3>
                          <div className="flex flex-wrap gap-1 mt-1">
                            {artist.categories.map((category) => (
                              <Badge key={category} variant="secondary" className="text-xs">
                                {category}
                              </Badge>
                            ))}
                          </div>
                          <div className="flex items-center space-x-4 mt-2 text-sm text-gray-600">
                            <div className="flex items-center space-x-1">
                              <MapPin className="h-4 w-4" />
                              <span>{artist.location}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <IndianRupeeIcon className="h-4 w-4" />
                              <span>₹{artist.priceRange}</span>
                            </div>
                            {artist.rating > 0 && (
                              <div className="flex items-center space-x-1">
                                <Star className="h-4 w-4 text-yellow-500 fill-current" />
                                <span>
                                  {artist.rating} ({artist.reviewCount} reviews)
                                </span>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Contact Info & Actions */}
                    <div className="flex flex-col space-y-2 md:items-end">
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <Mail className="h-4 w-4" />
                        <span>{artist.email}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <Phone className="h-4 w-4" />
                        <span>{artist.phone}</span>
                      </div>
                      <div className="flex space-x-2 mt-2">
                        <Button
                          variant="outline"
                          size="sm"
                          className="hover:scale-105 transition-transform duration-200"
                        >
                          View Profile
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          className="hover:scale-105 transition-transform duration-200"
                        >
                          Contact
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* Bio Preview */}
                  <div className="mt-4 pt-4 border-t">
                    <p className="text-sm text-gray-600 line-clamp-2">{artist.bio}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      ) : (
        <Card>
          <CardContent className="p-12 text-center">
            <h3 className="text-lg font-semibold mb-2">No Artists Registered</h3>
            <p className="text-gray-600 mb-4">No artists have registered on the platform yet.</p>
            <Button asChild>
              <a href="/onboarding">Register First Artist</a>
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
