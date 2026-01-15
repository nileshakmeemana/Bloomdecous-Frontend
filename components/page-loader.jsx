'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function PageLoader() {
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    useEffect(() => {
        let timeoutId;
        let isComponentMounted = true;

        const handleRouteChangeStart = () => {
            // Show loader only if page takes more than 800ms to load
            timeoutId = setTimeout(() => {
                if (isComponentMounted) {
                    setIsLoading(true);
                }
            }, 10);
        };

        const handleRouteChangeComplete = () => {
            clearTimeout(timeoutId);
            if (isComponentMounted) {
                setIsLoading(false);
            }
        };

        // Listen for route changes
        const handleBeforeUnload = () => {
            handleRouteChangeStart();
        };

        window.addEventListener('beforeunload', handleBeforeUnload);

        return () => {
            isComponentMounted = false;
            clearTimeout(timeoutId);
            window.removeEventListener('beforeunload', handleBeforeUnload);
        };
    }, []);

    // Hide loader on mount
    useEffect(() => {
        setIsLoading(false);
    }, []);

    // Hide body overflow when loading
    useEffect(() => {
        if (isLoading) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isLoading]);

    if (!isLoading) return null;

    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white">
            <div className="text-center">
                <img
                    src="/assets/Bloom.svg"
                    alt="Loading..."
                    style={{
                        width: '300px',
                        height: '80px',
                        margin: '0 auto'
                    }}
                />
            </div>
        </div>
    );
}
