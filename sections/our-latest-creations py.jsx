import SectionTitle from "@/components/section-title";

export default function OurLatestCreations() {

    const data = [
        {
            title: 'Autumn Leaf Harmony',
            description: 'Earthy seasonal tones with organic patterns, bringing coziness and natural charm into interiors.',
            image: '/assets/gallery/24.png',
        },
        {
            title: 'Autumn Leaf Harmony',
            description: 'Earthy seasonal tones with organic patterns, bringing coziness and natural charm into interiors.',
            image: '/assets/gallery/19.png',
        },
        {
            title: 'Autumn Leaf Harmony',
            description: 'Earthy seasonal tones with organic patterns, bringing coziness and natural charm into interiors.',
            image: '/assets/gallery/5.png',
        },
        {
            title: 'Autumn Leaf Harmony',
            description: 'Earthy seasonal tones with organic patterns, bringing coziness and natural charm into interiors.',
            image: '/assets/gallery/6.png',
        },
        {
            title: 'Winter Frost Calm',
            description: 'Crisp whites with frosted details, enhancing minimalist and contemporary spaces with sophistication.',
            image: '/assets/gallery/7.png',
        },
        {
            title: 'Spring Canvas',
            description: 'Pastel floral tones that uplift interiors with beauty, freshness, and vibrant seasonal energy.',
            image: '/assets/gallery/8.png',
        },
        {
            title: 'Spring Canvas',
            description: 'Pastel floral tones that uplift interiors with beauty, freshness, and vibrant seasonal energy.',
            image: '/assets/gallery/9.png',
        },
        {
            title: 'Spring Canvas',
            description: 'Pastel floral tones that uplift interiors with beauty, freshness, and vibrant seasonal energy.',
            image: '/assets/gallery/10.png',
        },
        {
            title: 'Spring Canvas',
            description: 'Pastel floral tones that uplift interiors with beauty, freshness, and vibrant seasonal energy.',
            image: '/assets/gallery/11.png',
        },
        {
            title: 'Spring Canvas',
            description: 'Pastel floral tones that uplift interiors with beauty, freshness, and vibrant seasonal energy.',
            image: '/assets/gallery/12.png',
        },
        {
            title: 'Spring Canvas',
            description: 'Pastel floral tones that uplift interiors with beauty, freshness, and vibrant seasonal energy.',
            image: '/assets/gallery/13.png',
        },
        {
            title: 'Spring Canvas',
            description: 'Pastel floral tones that uplift interiors with beauty, freshness, and vibrant seasonal energy.',
            image: '/assets/gallery/14.png',
        },
        {
            title: 'Spring Canvas',
            description: 'Pastel floral tones that uplift interiors with beauty, freshness, and vibrant seasonal energy.',
            image: '/assets/gallery/15.png',
        },
        {
            title: 'Spring Canvas',
            description: 'Pastel floral tones that uplift interiors with beauty, freshness, and vibrant seasonal energy.',
            image: '/assets/gallery/16.png',
        },
        {
            title: 'Spring Canvas',
            description: 'Pastel floral tones that uplift interiors with beauty, freshness, and vibrant seasonal energy.',
            image: '/assets/gallery/17.png',
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