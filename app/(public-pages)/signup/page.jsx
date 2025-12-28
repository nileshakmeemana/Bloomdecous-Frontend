import Signup from '@/sections/signup';

export const metadata = {
    title: 'Sign Up',
    description: 'Create a new Bloomdecous account.',
};

export default function SignupPage() {
    return (
        <main className="px-4">
            <Signup />
        </main>
    );
}
