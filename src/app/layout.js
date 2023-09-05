import './globals.css'
import 'bootstrap/dist/css/bootstrap.css';

import { Inter } from 'next/font/google'
import { Suspense } from 'react'
import { FacebookPixelEvents } from '../components/pixel-events'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Thrift Ops',
  description: "Take control of your thrift business with Thrift Ops' hassle-free and scalable solutions for optimised operations",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}
      <Suspense fallback={null}>
          <FacebookPixelEvents />
        </Suspense>
      </body>
    </html>
  )
}
