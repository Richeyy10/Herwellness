"use client";
import React from "react";
import Image from "next/image";
import impactImg1 from "../../assets/impact1.jpg"
import impactImg2 from "../assets/impact2.jpg"
import impactImg3 from "../assets/impact3.jpg"


type Stat = {
    value: string;
    label: string;
};

const stats: Stat[] = [
    { value: "300+", label: "girls empowered" },
    { value: "300+", label: "sanitary kits distributed" },
    { value: "2+", label: "communities reached" },
    { value: "5+", label: "partnerships" },
    { value: "Consistent", label: "annual outreach campaigns" },
];

const StatItem: React.FC<Stat> = ({ value, label }) => (
    <div className="flex items-start space-x-3">
        <div className="flex-shrink-0">
            <span className="inline-flex items-center justify-center h-10 w-10 rounded-md bg-indigo-50 text-indigo-600">
                <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 10-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z" clipRule="evenodd" />
                </svg>
            </span>
        </div>
        <div>
            <div className="text-2xl font-bold text-gray-900">{value}</div>
            <div className="text-sm text-gray-600">{label}</div>
        </div>
    </div>
);


export default function Impacts() {
    return (
        <section aria-labelledby="impact-heading" className="py-12 bg-white">
            <h2 id="impact-heading" className="text-3xl text-center sm:text-4xl font-extrabold text-gray-900">
                            Our Impact So Far
                        </h2>
                        <p className="w-[90%] md:w-[80%] mx-auto mt-3 text-center text-gray-600 mb-6">
                            Clear, bold statistics showcasing the organization&apos;s work.
                        </p>
            <div className="w-[90%] md:w-[80%] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid gap-8 md:grid-cols-2 md:items-start">
                    <div>
                        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {stats.map((s) => (
                                <StatItem key={s.label} value={s.value} label={s.label} />
                            ))}
                        </div>
                    </div>
                    <div>
                        <div
                            className="w-full h-90 rounded-md border border-gray-200 bg-gray-50 flex items-center justify-center overflow-hidden"
                            role="region"
                            aria-label="Impact images carousel"
                        >
                            <div className="w-full h-full">
                                <Image
                                    src={impactImg1}
                                    alt="Impact Image 1"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};