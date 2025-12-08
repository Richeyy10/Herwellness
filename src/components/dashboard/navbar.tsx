"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import logoSrc from "../../assets/logo.png";

type NavItem = { label: string; href: string };

const NAV_ITEMS: NavItem[] = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Our Programs", href: "/programs" },
];

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const pathname = usePathname();

    const isActive = (href: string) =>
        pathname
            ? href === "/"
                ? pathname === href
                : pathname.startsWith(href)
            : false;

    return (
        <header className="fixed top-0 right-0 z-10 w-full bg-white backdrop-blur-sm border-b border-gray-200">
            <nav className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-32 items-center justify-between">
                    <div className="flex items-center gap-3">
                        <Link href="/" className="flex items-center gap-2">
                                <span className="sr-only">HerWellness</span>
                                <Image src={logoSrc} alt="HerWellness Logo" width={120} height={120} />
                        </Link>
                    </div>

                    <div className="flex items-center gap-2">
                        <Link href="/get-involved" className="md:inline-block px-4 py-2 rounded-3xl bg-red-600 text-white text-sm font-medium hover:bg-red-800 transition-colors">
                                Sign Out
                        </Link>

                        <button
                            type="button"
                            className="hidden items-center justify-center p-2 rounded-md text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-pink-500"
                            aria-controls="mobile-menu"
                            aria-expanded={open}
                            onClick={() => setOpen((v) => !v)}
                        >
                            <span className="sr-only">Toggle menu</span>
                            {open ? (
                                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none">
                                    <path
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            ) : (
                                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none">
                                    <path
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </nav>
        </header>
    );
}