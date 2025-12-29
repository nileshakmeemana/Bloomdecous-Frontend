"use client";

const SearchSection = () => {
  return (
    <section className="w-full flex justify-center">
      <form className=" bg-white text-gray-500 rounded-lg px-6 py-4 flex flex-col md:flex-row max-md:items-start gap-4 max-md:mx-auto">

        <div>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
              <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                d="M4 10h16M8 14h8m-4-7V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z" />
            </svg>
            <label>Package</label>
          </div>
          <input
            type="text"
            placeholder="Type here"
            required
            className="rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none"
          />
        </div>

        <div>
          <label>Booking Date</label>
          <div><input type="date" className="rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none" /></div>
        </div>

        <div>
          <label>Number of Guests</label>
          <div><input type="number" className="rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none" /></div>
        </div>

        <div>
          <label>Check Availability</label>
          <button className="cursor-pointer flex items-center gap-1 bg-[#b19316] text-white px-10 py-1.5 mt-1.5 rounded text-sm hover:bg-[#8c6f0a] transition">
            Check
          </button>
        </div>
      </form>
    </section>
  );
};

export default SearchSection;
