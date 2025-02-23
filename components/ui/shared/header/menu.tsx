"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ShoppingCart, Package, EllipsisVertical, LogOut, LogIn } from "lucide-react";
import ModeToggle from "./mode-toggle";
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { useSession, signOut } from "next-auth/react";

export default function Menu() {
    const { data: session } = useSession(); 

    return (
        <div className="flex items-center">
            {/* ✅ Desktop Navigation */}
            <nav className="hidden md:flex gap-1 w-full">
                <ModeToggle />
                <Button asChild variant="ghost" className="text-white">
                    <Link href="/products">
                        <Package /> Products
                    </Link>
                </Button>
                <Button asChild variant="ghost" className="text-white">
                    <Link href="/cart">
                        <ShoppingCart /> Cart
                    </Link>
                </Button>
                {session?.user ? (
                    <Button variant="ghost" className="text-white" onClick={() => signOut({ callbackUrl: "/" })}>
                        <LogOut /> Sign Out
                    </Button>
                ) : (
                    <Button asChild variant="ghost" className="text-white">
                        <Link href="/sign-in">
                            <LogIn /> Sign In
                        </Link>
                    </Button>
                )}
            </nav>

            {/* ✅ Mobile Navigation */}
            <nav className="md:hidden">
                <Sheet>
                    <SheetTrigger className="align-middle">
                        <EllipsisVertical />
                    </SheetTrigger>
                    <SheetContent className="flex flex-col items-start">
                        <SheetTitle>Menu</SheetTitle>
                        <ModeToggle />
                        <Button asChild className="text-white">
                            <Link href="/products">
                                <Package /> Products
                            </Link>
                        </Button>
                        <Button asChild className="text-white">
                            <Link href="/cart">
                                <ShoppingCart /> Cart
                            </Link>
                        </Button>
                        {session?.user ? (
                            <Button className="text-white" onClick={() => signOut({ callbackUrl: "/" })}>
                                <LogOut /> Sign Out
                            </Button>
                        ) : (
                            <Button asChild className="text-white">
                                <Link href="/sign-in">
                                    <LogIn /> Sign In
                                </Link>
                            </Button>
                        )}
                        <SheetDescription></SheetDescription>
                    </SheetContent>
                </Sheet>
            </nav>
        </div>
    );
}
