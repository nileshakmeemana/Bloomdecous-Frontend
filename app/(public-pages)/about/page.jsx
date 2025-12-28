import WhatWeDoSection from '@/sections/what-we-do-section';
import AboutGrid from '@/sections/about grid';
import AboutLatest from '@/sections/about latest';

export const metadata = {
    title: 'About',
    description: 'Learn more about what we do at Bloomdecous.',
};

export default function About() {
    return (
        <main className="px-4">
            <WhatWeDoSection />
            <AboutGrid />
            <AboutLatest />
        </main>
    );
}
