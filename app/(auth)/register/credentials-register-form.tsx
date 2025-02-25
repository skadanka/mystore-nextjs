"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { registerUser } from "@/app/actions/user.action"; // adjust the import path accordingly

export default function CredentialsRegisterForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      // Create a FormData instance and pass it to the server action
      const formData = new FormData();
      formData.append("email", email);
      formData.append("password", password);
      
      await registerUser(formData);
      router.push("/sign-in");
    } catch (err: unknown) {
      console.error("Registration error:", err);
      if(err instanceof Error) {
        setError(err.message);
      }else{
        setError("Registration failed");
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
      {error && <p className="text-destructive">{error}</p>}
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border p-2"
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border p-2"
        required
      />
      <button type="submit" className="bg-green-500 text-white px-4 py-2">
        Register
      </button>
    </form>
  );
}
