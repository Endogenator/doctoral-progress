export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="mt-12 border-t border-stone-300 pt-4 text-xs text-stone-600">
      <p>
        © {year} Brian Davis. All rights reserved.
      </p>
      <p className="mt-1 text-stone-500">
        Private work in progress for research and mentoring. Do not copy, share, or distribute without written permission.
      </p>
    </footer>
  )
}
