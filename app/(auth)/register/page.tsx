import { Metadata } from "next";
import CredentialsSignUpForm from "./credentials-register-form";

export const metadata: Metadata = {
  title: "Register",
};

export default function RegisterPage() {
  return ( 
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-full max-w-md p-6 shadow-lg border rounded-lg">
        <h1 className="text-2xl font-semibold text-center mb-4">Create an Account</h1>
        <CredentialsSignUpForm />
      </div>
    </div>
  );
}
