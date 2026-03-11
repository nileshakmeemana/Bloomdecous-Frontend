'use client';

import { API_BASE_URL } from "@/lib/config";
import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Popup from './order-popup';

export default function Addons() {
    const searchParams = useSearchParams();
    const packageId = searchParams.get('packageId');
    const [addons, setAddons] = useState([]);
    const [loading, setLoading] = useState(true);
    const [checkedAddons, setCheckedAddons] = useState({});

    // State for popup
    const [showPopup, setShowPopup] = useState(false);
    const [selectedPackageId, setSelectedPackageId] = useState('');
    const [previewImage, setPreviewImage] = useState(null);

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
                    `${API_BASE_URL}API/Public/viewPackageData.php?Package_Id=${packageId}`
                );
                const data = await response.json();
                console.log('Received addons:', data.addons);

                setAddons(data.addons || []);

                // Initialize checkedAddons state
                const initialChecked = {};
                (data.addons || []).forEach((addon) => {
                    initialChecked[addon.Id] = false;
                });
                setCheckedAddons(initialChecked);

                setLoading(false);
            } catch (error) {
                console.error('Error fetching addons:', error);
                setLoading(false);
            }
        };

        fetchAddons();
    }, [packageId]);

    const handleOpenPopup = (pkgId) => {
        setSelectedPackageId(pkgId);
        setShowPopup(true);
    };

    const handleClosePopup = () => {
        setShowPopup(false);
        setSelectedPackageId('');
    };

    // Merge checked state into addons before sending to Popup
    const addonsWithChecked = addons.map((addon) => ({
        ...addon,
        checked: checkedAddons[addon.Id] || false,
    }));

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
                            onClick={() =>
                                setCheckedAddons((prev) => ({
                                    ...prev,
                                    [addon.Id]: !prev[addon.Id],
                                }))
                            }
                            className="cursor-pointer flex items-start gap-6 hover:bg-gray-50 transition-all duration-300 p-8"
                        >
                            {/* Image Section */}
                            {addon.Img && (
                                <div
                                    className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 group relative"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setPreviewImage(addon.Img);
                                    }}
                                >
                                    <img
                                        src={addon.Img}
                                        alt={addon.Addon_Name}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />

                                    {/* Hover overlay */}
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition duration-300"></div>
                                </div>
                            )}

                            {/* Content Section */}
                            <div className="flex flex-col gap-2">
                                <div className="flex items-center gap-3 text-gray-700">
                                    <input
                                        type="checkbox"
                                        checked={checkedAddons[addon.Id] || false}
                                        onClick={(e) => e.stopPropagation()}
                                        onChange={() =>
                                            setCheckedAddons((prev) => ({
                                                ...prev,
                                                [addon.Id]: !prev[addon.Id],
                                            }))
                                        }
                                        className="h-4 w-4 accent-black cursor-pointer"
                                    />
                                    <h2 className="font-semibold text-base">
                                        {addon.Addon_Name}
                                    </h2>
                                </div>

                                <p
                                    className="text-sm text-gray-600 leading-relaxed"
                                    dangerouslySetInnerHTML={{
                                        __html: addon.Addon_description,
                                    }}
                                ></p>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            <div className="max-w-5xl mx-auto flex items-start gap-3 mt-5 mb-5">
                <svg
                    className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                >
                    <path d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" />
                </svg>
                <p className="text-1xl font-semibold text-red-600">
                    Delivery fee will be added at the end depending on the location.(delivery setup and breakdown + tax)
                </p>
            </div>

            <div className="max-w-5xl mx-auto flex justify-center">
                <button
                    className="mt-8 rounded-full btn px-8 py-4 font-medium text-white transition hover:opacity-90"
                    onClick={() => handleOpenPopup(packageId)}
                >
                    Get Quote
                </button>
            </div>

            {showPopup && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
                    <Popup
                        onClose={handleClosePopup}
                        packageId={selectedPackageId}
                        addons={addonsWithChecked} // pass checked addons
                    />
                </div>
            )}

            {previewImage && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
                    
                    {/* Close Button */}
                    <button
                        onClick={() => setPreviewImage(null)}
                        className="absolute top-6 right-6 text-white text-3xl font-light hover:scale-110 transition-transform duration-200"
                    >
                        &times;
                    </button>

                    {/* Background click closes modal */}
                    <div
                        className="absolute inset-0"
                        onClick={() => setPreviewImage(null)}
                    ></div>

                    {/* Image */}
                    <img
                        src={previewImage}
                        alt="Preview"
                        onClick={(e) => e.stopPropagation()}
                        className="relative max-w-[90%] max-h-[90%] rounded-lg shadow-2xl transition-transform duration-300 scale-100"
                    />
                </div>
            )}
            
        </section>
    );
}