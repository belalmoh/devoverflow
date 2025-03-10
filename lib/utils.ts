import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import techMap from "@/constants/techmap";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const getDeviconClassName = (name: string) => {
    const normalizedName = name.toLowerCase().replace(/[ .]/g, "");

    return (
        `${techMap[normalizedName]} colored` ||
        `devicon-${normalizedName}-plain`
    );
};
