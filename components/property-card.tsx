import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Bed, Bath, MapPin, Maximize2 } from "lucide-react"
import type { Property } from "@/lib/data"

interface PropertyCardProps {
  property: Property
}

export default function PropertyCard({ property }: PropertyCardProps) {
  return (
    <Link href={`/property/${property.id}`} className="block transition-transform hover:scale-[1.02] cursor-pointer">
      <Card className="overflow-hidden h-full">
        <div className="relative aspect-video overflow-hidden">
          <Image src={property.image || "/placeholder.svg"} alt={property.title} className="object-cover" fill />
          <div className="absolute top-2 left-2">
            <Badge variant={property.type === "For Sale" ? "default" : "secondary"}>{property.type}</Badge>
          </div>
        </div>
        <CardContent className="p-4">
          <div className="space-y-2">
            <div className="flex items-start justify-between">
              <h3 className="font-semibold text-lg line-clamp-1">{property.title}</h3>
              <p className="font-bold text-lg">${property.price.toLocaleString()}</p>
            </div>
            <div className="flex items-center text-muted-foreground">
              <MapPin className="mr-1 h-3.5 w-3.5" />
              <p className="text-sm line-clamp-1">{property.location}</p>
            </div>
          </div>
        </CardContent>
        <CardFooter className="p-4 pt-0 flex justify-between">
          <div className="flex space-x-4 text-sm">
            <div className="flex items-center">
              <Bed className="mr-1 h-4 w-4" />
              <span>{property.bedrooms}</span>
            </div>
            <div className="flex items-center">
              <Bath className="mr-1 h-4 w-4" />
              <span>{property.bathrooms}</span>
            </div>
            <div className="flex items-center">
              <Maximize2 className="mr-1 h-4 w-4" />
              <span>{property.area} sqft</span>
            </div>
          </div>
        </CardFooter>
      </Card>
    </Link>
  )
}
