"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { signIn, useSession } from "next-auth/react";

export default function CredentialsSignInForm() {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { data: session, status } = useSession(); 

  useEffect(() => {
    if (status === "authenticated") {
      router.push("/");
    }
  }, [session, status, router]);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData(event.currentTarget as HTMLFormElement);
    
    const result = await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirect: false, // Prevent auto-redirect
    });

    setLoading(false);

    if (!result || result.error) {
      setError("Invalid email or password");
    } else {
      router.push("/"); 
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      {error && <p className="text-red-500 text-center">{error}</p>}
      <input name="email" type="email" placeholder="Email" required className="p-2 border rounded" />
      <input name="password" type="password" placeholder="Password" required className="p-2 border rounded" />
      <button type="submit" disabled={loading} className="p-2 bg-blue-500 text-white rounded">
        {loading ? "Signing In..." : "Sign In"}
      </button>
    </form>
  );
}
