import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin } from "lucide-react"

const neighborhoods = [
  {
    id: 1,
    name: "Ginza",
    description: "Tokyo's upscale shopping and entertainment district with luxury residences",
    image: "/ginza-night.jpg",
    properties: 24,
  },
  {
    id: 2,
    name: "Roppongi Hills",
    description: "Modern urban living in Tokyo's international business and entertainment hub",
    image: "/roppongi-hills.jpg",
    properties: 36,
  },
  {
    id: 3,
    name: "Yokohama Minato Mirai",
    description: "Waterfront living in Japan's second-largest city with stunning harbor views",
    image: "/minato-mirai.jpg",
    properties: 42,
  },
  {
    id: 4,
    name: "Denenchofu",
    description: "Exclusive residential area known as Tokyo's Beverly Hills",
    image: "/denenchofu.jpg",
    properties: 18,
  },
]

export default function NeighborhoodSection() {
  return (
    <section id="neighborhoods" className="py-12 md:py-16 bg-muted/50">
      <div className="container">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Featured Neighborhoods</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Discover the most sought-after areas with exceptional properties and amenities.
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {neighborhoods.map((neighborhood) => (
            <Link
              href={`#neighborhood-${neighborhood.id}`}
              key={neighborhood.id}
              className="block cursor-pointer transition-transform hover:scale-[1.02]"
            >
              <Card className="overflow-hidden h-full">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={neighborhood.image || "/placeholder.svg"}
                    alt={neighborhood.name}
                    className="object-cover"
                    fill
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-lg mb-1">{neighborhood.name}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{neighborhood.description}</p>
                  <div className="flex items-center text-sm">
                    <MapPin className="mr-1 h-3.5 w-3.5 text-primary" />
                    <span>{neighborhood.properties} Properties</span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
