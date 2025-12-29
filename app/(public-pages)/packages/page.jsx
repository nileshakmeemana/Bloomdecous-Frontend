import PackageBlocks from '@/sections/package blocks';
import PackageHero from '@/sections/package hero';

export const metadata = {
    title: 'Packages',
    description: 'Explore our package options at Bloomdecous.',
};

export default function Packages() {
    return (
        <main className="px-4">
            <PackageHero />
            <PackageBlocks />
        </main>
    );
}
