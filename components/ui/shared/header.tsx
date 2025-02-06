import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { APP_LOGO, APP_NAME } from '@/lib/constants';

export default function Header() {
    return (
        <header className='flex w-full space-x-2 justify-between mt-4'>
            <div className='flex items-center space-x-2 ml-4'>
                <Image src={`${APP_LOGO}`} alt="home" width={48} height={48} />
                <h1 className='hidden lg:block text-2xl font-bold'>{`${APP_NAME}`}</h1>
            </div>
            <nav>
                <ul className='flex space-x-2 mr-4'>
                    <Button><Link href="/products">Products</Link></Button>
                    <Button><Link href="/cart">Cart</Link></Button>
                    <Button><Link href="/contact">Contact</Link></Button>
                </ul>
            </nav>
        </header>
    );
}