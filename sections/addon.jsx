'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

export default function Addons({ onOpenPopup }) {
    const searchParams = useSearchParams();
    const packageId = searchParams.get('packageId');
    const [addons, setAddons] = useState([]);
    const [loading, setLoading] = useState(true);
    const [checkedAddons, setCheckedAddons] = useState({});

    useEffect(() => {
        const fetchAddons = async () => {
            if (!packageId) {
                console.log('No packageId found in URL');
                setLoading(false);
                return;
            }

            try {
                console.log('Fetching addons for package:', packageId);
                const response = await fetch(
                    `http://localhost/Bloomdecous-Backend/API/Public/viewPackageData.php?Package_Id=${packageId}`
                );
                const data = await response.json();
                console.log('Received addons:', data.addons);
                setAddons(data.addons || []);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching addons:', error);
                setLoading(false);
            }
        };

        fetchAddons();
    }, [packageId]);

    return (
        <section className="mt-20 mb-20">
            <h1 className="text-3xl font-semibold text-center mt-10 mb-10 mx-auto">Extra Addons</h1>
            {loading ? (
                <div className="text-center py-8">Loading addons...</div>
            ) : addons.length === 0 ? (
                <div className="text-center py-8">No addons available.</div>
            ) : (
                <div className="grid border rounded-lg max-w-5xl mx-auto border-gray-200/70 grid-cols-1 divide-y divide-gray-200/70 lg:grid-cols-3 lg:divide-x lg:divide-y-0">
                    {addons.map((addon) => (
                        <div 
                            key={addon.Id} 
                            onClick={() => setCheckedAddons(prev => ({ ...prev, [addon.Id]: !prev[addon.Id] }))}
                            className="cursor-pointer flex flex-col items-start gap-4 hover:bg-gray-50 transition duration-300 p-8 pb-14"
                        >
                            <div className="flex items-center gap-3 text-gray-500">
                                <input 
                                    type="checkbox" 
                                    checked={checkedAddons[addon.Id] || false}
                                    onChange={() => setCheckedAddons(prev => ({ ...prev, [addon.Id]: !prev[addon.Id] }))}
                                    aria-label={`Select ${addon.Addon_Name}`} 
                                    className="h-4 w-4 accent-black cursor-pointer" 
                                />
                                <h2 className="font-medium text-base">{addon.Addon_Name}</h2>
                            </div>
                            <p className="text-sm text-gray-600">${addon.Addon_Price}</p>
                        </div>
                    ))}
                </div>
            )}
            <div className="max-w-5xl mx-auto flex items-start gap-3 mt-5 mb-5">
                <svg className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" />
                </svg>
                <p className="text-1xl font-semibold text-red-600">Delivery fee will be added at the end depending on the location.(delivery setup and breakdown + tax)</p>
            </div>
            <div className="max-w-5xl mx-auto flex justify-center">
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