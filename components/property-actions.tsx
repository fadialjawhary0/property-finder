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
    window.open("https://maps.app.goo.gl/3USuJEqVQQFDCqAQ8", '_blank')
  }

  return (
    <div className="flex gap-2">
      <Button 
        variant="outline" 
        className="group relative flex items-center gap-2 overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg"
        onClick={handleMapClick}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/0 via-red-500/10 to-red-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
        <MapPin 
          style={{ width: '20px', height: '20px' }} 
          className="text-red-500 transition-all duration-300 group-hover:scale-110" 
        />
        <span className="relative inline-block transition-all duration-300">
          <span className="block transition-all duration-300 group-hover:-translate-y-6 group-hover:opacity-0">View Location</span>
          <span className="absolute left-0 top-0 block translate-y-6 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">Open Maps</span>
        </span>
      </Button>

      <Button 
        variant="outline" 
        className="group relative flex items-center gap-2 overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg"
        onClick={handleWhatsAppClick}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#25D366]/0 via-[#25D366]/10 to-[#25D366]/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
        <FaWhatsapp 
          style={{ width: '20px', height: '20px' }} 
          className="text-[#25D366] transition-all duration-300 group-hover:scale-110" 
        />
        <span className="relative inline-block transition-all duration-300">
          <span className="block transition-all duration-300 group-hover:-translate-y-6 group-hover:opacity-0">Contact on WhatsApp</span>
          <span className="absolute left-0 top-0 block translate-y-6 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">Chat Now</span>
        </span>
      </Button>
    </div>
  )
} 