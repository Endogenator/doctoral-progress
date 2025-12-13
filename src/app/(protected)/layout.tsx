import { currentUser } from '@clerk/nextjs/server'
import Sidebar from './_components/Sidebar'

export default async function ProtectedLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const user = await currentUser()

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-stone-100 p-8">
        <div className="max-w-md rounded-md border border-stone-300 bg-white p-6 text-center">
          <h1 className="text-2xl font-semibold text-stone-900">
            Sign-in required
          </h1>
          <p className="mt-2 text-stone-700">
            You need to be signed in to view this content.
          </p>
          <a
            href="/sign-in"
            className="mt-4 inline-block rounded-md bg-stone-800 px-4 py-2 text-white hover:bg-stone-900"
          >
            Go to sign in
          </a>
        </div>
      </div>
    )
  }

  return (
    <div className="md:flex md:min-h-screen bg-stone-100">
      <aside className="md:w-64 md:flex-shrink-0 border-r border-stone-300 bg-stone-200">
        <Sidebar />
      </aside>

      <main className="flex-1 p-6">
        <div className="mx-auto max-w-5xl space-y-8">
          {children}
        </div>
      </main>
    </div>
  )
}
