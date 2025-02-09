'use client'
import { useState, useEffect } from 'react';

import { 
    DropdownMenu, 
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuCheckboxItem
} from '@/components/ui/dropdown-menu';

import { Button } from '@/components/ui/button';
import { MoonIcon, SunIcon, SunMoon } from 'lucide-react';

import { useTheme } from 'next-themes';

export default function ModeToggle() {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();
    const [isMobile, setIsMobile] = useState(false);

    // Detect screen size and update state reactively
    useEffect(() => {
        setMounted(true);

        const mediaQuery = window.matchMedia('(max-width: 768px)');

        // Function to update `isMobile` state
        const handleResize = () => setIsMobile(mediaQuery.matches);

        // Initial check and event listener
        handleResize();
        mediaQuery.addEventListener('change', handleResize);

        // Cleanup listener on component unmount
        return () => mediaQuery.removeEventListener('change', handleResize);
    }, []);

    if (!mounted) return null;

    if (isMobile) {
        return (
            <div className="flex gap-2 items-center">
                <Button variant="ghost" onClick={() => setTheme('system')} className="w-full">
                    <SunMoon className="mr-2"/> System
                </Button>
                <Button variant="ghost" onClick={() => setTheme('light')} className="w-full">
                    <SunIcon className="mr-2"/> Light
                </Button>
                <Button variant="ghost" onClick={() => setTheme('dark')} className="w-full">
                    <MoonIcon className="mr-2"/> Dark
                </Button>
            </div>
        );
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild className='ring-0 border-0 focus-visible:ring-offset-0 focus-visible:ring-0'>
                <Button variant='ghost'>
                    {theme === 'system' ? <SunMoon/> 
                    : theme === 'dark' ? <MoonIcon/> 
                    : <SunIcon/>}
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>Mode</DropdownMenuLabel>
                <DropdownMenuSeparator/>
                <DropdownMenuCheckboxItem onClick={() => setTheme('system')} checked={theme === 'system'}>
                    <SunMoon className="mr-2"/> System
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem onClick={() => setTheme('light')} checked={theme === 'light'}>
                    <SunIcon className="mr-2"/> Light
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem onClick={() => setTheme('dark')} checked={theme === 'dark'}>
                    <MoonIcon className="mr-2"/> Dark
                </DropdownMenuCheckboxItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
