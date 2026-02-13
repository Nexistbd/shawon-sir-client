import config from "@/config";
import DecodeJwt from "@/utils/DecodeJwt";

import axios from "axios";
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
interface CustomJwtPayload {
  id: string;
  phone: string;
  role: string;
  name: string;

  accessToken: string;
  refreshToken: string;

  iat?: number;
  exp?: number;
  iss?: string;
  sub?: string;
}
declare module "next-auth" {
  interface User {
    id?: string;
    phone?: string;
    role?: string;
    name?: string | null;
    accessToken: string;
    refreshToken: string;
  }
}

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Login",
      credentials: {
        phone: { label: "phone", type: "text", placeholder: "Enter Phone" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials) {
        const payload = {
          phone: credentials?.phone,
          password: credentials?.password,
        };
        try {
          const res = await axios.post(`${config.api_url}/auth/login`, payload);
          const tokens = res?.data?.data;
          if (tokens?.accessToken) {
            // Decode the JWT token to extract user information
            const decodedToken = DecodeJwt(
              tokens.accessToken,
            ) as CustomJwtPayload;

            return {
              id: decodedToken?.id,
              phone: decodedToken?.phone,
              role: decodedToken?.role,
              name: decodedToken?.name,

              accessToken: tokens.accessToken,
              refreshToken: tokens.refreshToken,
            };
          } else {
            return null;
          }
        } catch (error) {
          console.error("Error during authorization:", error);
          throw new Error("Authorization failed");
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
  },

  callbacks: {
    async jwt({ token, user, session, trigger }) {
      // On initial login
      if (user) {
        token.accessToken = user.accessToken;
        token.refreshToken = user.refreshToken;
        token.phone = user.phone;
        token.role = user.role;
        token.name = user.name ?? undefined;
      }

      return token;
    },

    async session({ session, token }) {
      session.user = {
        id: token.sub ?? undefined,
        phone: token.phone ?? undefined,
        role: token.role ?? undefined,
        name: token.name ?? undefined,
      };
      session.accessToken = token.accessToken;
      session.refreshToken = token.refreshToken;
      return session;
    },
  },
  secret: config.next_auth_secret,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
