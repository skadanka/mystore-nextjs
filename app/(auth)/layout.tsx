'use client';

import { SessionProvider } from 'next-auth/react';
import React from 'react';

function SignInLayout({ children }: { children: React.ReactNode }) {
    return (
            <SessionProvider>
                <div className='min-h-screen w-full grid place-items-center'>
                    <main className='px-20'>
                        {children}
                    </main>
                </div>
            </SessionProvider>
    );
}

export default SignInLayout;