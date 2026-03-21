import { type Metadata } from 'next'
import { ClerkProvider } from '@clerk/nextjs'
import { Geist_Mono } from 'next/font/google'
import 'katex/dist/katex.min.css'
import './globals.css'

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
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
          className={`${geistMono.variable} antialiased`}
        >
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}
