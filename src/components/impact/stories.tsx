import Image from "next/image";
import amina from "../../assets/amina.jpg"
import blessing from "../../assets/blessing.jpg"



export default function Stories() {
    return (
        <section className="w-full px-6 py-12 bg-white rounded-lg shadow-sm">
            <div className="flex flex-col md:items-center md:justify-between gap-6">
                <div>
                    <h2 className="text-3xl text-center font-semibold text-gray-900">
                        Stories of Change
                    </h2>
                    <p className="mt-2 w-[70%] mx-auto text-center text-gray-600">
                        Read inspiring stories from the women benefiting from our programs and the
                        volunteers making a difference.
                    </p>
                </div>
                 <div className="w-full md:w-[80%] mx-auto px-4 pt-4">
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-[#6A1B9A] rounded-lg shadow-lg p-8 hover:shadow-xl transition">
                            <Image src={amina} alt="Amina&apos;s Story" className="mb-3 rounded-md" />
                            <h2 className="text-2xl font-bold text-center text-white mb-3">Amina’s Story</h2>
                            <p className="text-white font-semibold mb-4">Paikon-kore Community</p>
                            <p className="text-white text-justify mb-4">After receiving non-reusable pads and menstrual health training, Amina became a peer educator for girls in her school. </p>
                        </div>
                        <div className="bg-[#6A1B9A] rounded-lg shadow-lg p-8 hover:shadow-xl transition">
                            <Image src={blessing} alt="Blessing&apos;s Story" className="mb-3 rounded-md" />
                            <h2 className="text-2xl font-bold text-center text-white mb-3">Blessing’s Story</h2>
                            <p className="text-white font-semibold mb-4">Kwali  Area Council</p>
                            <p className="text-white text-justify mb-4">Blessing shared how the “Flow With Confidence” session helped her overcome shame and boosted her academic focus.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}