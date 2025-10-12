import './globals.css'
import {
  ClerkProvider,
  SignedIn, SignedOut, SignInButton, SignUpButton, UserButton,
} from '@clerk/nextjs'

export const metadata = {
  title: 'Doctoral Progress',
  description: 'Private research hub',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="en" className="bg-neutral-50">
        <head>
          {/* Force light color scheme so OS dark mode or extensions don’t invert */}
          <meta name="color-scheme" content="light" />
        </head>
        <body className="min-h-screen bg-neutral-50 text-neutral-900">
          <header className="flex justify-end items-center p-4 gap-3 border-b bg-white">
            <SignedOut><SignInButton /><SignUpButton /></SignedOut>
            <SignedIn><UserButton /></SignedIn>
          </header>
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}
