import { clerkMiddleware } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

const GENERATIVE_HOSTS = new Set(['generative.endogenator.com']);
const ROOT_HOSTS = new Set(['endogenator.com', 'www.endogenator.com']);

export default clerkMiddleware((auth, req) => {
  const hostname = (req.headers.get('host') || '')
    .split(':')[0]
    .toLowerCase();

  const url = req.nextUrl.clone();

  let prefix: string | null = null;
  if (GENERATIVE_HOSTS.has(hostname)) {
    prefix = '/generative-site';
  } else if (ROOT_HOSTS.has(hostname)) {
    prefix = '/root-site';
  }

  if (prefix && !url.pathname.startsWith(prefix)) {
    url.pathname = `${prefix}${url.pathname === '/' ? '' : url.pathname}`;
    return NextResponse.rewrite(url);
  }

  // doctorate.endogenator.com, localhost, Vercel preview URLs: untouched.
  // Falls through to existing routing and the (protected) layout's own
  // Clerk auth check, exactly as it worked before this change.
  return NextResponse.next();
});

export const config = {
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
  ],
};