import { ArrowRightIcon } from 'lucide-react';

export default function Banner() {
    return (
        <div className="flex w-full flex-wrap items-center justify-center bg-[#b19316] py-2 text-center font-medium text-white">
            <p>Build Faster with Responsive Tailwind CSS Templates</p>
            <a href="/gallery" className="ml-3 flex items-center gap-1 rounded-md bg-white px-3 py-1 text-[#b19316]">
                Explore now
                <ArrowRightIcon className="size-3.5" />
            </a>
        </div>
    );
}