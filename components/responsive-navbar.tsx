'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function ResponsiveNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navLinks = [
    { href: '#properties', label: 'Properties' },
    { href: '#business-model', label: 'Investment Strategy' },
    { href: '#neighborhoods', label: 'Neighborhoods' },
    { href: '#testimonials', label: 'Testimonials' },
    { href: '#team', label: 'Our Team' },
    { href: '#about', label: 'Vision' },
  ];

  return (
    <header className='sticky top-0 z-40 w-full border-b bg-background'>
      <div className='container flex h-16 items-center justify-between'>
        <Link href='/' className='flex items-center space-x-2' onClick={closeMenu}>
          <span className='text-xl font-bold'>TsuboWise</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className='hidden md:flex gap-6'>
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className='text-sm font-medium transition-colors hover:text-primary'
              scroll={false}
              onClick={closeMenu}>
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Contact Button */}
        <div className='hidden md:flex items-center gap-4'>
          <Link
            href='#contact'
            className='inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90'
            scroll={false}
            onClick={closeMenu}>
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <Button variant='ghost' size='icon' className='md:hidden' onClick={toggleMenu} aria-label='Toggle menu'>
          {isMenuOpen ? <X className='h-6 w-6' /> : <Menu className='h-6 w-6' />}
        </Button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className='md:hidden border-t bg-background'>
          <nav className='container py-4 space-y-2'>
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className='block px-4 py-2 text-sm font-medium transition-colors hover:text-primary hover:bg-muted rounded-md'
                scroll={false}
                onClick={closeMenu}>
                {link.label}
              </Link>
            ))}
            <div className='px-4 pt-2'>
              <Link
                href='#contact'
                className='inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90 w-full'
                scroll={false}
                onClick={closeMenu}>
                Contact Us
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
