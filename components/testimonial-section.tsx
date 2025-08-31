import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Homeowner',
    content:
      "Uedanoki made buying my first home incredibly easy. Their team was supportive throughout the entire process, and I couldn't be happier with my new place!",
    image: '/testimonial-woman-1.png',
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Property Investor',
    content:
      "As an investor, I appreciate Uedanoki's detailed listings and market insights. They've helped me find multiple profitable investment properties over the past two years.",
    image: '/testimonial-man-1.png',
  },
  {
    id: 3,
    name: 'Aisha Al-Mansouri',
    role: 'First-time Buyer',
    content:
      'The team at Uedanoki went above and beyond to help me find my dream apartment. Their knowledge of the local market is unmatched, and their service was exceptional.',
    image: '/testimonial-woman-2.png',
  },
];

export default function TestimonialSection() {
  return (
    <section id='testimonials' className='py-12 md:py-16 bg-muted'>
      <div className='container'>
        <div className='flex flex-col items-center justify-center space-y-4 text-center mb-10'>
          <div className='space-y-2'>
            <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>What Our Clients Say</h2>
            <p className='mx-auto max-w-[700px] text-muted-foreground md:text-xl'>
              Hear from our satisfied clients about their experience with Uedanoki.
            </p>
          </div>
        </div>

        <div className='grid gap-6 md:grid-cols-3'>
          {testimonials.map(testimonial => (
            <Card key={testimonial.id} className='h-full'>
              <CardContent className='p-6 flex flex-col h-full'>
                <Quote className='h-8 w-8 text-primary/40 mb-4' />
                <p className='text-muted-foreground mb-6 flex-grow'>{testimonial.content}</p>
                <div className='flex items-center'>
                  <div className='relative h-12 w-12 rounded-full overflow-hidden mr-4'>
                    <Image src={testimonial.image || '/placeholder.svg'} alt={testimonial.name} fill className='object-cover' />
                  </div>
                  <div>
                    <h4 className='font-medium'>{testimonial.name}</h4>
                    <p className='text-sm text-muted-foreground'>{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
