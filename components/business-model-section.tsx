import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, Globe, Users, Building, Target, DollarSign, ArrowRight } from 'lucide-react';

export default function BusinessModelSection() {
  return (
    <section id='business-model' className='bg-muted py-12 md:py-16'>
      <div className='container'>
        <div className='flex flex-col items-center justify-center space-y-4 text-center mb-12'>
          <div className='space-y-2'>
            <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>Our Investment Strategy</h2>
            <p className='mx-auto max-w-[700px] text-muted-foreground md:text-xl'>
              Buy low, enhance smartly, sell profitably - our proven approach to Japanese real estate investment.
            </p>
          </div>
        </div>

        <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-12'>
          <Card className='text-center hover:shadow-lg transition-shadow'>
            <CardHeader className='pb-4'>
              <div className='mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4'>
                <Target className='h-6 w-6 text-primary' />
              </div>
              <CardTitle className='text-lg'>Source</CardTitle>
            </CardHeader>
            <CardContent>
              <p className='text-sm text-muted-foreground'>
                Find undervalued or vacant properties across Japan's 8+ million available homes
              </p>
            </CardContent>
          </Card>

          <Card className='text-center hover:shadow-lg transition-shadow'>
            <CardHeader className='pb-4'>
              <div className='mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4'>
                <Building className='h-6 w-6 text-primary' />
              </div>
              <CardTitle className='text-lg'>Renovate</CardTitle>
            </CardHeader>
            <CardContent>
              <p className='text-sm text-muted-foreground'>Implement strategic light improvements to maximize property value and appeal</p>
            </CardContent>
          </Card>

          <Card className='text-center hover:shadow-lg transition-shadow'>
            <CardHeader className='pb-4'>
              <div className='mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4'>
                <TrendingUp className='h-6 w-6 text-primary' />
              </div>
              <CardTitle className='text-lg'>List & Manage</CardTitle>
            </CardHeader>
            <CardContent>
              <p className='text-sm text-muted-foreground'>Professional listing and management for sale or rental with global reach</p>
            </CardContent>
          </Card>

          <Card className='text-center hover:shadow-lg transition-shadow'>
            <CardHeader className='pb-4'>
              <div className='mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4'>
                <Globe className='h-6 w-6 text-primary' />
              </div>
              <CardTitle className='text-lg'>Support</CardTitle>
            </CardHeader>
            <CardContent>
              <p className='text-sm text-muted-foreground'>Multilingual service and legal navigation for international investors</p>
            </CardContent>
          </Card>
        </div>

        <div className='grid gap-8 md:grid-cols-2'>
          <Card className='border-primary/20'>
            <CardHeader>
              <CardTitle className='flex items-center gap-2'>
                <Users className='h-5 w-5 text-primary' />
                Ideal for All Buyer Profiles
              </CardTitle>
            </CardHeader>
            <CardContent className='space-y-4'>
              <div className='grid gap-3'>
                <div className='flex items-center gap-3'>
                  <div className='w-2 h-2 bg-primary rounded-full'></div>
                  <span className='text-sm'>Retirees seeking affordable, peaceful living</span>
                </div>
                <div className='flex items-center gap-3'>
                  <div className='w-2 h-2 bg-primary rounded-full'></div>
                  <span className='text-sm'>Remote workers and digital nomads</span>
                </div>
                <div className='flex items-center gap-3'>
                  <div className='w-2 h-2 bg-primary rounded-full'></div>
                  <span className='text-sm'>Investors from Southeast Asia, Europe, the Middle East, Africa, and the Americas</span>
                </div>
                <div className='flex items-center gap-3'>
                  <div className='w-2 h-2 bg-primary rounded-full'></div>
                  <span className='text-sm'>Language and borders are no barrier</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className='border-primary/20'>
            <CardHeader>
              <CardTitle className='flex items-center gap-2'>
                <DollarSign className='h-5 w-5 text-primary' />
                Multiple Revenue Streams
              </CardTitle>
            </CardHeader>
            <CardContent className='space-y-4'>
              <div className='grid gap-3'>
                <div className='flex items-center gap-3'>
                  <div className='w-2 h-2 bg-primary rounded-full'></div>
                  <span className='text-sm'>Profits from property flipping</span>
                </div>
                <div className='flex items-center gap-3'>
                  <div className='w-2 h-2 bg-primary rounded-full'></div>
                  <span className='text-sm'>Monthly rental income management</span>
                </div>
                <div className='flex items-center gap-3'>
                  <div className='w-2 h-2 bg-primary rounded-full'></div>
                  <span className='text-sm'>Consulting and legal advisory fees</span>
                </div>
                <div className='flex items-center gap-3'>
                  <div className='w-2 h-2 bg-primary rounded-full'></div>
                  <span className='text-sm'>Future platform listing subscriptions</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className='mt-12 text-center'>
          <div className='bg-primary/5 rounded-lg p-8 max-w-4xl mx-auto'>
            <h3 className='text-2xl font-bold mb-4'>Our Competitive Advantage</h3>
            <div className='grid gap-4 md:grid-cols-3 text-sm'>
              <div className='flex items-center gap-2'>
                <Globe className='h-4 w-4 text-primary' />
                <span>Multilingual & multicultural team</span>
              </div>
              <div className='flex items-center gap-2'>
                <Building className='h-6 w-6 text-primary' />
                <span>Extensive knowledge of Japan's property and legal systems</span>
              </div>
              <div className='flex items-center gap-2'>
                <Users className='h-4 w-4 text-primary' />
                <span>Strong renovation and partner network</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
