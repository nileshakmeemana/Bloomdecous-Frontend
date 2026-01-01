'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

export default function Example() {
    const searchParams = useSearchParams();
    const packageId = searchParams.get('packageId');
    const [packageData, setPackageData] = useState(null);
    const [loading, setLoading] = useState(true);

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
                <div className='relative w-full max-w-5xl bg-linear-to-bl from-[#b19316] to-[#8a7414] rounded-2xl border border-[#b19316] px-6 py-16 pb-18 flex flex-col items-center text-center'>
                    <div className='inline-block bg-white/10 backdrop-blur-md rounded-full px-6 py-2 mb-6'>
                        <span className='text-slate-200 text-xs'>{packageData.Package_Name}</span>
                    </div>
            
                    <h1 className='text-3xl md:text-[40px]/13 font-medium text-white mb-8 max-w-2xl leading-tight'>
                        Redefine your brand for a bold,<br className="hidden md:block" /> future-ready presence.
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
                <p className="text-sm text-slate-500 text-center mt-2 max-w-md mx-auto">Everything you need to manage, track, and grow your finances, securely and efficiently.</p>
                
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