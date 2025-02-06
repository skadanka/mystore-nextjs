'use client'
import { useState, useEffect } from 'react';

import { DropdownMenu, 
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

    useEffect(() => {setMounted(true)}, []);

    if (!mounted) return null;

    return <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant='ghost' className='focus-visible:ring-0 focus-visable:ring-off'>
                    {theme === 'system' ? (<SunMoon/>) 
                    : theme === 'dark' ? (<MoonIcon/>) : 
                    (<SunIcon/>)}
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>Mode</DropdownMenuLabel>
                <DropdownMenuSeparator/>
                <DropdownMenuCheckboxItem onClick={() => setTheme('system')} checked={theme === 'system'}>
                    <SunMoon/> &nbsp;System
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem  onClick={() => setTheme('light')} checked={theme === 'light'}>
                    <SunIcon/> &nbsp; Light
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem onClick={() => setTheme('dark')} checked={theme === 'dark'}>
                    <MoonIcon/>&nbsp; Dark
                </DropdownMenuCheckboxItem>
            </DropdownMenuContent>
        </DropdownMenu>
}