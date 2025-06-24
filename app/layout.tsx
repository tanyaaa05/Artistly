import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { Toaster } from "@/components/ui/toaster"

export const metadata: Metadata = {
  title: "Artistly",
  description:
    "Book authentic Indian performing artists for weddings, cultural events, and celebrations. Find classical maestros, Bollywood stars, dancers, musicians, and entertainers across India.",
  keywords: [
    "Indian artists",
    "performing artists India",
    "wedding entertainment",
    "cultural events",
    "classical music India",
    "Bollywood performers",
    "Indian dancers",
    "musicians India",
    "event booking",
    "artist booking platform",
    "Indian entertainment",
    "wedding artists",
    "cultural performers",
    "traditional artists India",
    "hire artists India",
  ],
  authors: [{ name: "Artistly Team" }],
  creator: "Artistly",
  publisher: "Artistly",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://artistly.in"),
  alternates: {
    canonical: "/",
    languages: {
      "en-IN": "/en-IN",
      "hi-IN": "/hi-IN",
    },
  },
  openGraph: {
    title: "Artistly - India's Premier Artist Booking Platform",
    description:
      "Discover and book India's finest performing artists for your special events. From classical maestros to Bollywood stars - find the perfect entertainment for weddings, cultural events, and celebrations.",
    url: "https://artistly.in",
    siteName: "Artistly",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Artistly - Indian Performing Artists Platform",
      },
      {
        url: "/og-image-square.jpg",
        width: 1200,
        height: 1200,
        alt: "Artistly Logo",
      },
    ],
    locale: "en_IN",
    type: "website",
    countryName: "India",
  },
  twitter: {
    card: "summary_large_image",
    title: "Artistly - India's Premier Artist Booking Platform",
    description: "Discover and book India's finest performing artists for weddings, cultural events, and celebrations.",
    images: ["/twitter-image.jpg"],
    creator: "@artistlyindia",
    site: "@artistlyindia",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    other: [{ rel: "mask-icon", url: "/safari-pinned-tab.svg", color: "#7c3aed" }],
  },
  manifest: "/site.webmanifest",
  category: "Entertainment",
  classification: "Business Directory",
  referrer: "origin-when-cross-origin",
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#7c3aed" },
    { media: "(prefers-color-scheme: dark)", color: "#1f2937" },
  ],
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
  verification: {
    google: "your-google-site-verification",
    yandex: "your-yandex-verification",
    yahoo: "your-yahoo-verification",
    other: {
      "msvalidate.01": "your-bing-verification",
      "facebook-domain-verification": "your-facebook-verification",
    },
  },
  appleWebApp: {
    capable: true,
    title: "Artistly",
    statusBarStyle: "black-translucent",
    startupImage: [
      {
        url: "/apple-startup-image.png",
        media: "(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3)",
      },
    ],
  },
  applicationName: "Artistly",
  generator: "Next.js",
  abstract:
    "India's premier platform for discovering and booking authentic performing artists for events and celebrations",
  archives: ["https://artistly.in/sitemap.xml"],
  assets: ["https://artistly.in"],
  bookmarks: ["https://artistly.in/artists"],
  other: {
    "google-site-verification": "your-google-verification-code",
    "msapplication-TileColor": "#7c3aed",
    "msapplication-TileImage": "/mstile-144x144.png",
    "msapplication-config": "/browserconfig.xml",
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "format-detection": "telephone=no",
    HandheldFriendly: "true",
    MobileOptimized: "width",
    "theme-color": "#7c3aed",
    "msapplication-navbutton-color": "#7c3aed",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "msapplication-starturl": "/",
    viewport: "width=device-width, initial-scale=1, shrink-to-fit=no",
    "geo.region": "IN",
    "geo.country": "India",
    ICBM: "28.6139, 77.2090",
    "DC.title": "Artistly - India's Premier Artist Booking Platform",
    "DC.creator": "Artistly Team",
    "DC.subject": "Indian performing artists, event entertainment, artist booking",
    "DC.description": "Book authentic Indian performing artists for weddings, cultural events, and celebrations",
    "DC.publisher": "Artistly",
    "DC.contributor": "Indian Artists Community",
    "DC.date": new Date().toISOString(),
    "DC.type": "Service",
    "DC.format": "text/html",
    "DC.identifier": "https://artistly.in",
    "DC.language": "en-IN",
    "DC.coverage": "India",
    "DC.rights": "© 2024 Artistly. All rights reserved.",
  },
}

import { Inter } from "next/font/google"

import { ArtistProvider } from "@/contexts/ArtistContext"
import { Navigation } from "@/components/Navigation"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ArtistProvider>
          <Navigation />
          {children}
        </ArtistProvider>
        <Toaster />
      </body>
    </html>
  )
}
