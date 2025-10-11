import { dashboard, login, register } from '@/routes';
import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';
import { HotelNavbar } from '@/components/hotel-navbar';
import { Footer } from '@/components/footer';

export default function Welcome() {
    const { auth } = usePage<SharedData>().props;

    const amenities = [
        {
            image: '/img/spa/spa.jpg',
            title: 'Spa & Wellness',
            description: 'Rejuvenate your body and mind with our luxurious spa treatments and wellness programs.',
            route: '/pages/spa' // Add your actual route here
        },
        {
            image: '/img/gym/gym2.jpg',
            title: 'Fitness Center',
            description: 'Stay active with our state-of-the-art gym equipment and professional fitness trainers.',
            route: '/fitness' // Add your actual route here
        },
        {
            image: '/img/diving/diving2.jpg',
            title: 'Diving Center',
            description: 'Explore the underwater world with our certified diving instructors and premium equipment.',
            route: '/diving' // Add your actual route here
        }
    ];

    return (
        <>
            <Head title="Welcome">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link
                    href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600"
                    rel="stylesheet"
                />
            </Head>
          
            <HotelNavbar />
         
            {/* Amenities Section */}
            <section className="py-16 px-4 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-semibold text-center mb-12 text-gray-800">
                        Our Premium Amenities
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {amenities.map((amenity, index) => (
                            <Link
                                key={index}
                                href={amenity.route}
                                className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden block group"
                            >
                                <div className="h-56 overflow-hidden">
                                    <img
                                        src={amenity.image}
                                        alt={amenity.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold mb-3 text-gray-800 group-hover:text-blue-600 transition-colors">
                                        {amenity.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        {amenity.description}
                                    </p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
         
            <Footer />
        </>
    );
}