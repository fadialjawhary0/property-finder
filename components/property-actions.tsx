"use client"

import { Button } from "@/components/ui/button"
import { MapPin } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa"

interface PropertyActionsProps {
  location: string
  phoneNumber: string
}

export function PropertyActions({ location, phoneNumber }: PropertyActionsProps) {
  const handleWhatsAppClick = () => {
    const message = `Hello, I'm interested in the property at ${location}`
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  const handleMapClick = () => {
    const searchQuery = encodeURIComponent(location)
    window.open(`https://www.openstreetmap.org/search?query=${searchQuery}`, '_blank')
  }

  return (
    <div className="flex gap-2">
      <Button 
        variant="outline" 
        className="flex items-center gap-2"
        onClick={handleMapClick}
      >
        <MapPin style={{ width: '20px', height: '20px' }} className="text-red-500" />
        View Location
      </Button>

      <Button 
        variant="outline" 
        className="flex items-center gap-2"
        onClick={handleWhatsAppClick}
      >
        <FaWhatsapp style={{ width: '20px', height: '20px' }} className="text-[#25D366]" />
        Contact on WhatsApp
      </Button>
    </div>
  )
} 