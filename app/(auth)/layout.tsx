import React from "react";
import Image from "next/image";
import SocialAuthForm from "@/components/forms/SocialAuthForm";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <main className="flex min-h-screen items-center justify-center bg-auth-light bg-cover bg-center bg-no-repeat px-4 py-10 dark:bg-auth-dark">
            <section className="light-border background-light800_dark200 shadow-light100_dark100 min-w-full rounded-[10px] border px-4 py-10 shadow-md sm:min-w-[520px] sm:px-8">
                <div className="flex items-center justify-between gap-2">
                    <div className="space-y-2.5">
                        <h1 className="h2-bold text-dark100_light900">
                            Join DevOverflow
                        </h1>
                        <p className="text-light400_light500 paragraph-regular">
                            To explore the best of the world
                        </p>
                    </div>
                    <Image
                        src="/images/site-logo.svg"
                        alt="logo"
                        width={50}
                        height={50}
                        className="object-contain"
                    />
                </div>
                {children}

                <SocialAuthForm />
            </section>
        </main>
    );
};

export default AuthLayout;
