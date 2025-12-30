import PackageContent from './PackageContent';

export const metadata = {
    title: 'Package One',
    description: 'Explore our package options at Bloomdecous.',
};

export default function PackageOne() {
    return (
        <main className="px-4">
            <PackageContent />
        </main>
    );
}
