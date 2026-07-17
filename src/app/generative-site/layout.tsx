import type { ReactNode } from "react";

// TODO: shared visual identity with root-site, distinct from doctorate's
// existing stone/emerald/amber palette. No Clerk here, public by design.

export default function GenerativeSiteLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen">
      {/*
        TODO: nav covering:
        - Generative Coordination (landing thesis)
        - Topology (PS / BS / TS / AR)
        - XIK-TS
        - ETCS
        - Belief Space
        - Correctors & Recruiters
        - Integration
        - Applications (Agency in the age of AI, future additions)
      */}
      <main>{children}</main>
    </div>
  );
}
