import { currentUser } from '@clerk/nextjs'
import Link from 'next/link'

export default async function ProtectedLayout({ children }: { children: React.ReactNode }) {
  const user = await currentUser()
  if (!user) {
    return (
      <div className="p-8 max-w-md mx-auto">
        <h1 className="text-2xl font-semibold mb-4">Sign in required</h1>
        <Link className="underline" href="/sign-in">Go to sign in</Link>
      </div>
    )
  }
  return <>{children}</>
}
