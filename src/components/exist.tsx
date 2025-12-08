import Image from "next/image";
import existImg from "../assets/exist.jpg";
import Link from "next/link";

export default function Exist() {

    return (
        <div
            id="why-we-exist"
            aria-labelledby="why-we-exist-title"
            className="px-4 py-12 w-[80%] mx-auto"
        >
            <div className="flex flex-wrap items-center gap-8">
                <div className="flex-1 min-w-[280px]">
                    <h2 id="why-we-exist-title" className="text-3xl sm:text-4xl font-extrabold text-center m-0">
                        Why we exist?
                    </h2>

                    <p className="mt-3 text-justify sm:w-[80%] md:text-xl mx-auto leading-relaxed">
                        HerWellness Foundation is a women-centered nonprofit dedicated to ensuring that girls and women across Nigeria have access to the health information, essential services, and safe spaces they need to thrive.
                    </p>

                    <p className="mt-2 text-justify sm:w-[80%] md:text-xl mx-auto leading-relaxed">
                        We believe that when women flourish, their families, communities, and the entire nation flourish too.
                    </p>
                    <div className="mt-4 flex justify-center">
                        <Link href="/about">
                            <button className="px-8 py-3 inline-flex items-center justify-center gap-4 mt-4 bg-[#6A1B9A] hover:bg-[#C2185B] text-white font-semibold rounded-3xl transition-colors">
                            About Us
                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                                <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                        </Link>
                    </div>
                    </div>

                    <div className="flex-1 flex justify-center">
                        <Image src={existImg} width={700} alt="HerWellness staff and community members engaging in a program" />
                    </div>
                </div>
            </div>
            );
};
