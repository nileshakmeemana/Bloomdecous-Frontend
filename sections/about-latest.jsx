export default function Example() {
    return (
        <>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
            
                * {
                    font-family: 'Poppins', sans-serif;
                }
            `}</style>
            
            <section className="flex flex-col items-center justify-center mt-20 px-4 lg:px-0">
                <div className="max-md:px-0 max-lg:w-full">
                    <h1 className="text-xs bg-[#b19316] text-white font-medium px-3 py-1 rounded-full w-fit mb-4">About Us</h1>
                    <p className="bg-gradient-to-r from-slate-800 to-[#4D6EA3] text-transparent bg-clip-text text-3xl text-left font-medium max-w-2xl">Why Clients Trust BloomdecoUS to Design Their Celebrations</p>
                    <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-6 mt-6">
                        <img src="/assets/About.svg" alt="features showcase" className="max-lg:w-full" />
                        <img src="/assets/About2.svg" alt="features showcase" className="max-lg:w-full" />
                    </div>
                </div>
            </section>
        </>
    );
};