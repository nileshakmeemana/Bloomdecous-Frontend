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
            
            <section>
                <h1 className="text-3xl font-semibold text-center mx-auto">Package Features</h1>
                <p className="text-sm text-slate-500 text-center mt-2 max-w-md mx-auto">Everything you need to manage, track, and grow your finances, securely and efficiently.</p>
                
                <div className="border border-gray-200 rounded-lg max-w-5xl mx-auto mt-16 grid grid-cols-1 divide-y divide-gray-200 lg:grid-cols-3 lg:divide-x lg:divide-y-0">
                    <div className="p-8 flex flex-col hover:bg-gray-50 transition duration-300">
                        <h3 className="text-base font-semibold text-slate-700">Package One</h3>
                        <p className="text-sm text-slate-600 mt-1">Get instant insights into your finances with live dashboards.</p>
                    </div>
                    <div className="p-8 hover:bg-gray-50 transition duration-300 flex flex-col justify-between">
                        <ul className="list-none text-gray-500 text-sm space-y-2">
                            <li className="flex items-center gap-2">
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.162 13.5 2.887 9.225l1.07-1.069 3.205 3.207 6.882-6.882 1.069 1.07z" fill="#b19316"/>
                                </svg>
                                <p>Access to all basic courses</p>
                            </li>
                            <li className="flex items-center gap-2">
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.162 13.5 2.887 9.225l1.07-1.069 3.205 3.207 6.882-6.882 1.069 1.07z" fill="#b19316"/>
                                </svg>
                                <p>Community support</p>
                            </li>
                            <li className="flex items-center gap-2">
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.162 13.5 2.887 9.225l1.07-1.069 3.205 3.207 6.882-6.882 1.069 1.07z" fill="#b19316"/>
                                </svg>
                                <p>10 practice projects</p>
                            </li>
                            <li className="flex items-center gap-2">
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.162 13.5 2.887 9.225l1.07-1.069 3.205 3.207 6.882-6.882 1.069 1.07z" fill="#b19316"/>
                                </svg>
                                <p>Course completion certificate</p>
                            </li>
                            <li className="flex items-center gap-2">
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.162 13.5 2.887 9.225l1.07-1.069 3.205 3.207 6.882-6.882 1.069 1.07z" fill="#b19316"/>
                                </svg>
                                <p>Basic code review</p>
                            </li>
                        </ul>
                    </div>
                    <div className="p-8 flex items-center justify-center hover:bg-gray-50 transition duration-300">
                        <h1 className="text-6xl font-semibold">$29<span className="text-gray-500 text-sm font-normal"></span></h1>
                    </div>
                </div>
            </section>
            </>
        </>
        
    );
    
};