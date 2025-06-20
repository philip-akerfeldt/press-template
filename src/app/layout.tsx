import type { Metadata } from 'next'
import './globals.css'

import { DM_Serif_Display } from 'next/font/google'

import Footer from '@/sections/Footer'
import Header from '@/sections/Header'

const dm_serif = DM_Serif_Display({
  weight: '400',
  variable: '--font-dm-serif-display',
  subsets: ['latin'],
  display: 'swap'
})

export const metadata: Metadata = {
  title: {
    template: '%s | Press Kit',
    default: 'Product'
  },
  description: 'Generic description for the product press kit.',
  robots: {
    index: false,
    follow: false
  }
}

export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={dm_serif.variable}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
