import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className='relative'>
      <div className='relative h-[600px] w-full overflow-hidden'>
        <Image
          src='/luxury-mansion-exterior.jpg'
          alt='Luxury real estate property with modern architecture'
          fill
          className='object-cover w-full h-full object-center'
          priority
        />
        <div className='absolute inset-0 bg-black/40' />
        <div className='absolute inset-0 flex items-center justify-center'>
          <div className='container px-4 md:px-6 text-center'>
            <div className='space-y-4'>
              <h1 className='text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl lg:text-6xl'>
                Find Your Dream Property
              </h1>
              <p className='mx-auto max-w-[700px] text-white md:text-xl'>
                Discover exceptional properties in prime locations that match your lifestyle and preferences.
              </p>
              <div className='flex flex-col sm:flex-row justify-center gap-4 mt-8'>
                <Link
                  href='#properties'
                  className='inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90'
                  scroll={false}>
                  Browse Properties
                </Link>
                <Link
                  href='#contact'
                  className='inline-flex h-10 items-center justify-center rounded-md border border-white bg-transparent px-8 text-sm font-medium text-white shadow-sm transition-colors hover:bg-white/20'
                  scroll={false}>
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
