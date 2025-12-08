"use client";

import Link from "next/link";

type FocusItem = {
    id: string;
    title: string;
    description: string;
    gradient: string;
    icon: React.ReactElement;
};

const items: FocusItem[] = [
    {
        id: "menstrual",
        title: "Menstrual Health & Hygiene",
        description:
            "Education, non-reusable pads, and menstrual support for schoolgirls and vulnerable communities.",
        gradient: "bg-[#C2185B]",
        icon: (
            <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none">
                <path d="M12 2C12 2 7 7 7 11a5 5 0 0010 0c0-4-5-9-5-9z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M8 17c0 2.5 4 4 4 4s4-1.5 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
    {
        id: "reproductive",
        title: "Reproductive & Sexual Health Education",
        description:
            "Equipping girls and women with accurate, life‑saving health knowledge.",
        gradient: "bg-[#C2185B]",
        icon: (
            <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none">
                <path d="M12 2v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M6 12a6 6 0 1012 0A6 6 0 006 12z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
    {
        id: "mental",
        title: "Mental Health & Psychosocial Support",
        description:
            "Promoting emotional well‑being through safe spaces, counselling and resilience programs.",
        gradient: "bg-[#C2185B]",
        icon: (
            <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none">
                <path d="M21 15a2 2 0 01-2 2H8l-5 3V5a2 2 0 012-2h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M7 8h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
    {
        id: "advocacy",
        title: "Advocacy & Gender Equity",
        description:
            "Pushing for policies and systems that create fair opportunities for girls and women.",
        gradient: "bg-[#C2185B]",
        icon: (
            <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none">
                <path d="M12 2l3 7h7l-5.5 4 2 7L12 16 5.5 20l2-7L2 9h7z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
    {
        id: "livelihood",
        title: "Livelihood & Economic Empowerment",
        description:
            "Building skills, providing training, and equipping women and girls for income opportunities.",
        gradient: "bg-[#C2185B]",
        icon: (
            <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none">
                <path d="M12 8v8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M8 12h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
    {
        id: "digital",
        title: "Digital Inclusion & Capacity Building",
        description:
            "Closing the digital gender gap with ICT skills and online safety—expanding opportunities in the digital economy.",
        gradient: "bg-[#C2185B]",
        icon: (
            <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none">
                <rect x="3" y="4" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
                <path d="M8 20h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
        ),
    },
    {
        id: "community",
        title: "Community Engagement & Advocacy",
        description:
            "Working with leaders and policymakers to address harmful norms and support girls’ rights.",
        gradient: "bg-[#C2185B]",
        icon: (
            <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none">
                <path d="M17 21v-2a4 4 0 00-4-4H7a4 4 0 00-4 4v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="1.5" />
                <path d="M23 21v-2a4 4 0 00-3-3.87" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
];

export default function Focus() {
    return (
        <section className="w-[100%] mx-auto px-6 py-12">
            <div className="mb-8 text-center">
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                    Our Focus Areas
                </h2>
                <div className="mt-3 mx-auto w-24 h-1 rounded-full bg-[#00897B]" />
                <p className="mt-4 text-black text-md max-w-2xl mx-auto">
                    Highlights of the services we deliver to support girls and women in health, wellbeing, and opportunity.
                </p>
            </div>

            <div className="relative">
                {/* Left / Right controls */}
                <style>{`
                                    #focus-carousel {
                                        -webkit-overflow-scrolling: touch;
                                        -ms-overflow-style: none; /* IE and Edge */
                                        scrollbar-width: none; /* Firefox */
                                    }
                                    /* Chrome, Edge, Safari */
                                    #focus-carousel::-webkit-scrollbar {
                                        height: 0;
                                        width: 0;
                                        background: transparent;
                                    }
                                    #focus-carousel::-webkit-scrollbar-thumb {
                                        background: transparent;
                                    }
                                `}</style>
                <div className="absolute left-2 top-1/2 -translate-y-1/2 z-10">
                    <button
                        aria-label="Scroll left"
                        onClick={() => {
                            const el = document.getElementById("focus-carousel");
                            if (el) {
                                (el as HTMLElement).scrollBy({
                                    left: -(el as HTMLElement).clientWidth * 0.8,
                                    behavior: "smooth",
                                });
                            }
                        }}
                        className="p-2 rounded-full bg-[#C2185B] shadow hover:scale-105 transition"
                    >
                        <svg className="w-5 h-5 text-gray-700 dark:text-gray-200" viewBox="0 0 24 24" fill="none">
                            <path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>

                <div className="absolute right-2 top-1/2 -translate-y-1/2 z-10">
                    <button
                        aria-label="Scroll right"
                        onClick={() => {
                            const el = document.getElementById("focus-carousel");
                            if (el) {
                                (el as HTMLElement).scrollBy({
                                    left: (el as HTMLElement).clientWidth * 0.8,
                                    behavior: "smooth",
                                });
                            }
                        }}
                        className="p-2 rounded-full bg-[#C2185B] shadow hover:scale-105 transition"
                    >
                        <svg className="w-5 h-5 text-gray-700 dark:text-gray-200" viewBox="0 0 24 24" fill="none">
                            <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>

                {/* Horizontal carousel */}
                <div
                    id="focus-carousel"
                    className="flex gap-6 overflow-x-auto py-6 px-4 snap-x snap-mandatory scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
                    style={{
                        WebkitOverflowScrolling: "touch",
                    }}
                    aria-label="Focus areas carousel"
                >
                    {items.map((it) => (
                        <article
                            key={it.id}
                            className="group relative flex-shrink-0 snap-start h-[450px] w-[300px] md:h-[400px] md:w-[400px] rounded-2xl p-5 bg-[#6A1B9A] shadow-md hover:shadow-xl transition-shadow duration-300"
                            aria-labelledby={`${it.id}-title`}
                        >
                            <div
                                className={`absolute -inset-0.5 opacity-20 rounded-2xl bg- ${it.gradient} group-hover:opacity-50 transition-opacity duration-500`}
                                aria-hidden
                            />
                            <div className="relative md:flex text-center md:text-left space-x-4">
                                <div
                                    className={`md:flex-shrink-0 rounded-lg w-14 h-14 mt-8 flex items-center justify-center bg-white/20 mx-auto backdrop-blur-sm`}
                                    style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.06)" }}
                                >
                                    <div className="w-10 h-10 rounded-md flex items-center justify-center">{it.icon}</div>
                                </div>
                                <div>
                                    <h3 id={`${it.id}-title`} className="text-2xl w-[80%] md:w-full md:ml-4 mx-auto mt-8 font-semibold">
                                        {it.title}
                                    </h3>
                                    <p className="mt-8 text-lg mb-3 text-white">
                                        {it.description}
                                    </p>
                                    <div className="mt-4">
                                        <button
                                            className="inline-flex items-center gap-2 text-sm font-medium px-3 py-1.5 rounded-full bg-white/30 hover:bg-white/40 backdrop-blur-sm shadow-sm transition"
                                            aria-label={`Learn more about ${it.title}`}
                                        >
                                            Learn more
                                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                                                <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
            <div className="text-center">
                <Link href="/programs">
                    <button className="px-8 py-3 mt-4 inline-flex items-center gap-2 bg-[#6A1B9A] hover:bg-[#C2185B] text-white font-semibold rounded-3xl transition-colors">
                        View Our Programs
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                            <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </Link>
            </div>
        </section>
    );
};