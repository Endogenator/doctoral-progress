import Link from 'next/link'

export default function Dashboard() {
  return (
    <main className="p-8 max-w-3xl mx-auto space-y-4">
      <h1 className="text-2xl font-semibold">Doctoral Progress</h1>
      <ul className="list-disc pl-6 space-y-1">
        <li><Link className="underline" href="/frameworks/endt">ENDT</Link></li>
        <li><Link className="underline" href="/frameworks/xik-td">XIK-TD</Link></li>
        <li><Link className="underline" href="/frameworks/integration">Integration</Link></li>
        <li><Link className="underline" href="/frameworks/belief-space">Belief Space</Link></li>
      </ul>
    </main>
  )
}
