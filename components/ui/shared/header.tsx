import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { APP_LOGO, APP_NAME } from '@/lib/constants';
import { ShoppingCart, Package, User } from 'lucide-react';
import ModeToggle from './mode-toggle';

export default function Header() {
    return (
        <header className='flex w-full space-x-2 justify-between mt-2 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-4 rounded-lg shadow-lg'>
            <div>
                <Link href='/' className='flex items-center space-x-2 ml-4'>
                    <Image src={`${APP_LOGO}`} alt="home" width={48} height={48} priority={true}/>
                    <h1 className='hidden lg:block text-2xl font-bold text-white'>{`${APP_NAME}`}</h1>
                </Link>
            </div>
            <nav>
            <div className='flex space-x-2 mr-4'>
                <ModeToggle/>
                <Button asChild variant='ghost' className='text-white'>
                <Link href="/products"><Package/>Products</Link>
                </Button>
                <Button asChild variant='ghost' className='text-white'>
                <Link href="/cart"><ShoppingCart/>Cart</Link>
                </Button>
                <Button asChild className='text-white'>
                <Link href="/sign-in"><User/>Sign In</Link>
                </Button>
            </div>
            </nav>
        </header>
    );
}