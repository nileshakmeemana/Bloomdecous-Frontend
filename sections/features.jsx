export default function Features() {
    return (
        <section className="flex flex-col items-center justify-center mt-40">
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
            
                * {
                    font-family: 'Poppins', sans-serif;
                }
            `}</style>
            
            <h1 className="text-3xl font-semibold text-center mx-auto">BloomdecoUS Features</h1>
            <p className="text-sm text-slate-500 text-center mt-2 max-w-md mx-auto">Everything you need for beautifully styled celebrations, from custom decor to seamless setup.</p>
            
            <div className="flex flex-wrap items-center justify-center gap-10 mt-16">
                <div className="max-w-80 hover:-translate-y-0.5 transition duration-300">
                    <img className="rounded-xl" src="/assets/features1.png" alt="" />
                    <h3 className="text-base font-semibold text-slate-700 mt-4">Custom Event Styling</h3>
                    <p className="text-sm text-slate-600 mt-1">Balloon garlands, backdrops, and neon designs tailored to your theme.</p>
                </div>
                <div className="max-w-80 hover:-translate-y-0.5 transition duration-300">
                    <img className="rounded-xl" src="/assets/features2.png" alt="" />
                    <h3 className="text-base font-semibold text-slate-700 mt-4">Personalized Baby Shower Decor</h3>
                    <p className="text-sm text-slate-600 mt-1">Custom decorations to celebrate your little one with love and style.</p>
                </div>
                <div className="max-w-80 hover:-translate-y-0.5 transition duration-300">
                    <img className="rounded-xl" src="/assets/features3.png" alt="" />
                    <h3 className="text-base font-semibold text-slate-700 mt-4">Elegant Backdrops & Centerpieces</h3>
                    <p className="text-sm text-slate-600 mt-1">Floral centerpieces and stylish backdrops for a refined look.</p>
                </div>
            </div>
        </section>
    );
};