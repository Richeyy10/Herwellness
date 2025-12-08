import React from "react";

type Props = {
    className?: string;
};

export default function Approach({ className = "" }: Props): React.ReactElement {
    const principles = [
        "Community-rooted",
        "Women-led & youth-inclusive",
        "Evidence-based",
        "Sustainable & culturally sensitive",
        "Impact-driven",
    ];

    const strategies = [
        "Community Health Education",
        "Access to Essential Interventions",
        "Advocacy & Policy Engagement",
        "Youth Empowerment & Safe Spaces",
        "Research & Evidence-Informed Programming",
    ];

    return (
        <section
            className={`md:w-[80%] mx-auto px-4 py-12 sm:py-16 ${className}`}
            aria-labelledby="approach-heading"
        >
            <div className="bg-white rounded-2xl shadow-sm ring-1 ring-slate-900/5 p-6 md:p-10 grid gap-8 md:grid-cols-2 items-start">
                <div className="md:mt-25">
                    <h2
                        id="approach-heading"
                        className="text-2xl text-center md:text-left sm:text-3xl font-semibold text-black"
                    >
                        Our Approach
                    </h2>
                    <p className="mt-3 text-sm sm:text-base text-black max-w-prose">
                        Grounded in community, led by women and inclusive of youth — we
                        center sustainability, culture, and measurable impact.
                    </p>

                    <ul className="mt-6 space-y-3">
                        {principles.map((p) => (
                            <li key={p} className="flex items-start gap-3">
                                <span
                                    className="flex-none mt-0.5 h-3 w-3 rounded-full bg-[#C2185B] ring-1 ring-[#6A1B9]A/20"
                                    aria-hidden="true"
                                />
                                <span className="text-sm sm:text-base text-black">
                                    {p}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="bg-[#6A1B9A]/90 rounded-xl p-5 sm:p-6">
                    <div className="flex items-center gap-3">
                        <svg
                            className="h-7 w-7 text-[#C2185B] ring-1 ring-green/90 rounded-full p-1 flex-shrink-0"
                            viewBox="0 0 24 24"
                            fill="none"
                            aria-hidden="true"
                        >
                            <path
                                d="M9 12l2 2 4-4"
                                stroke="currentColor"
                                strokeWidth="2.25"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <circle
                                cx="12"
                                cy="12"
                                r="9"
                                stroke="currentColor"
                                strokeWidth="1.25"
                                strokeOpacity="0.12"
                            />
                        </svg>
                        <h3 className="text-lg font-medium text-white">
                            Our Core Strategies
                        </h3>
                    </div>

                    <ol className="mt-4 space-y-4">
                        {strategies.map((s, i) => (
                            <li
                                key={s}
                                className="flex items-start gap-4 p-3 rounded-lg hover:bg-[#C2185B] transition"
                            >
                                <div className="flex-none">
                                    <div className="h-8 w-8 rounded-full bg-[#C2185B] text-white flex items-center justify-center text-sm font-semibold">
                                        {i + 1}
                                    </div>
                                </div>
                                <div>
                                    <p className="text-sm sm:text-base font-medium text-black">
                                        {s}
                                    </p>
                                    <p className="mt-1 text-xs text-grey-900 max-w-prose">
                                        {getStrategyDescription(i)}
                                    </p>
                                </div>
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        </section>
    );
}

function getStrategyDescription(index: number): string {
    switch (index) {
        case 0:
            return "Deliver culturally-relevant education to improve health literacy across communities.";
        case 1:
            return "Ensure reliable access to essential services and interventions for women and youth.";
        case 2:
            return "Engage policymakers and advocate for structural changes that support health equity.";
        case 3:
            return "Create safe, empowering spaces and programs that uplift young people.";
        case 4:
            return "Use research and monitoring to inform program design and measure impact.";
        default:
            return "";
    }
}