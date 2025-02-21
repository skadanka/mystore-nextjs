import { Card, CardDescription, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { APP_NAME } from '@/lib/constants';
import CredentialsSignInForm from './credentials-signin-form';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/auth/auth';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
    title: 'Sign In',
};

// ✅ Server Component (Checks session using getServerSession)
export default async function SignInPage() {
    const session = await getServerSession(authOptions);

    if (session) {
        redirect('/'); // ✅ Redirect if already logged in
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
                    {/* ✅ Client Component for Sign-In Form */}
                    <CredentialsSignInForm />
                </CardContent>
            </Card>
        </div>
    );
}
