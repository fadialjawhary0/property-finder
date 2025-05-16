'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface PropertyGalleryProps {
  images: string[];
}

export default function PropertyGallery({ images }: PropertyGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(0);
  const [direction, setDirection] = useState<'left' | 'right'>('right');
  const [hasInteracted, setHasInteracted] = useState(false);

  const goToPrevious = () => {
    setDirection('left');
    setPrevIndex(currentIndex);
    setCurrentIndex(prev => (prev === 0 ? images.length - 1 : prev - 1));
    setHasInteracted(true);
  };

  const goToNext = () => {
    setDirection('right');
    setPrevIndex(currentIndex);
    setCurrentIndex(prev => (prev === images.length - 1 ? 0 : prev + 1));
    setHasInteracted(true);
  };

  const goToImage = (index: number) => {
    if (index === currentIndex) return;
    setDirection(index > currentIndex ? 'right' : 'left');
    setPrevIndex(currentIndex);
    setCurrentIndex(index);
    setHasInteracted(true);
  };

  return (
    <div className='space-y-2'>
      <div className='relative aspect-[16/9] w-full overflow-hidden rounded-lg'>
        {/* Previous Image (only if needed) */}
        {hasInteracted && prevIndex !== currentIndex && (
          <div
            key={`prev-${prevIndex}`}
            className={`absolute inset-0 z-10 ${direction === 'right' ? 'animate-slide-out-left' : 'animate-slide-out-right'}`}>
            <Image
              src={images[prevIndex] || '/placeholder.svg'}
              alt={`Property image ${prevIndex + 1}`}
              fill
              sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
              className='object-cover'
              quality={85}
              loading='lazy'
            />
          </div>
        )}

        {/* Current Image */}
        <div
          key={`curr-${currentIndex}`}
          className={`absolute inset-0 z-20 ${
            hasInteracted ? (direction === 'right' ? 'animate-slide-in-right' : 'animate-slide-in-left') : ''
          }`}>
          <Image
            src={images[currentIndex] || '/placeholder.svg'}
            alt={`Property image ${currentIndex + 1}`}
            fill
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
            className='object-cover'
            priority={currentIndex === 0}
            quality={85}
            loading={currentIndex === 0 ? 'eager' : 'lazy'}
          />
        </div>

        {/* Arrows */}
        <div className='absolute inset-0 flex items-center justify-between p-4 z-30'>
          <Button variant='outline' size='icon' className='h-8 w-8 rounded-full bg-background/80 backdrop-blur-sm' onClick={goToPrevious}>
            <ChevronLeft className='h-4 w-4' />
            <span className='sr-only'>Previous image</span>
          </Button>
          <Button variant='outline' size='icon' className='h-8 w-8 rounded-full bg-background/80 backdrop-blur-sm' onClick={goToNext}>
            <ChevronRight className='h-4 w-4' />
            <span className='sr-only'>Next image</span>
          </Button>
        </div>

        {/* Dots */}
        <div className='absolute bottom-4 left-1/2 -translate-x-1/2 z-40'>
          <div className='flex items-center gap-1.5'>
            {images.map((_, index) => (
              <button
                key={index}
                className={`h-1.5 w-1.5 rounded-full ${index === currentIndex ? 'bg-primary' : 'bg-background/80'}`}
                onClick={() => goToImage(index)}>
                <span className='sr-only'>Image {index + 1}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Thumbnails */}
      <div className='grid grid-cols-5 gap-2'>
        {images.map((image, index) => (
          <button
            key={index}
            className={`relative aspect-[4/3] overflow-hidden rounded-md ${index === currentIndex ? 'ring-2 ring-primary' : ''}`}
            onClick={() => goToImage(index)}>
            <Image
              src={image || '/placeholder.svg'}
              alt={`Property thumbnail ${index + 1}`}
              fill
              sizes='(max-width: 768px) 20vw, 15vw'
              className='object-cover'
              quality={60}
              loading='lazy'
            />
          </button>
        ))}
      </div>
    </div>
  );
}
