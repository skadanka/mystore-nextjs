"use client";

import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import CredentialsSignUpForm from './register-form'; // adjust the import path if needed
import Link from 'next/link';
import Image from 'next/image';
import { APP_NAME } from '@/lib/constants';

export default function RegisterPage() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <Card className="w-full max-w-2xl min-w-xl sm:max-w-md p-6 shadow-lg border rounded-lg">
      <CardHeader className="flex flex-col items-center gap-4">
            <Link href="/" className="flex justify-center">
              <Image
                src="/assets/store-shopper-svgrepo-com.svg"
                width={80}
                height={80}
                alt={`${APP_NAME} logo`}
                priority
              />
            </Link>
            <CardTitle className="text-center text-2xl font-semibold">Create an account</CardTitle>
            <CardDescription className=" text-gray-600">
                Fill the required fields
            </CardDescription>
        </CardHeader>
        <CardContent>
          <CredentialsSignUpForm />
        </CardContent>
      </Card>
    </div>
  );
}
