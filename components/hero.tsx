import Link from 'next/link';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Globe, TrendingUp, Users, Shield } from 'lucide-react';

export default function Hero() {
  return (
    <section className='relative'>
      <div className='relative h-[700px] sm:h-[600px] w-full overflow-hidden'>
        <Image
          src='/luxury-mansion-exterior.jpg'
          alt='Luxury real estate property with modern architecture'
          fill
          className='object-cover w-full h-full object-center'
          priority
        />
        <div className='absolute inset-0 bg-black/50' />
        <div className='absolute inset-0 flex items-center justify-center'>
          <div className='container px-4 md:px-6 text-center'>
            <div className='space-y-6'>
              <div className='space-y-4'>
                <div className='flex justify-center gap-2 flex-wrap'>
                  <Badge variant='secondary' className='bg-white/20 text-white border-white/30'>
                    <Globe className='w-3 h-3 mr-1' />
                    Global Investment
                  </Badge>
                  <Badge variant='secondary' className='bg-white/20 text-white border-white/30'>
                    <TrendingUp className='w-3 h-3 mr-1' />
                    High ROI
                  </Badge>
                  <Badge variant='secondary' className='bg-white/20 text-white border-white/30'>
                    <Shield className='w-3 h-3 mr-1' />
                    Safe Legal Environment
                  </Badge>
                </div>
                <h1 className='text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl lg:text-6xl'>
                  TsuboWise: Profiting from Property in Japan
                </h1>
                <p className='mx-auto max-w-[800px] text-white md:text-xl text-lg'>
                  Affordable Japanese Real Estate for the Global Investor. Now Accessible to Everyone, Everywhere, in Every Language.
                </p>
              </div>

              <div className='grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto text-white/90'>
                <div className='bg-white/10 backdrop-blur-sm rounded-lg p-4'>
                  <div className='text-2xl font-bold text-primary text-white'>8M+</div>
                  <div className='text-sm'>Vacant Homes Across Japan</div>
                </div>
                <div className='bg-white/10 backdrop-blur-sm rounded-lg p-4'>
                  <div className='text-2xl font-bold text-primary text-white'>Weak Yen</div>
                  <div className='text-sm'>High Purchasing Power for International Buyers</div>
                </div>
                <div className='bg-white/10 backdrop-blur-sm rounded-lg p-4'>
                  <div className='text-2xl font-bold text-primary text-white'>9+</div>
                  <div className='text-sm'>Languages Supported</div>
                </div>
              </div>

              <div className='flex flex-col sm:flex-row justify-center gap-4 mt-8'>
                <Link
                  href='#properties'
                  className='inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90'
                  scroll={false}>
                  Browse Investment Properties
                </Link>
                <Link
                  href='#contact'
                  className='inline-flex h-12 items-center justify-center rounded-md border border-white bg-transparent px-8 text-sm font-medium text-white shadow-sm transition-colors hover:bg-white/20'
                  scroll={false}>
                  Start Your Investment Journey
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
