'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function PageLoader() {
  const [isLoading, setIsLoading] = useState(true); // Loader visible initially
  const pathname = usePathname();

  // Show loader on initial load and page navigation
  useEffect(() => {
    const startTime = performance.now();

    // Show loader immediately
    setIsLoading(true);

    // Function to hide loader dynamically
    const handleLoad = () => {
      const endTime = performance.now();
      const loadTime = endTime - startTime;

      setTimeout(() => {
        setIsLoading(false);
      }, loadTime);
    };

    // If the page is already fully loaded
    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
    }

    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, [pathname]); // Trigger on route change

  // Disable scrolling while loader is active
  useEffect(() => {
    if (isLoading) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'auto';
  }, [isLoading]);

  // Return null if loader is not active
  if (!isLoading) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-white"
      style={{
        width: '100vw',
        height: '100vh',
      }}
    >
      <Image
        src="/assets/Bloom.svg" // Change to your logo path
        alt="Loading..."
        width={180}
        height={180}
        priority
        className="animate-pulse"
      />
    </div>
  );
}
