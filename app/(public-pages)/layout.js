import Banner from '@/components/banner';
import Footer from '@/components/footer';
import Navbar from '@/components/navbar';

export const metadata = {
    title: 'Bloomdecous',
    description: 'Bloomdecous is a event planning and management platform that helps you organize and execute successful events with ease.',
    appleWebApp: {
        title: 'Bloomdecous',
    },
};

export default function Layout({ children }) {
    return (
        <>
            <Banner />
            <Navbar />
            {children}
            <Footer />
        </>
    );
}
