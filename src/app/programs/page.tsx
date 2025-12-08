import Footer from "@/src/components/footer";
import Navbar from "@/src/components/navbar";


export default function Programs() {
    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-white">
                <div className="text-black py-12 px-4">
                    <div className="w-full text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Programs</h1>
                        <p className="text-lg md:opacity-90">Empowering women and girls through targeted interventions</p>
                    </div>
                </div>

                <div className="w-[90%] md:w-[80%] mx-auto px-4 py-16">
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-[#6A1B9A] rounded-lg shadow-lg p-8 hover:shadow-xl transition">
                            <div className="h-9 w-9 text-2xl text-center mb-3 ring-1 ring-[#C2185B] rounded-full flex-shrink-0">🌸</div>
                            <h2 className="text-2xl font-bold text-white mb-3">Flow With Confidence</h2>
                            <p className="text-white font-semibold mb-4">Menstrual Health Program</p>
                            <ul className="space-y-2 text-black">
                                <li className="flex items-start"><span className="mr-2">✓</span> Menstrual health classes</li>
                                <li className="flex items-start"><span className="mr-2">✓</span> Non-reusable sanitary pad distribution</li>
                                <li className="flex items-start"><span className="mr-2">✓</span> Menstrual hygiene management guides</li>
                                <li className="flex items-start"><span className="mr-2">✓</span> Body confidence sessions</li>
                                <li className="flex items-start"><span className="mr-2">✓</span> Educative pamphlets</li>
                            </ul>
                        </div>

                        <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition">
                            <div className="h-9 w-9 text-2xl text-center mb-3 ring-1 ring-[#C2185B] rounded-full flex-shrink-0">💼</div>
                            <h2 className="text-2xl font-bold text-[#6A1B9A] mb-3">Women&apos;s Livelihood & Economic Empowerment</h2>
                            <p className="text-gray-600 mb-4">Equipping women and adolescent girls with practical skills, small-enterprise support, financial literacy, and confidence-building tools to achieve long-term economic stability.</p>
                        </div>

                        <div className="bg-[#6A1B9A] rounded-lg shadow-lg p-8 hover:shadow-xl transition">
                            <div className="h-9 w-9 text-2xl text-center mb-3 ring-1 ring-[#C2185B] rounded-full flex-shrink-0">💻</div>
                            <h2 className="text-2xl font-bold text-white mb-3">Bridging the Digital Divide</h2>
                            <p className="text-black mb-4">A digital inclusion initiative improving access to digital skills, online safety knowledge, basic ICT training, and pathways to tech-enabled opportunities.</p>
                        </div>

                        <div className="bg-[#6A1B9A] rounded-lg shadow-lg p-8 hover:shadow-xl transition">
                            <div className="h-9 w-9 text-2xl text-center mb-3 ring-1 ring-[#C2185B] rounded-full flex-shrink-0">🤝</div>
                            <h2 className="text-2xl font-bold text-white mb-3">Interfaith Dialogue to End Child Marriage</h2>
                            <p className="text-black mb-4">A community engagement platform where religious and traditional leaders come together to challenge harmful norms and promote girls' rights.</p>
                        </div>

                        <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition md:col-span-1">
                            <div className="h-9 w-9 text-2xl text-center mb-3 ring-1 ring-[#C2185B] rounded-full flex-shrink-0">⚖️</div>
                            <h2 className="text-2xl font-bold text-[#6A1B9A] mb-3">Women&apos; Health Advocacy & Policy Engagement</h2>
                            <p className="text-gray-600 mb-4">Working with policymakers, communities, and development partners to push for health systems and policies that protect and uplift girls and women.</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
};
