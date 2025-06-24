import Link from "next/link"
import { Music, Mail, Phone, MapPin } from "lucide-react"

/**
 * Footer Component
 * Site footer with links and contact information
 */
export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Music className="h-8 w-8 text-purple-400" />
              <span className="text-xl font-bold">Artistly</span>
            </div>
            <p className="text-gray-400">Connecting talented performing artists with event organizers worldwide.</p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <div className="space-y-2">
              <Link href="/artists" className="block text-gray-400 hover:text-white transition-colors">
                Find Artists
              </Link>
              <Link href="/onboarding" className="block text-gray-400 hover:text-white transition-colors">
                Join as Artist
              </Link>
              <Link href="/dashboard" className="block text-gray-400 hover:text-white transition-colors">
                Dashboard
              </Link>
            </div>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Categories</h3>
            <div className="space-y-2">
              <Link href="/artists?category=Singer" className="block text-gray-400 hover:text-white transition-colors">
                Singers
              </Link>
              <Link href="/artists?category=Dancer" className="block text-gray-400 hover:text-white transition-colors">
                Dancers
              </Link>
              <Link href="/artists?category=DJ" className="block text-gray-400 hover:text-white transition-colors">
                DJs
              </Link>
              <Link href="/artists?category=Speaker" className="block text-gray-400 hover:text-white transition-colors">
                Speakers
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-gray-400">
                <Mail className="h-4 w-4" />
                <span>hello@artistly.com</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <Phone className="h-4 w-4" />
                <span>+91 91490 46303 </span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <MapPin className="h-4 w-4" />
                <span>Moradabad, UP</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Artistly. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
