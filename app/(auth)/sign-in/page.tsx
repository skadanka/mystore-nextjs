import { Card, CardDescription, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Metadata} from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { APP_NAME } from '@/lib/constants';
import CredentialsSignInForm from './credentials-signin-form';

export const metadata: Metadata = {
    title: 'Sign In'
}

export default function SignInPage() {
    return (
        <div className='w-96 max-w-2xl'>
            <Card className='flex flex-col items-center'>
                <CardHeader className='space-y-4 flex flex-col items-center'>
                    <Link href='/' className='flex justify-center'>
                        <Image
                            src='./assets/store-shopper-svgrepo-com.svg'
                            width={100}
                            height={100}
                            alt={`${APP_NAME} logo`}
                            priority={true}
                        />
                    </Link>
                    <CardTitle className='text-center'>
                        Sign In
                    </CardTitle>
                    <CardDescription className='text-center'>
                        Sign in to your account
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 flex flex-col items-center">
                    {/* Form Content */}
                    <CredentialsSignInForm/>
                </CardContent>
            </Card>
        </div>
    )
}