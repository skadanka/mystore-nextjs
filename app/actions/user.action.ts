"use server";

import { signInFormSchema } from "../../lib/validators";
import { prisma } from "@/lib/prisma";
import { compare } from "bcryptjs";
import { cookies } from "next/headers";
import { signIn, signOut } from "next-auth/react";
import { hash } from "bcrypt-ts-edge";

// ✅ Authenticate the user using NextAuth's `signIn()`
export async function signInWithCredentials(prevState: unknown, formData: FormData) {
  try {
    // ✅ Parse form data using Zod schema
    const parsedUser = signInFormSchema.parse({
      email: formData.get("email"),
      password: formData.get("password"),
    });

    // 🔍 Fetch user from database
    const user = await prisma.user.findUnique({
      where: { email: parsedUser.email },
      select: { id: true, email: true, password: true, role: true },
    });

    if (!user || !user.password) {
      return { success: false, message: "Invalid email or password" };
    }

    // 🔒 Verify password
    const isPasswordValid = await compare(parsedUser.password, user.password);
    if (!isPasswordValid) {
      return { success: false, message: "Invalid email or password" };
    }

    const authResponse = await signIn("credentials", {
      email: parsedUser.email,
      password: parsedUser.password,
      redirect: false, // Avoid automatic redirects
    });

    if (authResponse?.error) {
      return { success: false, message: authResponse.error };
    }

    return { success: true, message: "Signed in successfully" };
  } catch (error) {
    console.error("Sign-in error:", error);
    return { success: false, message: "An error occurred during sign-in" };
  }
}

// ✅ Sign Out the User via NextAuth
export async function signOutUser() {
  await signOut({ redirect: false });

  // Remove session cookie manually (optional)
  (await cookies()).delete("next-auth.session-token");

  return { success: true, message: "Signed out successfully" };
}


export async function registerUser(formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  if (!email || !password) {
    throw new Error("Missing email or password");
  }

  // Check if the user already exists
  const existingUser = await prisma.user.findUnique({ where: { email } });
  if (existingUser) {
    throw new Error("User already exists");
  }

  // Hash the password and create the user
  const hashedPassword = await hash(password, 12);
  const newUser = await prisma.user.create({
    data: {
      email,
      password: hashedPassword,
      role: "user", // Set default role as "user",
      address: ""
    },
  });

  return newUser;
}