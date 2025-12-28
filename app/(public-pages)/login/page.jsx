import Login from '@/sections/login';

export const metadata = {
    title: 'Login',
    description: 'Log in to your Bloomdecous account.',
};

export default function LoginPage() {
    return (
        <main className="px-4">
            <Login />
        </main>
    );
}
