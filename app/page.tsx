"use client"

import Link from "next/link"
import PropertyCard from "@/components/property-card"
import { properties } from "@/lib/data"
import Hero from "@/components/hero"
import ContactSection from "@/components/contact-section"
import NeighborhoodSection from "@/components/neighborhood-section"
import TestimonialSection from "@/components/testimonial-section"
import { useSmoothScroll } from "@/lib/hooks/use-smooth-scroll"

export default function Home() {
  useSmoothScroll()

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 w-full border-b bg-background">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold">PropertyFinder</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="#properties" className="text-sm font-medium transition-colors hover:text-primary">
              Properties
            </Link>
            <Link href="#neighborhoods" className="text-sm font-medium transition-colors hover:text-primary">
              Neighborhoods
            </Link>
            <Link href="#testimonials" className="text-sm font-medium transition-colors hover:text-primary">
              Testimonials
            </Link>
            <Link href="#about" className="text-sm font-medium transition-colors hover:text-primary">
              About
            </Link>
            <Link href="#contact" className="text-sm font-medium transition-colors hover:text-primary">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link
              href="#contact"
              className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <Hero />

        <section id="properties" className="container py-12 md:py-16">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Featured Properties</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Explore our selection of premium properties in the most desirable locations.
              </p>
            </div>
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {properties.slice(0, 6).map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="#all-properties"
              className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              View All Properties
            </Link>
          </div>
        </section>

        <NeighborhoodSection />

        <TestimonialSection />

        <section id="about" className="bg-muted py-12 md:py-16">
          <div className="container">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Us</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  We help you find the perfect property that matches your needs and budget.
                </p>
              </div>
              <div className="mx-auto max-w-[700px] mt-6 space-y-4 text-left">
                <p>
                  PropertyFinder is dedicated to connecting buyers and sellers in the real estate market. Our platform
                  offers a simple and intuitive way to browse available properties and get in touch with sellers.
                </p>
                <p>
                  With years of experience in the real estate industry, our team of professionals is committed to
                  providing exceptional service and guidance throughout your property journey. We understand that
                  finding the right property is a significant decision, and we're here to make the process as smooth as
                  possible.
                </p>
                <p>
                  Whether you're looking to buy, sell, or rent, PropertyFinder offers a comprehensive selection of
                  properties across various locations, ensuring you find the perfect match for your requirements.
                </p>
              </div>
            </div>
          </div>
        </section>

        <ContactSection />
      </main>
      <footer className="border-t bg-background">
        <div className="container flex flex-col gap-4 py-10 md:flex-row md:items-center md:justify-between md:py-6">
          <div className="flex flex-col gap-4 md:gap-2">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-lg font-bold">PropertyFinder</span>
            </Link>
            <p className="text-sm text-muted-foreground">Finding your dream property made simple.</p>
          </div>
          <div className="flex gap-4 text-sm text-muted-foreground">
            <Link href="#" className="hover:underline">
              Terms
            </Link>
            <Link href="#" className="hover:underline">
              Privacy
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
