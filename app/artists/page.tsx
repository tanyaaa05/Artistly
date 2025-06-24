"use client"

import { useState, useMemo, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { ArtistCard } from "@/components/ArtistCard"
import { ArtistFilters } from "@/components/ArtistFilters"
import { mockArtists } from "@/data/mockArtists"
import type { Artist, FilterState } from "@/types/artist"

/**
 * Artist Listing Page Component
 * Displays a filterable grid of artists with search and filter functionality
 */
export default function ArtistsPage() {
  const searchParams = useSearchParams()

  const [filters, setFilters] = useState<FilterState>({
    category: searchParams.get("category") || "",
    location: "",
    priceRange: "",
    search: "",
  })

  // Update filters when search params change
  useEffect(() => {
    const categoryParam = searchParams.get("category")
    if (categoryParam && categoryParam !== filters.category) {
      setFilters((prev) => ({ ...prev, category: categoryParam }))
    }
  }, [searchParams])

  // Filter artists based on current filter state
  const filteredArtists = useMemo(() => {
    return mockArtists.filter((artist: Artist) => {
      const matchesCategory = !filters.category || artist.categories.includes(filters.category)
      const matchesLocation =
        !filters.location || artist.location.toLowerCase().includes(filters.location.toLowerCase())
      const matchesSearch =
        !filters.search ||
        artist.name.toLowerCase().includes(filters.search.toLowerCase()) ||
        artist.bio.toLowerCase().includes(filters.search.toLowerCase())

      let matchesPrice = true
      if (filters.priceRange) {
        const [min, max] = filters.priceRange.split("-").map(Number)
        // Extract price from Indian format (₹25,000-50,000)
        const priceMatch = artist.priceRange.match(/₹([\d,]+)/)
        if (priceMatch) {
          const artistMin = Number(priceMatch[1].replace(/,/g, ""))
          matchesPrice = artistMin >= min && (max === 999999 || artistMin <= max)
        }
      }

      return matchesCategory && matchesLocation && matchesSearch && matchesPrice
    })
  }, [filters])

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Find Artists</h1>
        <p className="text-gray-600">Discover and book talented performing artists for your events</p>
      </div>

      {/* Filters */}
      <div className="mb-8">
        <ArtistFilters filters={filters} onFiltersChange={setFilters} />
      </div>

      {/* Results Count */}
      <div className="mb-6">
        <p className="text-gray-600">
          Showing {filteredArtists.length} artist{filteredArtists.length !== 1 ? "s" : ""}
        </p>
      </div>

      {/* Artist Grid */}
      {filteredArtists.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredArtists.map((artist) => (
            <ArtistCard key={artist.id} artist={artist} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No artists found matching your criteria.</p>
          <p className="text-gray-400 mt-2">Try adjusting your filters to see more results.</p>
        </div>
      )}
    </div>
  )
}
