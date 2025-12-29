export default function Example() {
    return (
        <>
            <style>{`
                @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap");
                    
                * {
                    font-family: "Poppins", sans-serif;
                }
            `}</style>
            
            <section className='flex items-center justify-center p-4 py-20'>
                <div className='relative w-full max-w-5xl bg-linear-to-bl from-[#b19316] to-[#8a7414] rounded-2xl border border-[#b19316] px-6 py-16 pb-18 flex flex-col items-center text-center'>
                    <div className='inline-block bg-white/10 backdrop-blur-md rounded-full px-6 py-2 mb-6'>
                        <span className='text-slate-200 text-xs'>Package One</span>
                    </div>
            
                    <h1 className='text-3xl md:text-[40px]/13 font-medium text-white mb-8 max-w-2xl leading-tight'>
                        Redefine your brand for a bold,<br className="hidden md:block" /> future-ready presence.
                    </h1>
            
                    <div className='flex flex-col sm:flex-row items-center gap-4'>
                        <button className='bg-white text-gray-900 rounded-full px-6 py-3.5 text-sm flex items-center gap-2 hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl active:scale-95 cursor-pointer'>
                            Get Started
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth='2' stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                            </svg>
                        </button>
            
                        <button className='bg-white rounded-full p-1.5 pr-8 flex items-center gap-3 hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl active:scale-95 cursor-pointer'>
                            <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200" alt="Avatar" className='size-9 rounded-full object-cover' />
                            <div className="text-left flex flex-col justify-center gap-0.5">
                                <span className="text-xs text-gray-900 leading-tight">Grab 15 minutes with us</span>
                                <span className="text-xs text-gray-900 font-medium leading-tight flex items-center gap-1">
                                    Available <span className="w-1.5 h-1.5 bg-green-500 rounded-full inline-block"></span>
                                </span>
                            </div>
                        </button>
                    </div>
                </div>
            </section>
            <>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
            
                * {
                    font-family: 'Poppins', sans-serif;
                }
            `}</style>
            
            <h1 className="text-3xl font-semibold text-center mx-auto">Package Features</h1>
            <p className="text-sm text-slate-500 text-center mt-2 max-w-md mx-auto">Everything you need to manage, track, and grow your finances, securely and efficiently.</p>
            
            <div className="flex flex-wrap items-center justify-center gap-10 mt-16">
                <div className="max-w-80 hover:-translate-y-0.5 transition duration-300">
                    <img className="rounded-xl" src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/features/image-1.png" alt="" />
                    <h3 className="text-base font-semibold text-slate-700 mt-4">Feedback analyser</h3>
                    <p className="text-sm text-slate-600 mt-1">Get instant insights into your finances with live dashboards.</p>
                </div>
                <div className="max-w-80 hover:-translate-y-0.5 transition duration-300">
                    <img className="rounded-xl" src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/features/image-2.png" alt="" />
                    <h3 className="text-base font-semibold text-slate-700 mt-4">User management</h3>
                    <p className="text-sm text-slate-600 mt-1">Get instant insights into your finances with live dashboards.</p>
                </div>
                <div className="max-w-80 hover:-translate-y-0.5 transition duration-300">
                    <img className="rounded-xl" src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/features/image-3.png" alt="" />
                    <h3 className="text-base font-semibold text-slate-700 mt-4">Better invoicing</h3>
                    <p className="text-sm text-slate-600 mt-1">Get instant insights into your finances with live dashboards.</p>
                </div>
            </div>
        </>
        
        </>
        
    );
    
};