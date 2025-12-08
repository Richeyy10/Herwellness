import Image from "next/image";
import aboutImg from "../../assets/about.jpg"

export default function About() {
    return (
        <div className="md:flex mb-4 bg-white">
            <div className="w-full md:w-[50%] px-4 sm:px-6 lg:px-8 pt-15 md:pt-25">
                <h1 className="text-2xl sm:text-5xl font-bold text-black mb-8 text-center">
                    About HerWellness Care Foundation
                </h1>
                <p className="text-black text-xl pt-3 md:pt-5 text-justify w-[80%] md:w-[70%] mx-auto leading-relaxed">
                    HerWellness Care Foundation is a nonprofit organization committed to improving the health, dignity, and overall well-being of girls and women in Nigeria. We empower communities through health education, reproductive health interventions, advocacy initiatives, and psychosocial support that enable women to live healthy and confident lives.
                </p>
            </div>
            <div className="md:mr-25 md:w-[50%] w-[80%] mx-auto flex md:pt-25">
                <Image src={aboutImg} alt="About Us" className="w-full object-cover"/>
            </div>
        </div>
    );
}