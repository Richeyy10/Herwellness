import Link from "next/link";

type ProgramProps = {
    onLearnMore?: () => void;
    className?: string;
};

export default function Program({ className = "" }) {
    return (
        <section
            className={`w-[80%] mx-auto mb-8 bg-gray-800 rounded-2xl shadow-md overflow-hidden flex flex-col md:flex-row items-stretch ${className}`}
            aria-labelledby="featured-program-title"
        >
            <div className="p-6 md:p-8 flex-1">
                <div className="flex items-center gap-3">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-[#FDD835]/50 text-white">
                        Featured Program
                    </span>
                </div>

                <h2
                    id="featured-program-title"
                    className="mt-4 text-2xl font-semibold text-gray-900 dark:text-gray-100 leading-tight"
                >
                    Flow With Confidence Campaign
                </h2>

                <p className="mt-3 w-[80%] text-gray-600 dark:text-gray-300">
                    A school-based menstrual health initiative equipping girls with
                    non-reusable pads, wellness knowledge, and self-esteem tools.
                </p>

                <div className="mt-6">
                    <Link href="programs">
                        <button className="px-8 py-3 mt-4 inline-flex items-center gap-2 bg-[#6A1B9A] hover:bg-[#C2185B] text-white font-semibold rounded-3xl transition-colors">
                            Learn More
                            <svg
                                className="w-4 h-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                                />
                            </svg>
                        </button>
                    </Link>

                </div>
            </div>

            <div className="md:w-56 bg-[#C2185B] flex items-center justify-center p-6">
                <div className="w-36 h-36 rounded-full bg-white/80 dark:bg-white/6 flex items-center justify-center shadow-inner">
                    <svg
                        viewBox="0 0 64 64"
                        className="w-24 h-24 text-pink-600 dark:text-pink-300"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                    >
                        <path
                            d="M32 44c6.627 0 12-5.373 12-12S38.627 20 32 20 20 25.373 20 32s5.373 12 12 12z"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M32 16v-6M24 22l-4-4M40 22l4-4"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </div>
            </div>
        </section>
    );
};