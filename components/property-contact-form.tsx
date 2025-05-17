'use client';

import type React from 'react';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone } from 'lucide-react';

interface PropertyContactFormProps {
  propertyId: number;
  propertyTitle: string;
}

export default function PropertyContactForm({ propertyId, propertyTitle }: PropertyContactFormProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState(`I'm interested in this property: ${propertyTitle}`);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1000);
  };

  if (isSubmitted) {
    return (
      <div className='text-center py-4'>
        <div className='inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4'>
          <Mail className='h-6 w-6' />
        </div>
        <h3 className='text-lg font-semibold mb-2'>Thank you!</h3>
        <p className='text-muted-foreground'>Your inquiry has been sent. Our agent will contact you shortly.</p>
      </div>
    );
  }

  return (
    <div>
      <h3 className='text-lg font-semibold mb-4'>Interested in this property?</h3>
      <form onSubmit={handleSubmit} className='space-y-4'>
        <div className='space-y-2'>
          <label htmlFor='name' className='text-sm font-medium'>
            Name
          </label>
          <Input id='name' value={name} onChange={e => setName(e.target.value)} placeholder='Your name' required />
        </div>
        <div className='space-y-2'>
          <label htmlFor='email' className='text-sm font-medium'>
            Email
          </label>
          <Input id='email' type='email' value={email} onChange={e => setEmail(e.target.value)} placeholder='Your email' required />
        </div>
        <div className='space-y-2'>
          <label htmlFor='phone' className='text-sm font-medium'>
            Phone
          </label>
          <Input id='phone' type='tel' value={phone} onChange={e => setPhone(e.target.value)} placeholder='Your phone number' />
        </div>
        <div className='space-y-2'>
          <label htmlFor='message' className='text-sm font-medium'>
            Message
          </label>
          <Textarea id='message' value={message} onChange={e => setMessage(e.target.value)} placeholder='Your message' rows={4} required />
        </div>
        <Button type='submit' className='w-full' disabled={isSubmitting}>
          {isSubmitting ? 'Sending...' : 'Send Inquiry'}
        </Button>
      </form>

      <div className='mt-6 pt-6 border-t'>
        <p className='text-sm font-medium mb-4'>Or contact us directly:</p>
        <div className='space-y-3'>
          <div className='flex items-center'>
            <Phone className='h-4 w-4 mr-2 text-primary' />
            <span>+818033666526</span>
          </div>
          <div className='flex items-center'>
            <Mail className='h-4 w-4 mr-2 text-primary' />
            <span>Mohamedriza16@gmail.com</span>
          </div>
        </div>
      </div>
    </div>
  );
}
