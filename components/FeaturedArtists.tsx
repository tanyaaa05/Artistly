import { ArtistCard } from "@/components/ArtistCard"
import { mockArtists } from "@/data/mockArtists"

/**
 * Featured Artists Section Component
 * Displays a selection of featured artists on the homepage
 */
export function FeaturedArtists() {
  // Get first 4 artists as featured
  const featuredArtists = mockArtists.slice(0, 4)

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Artists</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover some of our most popular and highly-rated performing artists
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredArtists.map((artist) => (
            <ArtistCard key={artist.id} artist={artist} />
          ))}
        </div>
      </div>
    </section>
  )
}
