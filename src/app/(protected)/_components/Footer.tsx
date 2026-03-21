export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      className="mt-12 pt-4 text-xs"
      style={{
        borderTop: '1px solid #d6c8b4',
        color: '#a09080',
      }}
    >
      <p style={{ color: '#7a6a58' }}>
        &copy; {year} Brian Davis. All rights reserved.
      </p>
      <p className="mt-1" style={{ color: '#a09080' }}>
        Private work in progress for research and mentoring. Do not copy, share, or distribute without written permission.
      </p>
    </footer>
  )
}
