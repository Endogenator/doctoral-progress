'use client'
import { SignUp } from '@clerk/nextjs'

export default function SignUpPage() {
  return (
    <div className="p-8 max-w-md mx-auto">
      <SignUp path="/sign-up" routing="path" signInUrl="/sign-in" />
      <div className="mt-4 rounded-lg border border-amber-200 bg-amber-50 p-3 text-xs text-amber-900">
        <p className="font-semibold">Terms of access</p>
        <p className="mt-1">
          This site is private and shared for research and mentoring. By signing up, you agree not to copy, share, or distribute
          content without written permission.
        </p>
      </div>
    </div>
  )
}
