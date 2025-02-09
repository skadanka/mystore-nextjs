import { Button } from "@/components/ui/button"; // Adjust the import path as necessary
import Link from "next/link";
import { ShoppingCart, Package, User, EllipsisVertical } from "lucide-react";
import ModeToggle from "./mode-toggle";
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

export default function Menu() {
    return (
        <div className="flex items-center">
            <nav className="hidden md:flex gap-1 w-full">
                <ModeToggle />
                <Button asChild variant="ghost" className="text-white">
                    <Link href="/products">
                        <Package />
                        Products
                    </Link>
                </Button>
                <Button asChild variant="ghost" className="text-white">
                    <Link href="/cart">
                        <ShoppingCart />
                        Cart
                    </Link>
                </Button>
                <Button asChild className="text-white">
                    <Link href="/sign-in">
                        <User />
                        Sign In
                    </Link>
                </Button>
            </nav>
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
                                <Package />
                                Products
                            </Link>
                        </Button>
                        <Button asChild className="text-white">
                            <Link href="/cart">
                                <ShoppingCart />
                                Cart
                            </Link>
                        </Button>
                        <Button asChild className="text-white">
                            <Link href="/sign-in">
                                <User />
                                Sign In
                            </Link>
                        </Button>
                        <SheetDescription></SheetDescription>
                    </SheetContent>
                </Sheet>
            </nav>
        </div>
    );
}
