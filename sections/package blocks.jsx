'use client';

import { API_BASE_URL } from "@/lib/config";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function PackageBlocks() {
    const router = useRouter();
    const [packages, setPackages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    // Function to format description with ul/li tags if not already formatted
    const formatDescription = (description) => {
        if (!description) return '';
        
        // Check if already has ul/li tags
        if (description.includes('<ul>') || description.includes('<li>')) {
            return description;
        }
        
        // Split by newlines and filter empty lines
        const lines = description.split('\n').filter(line => line.trim());
        
        // If no newlines, split by common delimiters like commas or bullets
        let items = lines;
        if (lines.length === 1) {
            items = description.split(/[,•-]/).filter(item => item.trim());
        }
        
        // If still only one item, just return with li tag
        if (items.length === 1) {
            items = [description];
        }
        
        // Wrap in ul/li tags
        const listHTML = `<ul>${items.map(item => `<li>${item.trim()}</li>`).join('')}</ul>`;
        return listHTML;
    };

    useEffect(() => {
        const fetchPackages = async () => {
            try {
                const res = await fetch(
                    API_BASE_URL + 'Bloomdecous-Backend/API/Public/getAllPackageData.php'
                );

                if (!res.ok) throw new Error('Fetch failed');

                const data = await res.json();
                setPackages(data);
            } catch (err) {
                console.error(err);
                setError(true);
            } finally {
                setLoading(false);
            }
        };

        fetchPackages();
    }, []);

    if (loading) {
        return <div className="text-center py-20 text-gray-500">Loading packages...</div>;
    }

    if (error) {
        return <div className="text-center py-20 text-red-500">Failed to load packages.</div>;
    }

    return (
        <div className="grid border rounded-lg max-w-6xl mx-auto border-gray-200/70 grid-cols-1 divide-y divide-gray-200/70 lg:grid-cols-3 lg:divide-x lg:divide-y-0">
            {packages.map((pkg) => {
                const formattedDescription = formatDescription(pkg.Package_Description);
                const cleanedDescription = formattedDescription.replace(/<\/?ul>/g, '');

                return (
                    <div
                        key={pkg.Package_Id}
                        className="flex flex-col items-start gap-4 hover:bg-gray-50 transition duration-300 p-8 pb-14 h-full"
                    >
                        <div className="flex-1 flex flex-col gap-4 w-full">
                            <div className="flex items-center gap-2 text-gray-500">
                                <h1 className="font-medium text-3xl">
                                    {pkg.Package_Name}
                                </h1>
                            </div>

                            {/* <h1 className="text-3xl font-semibold">
                                ${pkg.Price}
                                <span className="text-sm font-normal"> /package</span>
                            </h1> */}

                            <ul className="list-none text-gray-500 text-sm mt-6 space-y-1">
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: cleanedDescription.replace(
                                            /<li>(.*?)<\/li>/g,
                                            `<li class="flex items-center gap-2">
                                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M7.162 13.5 2.887 9.225l1.07-1.069 3.205 3.207 6.882-6.882 1.069 1.07z" fill="#b19316"/>
                                                </svg>
                                                <p>$1</p>
                                            </li>`
                                        ),
                                    }}
                                />
                            </ul>
                        </div>

                        {/* BOOK NOW WITH PACKAGE ID */}
                        <button
                            type="button"
                            onClick={() =>
                                router.push(`/package?packageId=${pkg.Package_Id}`)
                            }
                            className="cursor-pointer bg-[#b19316] text-sm w-full py-2 rounded text-white font-medium mt-auto hover:bg-[#a07f14] transition-all"
                        >
                            Book Now
                        </button>
                    </div>
                );
            })}
        </div>
    );
}
