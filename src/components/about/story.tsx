import React from "react";
import Link from "next/link";
import Image from "next/image";
import storyImg from "../../assets/story.jpg"

type Props = {
    className?: string;
};

export default function Story({ className = "" }: Props): React.ReactElement {
    return (
        <section
            aria-labelledby="our-story-title"
            className={`bg-white text-gray-900 ${className}`}
        >
            <div className="w-[90%] md:w-[80%] mx-auto px-6 py-16 sm:py-24 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2
                            id="our-story-title"
                            className="text-3xl sm:text-4xl font-extrabold tracking-tight text-center md:text-left text-black"
                        >
                            Our Story
                        </h2>

                        <p className="mt-6 text-lg leading-7 text-black text-justify">
                            HerWellness Care Foundation grew from a vision to close the
                            persistent health gaps affecting girls and women. From school
                            outreach to national advocacy, our work continues to expand with
                            the goal of reaching more underserved communities and building
                            healthier futures.
                        </p>

                        <ul className="mt-6 space-y-3 text-gray-700">
                            <li className="flex items-start">
                                <svg
                                    className="flex-none w-6 h-6 text-green-600"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M5 13l4 4L19 7"
                                    />
                                </svg>
                                <span className="ml-3">Community-first outreach and education</span>
                            </li>
                            <li className="flex items-start">
                                <svg
                                    className="flex-none w-6 h-6 text-green-600"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M5 13l4 4L19 7"
                                    />
                                </svg>
                                <span className="ml-3">Partnerships with schools and local clinics</span>
                            </li>
                            <li className="flex items-start">
                                <svg
                                    className="flex-none w-6 h-6 text-green-600"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M5 13l4 4L19 7"
                                    />
                                </svg>
                                <span className="ml-3">National advocacy to influence equitable policy</span>
                            </li>
                        </ul>
                    </div>

                    <div className="relative">
                        <div className="rounded-xl bg-gradient-to-br from-green-50 to-white p-6 shadow-md ring-1 ring-gray-100">
                            <figure className="flex items-center justify-center">
                                <Image src={storyImg} alt="Story" />
                            </figure>
                            <figcaption className="mt-4 text-sm text-gray-500">
                                Reaching girls and women where they are — in schools, clinics, and communities.
                            </figcaption>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}