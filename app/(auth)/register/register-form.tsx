"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { registerUser } from "@/app/actions/user.action"; 

export default function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Basic client-side validation
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    setError(null);
    setLoading(true);

    try {
      // Create a FormData instance and append extended fields
      const formData = new FormData();
      formData.append("name", name);
      formData.append("email", email);
      formData.append("phone", phone);
      formData.append("password", password);

      await registerUser(formData);
      router.push("/sign-in");
    } catch (err: unknown) {
      console.error("Registration error:", err);
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Registration failed");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 mx-auto">
      {error && <p className="text-destructive">{error}</p>}
      
      <div className="flex flex-col">
        <label htmlFor="name" className="mb-1 font-semibold">Name<span className="text-red-500">*</span></label>
        <input
          id="name"
          type="text"
          placeholder="Enter your full name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 rounded"
          required
        />
      </div>
      
      <div className="flex flex-col">
        <label htmlFor="email" className="mb-1 font-semibold">Email<span className="text-red-500">*</span></label>
        <input
          id="email"
          type="email"
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2 rounded"
          required
        />
      </div>
      
      <div className="flex flex-col">
        <label htmlFor="phone" className="mb-1 font-semibold">Phone</label>
        <input
          id="phone"
          type="tel"
          placeholder="Enter your phone number (optional)"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="border p-2 rounded"
        />
      </div>
      
      <div className="flex flex-col">
        <label htmlFor="password" className="mb-1 font-semibold">Password<span className="text-red-500">*</span></label>
        <input
          id="password"
          type="password"
          placeholder="Choose a strong password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2 rounded"
          required
        />
      </div>
      
      <div className="flex flex-col">
        <label htmlFor="confirmPassword" className="mb-1 font-semibold">Confirm Password<span className="text-red-500">*</span></label>
        <input
          id="confirmPassword"
          type="password"
          placeholder="Re-enter your password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="border p-2 rounded"
          required
        />
      </div>
      
      <button
        type="submit"
        disabled={loading}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        {loading ? "Registering..." : "Register"}
      </button>
    </form>
  );
}
