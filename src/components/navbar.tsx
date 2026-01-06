"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import logoSrc from "../assets/logo.png";

type NavItem = { label: string; href: string };

const NAV_ITEMS: NavItem[] = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Our Programs", href: "/programs" },
    { label: "Events", href: "/events" },
    { label: "Impact", href: "/impact" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
];

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        document.body.style.overflow = open ? "hidden" : "auto";
    }, [open]);

    const isActive = (href: string) =>
        pathname
            ? href === "/"
                ? pathname === href
                : pathname.startsWith(href)
            : false;

    return (
        <header className="w-full inset-0 z-[9999] left-0 right-0 border-b border-gray-200">
            <nav className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-32 items-center justify-between">
                    <div className="flex items-center gap-3">
                        <Link href="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
                            <span className="sr-only">HerWellness</span>
                            <Image src={logoSrc} alt="HerWellness Logo" width={120} height={120} />
                        </Link>
                    </div>

                    <div className="hidden md:flex md:items-center md:space-x-6">
                        {NAV_ITEMS.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={
                                    "px-3 py-2 rounded-md text-sm font-medium transition-colors " +
                                    (isActive(item.href)
                                        ? "text-[#6A1B9A]"
                                        : "text-black hover:text-gray-900")
                                }
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>

                    <div className="flex items-center gap-2">
                        <Link
                            href="/get-involved"
                            className="hidden md:inline-block px-4 py-2 rounded-3xl bg-[#6A1B9A] text-white text-sm font-medium hover:bg-[#53157A]"
                        >
                            Get Involved
                        </Link>

                        <button
                            type="button"
                            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#6A1B9A]"
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

            {/* MOBILE MENU */}
            <div
                id="mobile-menu"
                className={`md:hidden fixed inset-0 z-[9999] left-0 right-0 top-32 bg-[#6A1B9A] transition-all duration-300 ease-in-out 
    ${open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"}`}
            >

                <div className="min-h-[calc(100vh-128px)] flex flex-col items-center justify-center space-y-6">

                    {NAV_ITEMS.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={
                                "text-white text-lg font-medium transition-all text-center md:text-left " +
                                (isActive(item.href)
                                    ? "underline underline-offset-8"
                                    : "opacity-90 hover:opacity-100")
                            }
                            onClick={() => setOpen(false)}
                        >
                            {item.label}
                        </Link>
                    ))}

                    <Link
                        href="/get-involved"
                        className="mt-6 px-6 py-3 rounded-full bg-white text-[#6A1B9A] text-center text-sm font-semibold"
                        onClick={() => setOpen(false)}
                    >
                        Get Involved
                    </Link>
                </div>
            </div>
        </header>
    );
}
