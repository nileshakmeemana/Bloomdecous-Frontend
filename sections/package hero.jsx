'use client';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function PackageHero() {
    const router = useRouter();
    const [flowerPositions, setFlowerPositions] = useState([]);

    useEffect(() => {
        // Generate random positions for flowers on mount
        const generateFlowerPositions = () => {
            const positions = [];
            for (let i = 0; i < 16; i++) {
                positions.push({
                    top: Math.random() * 90, // 0-90%
                    left: Math.random() * 90, // 0-90%
                    size: 30 + Math.random() * 40, // 30-70
                    opacity: 0.35 + Math.random() * 0.25, // 0.35-0.6
                    duration: 5 + Math.random() * 4.5, // 5-9.5s
                    delay: Math.random() * 4.5, // 0-4.5s
                    asset: Math.floor(Math.random() * 4) + 1, // 1-4
                    animation: ['float', 'floatSlow', 'floatMedium', 'floatFast', 'floatRotate1', 'floatRotate2'][Math.floor(Math.random() * 6)]
                });
            }
            setFlowerPositions(positions);
        };
        generateFlowerPositions();
    }, []); 
    return (
        <section className="py-12 md:py-20">
            <style>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-20px) rotate(180deg); }
                }
                @keyframes floatSlow {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-30px) rotate(360deg); }
                }
                @keyframes floatMedium {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-25px) rotate(-180deg); }
                }
                @keyframes floatFast {
                    0%, 100% { transform: translateY(0px) rotate(360deg); }
                    50% { transform: translateY(-15px) rotate(180deg); }
                }
                @keyframes floatRotate1 {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-18px) rotate(270deg); }
                }
                @keyframes floatRotate2 {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-22px) rotate(-270deg); }
                }
            `}</style>
            <div className="max-w-6xl mx-2 md:mx-auto p-px rounded-2xl bg-gradient-to-r from-[#b19316]/20 to-[#b19316]/30">
                <div className="relative flex flex-col items-center justify-center text-center py-12 md:py-16 rounded-[15px] bg-white/90 backdrop-blur-sm px-6 md:px-12 overflow-hidden">
                    {/* Randomly positioned floating flowers */}
                    {flowerPositions.map((flower, index) => (
                        <img 
                            key={index}
                            src={`/assets/Asset ${flower.asset}.svg`}
                            alt="" 
                            className="absolute"
                            style={{
                                top: `${flower.top}%`,
                                left: `${flower.left}%`,
                                width: `${flower.size}px`,
                                height: `${flower.size}px`,
                                opacity: flower.opacity,
                                animation: `${flower.animation} ${flower.duration}s ease-in-out infinite`,
                                animationDelay: `${flower.delay}s`
                            }}
                        />
                    ))}
                    
                    <div className="flex items-center justify-center bg-white px-3 py-1.5 shadow gap-1 rounded-full text-xs relative z-10">
                        <span className="bg-[#b19316] bg-clip-text text-transparent font-medium">Trusted by Happy Clients</span>
                    </div>
                    <h2 className="text-2xl md:text-4xl font-medium mt-2 leading-[1.2] relative z-10">
                        Elevate Your Celebration with <br />
                        <span className="bg-[#b19316] bg-clip-text text-transparent">Expert Styling </span>
                        & Beautiful Decor!
                    </h2>
                    <p className="text-slate-500 mt-2 max-w-lg max-md:text-sm relative z-10">Create unforgettable moments with thoughtfully designed event packages, custom decor, and seamless setup from start to finish.</p>
                    <button type="button" onClick={() => router.push('/contact')} className="relative z-10 cursor-pointer bg-[#b19316] to-blue-500 text-white text-sm px-5 py-2.5 rounded-xl font-medium mt-4 hover:scale-105 active:scale-95 transition-all duration-300">
                        Send Your Inquiry Today
                    </button>
                </div>
            </div>
        </section>
    );
};