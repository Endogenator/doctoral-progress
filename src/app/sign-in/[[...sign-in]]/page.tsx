'use client'
import { SignIn } from '@clerk/nextjs'

export default function SignInPage() {
  return (
    <div className="p-8 max-w-md mx-auto">
      <SignIn path="/sign-in" routing="path" signUpUrl="/sign-up" />
      <div className="mt-4 rounded-lg border border-amber-200 bg-amber-50 p-3 text-xs text-amber-900">
        <p className="font-semibold">Terms of access</p>
        <p className="mt-1">
          This site is private and shared for research and mentoring. By signing in, you agree not to copy, share, or distribute
          content without written permission.
        </p>
      </div>
    </div>
  )
}
