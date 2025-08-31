'use client';

import Link from 'next/link';
import PropertyCard from '@/components/property-card';
import { properties } from '@/lib/data';
import Hero from '@/components/hero';
import ContactSection from '@/components/contact-section';
import BusinessModelSection from '@/components/business-model-section';
import NeighborhoodSection from '@/components/neighborhood-section';
import ResponsiveNavbar from '@/components/responsive-navbar';
import RoadmapSection from '@/components/roadmap-section';
import TeamSection from '@/components/team-section';
import TestimonialSection from '@/components/testimonial-section';
import { useSmoothScroll } from '@/lib/hooks/use-smooth-scroll';
import { useState } from 'react';
import { PropertyFilters } from '@/components/property-filters';
import { Property } from '@/lib/data';

export default function Home() {
  useSmoothScroll();
  const [filteredProperties, setFilteredProperties] = useState<Property[]>(properties);
  const [currentType, setCurrentType] = useState<'For Sale' | 'For Rent' | 'All'>('All');
  const [currentSearch, setCurrentSearch] = useState('');

  const handleFilterChange = (type: 'For Sale' | 'For Rent' | 'All', search: string) => {
    let filtered = properties;

    setCurrentType(type);
    setCurrentSearch(search);

    // Filter by type
    if (type !== 'All') {
      filtered = filtered.filter(property => property.type === type);
    }

    // Filter by search
    if (search) {
      const searchLower = search.toLowerCase();
      filtered = filtered.filter(
        property =>
          property.title.toLowerCase().includes(searchLower) ||
          property.location.toLowerCase().includes(searchLower) ||
          property.description.toLowerCase().includes(searchLower),
      );
    }

    setFilteredProperties(filtered);
  };

  return (
    <div className='flex min-h-screen flex-col'>
      <ResponsiveNavbar />
      <main className='flex-1'>
        <Hero />

        <section id='properties' className='container py-12 md:py-16'>
          <div className='space-y-8'>
            <div className='flex flex-col items-center justify-center space-y-2 text-center'>
              <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>Featured Properties</h2>
              <p className='mx-auto max-w-[700px] text-muted-foreground md:text-xl'>Discover our selection of premium properties</p>
            </div>

            <PropertyFilters onFilterChange={handleFilterChange} />

            {filteredProperties.length === 0 ? (
              <div className='text-center text-muted-foreground text-lg py-12'>
                {currentType === 'For Rent'
                  ? 'There are no rent properties.'
                  : currentType === 'For Sale'
                  ? 'There are no sale properties.'
                  : 'No properties found for your search.'}
              </div>
            ) : (
              <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
                {filteredProperties.map(property => (
                  <PropertyCard key={property.id} property={property} />
                ))}
              </div>
            )}
          </div>
        </section>

        <BusinessModelSection />

        <NeighborhoodSection />

        <TestimonialSection />

        <TeamSection />

        <RoadmapSection />

        <section id='about' className='bg-muted py-12 md:py-16'>
          <div className='container'>
            <div className='flex flex-col items-center justify-center space-y-4 text-center'>
              <div className='space-y-2'>
                <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>Our Vision</h2>
                <p className='mx-auto max-w-[700px] text-muted-foreground md:text-xl'>Multilingual. Multicultural. Multinational.</p>
              </div>
              <div className='mx-auto max-w-[800px] mt-6 space-y-6 text-left'>
                <div className='bg-white/80 rounded-lg p-6'>
                  <h3 className='text-xl font-semibold mb-4 text-primary'>Democratizing Japanese Real Estate</h3>
                  <p className='text-muted-foreground mb-4'>
                    We are dedicated to democratizing access to Japan's real estate market for all. Our mission is to bridge the gap between
                    global investors and Japan's vast property opportunities, making investment accessible regardless of language or
                    location.
                  </p>
                  <p className='text-muted-foreground'>
                    With support in English, Japanese, Sinhala, Tamil, Arabic, Mandarin, Spanish, French, and more, we ensure that language
                    barriers never stand in the way of your investment dreams.
                  </p>
                </div>

                <div className='grid gap-6 md:grid-cols-2'>
                  <div className='space-y-4'>
                    <h4 className='text-lg font-semibold text-primary'>The Global Opportunity</h4>
                    <ul className='space-y-2 text-sm text-muted-foreground'>
                      <li className='flex items-start'>
                        <div className='w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-2 flex-shrink-0' />
                        8+ million vacant homes across Japan
                      </li>
                      <li className='flex items-start'>
                        <div className='w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-2 flex-shrink-0' />
                        Favorable exchange rate (weak yen = high purchasing power)
                      </li>
                      <li className='flex items-start'>
                        <div className='w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-2 flex-shrink-0' />
                        Safe legal environment with high rental demand
                      </li>
                    </ul>
                  </div>

                  <div className='space-y-4'>
                    <h4 className='text-lg font-semibold text-primary'>Our Approach</h4>
                    <ul className='space-y-2 text-sm text-muted-foreground'>
                      <li className='flex items-start'>
                        <div className='w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-2 flex-shrink-0' />
                        Buy low (affordable properties)
                      </li>
                      <li className='flex items-start'>
                        <div className='w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-2 flex-shrink-0' />
                        Enhance smartly (renovate or rent)
                      </li>
                      <li className='flex items-start'>
                        <div className='w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-2 flex-shrink-0' />
                        Sell profitably (global resale)
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ContactSection />
      </main>
      <footer className='border-t bg-background'>
        <div className='container flex flex-col gap-4 py-10 md:flex-row md:items-center md:justify-between md:py-6'>
          <div className='flex flex-col gap-4 md:gap-2'>
            <Link href='/' className='flex items-center space-x-2'>
              <span className='text-lg font-bold'>TsuboWise</span>
            </Link>
            <p className='text-sm text-muted-foreground'>Invest in Japan. Profit from potential. Connect the world through property.</p>
          </div>
          <div className='flex gap-4 text-sm text-muted-foreground'>
            <Link href='#' className='hover:underline'>
              Terms
            </Link>
            <Link href='#' className='hover:underline'>
              Privacy
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
