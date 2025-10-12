export const dynamic = 'force-dynamic';

import { currentUser } from '@clerk/nextjs/server'
import Link from 'next/link'
import Sidebar from './_components/Sidebar'

export default async function ProtectedLayout({ children }: { children: React.ReactNode }) {
  const user = await currentUser()
  if (!user) {
    return (
      <main className="p-8 max-w-md mx-auto">
        <h1 className="text-2xl font-semibold mb-4">Sign in required</h1>
        <p className="mb-4">This area is private. Please sign in.</p>
        <Link className="underline" href="/sign-in">Go to sign in</Link>
      </main>
    )
  }

  return (
    <div className="min-h-[calc(100vh-4rem)] grid grid-cols-1 md:grid-cols-[240px_minmax(0,1fr)] bg-neutral-50 text-neutral-900">
      <Sidebar />
      <main className="p-6 bg-white">{children}</main>
    </div>
  )
}
