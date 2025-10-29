import { currentUser } from '@clerk/nextjs/server'
import Sidebar from './_components/Sidebar'
// existing imports...
import Footer from './_components/Footer'

export default async function ProtectedLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const user = await currentUser()

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center p-8">
        <div className="max-w-md text-center space-y-4">
          <h1 className="text-2xl font-semibold">Sign-in required</h1>
          <p className="text-slate-700">
            You need to be signed in to view this content.
          </p>
          <a
            href="/sign-in"
            className="inline-block rounded-md bg-indigo-600 px-4 py-2 text-white"
          >
            Go to sign in
          </a>
        </div>
      </div>
    )
  }

  return (
    // Light gradient adds color without hurting readability
    <div className="md:flex md:min-h-screen bg-gradient-to-br from-slate-50 via-indigo-50 to-slate-100">
      <div className="md:w-64 md:flex-shrink-0">
        <Sidebar />
      </div>

      <main className="flex-1 p-6">
        {/* Content column */}
        <div className="mx-auto max-w-5xl">
          {children}
          {/* Footer appears on every protected page, matches the same width */}
          <Footer />
        </div>
      </main>
    </div>
  )
}
