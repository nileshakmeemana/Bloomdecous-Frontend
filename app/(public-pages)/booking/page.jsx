import Booking from '@/sections/booking';
import SearchSection from '@/sections/bookdate';

export const metadata = {
    title: 'Booking',
    description: 'Get in touch with us to book your event.',
};

export default function BookingPage() {
    return (
        <main className="">
            <Booking />
        </main>
    );
}
