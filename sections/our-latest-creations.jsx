import SectionTitle from "@/components/section-title";

export default function OurLatestCreations() {

    const data = [
        {
            title: 'Sweet Sixteen Elegance',
            description: 'Lilac balloons with butterfly accents for a magical celebration.',
            image: '/assets/gallery1.png',
        },
        {
            title: 'Wedding Floral Backdrop',
            description: 'Timeless white florals with soft, romantic details.',
            image: '/assets/gallery2.png',
        },
        {
            title: 'Teddy Bear Baby Shower',
            description: 'Adorable teddy themed décor with soft balloon styling.',
            image: '/assets/gallery3.png',
        },
    ];
    return (
        <section className="flex flex-col items-center justify-center mt-30 md:px-4 md:py-8">
            <SectionTitle title="Our Latest Creations" subtitle="A showcase of beautifully styled celebrations, thoughtfully designed to create unforgettable moments." />
            <div className="flex flex-wrap items-center justify-center gap-10 mt-16">
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