import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(req) {
    // This function is only called if the user is authenticated.
    // We check if the user has the 'admin' role.
    if (req.nextauth.token?.role !== "admin") {
      return NextResponse.rewrite(new URL("/access-denied", req.url));
    }
  },
  {
    callbacks: {
      // This callback is called to decide if the user is authorized.
      // If it returns false, the user is redirected to the login page.
      authorized: ({ token }) => !!token,
    },
  }
);

export const config = {
  // This regex matches all paths under /admin/ EXCEPT /admin/login
  matcher: ["/admin/((?!login).*)"],
};
