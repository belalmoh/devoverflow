import type { Metadata } from "next";

import React from "react";
import localFont from "next/font/local";

import "./globals.css";
import ThemeProvider from "@/context/Theme";
import { Toaster } from "sonner";
import { auth } from "@/auth";

const inter = localFont({
    variable: "--font-inter",
    src: "../public/fonts/InterVF.ttf",
    weight: "100 200 300 400 500 600 700 800 900",
});

const spaceGrotesk = localFont({
    variable: "--font-space-grotesk",
    src: "../public/fonts/SpaceGroteskVF.ttf",
    weight: "300 400 500 600 700",
});

export const metadata: Metadata = {
    title: "DevOverflow",
    description:
        "A community-driven platform for asking and answering programming questions. Get help, share knowledge, and collaborate with developers from around the world. Explore topics in web development, mobile app development, algorithms, data structures, and more.",
    icons: {
        icon: "/images/site-logo.svg",
    },
};

const RootLayout = async ({ children }: { children: React.ReactNode }) => {
    const session = await auth();

    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={`${inter.className} ${spaceGrotesk.variable} antialiased`}
            >
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    {children}
                </ThemeProvider>
                <Toaster />
            </body>
        </html>
    );
};

export default RootLayout;
