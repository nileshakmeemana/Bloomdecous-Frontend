import { Inter } from 'next/font/google';
import './globals.css';
import LenisScroll from '@/components/lenis-scroll';
import PageLoader from '@/components/page-loader';

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-sans',
});

export default function RootLayout({ children }) {
    return (
        <html lang='en'>
            <LenisScroll />
            <body>
                <PageLoader />
                {children}
            </body>
        </html>
    );
}
