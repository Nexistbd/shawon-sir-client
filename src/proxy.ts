import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(req) {
    const token = req.nextauth.token;
    const isAuth = !!token;
    const { pathname } = req.nextUrl;
    // If user is not authenticated and trying to access protected route
    // if (!isAuth && !isLoginPage) {
    //   const callbackUrl = encodeURIComponent(req.nextUrl.pathname);
    //   // Redirect to home page with callbackUrl that will open the login sheet
    //   return NextResponse.redirect(
    //     new URL(`/?login=true&callbackUrl=${callbackUrl}`, req.url),
    //   );
    // }
    if (pathname.startsWith("/api/auth")) return NextResponse.next();

    // if not authenticated -> redirect to current page with login modal flag
    if (!isAuth) {
      if (req.nextUrl.searchParams.get("login") === "true") {
        return NextResponse.next();
      }
      const url = req.nextUrl.clone();
      url.searchParams.set("login", "true");
      return NextResponse.redirect(url);
    }

    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: () => true,
    },
  },
);

export const config = {
  // Protected routes that require authentication
  matcher: ["/dashboard/:path*", "/courses/enroll/:path*"],
};
