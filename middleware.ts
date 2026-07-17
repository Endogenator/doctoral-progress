import { NextRequest, NextResponse } from "next/server";

/**
 * Hostname-based routing for the endogenator.com property.
 *
 * doctorate.endogenator.com is intentionally NOT listed below. Any
 * hostname not matched here (doctorate, localhost, Vercel preview URLs)
 * falls through untouched to the existing (protected) app tree exactly
 * as it works today. Clerk auth on doctorate is unaffected by this file.
 *
 * generative.endogenator.com and endogenator.com (+ www) get rewritten
 * internally to their own folders so they can be built out independently
 * without touching the doctorate route tree at all.
 */

const GENERATIVE_HOSTS = new Set(["generative.endogenator.com"]);
const ROOT_HOSTS = new Set(["endogenator.com", "www.endogenator.com"]);

export function middleware(request: NextRequest) {
  const hostname = (request.headers.get("host") || "")
    .split(":")[0] // strip port, matters for local dev
    .toLowerCase();

  const url = request.nextUrl.clone();

  let prefix: string | null = null;

  if (GENERATIVE_HOSTS.has(hostname)) {
    prefix = "/generative-site";
  } else if (ROOT_HOSTS.has(hostname)) {
    prefix = "/root-site";
  }

  // No match (doctorate, localhost, preview URLs) -> pass through untouched.
  if (!prefix) {
    return NextResponse.next();
  }

  // Avoid double-prefixing if this ever runs twice on the same request.
  if (url.pathname.startsWith(prefix)) {
    return NextResponse.next();
  }

  url.pathname = `${prefix}${url.pathname === "/" ? "" : url.pathname}`;
  return NextResponse.rewrite(url);
}

export const config = {
  matcher: [
    /*
     * Run on everything except:
     * - /api routes
     * - Next internals (_next/static, _next/image)
     * - common static files at the root (favicon, robots.txt, etc.)
     */
    "/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)",
  ],
};
