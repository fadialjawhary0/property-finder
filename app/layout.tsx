import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Property Finder App',
  description: 'Find your dream property with ease',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
