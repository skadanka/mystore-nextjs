import { Card, CardDescription, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { APP_NAME } from '@/lib/constants';
import CredentialsSignInForm from './credentials-signin-form';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/auth/auth';

export const metadata: Metadata = {
    title: 'Sign In',
};

// ✅ Catch potential errors when fetching session
export default async function SignInPage() {
    try {
        const session = await getServerSession(authOptions);

        if (session?.user) {
            return (
                <html>
                    <head>
                        <meta httpEquiv="refresh" content="0;url=/" />
                    </head>
                    <body>Redirecting...</body>
                </html>
            );
        }

        return (
            <div className='flex justify-center items-center min-h-screen'>
                <Card className='w-full max-w-md p-6 shadow-lg border rounded-lg'>
                    <CardHeader className='flex flex-col items-center gap-4'>
                        <Link href='/' className='flex justify-center'>
                            <Image
                                src='/assets/store-shopper-svgrepo-com.svg'
                                width={80}
                                height={80}
                                alt={`${APP_NAME} logo`}
                                priority
                            />
                        </Link>
                        <CardTitle className='text-center text-2xl font-semibold'>Sign In</CardTitle>
                        <CardDescription className='text-center text-gray-600'>
                            Sign in to access your account
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <CredentialsSignInForm />
                    </CardContent>
                </Card>
            </div>
        );
    } catch (error) {
        console.error("Sign-in page error:", error); // ✅ Log error details
        return <p className="text-red-500 text-center">Something went wrong. Please try again.</p>;
    }
}
