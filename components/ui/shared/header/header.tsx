import Image from 'next/image';
import { APP_LOGO, APP_NAME } from '@/lib/constants';
import Menu from './menu';
import Link from 'next/link';
import SessionWrapper from '@/components/ui/shared/SessionWrapper';

export default function Header() {
    return (
        <header className='flex justify-between mt-2 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-4 rounded-lg shadow-lg'>
            <div>
                <Link href='/' className='flex items-center space-x-2 ml-4'>
                    <Image src={`${APP_LOGO}`} alt="home" width={48} height={48} priority={true} />
                    <h1 className='hidden lg:block text-2xl font-bold text-white'>{`${APP_NAME}`}</h1>
                </Link>
            </div>
            <SessionWrapper>
                <Menu />
            </SessionWrapper>
        </header>
    );
}