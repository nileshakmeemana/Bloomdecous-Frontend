'use client';
import { useRouter } from "next/navigation";

import { ArrowRightIcon, CheckIcon, CopyIcon } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

export default function HeroSection() {
    const router = useRouter();


    const svgAssets = [
        { src: '/assets/Asset 1.svg', alt: 'Decorative accent 1' },
        { src: '/assets/Asset 2.svg', alt: 'Decorative accent 2' },
        { src: '/assets/Asset 3.svg', alt: 'Decorative accent 3' },
        { src: '/assets/Asset 4.svg', alt: 'Decorative accent 4' },
    ];

    const [totalFlowers, setTotalFlowers] = useState(50);

    useEffect(() => {
        const updateCount = () => {
            const isTabletOrBelow = typeof window !== 'undefined' && window.innerWidth < 1024;
            setTotalFlowers(isTabletOrBelow ? 15 : 50);
        };
        updateCount();
        window.addEventListener('resize', updateCount);
        return () => window.removeEventListener('resize', updateCount);
    }, []);

    const decorations = useMemo(() => {
        return Array.from({ length: totalFlowers }, (_, i) => {
            const asset = svgAssets[Math.floor(Math.random() * svgAssets.length)];
            return {
                ...asset,
                rotation: Math.floor(Math.random() * 61) - 30, // -30deg to +30deg
                top: Math.random() * 100,
                left: Math.random() * 100,
                scale: 0.6 + Math.random() * 1.2, // size variance 0.6x to 1.8x
                duration: 30 + Math.random() * 30, // 30s to 60s spin
                delay: Math.random() * 1.2, // stagger entrance
                key: `${asset.src}-${i}-${Math.random().toString(36).slice(2, 7)}`,
            };
        });
    }, [svgAssets, totalFlowers]);

    const handleCopy = () => {
        setIsCopied(true);
        navigator.clipboard.writeText(installCommand);
        setTimeout(() => {
            setIsCopied(false);
        }, 3000);
    }

    return (
        <section className="flex flex-col items-center justify-center relative h-150 overflow-hidden">
            <style jsx global>{`
                @keyframes flower-spin {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
            `}</style>
            <svg className="absolute inset-0 -z-10" width="100vw" height="1080" viewBox="0 0 1920 1080" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#a)">
                    <ellipse cx="271.282" cy="200.379" rx="271.282" ry="200.379" fill="#FBFFE1" />
                </g>
                <g filter="url(#b)">
                    <ellipse cx="993.487" cy="451.53" rx="359.487" ry="265.53" fill="url(#c)" fillOpacity=".1" />
                </g>
                <defs>
                    <filter id="a" x="-300" y="-300" width="1142.56" height="1000.76" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                        <feGaussianBlur stdDeviation="150" result="effect1_foregroundBlur_8119_961" />
                    </filter>
                    <filter id="b" x="333.9" y="-114.1" width="1319.18" height="1131.26" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                        <feGaussianBlur stdDeviation="150.05" result="effect1_foregroundBlur_8119_961" />
                        <feTurbulence type="fractalNoise" baseFrequency="inf inf" stitchTiles="stitch" numOctaves="3" result="noise" seed="9943" />
                        <feColorMatrix in="noise" type="luminanceToAlpha" result="alphaNoise" />
                        <feComponentTransfer in="alphaNoise" result="coloredNoise1">
                            <feFuncA type="discrete" tableValues="1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0" />
                        </feComponentTransfer>
                        <feComposite operator="in" in2="effect1_foregroundBlur_8119_961" in="coloredNoise1" result="noise1Clipped" />
                        <feFlood floodColor="rgba(0, 0, 0, 0.25)" result="color1Flood" />
                        <feComposite operator="in" in2="noise1Clipped" in="color1Flood" result="color1" />
                        <feMerge result="effect2_noise_8119_961">
                            <feMergeNode in="effect1_foregroundBlur_8119_961" />
                            <feMergeNode in="color1" />
                        </feMerge>
                    </filter>
                    <linearGradient id="c" x1="550.41" y1="500.394" x2="1343.15" y2="82.986" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#F6DFF4" />
                        <stop offset=".196" stopColor="#FF6E00" />
                        <stop offset=".407" stopColor="#F8C04D" />
                        <stop offset=".586" stopColor="#93ef3eff" />
                        <stop offset=".816" stopColor="#ec4f00ff" />
                        <stop offset=".949" stopColor="#57ba00ff" />
                    </linearGradient>
                </defs>
            </svg>
            <div className="pointer-events-none absolute inset-0 z-0">
                {decorations.map((item) => (
                    <div
                        key={item.key}
                        className="absolute"
                        style={{
                            top: `${item.top}%`,
                            left: `${item.left}%`,
                            transform: `translate(-50%, -50%)`,
                            animation: `flower-spin ${item.duration}s linear infinite`,
                        }}
                    >
                        <img
                            src={item.src}
                            alt={item.alt}
                            className="h-10 w-auto select-none opacity-70"
                            style={{ transform: `rotate(${item.rotation}deg) scale(${item.scale})` }}
                        />
                    </div>
                ))}
            </div>

            <div className="relative z-10 flex flex-col items-center justify-center w-full">
                <div className="flex flex-wrap items-center justify-center p-1.5 rounded-full border border-indigo-100">
                    <div className="flex items-center -space-x-3">
                        <img className="size-7 rounded-full border-3 border-white"
                            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=50" alt="userImage1" />
                        <img className="size-7 rounded-full border-3 border-white"
                            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=50" alt="userImage2" />
                        <img className="size-7 rounded-full border-3 border-white"
                            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=50&h=50&auto=format&fit=crop"
                            alt="userImage3" />
                    </div>
                    <p className="pl-2 pr-3 text-gray-600">Trusted by 1,000+ Happy Event Clients</p>
                </div>

                <h1
                    className="text-3xl md:text-5xl/18 text-center font-semibold max-w-2xl mt-5 bg-gradient-to-r from-black to-[#748298] text-transparent bg-clip-text">
                    Create Beautiful Moments with{" "}
                    <span className="bg-[#b19316] bg-clip-text text-transparent">BloomdecoUS.</span>
                </h1>
                <p className="text-slate-600 md:text-base max-md:px-2 text-center max-w-lg mt-3">
                    A luxury event styling service creating unforgettable celebrations with custom décor and balloon artistry.
                </p>

                <button onClick={() => router.push('/packages')}
                    className="flex items-center gap-2 btn hover:opacity-90 text-white px-8 py-3 mt-8 rounded-full transition">
                    <span onClick={() => router.push('/packages')}>View Packages</span>
                    <ArrowRightIcon className='size-5' />
                </button>
            </div>
        </section >
    );
}