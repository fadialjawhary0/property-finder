'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface PropertyGalleryProps {
  images: { url: string; title: string | undefined }[];
}

export default function PropertyGallery({ images }: PropertyGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(0);
  const [direction, setDirection] = useState<'left' | 'right'>('right');
  const [hasInteracted, setHasInteracted] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const preloadedRef = useRef<Set<string>>(new Set());

  useEffect(() => {
    const preloadImage = (url: string) => {
      if (!preloadedRef.current.has(url)) {
        const img = new window.Image();
        img.src = url;
        preloadedRef.current.add(url);
      }
    };

    const nextIndex = (currentIndex + 1) % images.length;
    const prevIndex = (currentIndex - 1 + images.length) % images.length;

    preloadImage(images[nextIndex].url);
    preloadImage(images[prevIndex].url);
  }, [currentIndex, images]);

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
    <>
      <div className='space-y-2'>
        <div className='relative aspect-[16/9] w-full overflow-hidden rounded-lg'>
          {/* Previous Image (only if needed) */}
          {hasInteracted && prevIndex !== currentIndex && (
            <div
              key={`prev-${prevIndex}`}
              className={`absolute inset-0 z-10 ${
                direction === 'right' ? 'animate-slide-out-left' : 'animate-slide-out-right'
              } cursor-pointer`}>
              <Image
                src={images[prevIndex].url || '/placeholder.svg'}
                alt={`Property image ${prevIndex + 1} - ${images[prevIndex].title || ''}`}
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
            className={`cursor-pointer absolute inset-0 z-40 ${
              hasInteracted ? (direction === 'right' ? 'animate-slide-in-right' : 'animate-slide-in-left') : ''
            }`}>
            <div className='relative w-full h-full cursor-pointer' onClick={() => setIsModalOpen(true)}>
              <Image
                src={images[currentIndex].url || '/placeholder.svg'}
                alt={`Property image ${currentIndex + 1} - ${images[currentIndex].title || ''}`}
                fill
                className='object-cover cursor-pointer'
                priority={currentIndex === 0}
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
              />
              {images[currentIndex].title && (
                <div className='absolute bottom-0 left-0 right-0 bg-black/50 text-white p-4 z-30 pointer-events-none'>
                  <h3 className='text-lg font-medium'>{images[currentIndex].title}</h3>
                </div>
              )}
            </div>
          </div>

          {/* Arrows */}
          <div className='absolute inset-0 flex items-center justify-between p-4 z-50 pointer-events-none'>
            <Button
              variant='outline'
              size='icon'
              className='h-8 w-8 rounded-full bg-background/80 backdrop-blur-sm pointer-events-auto'
              onClick={goToPrevious}>
              <ChevronLeft className='h-4 w-4' />
              <span className='sr-only'>Previous image</span>
            </Button>
            <Button
              variant='outline'
              size='icon'
              className='h-8 w-8 rounded-full bg-background/80 backdrop-blur-sm pointer-events-auto'
              onClick={goToNext}>
              <ChevronRight className='h-4 w-4' />
              <span className='sr-only'>Next image</span>
            </Button>
          </div>

          {/* Dots */}
          <div className='absolute bottom-16 left-1/2 -translate-x-1/2 z-40'>
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

        {/* Thumbnails Section - Horizontally Scrollable */}
        <div className='relative w-full'>
          <div className='flex gap-2 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-gray-800 scrollbar-track-transparent hover:scrollbar-thumb-gray-500 p-1'>
            {images.map((image, index) => (
              <button
                key={index}
                className={`relative w-[15%] aspect-[4/3] overflow-hidden rounded-md shrink-0 ${
                  index === currentIndex ? 'ring-2 ring-primary' : ''
                }`}
                onClick={() => goToImage(index)}>
                <Image
                  src={image.url || '/placeholder.svg'}
                  alt={`Property thumbnail ${index + 1} - ${image.title}`}
                  width={150}
                  height={112}
                  className='object-cover w-full h-full'
                  quality={100}
                  loading='lazy'
                />
                <div className='absolute inset-0 bg-black/30 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center'>
                  <span className='text-white text-xs font-medium px-2 py-1'>{image.title}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className='fixed inset-0 bg-black/90 z-50 flex items-center justify-center' onClick={() => setIsModalOpen(false)}>
          <div className='relative w-[90vw] h-[90vh]'>
            <Image src={images[currentIndex].url || '/placeholder.svg'} alt='Full view' fill className='object-contain' priority />
            <Button
              variant='outline'
              size='icon'
              onClick={e => {
                e.stopPropagation();
                setIsModalOpen(false);
              }}
              className='absolute top-4 right-4 h-8 w-8 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background/90 transition-colors'>
              <X className='h-4 w-4' />
              <span className='sr-only'>Close modal</span>
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
