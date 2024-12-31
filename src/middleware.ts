import { NextResponse, type NextRequest } from 'next/server'

// Middleware function
export async function middleware(request: NextRequest) {
  // Ambil cookie dari request
  const token = request.cookies.get('token')?.value
  const url = request.nextUrl.clone()

  // Jangan lakukan apa pun jika pengguna berada di halaman login
  if (url.pathname === '/login') {
    return NextResponse.next()
  }

  // Jika tidak ada cookie (token), redirect ke halaman login
  if (!token) {
    url.pathname = '/login'
    return NextResponse.redirect(url)
  }

  // Jika cookie ditemukan, redirect ke halaman dashboard
  if (url.pathname === '/') {
    url.pathname = '/dashboard'
    return NextResponse.redirect(url)
  }

  return NextResponse.next()
}

// Apply middleware ke semua routes
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * Feel free to modify this pattern to include more paths.
     */
    '/((?!api|_next/static|_next/image|assets|favicon.ico).*)',
    '/dashboard',
  ],
}