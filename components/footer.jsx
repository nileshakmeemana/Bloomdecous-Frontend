import { DribbbleIcon, Facebook, FacebookIcon, InstagramIcon, LinkedinIcon, PhoneCallIcon, PhoneIcon, TwitterIcon, YoutubeIcon } from "lucide-react";

export default function Footer() {

    const data = [
        {
            title: 'Company',
            links: [
                { title: 'About us', href: '/about' },
                { title: 'Gallery', href: '/gallery' },
                { title: 'Packages', href: '/packages' },
            ],
        },
        {
            title: 'Account',
            links: [
                { title: 'Book an Event', href: '/packages' },
                { title: 'Contact Us', href: '/contact' },
            ],
        },
        {
            title: 'Contact',
            links: [
                { title: 'Contact us', href: '/contact' },
                { title: 'Facebook', href: 'https://www.facebook.com/happycakesrandy' },
                { title: 'Instagram', href: 'https://www.instagram.com/bloomdecous' },
            ],
        },
    ];
    return (
        <footer className="px-4 md:px-16 lg:px-24 text-[13px] mt-32 text-gray-500">
            <div className="flex flex-wrap items-start min-md:justify-between gap-10 md:gap-[60px]">
                <a href="/" className="max-w-80">
                    <img src="/assets/footer.svg" alt="BloomdecoUS" width="50" height="50" />
                </a>
                {data.map((item, index) => (
                    <div key={index} className="max-w-80">
                        <p className="font-semibold text-gray-800">{item.title}</p>
                        <ul className="mt-5 space-y-2">
                            {item.links.map((link, index) => (
                                <li key={index}>
                                    <a href={link.href} className="hover:text-[#b19316] transition">
                                        {link.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
                <div className="max-w-80 md:ml-40">
                    <p className='font-semibold text-gray-800'>Sign up for newsletter</p>
                    <p className='mt-5 text-sm'>
                        Get the latest event inspiration, decor ideas, special offers, and BloomdecoUS updates.
                    </p>
                    <div className='flex items-center mt-4'>
                        <input type="email" className='bg-white w-full border border-gray-300 h-9 px-3 outline-none' />
                        <button className='flex shrink-0 items-center justify-center btn text-white h-9 px-6'>
                            Sign up
                        </button>
                    </div>
                </div>
            </div>
            <div className="flex flex-col md:flex-row py-7 mt-12 border-gray-200 md:justify-between max-md:items-center border-t max-md:text-center gap-2 items-end">
                <p className="text-center">© 2025 <a href="https://prebuiltui.com?utm_source=material">BloomadecoUS, All rights reserved.</a></p>
                <div className="flex items-center gap-4">
                    <a href="https://www.facebook.com/happycakesrandy" target="_blank" rel="noreferrer">
                        <FacebookIcon className="size-5 text-gray-400 hover:text-[#b19316]" />
                    </a>
                    <a href="https://www.instagram.com/bloomdecous" target="_blank" rel="noreferrer">
                        <InstagramIcon className="size-5 text-gray-400 hover:text-[#b19316]" />
                    </a>
                    <a href="/contact" target="_blank" rel="noreferrer">
                        <PhoneIcon className="size-5 text-gray-400 hover:text-[#b19316]" />
                    </a>
                </div>
            </div>
        </footer>
    );
};