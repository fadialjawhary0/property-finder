import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Bed, Bath, MapPin, Maximize2 } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import type { Property } from '@/lib/data';

interface PropertyCardProps {
  property: Property;
}

export default function PropertyCard({ property }: PropertyCardProps) {
  const handleWhatsAppClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const message = `Hello, I'm interested in the property at ${property.location}`;
    const whatsappUrl = `https://wa.me/${property.phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleMapClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.open(
      'https://www.google.com/maps/place/Yamadadai,+Yachimata,+Chiba+289-1124,+Japan/@35.580286,140.2927041,2102m/data=!3m1!1e3!4m6!3m5!1s0x6022946a7d15c391:0x9beeaa1e6c3a8447!8m2!3d35.5786938!4d140.2875709!16s%2Fg%2F1pxxx9c9v?entry=ttu&g_ep=EgoyMDI1MDUxMy4xIKXMDSoASAFQAw%3D%3D',
      '_blank',
    );
  };

  return (
    <Link href={`/property/${property.id}`} className='block transition-transform hover:scale-[1.02] cursor-pointer'>
      <Card className='overflow-hidden h-full'>
        <div className='relative aspect-video overflow-hidden'>
          <Image
            src={property.image || '/placeholder.svg'}
            alt={property.title}
            className='object-cover'
            fill
            priority={property.id === 1}
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
          />
          <div className='absolute top-2 left-2'>
            <Badge variant={property.type === 'For Sale' ? 'default' : 'secondary'}>{property.type}</Badge>
          </div>
        </div>
        <CardContent className='p-4'>
          <div className='space-y-2'>
            <div className='flex items-start justify-between'>
              <h3 className='font-semibold text-lg max-w-[300px] line-clamp-2' title={property.title}>
                {property.title}
              </h3>
              <div className='text-right'>
                <p className='font-bold text-lg'>${property.price.toLocaleString()}</p>
                {property.type === 'For Rent' && property.annualPrice ? (
                  <p className='text-sm text-muted-foreground'>${property.annualPrice.toLocaleString()}/year</p>
                ) : (
                  <p>‎ </p>
                )}
              </div>
            </div>
            <div className='flex items-center text-muted-foreground'>
              <MapPin className='mr-1 h-3.5 w-3.5' />
              <p className='text-sm line-clamp-1'>{property.location}</p>
            </div>
          </div>
        </CardContent>
        <CardFooter className='p-4 pt-0 flex justify-between items-center'>
          <div className='flex space-x-4 text-sm'>
            <div className='flex items-center'>
              <Bed className='mr-1 h-4 w-4' />
              <span>{property.bedrooms}</span>
            </div>
            <div className='flex items-center'>
              <Bath className='mr-1 h-4 w-4' />
              <span>{property.bathrooms}</span>
            </div>
            <div className='flex items-center'>
              <Maximize2 className='mr-1 h-4 w-4' />
              <span>{property.area} sqft</span>
            </div>
          </div>
          <div className='flex gap-2'>
            <button onClick={handleMapClick} className='group relative p-2 rounded-full transition-all duration-300 hover:bg-red-50'>
              <div className='absolute inset-0 rounded-full bg-red-500/10 scale-0 group-hover:scale-100 transition-transform duration-300' />
              <MapPin style={{ width: '20px', height: '20px' }} className='text-red-500 transition-all duration-300  ' />
              <span className='absolute w-20 -bottom-5 left-1/2 -translate-x-1/2 text-xs text-red-500 font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:-translate-y-1'>
                View Map
              </span>
            </button>
            <button
              onClick={handleWhatsAppClick}
              className='group relative p-2 rounded-full transition-all duration-300 hover:bg-[#25D366]/10'>
              <div className='absolute inset-0 rounded-full bg-[#25D366]/10 scale-0 group-hover:scale-100 transition-transform duration-300' />
              <FaWhatsapp style={{ width: '20px', height: '20px' }} className='text-[#25D366] transition-all duration-300  ' />
              <span className='absolute w-20 -bottom-5 left-1/2 -translate-x-1/2 text-xs text-[#25D366] font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:-translate-y-1'>
                Chat Now
              </span>
            </button>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}
