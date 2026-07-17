import type { ReactNode } from "react";

// TODO: replace with the shared visual identity for root + generative
// once that design decision is made. This layout intentionally does NOT
// import anything from the doctorate/(protected) tree, and has no Clerk
// dependency, since root and generative are public.

export default function RootSiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen">
      {/* TODO: nav specific to endogenator.com root */}
      <main>{children}</main>
      {/* TODO: footer, likely shared with generative-site */}
    </div>
  );
}
