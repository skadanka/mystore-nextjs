import React from 'react';


function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className='min-h-screen w-full grid place-items-center'>
            <main className='px-20'>
                {children}
            </main>
        </div>
    );
}

export default Layout;