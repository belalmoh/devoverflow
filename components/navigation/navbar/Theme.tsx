"use client";

import * as React from "react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import Image from "next/image";

const Theme = () => {
    const { theme, setTheme } = useTheme();

    const switchTheme = () => {
        if (theme === "light") {
            setTheme("dark");
        } else {
            setTheme("light");
        }
    };

    return (
        <Button variant="outline" size="icon" onClick={switchTheme}>
            <Image
                src="/icons/sun.svg"
                width={30}
                height={30}
                alt="toggle Dark Mode"
                className="active-theme size-[1.2rem] scale-100 transition-all dark:scale-0"
            />
            <Image
                src="/icons/moon.svg"
                width={30}
                height={30}
                alt="toggle Light Mode"
                className="active-theme absolute size-[1.2rem] scale-0 transition-all dark:rotate-0 dark:scale-100"
            />
            <span className="sr-only">Toggle theme</span>
        </Button>
    );
};

export default Theme;
