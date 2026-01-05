export default function Hero() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center bg-[url('../assets/about.jpg')] bg-blend-multiply bg-cover bg-center">
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/100 to-transparent w-full mx-auto px-6 pt-30 md:pt-60 text-center antialiased">
        <h1 className="text-3xl sm:text-6xl font-bold text-white mb-6 leading-tight">
          Empowering<span className="text-[#6A1B9A]"> Girls. </span>
          Supporting<span className="text-[#C2185B]"> Women. </span>
          <span className="text-[#6A1B9A]">Strengthening Communities.</span>
        </h1>
        
        <p className="text-lg md:text-xl text-white mb-12 max-w-2xl mx-auto leading-relaxed">
          At HerWellness Foundation, we advance women&apos;s health, dignity, and lifelong well-being through education, advocacy, and community-centered interventions.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 text-center justify-center">
          <button className="px-8 py-3 bg-[#6A1B9A] hover:bg-[#C2185B] text-white font-semibold rounded-3xl transition-colors w-[70%] mx-auto sm:w-auto sm:mx-0">
            Join the Movement
          </button>
          <button className="px-8 py-3 border-2 border-[#C2185B] text-white hover:bg-[#C2185B] hover:text-white font-semibold rounded-3xl w-[70%] mx-auto sm:w-auto sm:mx-0 transition-colors">
            Support Our Work
          </button>
        </div>
      </div>
    </section>
  );
};
