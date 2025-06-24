"use client"

import { createContext, useContext, useState, type ReactNode } from "react"
import type { Artist } from "@/types/artist"
import { mockArtists } from "@/data/mockArtists"

interface ArtistContextType {
  artists: Artist[]
  addArtist: (artist: Artist) => void
  updateArtist: (id: string, artist: Partial<Artist>) => void
  deleteArtist: (id: string) => void
}

const ArtistContext = createContext<ArtistContextType | undefined>(undefined)

/**
 * Artist Context Provider
 * Manages global state for artists data
 */
export function ArtistProvider({ children }: { children: ReactNode }) {
  const [artists, setArtists] = useState<Artist[]>(mockArtists)

  const addArtist = (artist: Artist) => {
    setArtists((prev) => [...prev, artist])
  }

  const updateArtist = (id: string, updatedArtist: Partial<Artist>) => {
    setArtists((prev) => prev.map((artist) => (artist.id === id ? { ...artist, ...updatedArtist } : artist)))
  }

  const deleteArtist = (id: string) => {
    setArtists((prev) => prev.filter((artist) => artist.id !== id))
  }

  return (
    <ArtistContext.Provider
      value={{
        artists,
        addArtist,
        updateArtist,
        deleteArtist,
      }}
    >
      {children}
    </ArtistContext.Provider>
  )
}

export function useArtistContext() {
  const context = useContext(ArtistContext)
  if (context === undefined) {
    throw new Error("useArtistContext must be used within an ArtistProvider")
  }
  return context
}
