"use client";

import { useState, Suspense } from 'react';
import Package from '@/sections/Package';
import Addons from '@/sections/addon';
import Popup from '@/sections/order-popup';
import { Reviews1 } from '@/components/reviews1';

export default function PackageContent() {
    const [showPopup, setShowPopup] = useState(false);

    const handleOpenPopup = () => setShowPopup(true);
    const handleClosePopup = () => setShowPopup(false);

    return (
        <>
            <Suspense fallback={<div>Loading...</div>}>
                <Package />
                <Addons onOpenPopup={handleOpenPopup} />
            </Suspense>
            <Reviews1   />

            {showPopup && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
                    <div className="relative">
                        <Popup onClose={handleClosePopup} />
                    </div>
                </div>
            )}
        </>
    );
}
