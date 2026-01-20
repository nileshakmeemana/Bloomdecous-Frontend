import SectionTitle from "@/components/section-title";

export default function OurLatestCreations() {

    const data = [
        {
            title: 'Romantic Floral Table Setting',
            description: 'Soft blooms and candlelight for a romantic ambiance.',
            image: '/assets/Gallery/24.png',
        },
        {
            title: 'Sweet Sixteen Decor',
            description: 'Pink balloons, florals, and custom details for a magical celebration.',
            image: '/assets/Gallery/19.png',
        },
        {
            title: 'Sweet Sixteen Celebration',
            description: 'Lilac balloons and butterfly details for a magical celebration.',
            image: '/assets/Gallery/5.png',
        },
        {
            title: 'Wedding Floral Backdrop',
            description: 'Lush white florals paired with gentle lighting for a romantic wedding setting.',
            image: '/assets/Gallery/6.png',
        },
        {
            title: 'Teddy Bear Baby Shower',
            description: 'Sweet teddy bear decor paired with gentle colors and balloon styling.',
            image: '/assets/Gallery/7.png',
        },
        {
            title: 'Sweet Sixteen Glamour',
            description: 'A glamorous Sweet Sixteen setup with shimmer walls and elegant balloons.',
            image: '/assets/Gallery/8.png',
        },
        {
            title: 'Floral Candle Centerpiece',
            description: 'Candlelit florals designed to elevate intimate celebrations.',
            image: '/assets/Gallery/9.png',
        },
        {
            title: 'Festive Holiday Decor',
            description: 'A joyful Christmas setup filled with warmth, charm, and seasonal magic.',
            image: '/assets/Gallery/10.png',
        },
    
        {
            title: 'First Birthday Magic',
            description: 'Soft florals and fluttering butterflies for a sweet celebration.',
            image: '/assets/Gallery/14.png',
        },
        {
            title: 'Christening Decor',
            description: 'Soft blue balloons and elegant accents for a meaningful celebration.',
            image: '/assets/Gallery/15.png',
        },
        {
            title: 'Blue & Gold Birthday Setup',
            description: 'Bold blue balloons and luxe details for a standout birthday.',
            image: '/assets/Gallery/16.png',
        },
        {
            title: 'Elegant Graduation Decor',
            description: 'A bold burgundy and gold balloon backdrop with custom photo details, designed to honor a proud milestone.',
            image: '/assets/Gallery/17.png',
        },
    ];
    return (
        <section className="flex flex-col items-center justify-center mt-20">
            <h1 className="text-xs bg-[#b19316] text-white font-medium px-3 py-1 rounded-full w-fit">Gallery</h1>

            <SectionTitle title="Our Latest Creations" subtitle="A showcase of beautifully styled celebrations, designed with intention, emotion, and attention to detail." />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">
                {data.map((item, index) => (
                    <div key={index} className="max-w-80 hover:-translate-y-0.5 transition duration-300">
                        <img className="rounded-xl" src={item.image} alt={item.title} />
                        <h3 className="text-base font-semibold text-slate-700 mt-4">{item.title}</h3>
                        <p className="text-sm text-gray-500 mt-1">{item.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}