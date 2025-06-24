import Hero from "@/components/Hero"
import { CategoryCards } from "@/components/CategoryCards"
import { FeaturedArtists } from "@/components/FeaturedArtists"
import { Footer } from "@/components/Footer"

/**
 * Homepage Component
 * Displays the main landing page with hero section, category cards, and featured artists
 */
export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Category Cards Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Explore Artist Categories</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover talented performers across various categories for your next event
            </p>
          </div>
          <CategoryCards />
        </div>
      </section>

      {/* Featured Artists Section */}
      <FeaturedArtists />

      {/* Footer */}
      <Footer />
    </div>
  )
}
