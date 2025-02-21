"use server";

import { signInFormSchema } from "../validators";
import prisma from "@/db/prisma";
import { compare } from "bcryptjs";
import { cookies } from "next/headers";

// ✅ Manually authenticate the user (no `signIn()` call)
export async function signInWithCredentials(prevState: unknown, formData: FormData) {
  try {
    const parsedUser = signInFormSchema.parse({
      email: formData.get("email"),
      password: formData.get("password"),
    });

    // 🔍 Fetch user from DB
    const user = await prisma.user.findUnique({
      where: { email: parsedUser.email },
    });

    if (!user || !user.password) {
      return { success: false, message: "Invalid email or password" };
    }

    // 🔒 Verify password
    const isPasswordValid = await compare(parsedUser.password, user.password);
    if (!isPasswordValid) {
      return { success: false, message: "Invalid email or password" };
    }

    // ✅ Create session manually (Set Cookie)
    (await cookies()).set("session", JSON.stringify({ id: user.id, email: user.email, role: user.role }), {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24 * 30, // 30 days
      path: "/",
    });

    return { success: true, message: "Signed in successfully" };
  } catch (error) {
    console.error("Sign-in error:", error);
    return { success: false, message: "An error occurred during sign-in" };
  }
}

// ✅ Server-side Sign Out
export async function signOutUser() {
  (await cookies()).delete("session");
  return { success: true, message: "Signed out successfully" };
}
