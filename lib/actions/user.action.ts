"use server";

import { signInFormSchema } from "../validators";
import { signIn, signOut } from "@/auth/auth";

// Server-side action for signing in users
export async function signInWithCredentials(prevState: unknown, formData: FormData) {
  try {
    const user = signInFormSchema.parse({
      email: formData.get("email"),
      password: formData.get("password"),
    });

    const result = await signIn("credentials", {
      email: user.email,
      password: user.password,
      redirect: false, // Prevent automatic redirection
    });

    if (result?.error) {
      return { success: false, message: "Invalid email or password" };
    }

    return { success: true, message: "Signed in successfully" };
  } catch (error) {
    console.error("Sign-in error:", error);
    return { success: false, message: "An error occurred during sign-in" };
  }
}

export async function signOutUser(){
    await signOut();
}