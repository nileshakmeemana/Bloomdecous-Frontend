'use client';

import SectionTitle from '@/components/section-title';
import { MinusIcon, PlusIcon } from 'lucide-react';
import { useState } from 'react';

export default function FaqSection() {
    const [isOpen, setIsOpen] = useState(false);
    const data = [
        {
            question: 'What types of events does Bloomdecous specialize in?',
            answer: "We specialize in a wide range of events including weddings, birthdays, corporate events, baby showers, and more. Our team is experienced in creating beautiful and memorable setups tailored to your specific occasion.",
        },
        {
            question: 'Do you customize event themes and color palettes?',
            answer: 'Yes! All our setups are fully customizable. You can choose your preferred colors, theme, and overall style to match your celebration.',
        },
        {
            question: 'What types of events does Bloomdecous specialize in?',
            answer: 'We specialize in a wide range of events including weddings, birthdays, corporate events, baby showers, and more. Our team is experienced in creating beautiful and memorable setups tailored to your specific occasion.',
        },
        {
            question: 'Do you handle delivery, setup, and breakdown?',
            answer: 'Yes, we provide delivery, setup, and breakdown services to ensure a hassle-free experience for our clients.',
        },
        {
            question: 'Can I add extra decor items to a package?',
            answer: "Yes. We offer a wide range of add-ons including centerpieces, shimmer walls, neon signs, luxury seating, marquee numbers, and more.",
        },
        {
            question: 'How far in advance should I book?',
            answer: 'We recommend booking at least 4-6 weeks in advance to ensure availability and ample time for planning and customization.',
        },
    ];

    return (
        <section className='flex flex-col items-center justify-center mt-40'>
            <SectionTitle title="FAQ's" subtitle="Looking for answers to your frequently asked questions? Check out our FAQ's section below to find." />
            <div className='mx-auto mt-12 w-full max-w-xl'>
                {data.map((item, index) => (
                    <div key={index} className='flex flex-col border-b border-gray-200 bg-white'>
                        <h3 className='flex cursor-pointer items-start justify-between gap-4 py-4 font-medium' onClick={() => setIsOpen(isOpen === index ? null : index)}>
                            {item.question}
                            {isOpen === index ? <MinusIcon className='size-5 text-gray-500' /> : <PlusIcon className='size-5 text-gray-500' />}
                        </h3>
                        <p className={`pb-4 text-sm/6 text-gray-500 ${isOpen === index ? 'block' : 'hidden'}`}>{item.answer}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}