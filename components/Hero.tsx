import { Button } from "@/components/ui/button"
import Link from "next/link"

/**
 * Hero Section Component
 * Main landing page hero with call-to-action
 */
export default function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-pulse"></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-yellow-400/20 rounded-full blur-xl animate-bounce"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-pink-400/20 rounded-full blur-xl animate-bounce delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-blue-400/20 rounded-full blur-xl animate-bounce delay-500"></div>
        <div className="absolute bottom-40 right-1/3 w-12 h-12 bg-green-400/20 rounded-full blur-xl animate-bounce delay-700"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto text-center px-4">
        <div className="max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Discover India's Finest{" "}
            <span className="bg-gradient-to-r from-yellow-300 via-orange-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
              Performing Artists
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-purple-100 mb-12 max-w-3xl mx-auto leading-relaxed">
            From classical maestros to Bollywood stars, find the perfect artist for your celebration. Book authentic
            Indian talent for weddings, cultural events, and special occasions.
          </p>

          {/* CTA Button Container */}
          <div className="flex justify-center">
            <div className="relative group">
              <Button
                size="lg"
                className="relative bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white font-bold px-12 py-6 text-xl rounded-full shadow-xl border-2 border-white/30 hover:border-white/50 transition-all duration-500 ease-out transform hover:scale-110 hover:shadow-2xl hover:-translate-y-1"
                asChild
              >
                <Link href="/artists" className="flex items-center space-x-3">
                  <span className="flex items-center space-x-2 text-white font-extrabold">
                    <span>✨</span>
                    <span>Explore Indian Artists</span>
                    <span>🎭</span>
                  </span>
                  <span className="transform transition-transform duration-300 group-hover:translate-x-2 text-2xl text-white">
                    →
                  </span>
                </Link>
              </Button>

              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 -z-10"></div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="relative group">
              <div className="bg-white/20 backdrop-blur-lg rounded-lg p-6 border border-white/40 shadow-lg transition-all duration-300 hover:bg-white/30 hover:backdrop-blur-xl hover:scale-105 hover:shadow-xl">
                <div className="text-3xl mb-2">🎵</div>
                <h3 className="text-gray-800 font-bold mb-2 text-lg">Classical Masters</h3>
                <p className="text-sm font-medium text-gray-800">Trained in traditional Indian arts</p>
              </div>
              {/* Card glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-lg blur-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10"></div>
            </div>

            <div className="relative group">
              <div className="bg-white/20 backdrop-blur-lg rounded-lg p-6 border border-white/40 shadow-lg transition-all duration-300 hover:bg-white/30 hover:backdrop-blur-xl hover:scale-105 hover:shadow-xl">
                <div className="text-3xl mb-2">💃</div>
                <h3 className="text-gray-800 font-bold mb-2 text-lg">Bollywood Stars</h3>
                <p className="text-sm font-medium text-gray-800">Modern entertainment specialists</p>
              </div>
              {/* Card glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-lg blur-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10"></div>
            </div>

            <div className="relative group">
              <div className="bg-white/20 backdrop-blur-lg rounded-lg p-6 border border-white/40 shadow-lg transition-all duration-300 hover:bg-white/30 hover:backdrop-blur-xl hover:scale-105 hover:shadow-xl">
                <div className="text-3xl mb-2">🎪</div>
                <h3 className="text-gray-800 font-bold mb-2 text-lg">Event Specialists</h3>
                <p className="text-sm font-medium text-gray-800">Perfect for any celebration</p>
              </div>
              {/* Card glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-400 rounded-lg blur-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 fill-gray-50">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"></path>
        </svg>
      </div>
    </section>
  )
}
