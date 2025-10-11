import { currentUser } from '@clerk/nextjs/server'
import Link from 'next/link'

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
  return <>{children}</>
}
