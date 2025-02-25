import { Card, CardDescription, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { APP_NAME } from '@/lib/constants';
import CredentialsSignInForm from './credentials-signin-form';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/authOptions';

export const metadata: Metadata = {
  title: `Sign In - ${APP_NAME}`,
  description: `Sign in to your ${APP_NAME} account to manage your orders, wishlist, and more.`,
};

export default async function SignInPage({
  searchParams,
}: {
  searchParams: Promise<{ callbackUrl: string }>;
}) {
  const { callbackUrl } = await searchParams;

  try {
    const session = await getServerSession(authOptions);
    console.log(session)
    if (session?.user) {
      return (
        <html>
          <head>
            <meta httpEquiv="refresh" content={callbackUrl || '0;url=/'} />
          </head>
          <body className="grid place-items-center min-h-screen">
            <h1 className="text-lg font-semibold font-serif">
              🚀 Already Signed In, Redirecting... 🚀
            </h1>
          </body>
        </html>
      );
    }

    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-50 px-4">
        <Card className="w-full max-w-md p-6 shadow-lg border rounded-lg bg-white">
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
            <CardTitle className="text-center text-2xl font-semibold">Sign In</CardTitle>
            <CardDescription className="text-center text-gray-600">
              Sign in to access your account
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <CredentialsSignInForm />
            <div className="flex items-center justify-between text-sm">
              <Link href="/forgot-password" className="text-blue-600 hover:underline">
                Forgot Password?
              </Link>
            </div>
            <div className="border-t pt-4">
              <p className="text-center text-sm text-gray-600">
                Don&apos;t have an account?{' '}
                <Link href="/register" className="text-blue-600 hover:underline font-medium">
                  Register
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  } catch (error) {
    console.error('Sign-in page error:', error);
    return <p className="text-red-500 text-center">Something went wrong. Please try again.</p>;
  }
}
