'use client';

import { API_BASE_URL } from "@/lib/config";
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Pricing() {
    const router = useRouter();
    const [packages, setPackages] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPackages = async () => {
            try {
                const res = await fetch(
                    API_BASE_URL + 'Bloomdecous-Backend/API/Public/getPopularPackageData.php'
                );
                if (!res.ok) throw new Error('Fetch failed');
                const data = await res.json();
                setPackages(data);
                // setPackages(data.slice(0, 3));
            } catch (err) {
                console.error('Error fetching packages:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchPackages();
    }, []);

    return (
        <section className="flex flex-col items-center justify-center mt-40 mb-40 md:px-4 md:py-4">
             <div className="max-md:px-4">
                <h1 className="text-3xl font-semibold text-center mx-auto">Our Most Popular Packages</h1>
                <p className="text-sm text-slate-500 text-center mt-2 max-w-md mx-auto">Thoughtfully designed packages that bring elegance, creativity, and ease to your special moments.</p>
             </div>
        {loading ? (
            <div className="text-center py-20 text-gray-500">Loading packages...</div>
        ) : (
        <div className="flex flex-wrap items-stretch justify-center gap-6 mt-12">
            {packages.map((pkg) => {
                const cleanedDescription = pkg.Package_Description.replace(/<\/ul>/g, '');
                
                return (
                    <div 
                        key={pkg.Package_Id} 
                        className="w-72 flex flex-col text-center p-8 rounded-lg border min-h-[420px] bg-white text-gray-800/80 border-gray-200"
                    >
                        {/* <p className="font-semibold">{pkg.Package_Name}</p> */}
                        <h1 className="text-3xl font-semibold">
                            {/* ${Math.floor(pkg.Price)} */}
                            {pkg.Package_Name}
                            {/* <span className="text-sm font-normal text-gray-500">/package</span> */}
                        </h1>
                        <ul className="list-none text-sm mt-6 space-y-3 text-left text-gray-500">
                            <div
                                dangerouslySetInnerHTML={{
                                    __html: cleanedDescription.replace(
                                        /<li>(.*?)<\/li>/g,
                                        `
                                        <li class="flex items-center gap-3 mb-2">
                                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" class="flex-shrink-0">
                                                <path d="M7.162 13.5 2.887 9.225l1.07-1.069 3.205 3.207 6.882-6.882 1.069 1.07z" fill="#b19316"/>
                                            </svg>
                                            <p>$1</p>
                                        </li>
                                        `
                                    ),
                                }}
                            />
                        </ul>
                        <button 
                            type="button" 
                            onClick={() => router.push(`/package?packageId=${pkg.Package_Id}`)} 
                            className="cursor-pointer text-sm w-full py-2 rounded font-medium mt-auto transition-all bg-[#b19316] text-white hover:bg-[#a07f14]"
                        >
                            Book Now
                        </button>
                    </div>
                );
            })}
        </div>
        )}
        </section>
    );
};