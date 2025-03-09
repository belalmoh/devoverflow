import React from "react";
import Link from "next/link";
import Image from "next/image";
import Theme from "./Theme";
import MobileNavigation from "./MobileNavigation";
const Navbar = () => {
    return (
        <nav className="flex-between background-light900_dark200 fixed z-50 w-full gap-5 p-6 shadow-light-300 dark:shadow-none sm:px-12">
            <Link href="/" className="flex items-center gap-1">
                <Image
                    src="/images/site-logo.svg"
                    width={23}
                    height={23}
                    alt="Dev Overflow Logo"
                />
                <p className="h2-bold font-space-grotesk text-dark-100 dark:text-light-900 max-sm:hidden">
                    Dev<span className="text-primary-500">Overflow</span>
                </p>
            </Link>
            <p>Global Search</p>
            <p className="flex-between gap-5">
                <Theme />
                <MobileNavigation />
            </p>
        </nav>
    );
};

export default Navbar;
