/**
 * Type definitions for Artist-related data structures
 */

export interface Artist {
  id: string
  name: string
  bio: string
  categories: string[]
  languages: string[]
  priceRange: string
  location: string
  email: string
  phone: string
  image: string
  rating: number
  reviewCount: number
}

export interface ArtistFormData {
  name: string
  bio: string
  categories: string[]
  languages: string[]
  feeRange: string
  location: string
  email: string
  phone: string
}

export interface FilterState {
  category: string
  location: string
  priceRange: string
  search: string
}
