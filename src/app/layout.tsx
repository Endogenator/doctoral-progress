import { type Metadata } from 'next'
import { ClerkProvider } from '@clerk/nextjs'
import { Geist, Geist_Mono } from 'next/font/google'
import 'katex/dist/katex.min.css'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Doctoral Progress',
  description: 'Private workspace for ENDT, XIK-TD, and Belief Space',
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ClerkProvider>
      <html lang="en">
        {/* Soft colored background, high-contrast text, no top banner */}
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-50 text-slate-900`}
        >
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}
