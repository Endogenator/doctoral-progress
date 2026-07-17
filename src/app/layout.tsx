import { type Metadata } from 'next'
import { ClerkProvider } from '@clerk/nextjs'
import { Geist_Mono, Lora, Source_Sans_3 } from 'next/font/google'
import 'katex/dist/katex.min.css'
import './globals.css'

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

const lora = Lora({
  variable: '--font-lora',
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
})

const sourceSans = Source_Sans_3({
  variable: '--font-source-sans',
  subsets: ['latin'],
  weight: ['400', '500'],
})

export const metadata: Metadata = {
  title: 'Doctoral Progress',
  description: 'Private workspace for ENDT, XIK-TS, and Belief Space',
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${geistMono.variable} ${lora.variable} ${sourceSans.variable} antialiased`}
        >
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}
