'use client';

import { useRouter } from 'next/navigation';

export default function PackageBlocks() {
    const router = useRouter();
    return (
        <div className="grid border rounded-lg max-w-6xl mx-auto border-gray-200/70 grid-cols-1 divide-y divide-gray-200/70 lg:grid-cols-3 lg:divide-x lg:divide-y-0" >
            <div className="flex flex-col items-start gap-4 hover:bg-gray-50 transition duration-300 p-8 pb-14">
                <div className="flex items-center gap-2 text-gray-500">
                    <h2 className="font-medium text-base">AI Layout Generator</h2>
                </div>
                <h1 className="text-3xl font-semibold">$79<span className="text-sm font-normal">/month</span></h1>

                <p className="text-gray-500 text-sm/6 max-w-72">
                    Automatically creates a complete website layout from a single prompt.
                </p>
                <ul className="list-none text-gray-500 text-sm mt-6 space-y-1">
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
                <button type="button" onClick={() => router.push('/package')} className="cursor-pointer bg-[#b19316] text-sm w-full py-2 rounded text-white font-medium mt-7 hover:bg-[#a07f14] transition-all">
                    Book Now
                </button>
            </div>
            <div className="flex flex-col items-start gap-4 hover:bg-gray-50 transition duration-300 p-8 pb-14">
                <div className="flex items-center gap-2 text-gray-500">
                    <h2 className="font-medium text-base">AI Content Writer</h2>
                </div>
                <h1 className="text-3xl font-semibold">$79<span className="text-sm font-normal">/month</span></h1>

                <p className="text-gray-500 text-sm/6 max-w-72">
                    Generates high-quality headlines, text, and call-to-actions instantly.
                </p>
                <ul className="list-none text-gray-500 text-sm mt-6 space-y-1">
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
                <button type="button" onClick={() => router.push('/package')} className="cursor-pointer bg-[#b19316] text-sm w-full py-2 rounded text-white font-medium mt-7 hover:bg-[#a07f14] transition-all">
                    Book Now
                </button>
            </div>
            <div className="flex flex-col items-start gap-4 hover:bg-gray-50 transition duration-300 p-8 pb-14">
                <div className="flex items-center gap-2 text-gray-500">
                    <h2 className="font-medium text-base">Performance Optimization</h2>
                </div>
                <h1 className="text-3xl font-semibold">$79<span className="text-sm font-normal">/month</span></h1>

                <p className="text-gray-500 text-sm/6 max-w-72">Ensures fast load speed, clean code, and high PageSpeed scores.</p>
                <ul className="list-none text-gray-500 text-sm mt-6 space-y-1">
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
                <button type="button" onClick={() => router.push('/package')} className="cursor-pointer bg-[#b19316] text-sm w-full py-2 rounded text-white font-medium mt-7 hover:bg-[#a07f14] transition-all">
                    Book Now
                </button>
            </div>
            <div className="flex flex-col items-start gap-4 hover:bg-gray-50 transition duration-300 p-8 pb-14">
                <div className="flex items-center gap-2 text-gray-500">
                    <h2 className="font-medium text-base">Performance Optimization</h2>
                </div>
                <h1 className="text-3xl font-semibold">$79<span className="text-sm font-normal">/month</span></h1>

                <p className="text-gray-500 text-sm/6 max-w-72">Ensures fast load speed, clean code, and high PageSpeed scores.</p>
                <ul className="list-none text-gray-500 text-sm mt-6 space-y-1">
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
                <button type="button" onClick={() => router.push('/package')} className="cursor-pointer bg-[#b19316] text-sm w-full py-2 rounded text-white font-medium mt-7 hover:bg-[#a07f14] transition-all">
                    Book Now
                </button>
            </div>
            <div className="flex flex-col items-start gap-4 hover:bg-gray-50 transition duration-300 p-8 pb-14">
                <div className="flex items-center gap-2 text-gray-500">
                    <h2 className="font-medium text-base">Performance Optimization</h2>
                </div>
                <h1 className="text-3xl font-semibold">$79<span className="text-sm font-normal">/month</span></h1>

                <p className="text-gray-500 text-sm/6 max-w-72">Ensures fast load speed, clean code, and high PageSpeed scores.</p>
                <ul className="list-none text-gray-500 text-sm mt-6 space-y-1">
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
                <button type="button" onClick={() => router.push('/package')} className="cursor-pointer bg-[#b19316] text-sm w-full py-2 rounded text-white font-medium mt-7 hover:bg-[#a07f14] transition-all">
                    Book Now
                </button>
            </div>
            
        </div>
    );
};