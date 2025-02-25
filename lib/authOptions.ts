import { NextAuthOptions } from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prisma } from "@/lib/prisma";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from 'bcrypt-ts-edge';

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  pages: {
    signIn: "/sign-in"
  },
  providers:[
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) return null;

        const user = await prisma.user.findUnique({
          where: { email: credentials.email },
        });

        if (!user || !user.password) return null;

        const isValid = await compare(credentials.password, user.password);
        if (!isValid) return null;

        return user;
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
        if (user) {
          token.id = user.id;
          // token.role = user.role; // Ensure your authorize returns role as "admin" | "user"
        }
        return token;
      },
      // In the session callback, read properties from token instead of user
      async session({ session, token }) {
        if (session.user) {
          session.user.id = token.id as string;
          // session.user.role = token.role as "admin" | "user";
        }
        return session;
      },
    },
  debug: process.env.NODE_ENV === "development"
};

