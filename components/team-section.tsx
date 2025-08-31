import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Mail, Phone, MessageSquare, Globe, Users } from 'lucide-react';

export default function TeamSection() {
  return (
    <section id='team' className='bg-background py-12 md:py-16'>
      <div className='container'>
        <div className='flex flex-col items-center justify-center space-y-4 text-center mb-12'>
          <div className='space-y-2'>
            <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>Meet Our Team</h2>
            <p className='mx-auto max-w-[700px] text-muted-foreground md:text-xl'>
              We are a dedicated team working to bridge the gap between property owners and foreign residents in Japan.
            </p>
          </div>
          <div className='mx-auto max-w-[800px] mt-6'>
            <p className='text-muted-foreground text-lg'>
              Our mission is to provide comprehensive housing support, ensuring a smooth, transparent, and inclusive experience for everyone
              involved.
            </p>
          </div>
        </div>

        <div className='grid gap-8 md:grid-cols-1 lg:grid-cols-1 max-w-4xl mx-auto'>
          <Card className='overflow-hidden border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg'>
            <CardHeader className='bg-gradient-to-r from-primary/5 to-primary/10 pb-6'>
              <div className='flex items-start justify-between'>
                <div className='space-y-2'>
                  <div className='flex items-center gap-3'>
                    <h3 className='text-2xl font-bold text-primary'>Mr. Mohamed Riza</h3>
                    <Badge variant='secondary' className='text-xs'>
                      <Users className='w-3 h-3 mr-1' />
                      Team Lead
                    </Badge>
                  </div>
                  <CardDescription className='text-base font-medium text-muted-foreground'>
                    Real Estate Investment Advisor / Global Communications Lead
                  </CardDescription>
                </div>
              </div>
            </CardHeader>

            <CardContent className='p-6 space-y-6'>
              <div className='grid gap-6 md:grid-cols-2'>
                <div className='space-y-4'>
                  <div>
                    <h4 className='font-semibold text-lg mb-3 text-primary'>Affiliation & Division</h4>
                    <div className='space-y-2'>
                      <p className='text-sm text-muted-foreground'>
                        <span className='font-medium'>Organization:</span> General Incorporated Association for Supporting Foreign Residents
                        in Japan
                      </p>
                      <p className='text-sm text-muted-foreground'>
                        <span className='font-medium'>Division:</span> Housing Support Division
                      </p>
                    </div>
                  </div>

                  <div>
                    <h4 className='font-semibold text-lg mb-3 text-primary'>Key Responsibilities</h4>
                    <ul className='space-y-2 text-sm text-muted-foreground'>
                      <li className='flex items-start'>
                        <div className='w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-2 flex-shrink-0' />
                        Advising on real estate investment opportunities, especially for foreign clients
                      </li>
                      <li className='flex items-start'>
                        <div className='w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-2 flex-shrink-0' />
                        Providing bilingual support for investors and tenants
                      </li>
                      <li className='flex items-start'>
                        <div className='w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-2 flex-shrink-0' />
                        Managing domestic and international client communications (including WhatsApp)
                      </li>
                    </ul>
                  </div>
                </div>

                <div className='space-y-4'>
                  <div>
                    <h4 className='font-semibold text-lg mb-3 text-primary'>Contact Information</h4>
                    <div className='space-y-3'>
                      <div className='flex items-center'>
                        <Phone className='mr-2 h-4 w-4 text-primary' />
                        <div>
                          <p className='font-medium text-sm'>Phone / WhatsApp</p>
                          <p className='text-sm text-muted-foreground'>+81 80-3366-6526</p>
                        </div>
                      </div>
                      <div className='flex items-center'>
                        <Mail className='mr-2 h-4 w-4 text-primary' />
                        <div>
                          <p className='font-medium text-sm'>Email</p>
                          <p className='text-sm text-muted-foreground'>Mohamedriza16@gmail.com</p>
                        </div>
                      </div>
                      <div className='flex items-center'>
                        <MessageSquare className='mr-2 h-4 w-4 text-primary' />
                        <div>
                          <p className='font-medium text-sm'>WhatsApp</p>
                          <p className='text-sm text-muted-foreground'>+81 80-3366-6526</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className='font-semibold text-lg mb-3 text-primary'>Languages</h4>
                    <div className='flex flex-wrap gap-2'>
                      <Badge variant='outline'>Japanese</Badge>
                      <Badge variant='outline'>English</Badge>
                      <Badge variant='outline'>Tamil</Badge>
                      <Badge variant='outline'>Sinhala</Badge>
                    </div>
                  </div>
                </div>
              </div>

              <div className='pt-4 border-t'>
                <h4 className='font-semibold text-lg mb-3 text-primary'>Special Note</h4>
                <p className='text-sm text-muted-foreground leading-relaxed'>
                  Mohamed Riza plays a central role in client relations and project promotion. He is often the first point of contact for
                  new investors and property seekers, ensuring that every inquiry receives timely and culturally-sensitive support.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
