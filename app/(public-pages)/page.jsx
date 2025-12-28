import FaqSection from '@/sections/faq-section';
import Features from '@/sections/features';
import Features2 from '@/sections/features-2';
import HeroSection from '@/sections/hero-section';
import Newsletter from '@/sections/newsletter';
import OurLatestCreations from '@/sections/our-latest-creations';
import OurTestimonialSection from '@/sections/our-testimonials-section';
import WhatWeDoSection from '@/sections/what-we-do-section';
import Pricing from '@/sections/pricing';

export default function Page() {
    return (
        <main className='px-4'>
            <HeroSection />
            <WhatWeDoSection />
            <OurLatestCreations />
            <Features2 />
            <OurTestimonialSection />
            <Features />
            <Pricing />
            <FaqSection />
            <Newsletter />
        </main>
    );
}
