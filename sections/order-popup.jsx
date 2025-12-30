export default function Popup({ onClose }) {
    return (
        <div className="md:grid md:grid-cols-2 max-w-4xl bg-white mx-4 md:mx-auto rounded-xl">
            <img src="/assets/roses.jpg"
                alt="roses" className="hidden md:block w-full max-w-lg rounded-l-xl h-full" />
            <div className="relative flex items-center justify-center">
                <button
                    className="absolute top-6 right-6 bg-gray-200 rounded-full p-2.5 cursor-pointer"
                    aria-label="Close"
                    onClick={onClose}
                >
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13 2 2 13M2 2l11 11" stroke="#1F2937" strokeOpacity=".7" strokeWidth="3"
                            strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
                <div className="max-md:py-14 py-10 px-6 md:px-10 w-full">
                    <p className="text-sm font-medium text-[#b19316] text-center md:text-left">Request a quote</p>
                    <h1 className="text-3xl font-semibold text-slate-800 text-center md:text-left mt-1">Tell us about your event</h1>
                    <p className="mt-3 text-gray-500 text-center md:text-left">Share your details and we’ll get back to craft the perfect package for you.</p>

                    <form className="mt-8 space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="flex flex-col text-sm">
                                <label className="text-black/70" htmlFor="quote-name">Your Name</label>
                                <input id="quote-name" name="name" className="h-11 px-3 mt-2 w-full border border-gray-300 rounded outline-none focus:border-[#b19316]" type="text" required />
                            </div>
                            <div className="flex flex-col text-sm">
                                <label className="text-black/70" htmlFor="quote-email">Your Email</label>
                                <input id="quote-email" name="email" className="h-11 px-3 mt-2 w-full border border-gray-300 rounded outline-none focus:border-[#b19316]" type="email" required />
                            </div>
                        </div>

                        <div className="flex flex-col text-sm">
                            <label className="text-black/70" htmlFor="quote-phone">Phone (optional)</label>
                            <input id="quote-phone" name="phone" className="h-11 px-3 mt-2 w-full border border-gray-300 rounded outline-none focus:border-[#b19316]" type="tel" placeholder="(+1) 555-123-4567" />
                        </div>

                        <div className="flex flex-col text-sm">
                            <label className="text-black/70" htmlFor="quote-message">Event Details</label>
                            <textarea id="quote-message" name="message" className="w-full mt-2 p-3 h-28 border border-gray-300 rounded resize-none outline-none focus:border-[#b19316]" placeholder="Event type, date, location, special requests" required></textarea>
                        </div>

                        <div className="flex items-center gap-3 text-sm">
                            <input id="quote-updates" name="updates" type="checkbox" className="h-4 w-4 accent-black" />
                            <label htmlFor="quote-updates" className="text-gray-600">Send me occasional updates about packages.</label>
                        </div>

                        <button type="submit" className="w-full md:w-auto cursor-pointer rounded-full bg-[#b19316] text-sm px-10 py-3 text-white font-medium hover:opacity-90 active:scale-95 transition">Send request</button>
                    </form>
                </div>
            </div>
        </div>
    );
};