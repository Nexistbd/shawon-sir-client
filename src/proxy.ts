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

    // if not authenticated -> redirect to referer (or current page) with login_redirect cookie
    if (!isAuth) {
      const referer = req.headers.get("referer");
      const origin = req.nextUrl.origin;
      
      let redirectUrl: URL = req.nextUrl.clone();

      // If user came from another page on the same site, redirect back there
      if (referer && referer.startsWith(origin)) {
        redirectUrl = new URL(referer);
      }

      // Avoid redirect loops if we are already at the target
      if (req.url === redirectUrl.toString()) {
         const response = NextResponse.next();
         response.cookies.set("login_redirect", "true", { httpOnly: false }); 
         return response;
      }
      
      const response = NextResponse.redirect(redirectUrl);
      response.cookies.set("login_redirect", "true", { httpOnly: false });
      return response;
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
