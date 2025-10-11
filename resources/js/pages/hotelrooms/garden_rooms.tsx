import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';
import { HotelNavbar } from '@/components/hotel-navbar';
import { Footer } from '@/components/footer';
import { Bed, Users, Coffee, Tv, Wind, Bath, Shield, Star } from 'lucide-react';

export default function GardenRoom() {
    const { auth } = usePage<SharedData>().props;

    const amenities = [
        { icon: Bed, text: '1 King sized bed (3 rooms)' },
        { icon: Bed, text: '2 Single beds (in 7 rooms)' },
        { icon: Users, text: 'Native Filipino Style Cottage' },
        { icon: Tv, text: 'Flat Screen Cable Television' },
        { icon: Wind, text: 'Quiet split-type air-conditioning' },
        { icon: Users, text: 'Relaxing garden view' },
        { icon: Users, text: 'Terrace with bamboo furniture' },
        { icon: Bath, text: 'Hot & cold shower' },
        { icon: Shield, text: 'In-room safe' },
        { icon: Coffee, text: 'Mini-bar refrigerator' },
        { icon: Coffee, text: 'Complimentary water' },
        { icon: Coffee, text: 'Complimentary coffee & tea making facility' },
        { icon: Users, text: 'Good for two (2) persons' }
    ];

    const similarRooms = [
        {
            name: 'Honeymoon Suite Whale',
            image: '/img/rooms/honeymoon-suite.jpg',
            link: '/rooms/honeymoon-suite'
        },
        {
            name: 'Suite',
            image: '/img/rooms/suite.jpg',
            link: '/rooms/suite'
        },
        {
            name: 'Family Room (Dolphin)',
            image: '/img/rooms/dolphin.jpg',
            link: '/rooms/dolphin'
        }
    ];

    return (
        <>
            <Head title="Garden Rooms | Pura Vida Beach & Dive Resort">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link
                    href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600"
                    rel="stylesheet"
                />
            </Head>
            
            <HotelNavbar />

            {/* Hero Image Section */}
            <div className="relative h-96 overflow-hidden">
                <img
                    src="/img/banner/garden-room.jpg"
                    alt="Garden Room at Pura Vida"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <div className="text-center text-white">
                        <h1 className="text-5xl font-bold mb-2">Garden Rooms</h1>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 py-12">
                {/* Room Description */}
                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <Bed className="w-6 h-6 text-blue-600" />
                            <span className="text-lg font-semibold">2 Beds</span>
                        </div>
                        <h2 className="text-3xl font-bold mb-4">Garden Rooms</h2>
                        <p className="text-gray-700 mb-4 leading-relaxed">
                            The 10 Garden air-conditioned bamboo cottages are located at the rear of the resort, offering a serene retreat. Each room features a balcony with a beautiful view of the lush garden at the center.
                        </p>
                        <p className="text-gray-700 mb-4 leading-relaxed">
                            Seven rooms come with two single beds that can be arranged into a matrimonial bed, while three rooms feature a king-size double bed. All rooms are equipped with a small cable TV, mini-bar refrigerator, in-room safe, and complimentary coffee and tea making facilities.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            The tiled bathrooms include hot and cold showers for your comfort, making these cottages ideal for couples or small groups seeking a tranquil stay.
                        </p>
                    </div>
                    <div>
                        <img
                            src="/img/rooms/garden-interior.jpg"
                            alt="Garden Room Interior"
                            className="w-full h-full object-cover rounded-lg shadow-lg"
                        />
                    </div>
                </div>

                {/* Services & Amenities */}
                <div className="bg-gray-50 rounded-lg p-8 mb-12">
                    <h3 className="text-2xl font-bold mb-6">Services & Amenities</h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {amenities.map((amenity, index) => (
                            <div key={index} className="flex items-start gap-3">
                                <amenity.icon className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                                <span className="text-gray-700">{amenity.text}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Pricing */}
                <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg p-8 mb-12">
                    <div className="grid md:grid-cols-2 gap-6 text-center">
                        <div>
                            <p className="text-sm uppercase tracking-wide mb-2">Room Rate</p>
                            <p className="text-3xl font-bold">PHP 6,000</p>
                            <p className="text-sm">per night</p>
                        </div>
                        <div>
                            <p className="text-sm uppercase tracking-wide mb-2">Extra Mattress</p>
                            <p className="text-3xl font-bold">PHP 1,200</p>
                            <p className="text-sm">per night</p>
                        </div>
                    </div>
                    <div className="text-center mt-6">
                        <a        
                        href="https://app-apac.thebookingbutton.com/properties/PuraVidaBeachandDiveResortdirect?check_in_date=09-03-2020&check_out_date=10-03-2020&number_adults=2"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block text-center"
                    >
                        Book Now
                    </a>
                    </div>
                </div>

                {/* Similar Rooms */}
                <div>
                    <h3 className="text-2xl font-bold mb-6">Similar Rooms</h3>
                    <div className="grid md:grid-cols-3 gap-6">
                        {similarRooms.map((room, index) => (
                            <Link
                                key={index}
                                href={room.link}
                                className="group block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
                            >
                                <div className="h-48 bg-gray-200 overflow-hidden">
                                    <img
                                        src={room.image}
                                        alt={room.name}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                    />
                                </div>
                                <div className="p-4">
                                    <h4 className="font-semibold text-lg group-hover:text-blue-600 transition-colors">
                                        {room.name}
                                    </h4>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Instagram Section */}
                <div className="mt-12 text-center">
                    <h3 className="text-2xl font-bold mb-4">Pura Vida on Instagram</h3>
                    <p className="text-gray-700 mb-4">
                        Follow us <a href="https://instagram.com/puravidadauin" className="text-blue-600 hover:underline">@puravidadauin</a>
                    </p>
                </div>
            </div>

            <Footer />
        </>
    );
}