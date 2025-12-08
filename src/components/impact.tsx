"use client";
import React from "react";
import Image from "next/image";
import impactImg1 from "../assets/impact1.jpg"
import impactImg2 from "../assets/impact2.jpg"
import impactImg3 from "../assets/impact3.jpg"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Link from "next/link";


type Stat = {
    value: string;
    label: string;
};

const stats: Stat[] = [
    { value: "300+", label: "girls reached through school outreach" },
    { value: "300+", label: "non-reusable pad kits distributed" },
    { value: "2", label: "Area council engaged" },
    { value: "5+", label: "partnerships and collaborations" },
    { value: "100%", label: "community-driven impact" },
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

const Impact: React.FC = () => {
    return (
        <section aria-labelledby="impact-heading" className="py-12 bg-white">
            <div className="w-[80%] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="md:grid gap-8 md:grid-cols-2 md:items-start">
                    <div>
                        <h2 id="impact-heading" className="text-3xl sm:text-4xl font-extrabold text-gray-900">
                            Impact Snapshot
                        </h2>
                        <p className="mt-3 text-gray-600">
                            A concise look at our recent reach and collaborations — all driven by the community.
                        </p>

                        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {stats.map((s) => (
                                <StatItem key={s.label} value={s.value} label={s.label} />
                            ))}
                        </div>

                        <div className="mt-8">
                            <Link href="/impact">
                                <button className="px-8 py-3 mt-4 mb-4 bg-[#6A1B9A] hover:bg-[#C2185B] text-white font-semibold rounded-3xl transition-colors">
                                    See Our Impact Report
                                </button>
                            </Link>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-3xl sm:text-4xl font-extrabold text-center text-gray-900 mb-4">Gallery</h3>
                        <div
                            className="w-full h-90 rounded-md border border-gray-200 bg-gray-50 flex items-center justify-center overflow-hidden"
                            role="region"
                            aria-label="Impact images carousel"
                        >

                            <div className="w-full h-full">
                                <Swiper
                                    modules={[Navigation, Pagination, Autoplay]}
                                    spaceBetween={16}
                                    slidesPerView={1}
                                    navigation
                                    pagination={{ clickable: true }}
                                    autoplay={{ delay: 3500, disableOnInteraction: false }}
                                    loop
                                    className="h-90 w-full"
                                    aria-live="polite"
                                >
                                    {[impactImg1, impactImg2, impactImg3].map((img, idx) => (
                                        <SwiperSlide key={idx} className="h-90">
                                            <div className="h-90 w-full">
                                                <Image src={img} alt={`Impact ${idx + 1}`} className="object-cover h-90 w-full" />
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Impact;