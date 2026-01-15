'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

export default function Example() {
    const searchParams = useSearchParams();
    const packageId = searchParams.get('packageId');
    const [packageData, setPackageData] = useState(null);
    const [loading, setLoading] = useState(true);
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

    useEffect(() => {
        const fetchPackageData = async () => {
            if (!packageId) {
                console.log('No packageId found in URL');
                setLoading(false);
                return;
            }

            try {
                console.log('Fetching package with ID:', packageId);
                const response = await fetch(
                    `http://localhost/Bloomdecous-Backend/API/Public/viewPackageData.php?Package_Id=${packageId}`
                );
                console.log('Response status:', response.status);
                const data = await response.json();
                console.log('Received data:', data);
                setPackageData(data.packageData);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching package data:', error);
                setLoading(false);
            }
        };

        fetchPackageData();
    }, [packageId]);

    if (loading) {
        return <div className="text-center py-20">Loading package details...</div>;
    }

    if (!packageData) {
        return <div className="text-center py-20">No package selected.</div>;
    }

    return (
        <>
            <style>{`
                @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap");
                    
                * {
                    font-family: "Poppins", sans-serif;
                }
            `}</style>
            
            <section className='flex items-center justify-center p-4 py-20'>
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
                <div className='relative w-full max-w-5xl bg-white/90 backdrop-blur-sm rounded-2xl border border-[#b19316]/30 px-6 py-16 pb-18 flex flex-col items-center text-center overflow-hidden'>
                    {/* Balloons decoration */}
                    <img 
                        src="/assets/balloon1.png"
                        alt="" 
                        className="absolute top-[10px] left-[-100px]"
                        style={{
                            width: '450px',
                            height: '450px',
                            opacity: 0.8,
                            zIndex: 5
                        }}
                    />
                    <img 
                        src="/assets/balloon2.png"
                        alt="" 
                        className="absolute top-[-30px] right-[-100px]"
                        style={{
                            width: '500px',
                            height: '500px',
                            opacity: 0.8,
                            zIndex: 5
                        }}
                    />

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
                    
                    <div className='inline-block bg-white px-6 py-2 mb-6 relative z-10 shadow rounded-full'>
                        <span className='bg-[#b19316] bg-clip-text text-transparent font-medium text-xs'>{packageData.Package_Name}</span>
                    </div>
            
                    <h1 className='text-3xl md:text-[40px]/13 font-medium text-slate-800 mb-8 max-w-2xl leading-tight relative z-10'>
                        Complete decor solutions <br className="hidden md:block" /> for your special day!
                    </h1>
        
                </div>
            </section>
            <>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
            
                * {
                    font-family: 'Poppins', sans-serif;
                }
            `}</style>
            
            <section>
                <h1 className="text-3xl font-semibold text-center mx-auto">Package Features</h1>
                <p className="text-sm text-slate-500 text-center mt-2 max-w-md mx-auto">Everything you need for a beautifully styled celebration custom decor, seamless setup, and stress free service.</p>
                
                <div className="border border-gray-200 rounded-lg max-w-5xl mx-auto mt-16 grid grid-cols-1 divide-y divide-gray-200 lg:grid-cols-3 lg:divide-x lg:divide-y-0">
                    <div className="p-8 flex flex-col hover:bg-gray-50 transition duration-300">
                        <h3 className="text-base font-semibold text-slate-700">{packageData.Package_Name}</h3>
                        <p className="text-sm text-slate-600 mt-1">Beautiful decoration package for your special events.</p>
                    </div>
                    <div className="p-8 hover:bg-gray-50 transition duration-300 flex flex-col justify-between">
                        <div 
                            className="list-none text-gray-500 text-sm space-y-2"
                            dangerouslySetInnerHTML={{ __html: packageData.Package_Description }}
                        />
                        <style jsx>{`
                            div :global(ul) {
                                list-style: none;
                                margin: 0;
                                padding: 0;
                                display: flex;
                                flex-direction: column;
                                gap: 0.5rem;
                            }
                            div :global(li) {
                                display: flex;
                                align-items: center;
                                gap: 0.5rem;
                                color: rgb(107 114 128);
                                font-size: 0.875rem;
                            }
                            div :global(li::before) {
                                content: '';
                                display: inline-block;
                                width: 18px;
                                height: 18px;
                                flex-shrink: 0;
                                background-image: url("data:image/svg+xml,%3Csvg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M7.162 13.5 2.887 9.225l1.07-1.069 3.205 3.207 6.882-6.882 1.069 1.07z' fill='%23b19316'/%3E%3C/svg%3E");
                            }
                        `}</style>
                    </div>
                    <div className="p-8 flex items-center justify-center hover:bg-gray-50 transition duration-300">
                        <h1 className="text-6xl font-semibold">${packageData.Price}<span className="text-gray-500 text-sm font-normal"></span></h1>
                    </div>
                </div>
            </section>
            </>
        </>
        
    );
    
};