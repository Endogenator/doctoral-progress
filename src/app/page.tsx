import { auth } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'

export default async function HomePage() {
  const { userId } = await auth()
  if (userId) {
    // Already signed in — skip the old landing and go straight to the dashboard
    redirect('/dashboard')
  }

  // Public landing (shown only to signed-out visitors)
  return (
    <main className="max-w-4xl mx-auto p-8 space-y-6">
      <h1 className="text-3xl font-semibold">Doctoral Progress</h1>
      <p className="text-slate-800">
        Private workspace for ENDT, XIK-TD, Belief Space, and Integration.
      </p>
      <div className="flex gap-3">
        <a
          href="/sign-in"
          className="rounded-md bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700"
        >
          Sign in
        </a>
        <a
          href="/sign-up"
          className="rounded-md border border-slate-300 px-4 py-2 hover:bg-slate-100"
        >
          Create account
        </a>
      </div>
    </main>
  )
}
