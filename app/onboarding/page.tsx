"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useArtistContext } from "@/contexts/ArtistContext"
import { useRouter } from "next/navigation"
import { useToast } from "@/hooks/use-toast"
import type { ArtistFormData } from "@/types/artist"

// Validation schema using Yup
const artistSchema = yup.object({
  name: yup.string().required("Name is required").min(2, "Name must be at least 2 characters"),
  bio: yup.string().required("Bio is required").min(50, "Bio must be at least 50 characters"),
  categories: yup.array().min(1, "Please select at least one category"),
  languages: yup.array().min(1, "Please select at least one language"),
  feeRange: yup.string().required("Fee range is required"),
  location: yup.string().required("Location is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  phone: yup.string().required("Phone number is required"),
})

const categories = ["Singer", "Dancer", "DJ", "Speaker", "Musician", "Comedian", "Magician", "Actor"]
const languages = [
  "Hindi",
  "English",
  "Tamil",
  "Marathi",
  "Gujarati",
  "Punjabi",
  "Bengali",
  "Telugu",
  "Kannada",
  "Malayalam",
]
const feeRanges = ["₹25,000-50,000", "₹50,000-1,00,000", "₹1,00,000-2,00,000", "₹2,00,000+"]

/**
 * Artist Onboarding Form Component
 * Multi-section form for artists to register on the platform
 */
export default function OnboardingPage() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([])
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { addArtist } = useArtistContext()
  const router = useRouter()
  const { toast } = useToast()

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<ArtistFormData>({
    resolver: yupResolver(artistSchema),
  })

  // Handle category selection
  const handleCategoryChange = (category: string, checked: boolean) => {
    const updated = checked ? [...selectedCategories, category] : selectedCategories.filter((c) => c !== category)

    setSelectedCategories(updated)
    setValue("categories", updated)
  }

  // Handle language selection
  const handleLanguageChange = (language: string, checked: boolean) => {
    const updated = checked ? [...selectedLanguages, language] : selectedLanguages.filter((l) => l !== language)

    setSelectedLanguages(updated)
    setValue("languages", updated)
  }

  // Form submission handler
  const onSubmit = async (data: ArtistFormData) => {
    setIsSubmitting(true)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Add artist to context
      const newArtist = {
        id: Date.now().toString(),
        name: data.name,
        bio: data.bio,
        categories: data.categories,
        languages: data.languages,
        priceRange: data.feeRange,
        location: data.location,
        email: data.email,
        phone: data.phone,
        image: "/placeholder.svg?height=300&width=300",
        rating: 0,
        reviewCount: 0,
      }

      addArtist(newArtist)

      console.log("Artist registered:", newArtist)

      toast({
        title: "Registration Successful! 🎉",
        description: `Welcome to Artistly, ${data.name}! Your artist profile has been created successfully. You can now start receiving booking requests.`,
        duration: 6000,
      })

      router.push("/dashboard")
    } catch (error) {
      console.error("Registration failed:", error)
      toast({
        title: "Registration Failed ❌",
        description:
          "There was an error creating your profile. Please try again or contact support if the issue persists.",
        variant: "destructive",
        duration: 5000,
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Join Artistly India</CardTitle>
          <CardDescription>Create your artist profile and start getting booked for events across India</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Basic Information Section */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Basic Information</h3>

              <div>
                <Label htmlFor="name">Full Name *</Label>
                <Input id="name" {...register("name")} placeholder="Enter your full name" />
                {errors.name && <p className="text-sm text-red-600 mt-1">{errors.name.message}</p>}
              </div>

              <div>
                <Label htmlFor="email">Email *</Label>
                <Input id="email" type="email" {...register("email")} placeholder="your.email@example.com" />
                {errors.email && <p className="text-sm text-red-600 mt-1">{errors.email.message}</p>}
              </div>

              <div>
                <Label htmlFor="phone">Phone Number *</Label>
                <Input id="phone" {...register("phone")} placeholder="+91 98765 43210" />
                {errors.phone && <p className="text-sm text-red-600 mt-1">{errors.phone.message}</p>}
              </div>

              <div>
                <Label htmlFor="location">Location *</Label>
                <Input id="location" {...register("location")} placeholder="City, State" />
                {errors.location && <p className="text-sm text-red-600 mt-1">{errors.location.message}</p>}
              </div>

              <div>
                <Label htmlFor="bio">Bio *</Label>
                <Textarea
                  id="bio"
                  {...register("bio")}
                  placeholder="Tell us about your artistic background, training, experience, and what makes you unique..."
                  rows={4}
                />
                {errors.bio && <p className="text-sm text-red-600 mt-1">{errors.bio.message}</p>}
              </div>
            </div>

            {/* Categories Section */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Performance Categories *</h3>
              <p className="text-sm text-gray-600">Select all categories that apply to your performances</p>
              <div className="grid grid-cols-2 gap-3">
                {categories.map((category) => (
                  <div key={category} className="flex items-center space-x-2">
                    <Checkbox
                      id={category}
                      checked={selectedCategories.includes(category)}
                      onCheckedChange={(checked) => handleCategoryChange(category, checked as boolean)}
                    />
                    <Label htmlFor={category} className="text-sm font-normal">
                      {category}
                    </Label>
                  </div>
                ))}
              </div>
              {errors.categories && <p className="text-sm text-red-600">{errors.categories.message}</p>}
            </div>

            {/* Languages Section */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Languages *</h3>
              <p className="text-sm text-gray-600">Select languages you can perform in</p>
              <div className="grid grid-cols-2 gap-3">
                {languages.map((language) => (
                  <div key={language} className="flex items-center space-x-2">
                    <Checkbox
                      id={language}
                      checked={selectedLanguages.includes(language)}
                      onCheckedChange={(checked) => handleLanguageChange(language, checked as boolean)}
                    />
                    <Label htmlFor={language} className="text-sm font-normal">
                      {language}
                    </Label>
                  </div>
                ))}
              </div>
              {errors.languages && <p className="text-sm text-red-600">{errors.languages.message}</p>}
            </div>

            {/* Fee Range Section */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Fee Range *</h3>
              <Select onValueChange={(value) => setValue("feeRange", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select your typical fee range" />
                </SelectTrigger>
                <SelectContent>
                  {feeRanges.map((range) => (
                    <SelectItem key={range} value={range}>
                      {range}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.feeRange && <p className="text-sm text-red-600">{errors.feeRange.message}</p>}
            </div>

            {/* Submit Button */}
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? "Creating Profile..." : "Create Artist Profile"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
