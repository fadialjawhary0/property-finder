import { notFound } from "next/navigation"
import Link from "next/link"
import { ChevronLeft, Bed, Bath, Maximize2, MapPin, Share2, Heart } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import PropertyGallery from "@/components/property-gallery"
import PropertyContactForm from "@/components/property-contact-form"
import { getPropertyById } from "@/lib/data"
import { PropertyActions } from "@/components/property-actions"

interface PropertyPageProps {
  params: {
    id: string
  }
}

export default function PropertyPage({ params }: PropertyPageProps) {
  const property = getPropertyById(Number.parseInt(params.id))

  if (!property) {
    notFound()
  }

  return (
    <div className="container py-8">
      <div className="mb-6">
        <Link href="/" className="inline-flex items-center text-sm font-medium text-primary hover:underline">
          <ChevronLeft className="mr-1 h-4 w-4" />
          Back to listings
        </Link>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
              <Badge variant={property.type === "For Sale" ? "default" : "secondary"} className="text-sm">
                {property.type}
              </Badge>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="icon">
                  <Heart className="h-4 w-4" />
                  <span className="sr-only">Save property</span>
                </Button>
                <Button variant="outline" size="icon">
                  <Share2 className="h-4 w-4" />
                  <span className="sr-only">Share property</span>
                </Button>
              </div>
            </div>
            <h1 className="text-2xl font-bold md:text-3xl">{property.title}</h1>
            <div className="flex items-center mt-2 text-muted-foreground">
              <MapPin className="mr-1 h-4 w-4" />
              <p>{property.location}</p>
            </div>
            <div className="mt-4">
              <p className="text-3xl font-bold">${property.price.toLocaleString()}</p>
              {property.type === "For Rent" && property.annualPrice && (
                <p className="text-lg text-muted-foreground">${property.annualPrice.toLocaleString()}/year</p>
              )}
            </div>
            <div className="mt-4">
              <PropertyActions location={property.location} phoneNumber={property.phoneNumber} />
            </div>
          </div>

          <PropertyGallery images={property.images} />

          <div className="mt-8">
            <h2 className="text-xl font-bold mb-4">Property Details</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="flex flex-col items-center justify-center p-4 bg-muted rounded-lg">
                <Bed className="h-5 w-5 mb-2" />
                <span className="text-sm text-muted-foreground">Bedrooms</span>
                <span className="font-medium">{property.bedrooms}</span>
              </div>
              <div className="flex flex-col items-center justify-center p-4 bg-muted rounded-lg">
                <Bath className="h-5 w-5 mb-2" />
                <span className="text-sm text-muted-foreground">Bathrooms</span>
                <span className="font-medium">{property.bathrooms}</span>
              </div>
              <div className="flex flex-col items-center justify-center p-4 bg-muted rounded-lg">
                <Maximize2 className="h-5 w-5 mb-2" />
                <span className="text-sm text-muted-foreground">Area</span>
                <span className="font-medium">{property.area} sqft</span>
              </div>
              <div className="flex flex-col items-center justify-center p-4 bg-muted rounded-lg">
                <span className="font-medium">{property.yearBuilt}</span>
                <span className="text-sm text-muted-foreground">Year Built</span>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">Description</h3>
                <p className="text-muted-foreground whitespace-pre-line">{property.description}</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Features & Amenities</h3>
                <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
                  {property.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="sticky top-24">
            <Card>
              <CardContent className="p-6">
                <PropertyContactForm propertyId={property.id} propertyTitle={property.title} />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
