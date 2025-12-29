import Package01 from '@/sections/Package01';
import Addons from '@/sections/addon';
import SearchSection from '@/sections/bookdate';
import { Search } from 'lucide-react';

export const metadata = {
    title: 'Package One',
    description: 'Explore our package options at Bloomdecous.',
};

export default function PackageOne() {
    return (
        <main className="px-4">
            <Package01 />
            <Addons />
        </main>
    );
}
