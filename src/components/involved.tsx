

export default function GetInvolved() {
    return (
        <section className="relative bg-[url('../assets/involved.jpg')] bg-blend-multiply h-screen bg-cover bg-center py-16 px-4 sm:px-6 lg:px-8">
            <div className="absolute inset-0 bg-gradient-to-t from-black/100 to-transparent w-full mx-auto pt-60 text-center">
                <h1 className="text-5xl font-extrabold text-white mb-1">
                    Get Involved
                </h1>
                <div className="mx-auto w-24 h-1 rounded-full bg-[#00897B]" />
                
                <p className="mt-4 text-xl w-[80%] mx-auto text-white mb-3">
                    Become a volunteer. Partner with us. Support a girl today.
                </p>
                
                <p className="text-xl w-[80%] mx-auto text-white mb-12">
                    Together, we can build a healthier future for every woman.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="px-8 py-3 mt-4 bg-[#6A1B9A] w-[200px] mx-auto md:w-[300px] md:mx-0 hover:bg-[#C2185B] text-white font-semibold rounded-3xl transition-colors">
                        Volunteer
                    </button>
                    
                    <button className="px-8 py-3 mt-4 bg-[#C2185B] hover:bg-[#6A1B9A] w-[200px] mx-auto md:w-[300px] md:mx-0  text-white font-semibold rounded-3xl transition-colors">
                        Partner With Us
                    </button>
                    
                    <button className="px-8 py-3 mt-4 bg-[#6A1B9A] hover:bg-[#C2185B] w-[200px] mx-auto md:w-[300px] md:mx-0  text-white font-semibold rounded-3xl transition-colors">
                        Donate
                    </button>
                </div>
            </div>
        </section>
    );
}