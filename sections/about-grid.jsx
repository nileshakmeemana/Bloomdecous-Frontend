export default function AboutGrid() {
    return (
        <section className="mt-40 mb-40 relative overflow-hidden" >
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
            
                * {
                    font-family: 'Poppins', sans-serif;
                }
            `}</style>
            <h1 className="text-3xl font-semibold text-center mx-auto">About Our Work</h1>
            <p className="text-sm text-slate-500 text-center mt-2 max-w-lg mx-auto">
                From concept to setup, we provide full service event decor designed to elevate every special moment.
            </p>
            <div className="relative max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 px-8 md:px-6 lg:px-0 pt-16">
                <div className="size-[520px] -top-80 left-1/2 -translate-x-1/2 rounded-full absolute blur-[300px] -z-10 bg-[#FBFFE1]"></div>
                <div>
                    <div className="size-10 p-2 bg-indigo-50 border border-indigo-200 rounded flex items-center justify-center">
                        <svg className="w-6 h-6 text-yellow-400 fill-current" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                    </div>
                    <div className="mt-5 space-y-2">
                        <h3 className="text-base font-medium text-slate-600">Seamless Setup & Execution</h3>
                        <p className="text-sm text-slate-500">On-time delivery, professional setup, and stress free breakdown.</p>
                    </div>
                </div>
                <div>
                    <div className="size-10 p-2 bg-indigo-50 border border-indigo-200 rounded flex items-center justify-center">
                        <svg className="w-6 h-6 text-yellow-400 fill-current" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                    </div>
                    <div className="mt-5 space-y-2">
                        <h3 className="text-base font-medium text-slate-600">Beautifully Styled Designs</h3>
                        <p className="text-sm text-slate-500">Elegant backdrops, balloons, and florals styled to be photo ready.</p>
                    </div>
                </div>
                <div>
                    <div className="size-10 p-2 bg-indigo-50 border border-indigo-200 rounded flex items-center justify-center">
                        <svg className="w-6 h-6 text-yellow-400 fill-current" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                    </div>
                    <div className="mt-5 space-y-2">
                        <h3 className="text-base font-medium text-slate-600">Ready to Go Packages</h3>
                        <p className="text-sm text-slate-500">Pre designed packages that make event planning simple.</p>
                    </div>
                </div>
                <div>
                    <div className="size-10 p-2 bg-indigo-50 border border-indigo-200 rounded flex items-center justify-center">
                        <svg className="w-6 h-6 text-yellow-400 fill-current" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                    </div>
                    <div className="mt-5 space-y-2">
                        <h3 className="text-base font-medium text-slate-600">Clear & Hassle Free Process</h3>
                        <p className="text-sm text-slate-500">Easy booking, clear communication, and transparent pricing.</p>
                    </div>
                </div>
                <div>
                    <div className="size-10 p-2 bg-indigo-50 border border-indigo-200 rounded flex items-center justify-center">
                        <svg className="w-6 h-6 text-yellow-400 fill-current" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                    </div>
                    <div className="mt-5 space-y-2">
                        <h3 className="text-base font-medium text-slate-600">Fully Customizable Decor</h3>
                        <p className="text-sm text-slate-500">Colors, themes, and addons tailored to your vision.</p>
                    </div>
                </div>
                <div>
                    <div className="size-10 p-2 bg-indigo-50 border border-indigo-200 rounded flex items-center justify-center">
                        <svg className="w-6 h-6 text-yellow-400 fill-current" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                    </div>
                    <div className="mt-5 space-y-2">
                        <h3 className="text-base font-medium text-slate-600">Quality & Safety First</h3>
                        <p className="text-sm text-slate-500">Premium materials and secure installations you can trust.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};