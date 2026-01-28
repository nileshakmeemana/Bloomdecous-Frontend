'use client';
import { useRouter } from "next/navigation";

import { ArrowRightIcon } from "lucide-react";

export default function WhatWeDoSection() {
    const router = useRouter();

    return (
        <section className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 mt-12 md:mt-20 px-6 lg:px-0">
            <div className="relative shadow-2xl shadow-[#EDBD0F]/40 rounded-2xl overflow-hidden shrink-0 w-full md:w-auto max-w-sm">
                <img className="w-full object-cover rounded-2xl"
                    src="/assets/what-we-do.png"
                    alt="What we do" />
            </div>
            <div className="text-sm text-slate-600 max-w-md w-full">
                <h1 className="text-xl uppercase font-semibold text-slate-700">What we do?</h1>
                <div className="w-24 h-[3px] rounded-full bg-gradient-to-r from-[#b19316] to-[#EDBD0F]"></div>
                <p className="mt-8">BloomdecoUs specializes in creating beautifully styled events through custom balloon decor, elegant backdrops, and luxury event setups tailored to your celebration.</p>
                <p className="mt-4">Whether you’re hosting a birthday, baby shower, sweet sixteen, or special milestone, our team transforms your vision into a stunning, stress free experience with professional delivery, setup, and breakdown.</p>
                <p className="mt-4">From balloon garlands and shimmer walls to neon signs and premium décor accents, BloomdecoUs is here to design unforgettable moments with style and care.</p>
                <button onClick={() => router.push('/about')} className="flex items-center gap-2 mt-8 hover:opacity-90 transition btn py-3 px-8 rounded-full text-white">
                    <span>Read more</span>
                    <ArrowRightIcon className='size-5' />
                </button>
            </div>
        </section>
    );
};