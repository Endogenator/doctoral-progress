import Link from 'next/link'

export default function Home() {
  return (
    <main className="p-8 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-2">Doctoral Progress (Private)</h1>
      <p className="mb-6">Sign in to access your protected research area.</p>
      <div className="space-x-4">
        <Link className="underline" href="/sign-in">Sign in</Link>
        <Link className="underline" href="/dashboard">Go to dashboard</Link>
      </div>
    </main>
  )
}
