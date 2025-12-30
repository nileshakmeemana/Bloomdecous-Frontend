export default function Addons({ onOpenPopup }) {
    return (
        <section className="mt-20 mb-20">
            <h1 className="text-3xl font-semibold text-center mt-10 mb-10 mx-auto">Extra Addons</h1>
            <div className="grid border rounded-lg max-w-5xl mx-auto border-gray-200/70 grid-cols-1 divide-y divide-gray-200/70 lg:grid-cols-3 lg:divide-x lg:divide-y-0" >
                <div className=" cursor-pointer flex flex-col items-start gap-4 hover:bg-gray-50 transition duration-300 p-8 pb-14">
                    <div className="flex items-center gap-3 text-gray-500">
                        <input type="checkbox" aria-label="Select AI Layout Generator" className="h-4 w-4 accent-black cursor-pointer" />
                        <h2 className="font-medium text-base">AI Layout Generator</h2>
                    </div>
                </div>
                <div className=" cursor-pointer flex flex-col items-start gap-4 hover:bg-gray-50 transition duration-300 p-8 pb-14">
                    <div className="flex items-center gap-3 text-gray-500">
                        <input type="checkbox" aria-label="Select AI Content Writer" className="h-4 w-4 accent-black cursor-pointer" />
                        <h2 className="font-medium text-base">AI Content Writer</h2>
                    </div>
                    
                </div>
                <div className="cursor-pointer flex flex-col items-start gap-4 hover:bg-gray-50 transition duration-300 p-8 pb-14">
                    <div className="flex items-center gap-3 text-gray-500">
                        <input type="checkbox" aria-label="Select Performance Optimization" className="h-4 w-4 accent-black cursor-pointer" />
                        <h2 className="font-medium text-base">Performance Optimization</h2>
                    </div>
                </div>
                <div className="cursor-pointer flex flex-col items-start gap-4 hover:bg-gray-50 transition duration-300 p-8 pb-14">
                    <div className="flex items-center gap-3 text-gray-500">
                        <input type="checkbox" aria-label="Select Performance Optimization" className="h-4 w-4 accent-black cursor-pointer" />
                        <h2 className="font-medium text-base">Performance Optimization</h2>
                    </div>
                </div>
                <div className="cursor-pointer flex flex-col items-start gap-4 hover:bg-gray-50 transition duration-300 p-8 pb-14">
                    <div className="flex items-center gap-3 text-gray-500">
                        <input type="checkbox" aria-label="Select Performance Optimization" className="h-4 w-4 accent-black cursor-pointer" />
                        <h2 className="font-medium text-base">Performance Optimization</h2>
                    </div>
                </div>
                <div className="cursor-pointer flex flex-col items-start gap-4 hover:bg-gray-50 transition duration-300 p-8 pb-14">
                    <div className="flex items-center gap-3 text-gray-500">
                        <input type="checkbox" aria-label="Select Performance Optimization" className="h-4 w-4 accent-black cursor-pointer" />
                        <h2 className="font-medium text-base">Performance Optimization</h2>
                    </div>
                </div>
            </div>
            <div className="max-w-6xl mx-auto flex justify-center">
                <button
                    className="mt-8 rounded-full btn px-8 py-4 font-medium text-white transition hover:opacity-90"
                    onClick={onOpenPopup}
                >
                    Get Quote
                </button>
            </div>
        </section>
    );
};