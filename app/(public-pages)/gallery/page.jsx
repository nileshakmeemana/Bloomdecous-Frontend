import OurLatestCreations from '@/sections/our-latest-creations py';
import Gallery from '@/sections/gallery';
import MarqueeCards from '@/sections/instagram';

export const metadata = {
    title: 'Gallery',
    description: 'Explore our latest creations.',
};

export default function GalleryPage() {
    return (
        <main className="px-4">
            <OurLatestCreations />
            <Gallery />
            <MarqueeCards />
        </main>
    );
}
