import React from 'react';
import Header from '@/components/ui/shared/header';
import Footer from '@/components/ui/footer';

function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className='flex flex-col min-h-screen justify-between'>
            <Header/>
            <main className='px-20'>
                {children}
            </main>
           <Footer/>
        </div>
    );
}

export default Layout;