import { Mail, Phone, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function ContactSection() {
  return (
    <section id='contact' className='container py-12 md:py-16'>
      <div className='flex flex-col items-center justify-center space-y-4 text-center'>
        <div className='space-y-2'>
          <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>Contact Us</h2>
          <p className='mx-auto max-w-[700px] text-muted-foreground md:text-xl'>Interested in a property? Get in touch with our team.</p>
        </div>
      </div>

      <div className='mx-auto max-w-5xl mt-8 grid gap-8 md:grid-cols-2'>
        <Card>
          <CardHeader>
            <CardTitle>Send us a message</CardTitle>
            <CardDescription>Fill out the form below and we'll get back to you as soon as possible.</CardDescription>
          </CardHeader>
          <CardContent>
            <form className='space-y-4'>
              <div className='grid gap-4 sm:grid-cols-2'>
                <div className='space-y-2'>
                  <label
                    htmlFor='name'
                    className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>
                    Name
                  </label>
                  <Input id='name' placeholder='Enter your name' />
                </div>
                <div className='space-y-2'>
                  <label
                    htmlFor='email'
                    className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>
                    Email
                  </label>
                  <Input id='email' type='email' placeholder='Enter your email' />
                </div>
              </div>
              <div className='space-y-2'>
                <label
                  htmlFor='subject'
                  className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>
                  Subject
                </label>
                <Input id='subject' placeholder='What is this regarding?' />
              </div>
              <div className='space-y-2'>
                <label
                  htmlFor='message'
                  className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>
                  Message
                </label>
                <Textarea id='message' placeholder='Enter your message' className='min-h-[120px]' />
              </div>
              <Button type='submit' className='w-full'>
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>

        <div className='flex flex-col gap-6'>
          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
              <CardDescription>Reach out to us directly through these channels.</CardDescription>
            </CardHeader>
            <CardContent className='space-y-4'>
              <div className='flex items-center'>
                <Phone className='mr-2 h-5 w-5 text-primary' />
                <div>
                  <p className='font-medium'>Phone / WhatsApp</p>
                  <p className='text-sm text-muted-foreground'>+818033666526</p>
                </div>
              </div>
              <div className='flex items-center'>
                <Mail className='mr-2 h-5 w-5 text-primary' />
                <div>
                  <p className='font-medium'>Email</p>
                  <p className='text-sm text-muted-foreground'>Mohamedriza16@gmail.com</p>
                </div>
              </div>
              <div className='flex items-center'>
                <MessageSquare className='mr-2 h-5 w-5 text-primary' />
                <div>
                  <p className='font-medium'>Live Chat</p>
                  <p className='text-sm text-muted-foreground'>Available Monday-Friday, 9am-5pm</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Office Hours</CardTitle>
              <CardDescription>When you can visit us or expect a response.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className='space-y-2'>
                <div className='flex justify-between'>
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className='flex justify-between'>
                  <span>Saturday</span>
                  <span>10:00 AM - 4:00 PM</span>
                </div>
                <div className='flex justify-between'>
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
