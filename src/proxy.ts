import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(req) {
    const token = req.nextauth.token;
    const isAuth = !!token;
    const isLoginPage = req.nextUrl.pathname === "/login";

    // If user is not authenticated and trying to access protected route
    if (!isAuth && !isLoginPage) {
      const callbackUrl = encodeURIComponent(req.nextUrl.pathname);
      // Redirect to home page with callbackUrl that will open the login sheet
      return NextResponse.redirect(
        new URL(`/?login=true&callbackUrl=${callbackUrl}`, req.url),
      );
    }

    // If user is authenticated and trying to access login page, redirect to dashboard
    if (isAuth && isLoginPage) {
      return NextResponse.redirect(new URL("/dashboard", req.url));
    }

    return NextResponse.next();
  },
  {
    pages: {
      signIn: "/login",
    },
  },
);

export const config = {
  // Protected routes that require authentication
  matcher: ["/dashboard/:path*", "/course/enrollment/:path*"],
};
