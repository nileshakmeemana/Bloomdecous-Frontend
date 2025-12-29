export default function PackageHero() {
    return (
        <section className="py-12 md:py-20">
            <div className="max-w-6xl mx-2 md:mx-auto p-px rounded-2xl bg-gradient-to-r from-[#b19316]/20 to-[#b19316]/30">
                <div className="flex flex-col items-center justify-center text-center py-12 md:py-16 rounded-[15px] bg-white/90 backdrop-blur-sm px-6 md:px-12">
                    <div className="flex items-center justify-center bg-white px-3 py-1.5 shadow gap-1 rounded-full text-xs">
                        <span className="bg-[#b19316] bg-clip-text text-transparent font-medium">Trusted by Happy Clients</span>
                    </div>
                    <h2 className="text-2xl md:text-4xl font-medium mt-2 leading-[1.2]">
                        Elevate Your Celebration with <br />
                        <span className="bg-[#b19316] bg-clip-text text-transparent">Expert Styling </span>
                        & Beautiful Decor!
                    </h2>
                    <p className="text-slate-500 mt-2 max-w-lg max-md:text-sm">Create unforgettable moments with thoughtfully designed event packages, custom decor, and seamless setup from start to finish.</p>
                    <button type="button" className="bg-[#b19316] to-blue-500 text-white text-sm px-5 py-2.5 rounded-xl font-medium mt-4 hover:scale-105 active:scale-95 transition-all duration-300">
                        Get Your Quote Today
                    </button>
                </div>
            </div>
        </section>
    );
};