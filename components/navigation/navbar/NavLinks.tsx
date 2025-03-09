"use client";

import React from "react";
import Link from "next/link";
import sideBarLinks from "@/constants";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { cn } from "@/lib/utils";
import ROUTES from "@/constants/routes";
import { SheetClose } from "@/components/ui/sheet";

const NavLinks = ({ isMobileNav = false }: { isMobileNav?: boolean }) => {
    const pathname = usePathname();
    const userId = 1;

    return (
        <>
            {sideBarLinks.map((link) => {
                const isActive =
                    (link.route.length > 1 && pathname.includes(link.route)) ||
                    pathname === link.route;

                if (link.route === ROUTES.PROFILE) {
                    if (userId) link.route = `${link.route}/${userId}`;
                    else return null;
                }

                const LinkComponent = (
                    <Link
                        href={link.route}
                        key={link.label}
                        className={cn(
                            isActive
                                ? "primary-gradient rounded-lg text-light-900"
                                : "text-dark300_light900",
                            "flex items-center justify-start gap-4 bg-transparent p-4"
                        )}
                    >
                        <Image
                            className={cn({ "invert-colors": !!isActive })}
                            src={link.imgURL}
                            alt={link.label}
                            width={20}
                            height={20}
                        />
                        <p
                            className={cn(
                                isActive ? "base-bold" : "base-medium",
                                !isMobileNav && "max-lg:hidden"
                            )}
                        >
                            {link.label}
                        </p>
                    </Link>
                );

                return isMobileNav ? (
                    <SheetClose asChild>{LinkComponent}</SheetClose>
                ) : (
                    <React.Fragment key={link.route}>
                        {LinkComponent}
                    </React.Fragment>
                );
            })}
        </>
    );
};

export default NavLinks;
