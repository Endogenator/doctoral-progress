import Link from 'next/link'

export default function Dashboard() {
  return (
    <div className="max-w-3xl space-y-4">
      <h1 className="text-2xl font-semibold">Doctoral Progress</h1>
      <p className="text-neutral-700">
        Welcome back. Choose a framework to continue drafting and collecting notes.
      </p>
      <ul className="list-disc pl-6 space-y-1">
        <li><Link className="underline" href="/frameworks/endt">ENDT</Link></li>
        <li><Link className="underline" href="/frameworks/xik-td">XIK-TD</Link></li>
        <li><Link className="underline" href="/frameworks/integration">Integration</Link></li>
        <li><Link className="underline" href="/frameworks/belief-space">Belief Space</Link></li>
      </ul>
    </div>
  )
}
