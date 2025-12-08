"use client";
import Link from 'next/link';
import { useState } from 'react';
import { ChevronDown, Menu, X, FileText, Calendar } from 'lucide-react';

export default function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);
    const [expandedMenu, setExpandedMenu] = useState<string | null>(null);

    const toggleMenu = (menu: string) => {
        setExpandedMenu(expandedMenu === menu ? null : menu);
    };

    const menuItems = [
        {
            label: 'Blogs',
            icon: FileText,
            submenu: [
                { label: 'All Blogs', href: '/dashboard/blogs/list' },
                { label: 'Create Blog', href: '/dashboard/blogs/create' },
            ],
        },
        {
            label: 'Events',
            icon: Calendar,
            submenu: [
                { label: 'All Events', href: '/dashboard/events/list' },
                { label: 'Create Event', href: '/dashboard/events/create' },
            ],
        },
    ];

    return (
        <>
            <aside
                className={`fixed mt-32 z-10 left-0 top-0 right-0 min-h-screen lg:w-64 w-28 bg-[#6A1B9A] text-black transition-transform duration-300 lg:translate-x-0`}
            >
                <div className="p-10">
                    <h1 className="text-2xl mt-3 hidden text-white lg:block font-bold">Dashboard</h1>
                </div>

                <nav className="mt-5 space-y-2 px-4">
                    {menuItems.map((item) => (
                        <div key={item.label}>
                            <button
                                onClick={() => toggleMenu(item.label)}
                                className="w-full flex items-center justify-between px-4 py-3 rounded-lg hover:bg-gray-800 transition-colors"
                            >
                                <div className="flex items-center gap-3">
                                    <item.icon size={30} />
                                    <span className='hidden text-white lg:text-lg lg:block'>{item.label}</span>
                                </div>
                                <ChevronDown
                                    size={18}
                                    className={`transition-transform ${expandedMenu === item.label ? 'rotate-180' : ''
                                        }`}
                                />
                            </button>

                            {expandedMenu === item.label && (
                                <div className="pl-2 lg:pl-8 space-y-2 mt-2">
                                    {item.submenu.map((subitem) => (
                                        <Link
                                            key={subitem.href}
                                            href={subitem.href}
                                            className="block w-full px-4 py-2 rounded-lg text-sm text-gray-300 hover:bg-gray-800 hover:text-white transition-colors"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {subitem.label}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </nav>
            </aside>
        </>
    );
}