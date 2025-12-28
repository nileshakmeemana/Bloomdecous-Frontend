import Error404 from '@/sections/404';

export const metadata = {
    title: '404 Error - Page Not Found',
    description: 'Sorry, we couldn’t find the page you’re looking for.',
};

export default function Error404Page() {
    return (
        <main className="px-4">
            <Error404 />
        </main>
    );
}
