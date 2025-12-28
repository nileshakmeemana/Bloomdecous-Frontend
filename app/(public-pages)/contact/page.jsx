import Contact from '@/sections/contact';

export const metadata = {
    title: 'Contact',
    description: 'Get in touch with us.',
};

export default function ContactPage() {
    return (
        <main className="px-4">
            <Contact />
        </main>
    );
}
