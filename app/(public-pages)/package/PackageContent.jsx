"use client";

import { useState } from 'react';
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
            <Package />
            <Addons onOpenPopup={handleOpenPopup} />
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
