import { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id?: string;
      phone?: string;
      role?: string;
      name?: string;
    } & DefaultSession["user"];
    accessToken?: string;
    refreshToken?: string;
  }

  interface User {
    id?: string;
    phone?: string;
    role?: string;
    name?: string | null;
    accessToken: string;
    refreshToken: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    accessToken?: string;
    refreshToken?: string;
    phone?: string;
    role?: string;
    name?: string;
  }
}
