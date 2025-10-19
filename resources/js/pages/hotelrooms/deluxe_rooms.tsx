import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';
import { HotelNavbar } from '@/components/hotel-navbar';
import { Footer } from '@/components/footer';
import { Bed, Users, Coffee, Tv, Wind, Bath, Shield, Wheelchair, Star } from 'lucide-react';

export default function DeluxeRoom() {
    const { auth } = usePage<SharedData>().props;

    const amenities = [
        { icon: Bed, text: '2 Single beds or 1 Queen size bed' },
        { icon: Users, text: 'Terrace with garden view' },
        { icon: Bath, text: 'Bathroom with hot shower' },
        { icon: Wind, text: 'Split-type air-conditioning' },
        { icon: Star, text: 'Walk-in dressing room' },
        { icon: Coffee, text: 'Mini-bar refrigerator' },
        { icon: Shield, text: 'In-room safe' },
        { icon: Tv, text: 'Flat screen cable TV' }
    ];

    const similarRooms = [
        {
            name: 'Honeymoon Suite Whale',
            image: '/img/rooms/honeymoon.jpg',
            link: '/honeymoon'
        },
        {
            name: 'Suite',
            image: '/img/rooms/suite_1.jpg',
            link: '/suite'
        },
        {
            name: 'Family Room (Dolphin)',
            image: '/img/rooms/family_room2.jpg',
            link: '/family_room_dolphin'
        }
    ];

    return (
        <>
            <Head title="Deluxe Rooms | Pura Vida Beach & Dive Resort">
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
                    src="/img/rooms/room_deluxe_1.jpg"
                    alt="Deluxe Room at Pura Vida"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <div className="text-center text-white">
                        <h1 className="text-5xl font-bold mb-2">Deluxe Rooms</h1>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 py-12">
                {/* Room Description */}
                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    <div>
                        <h2 className="text-3xl font-bold mb-4">Deluxe Rooms</h2>
                        <p className="text-gray-700 mb-4 leading-relaxed">
                            The 13 Deluxe rooms are located in either double (10) or single (2) bungalow-style houses, situated around the pool area and up to the beachfront. Each room is equipped with split-type air-conditioning, a flat-screen TV, and a mini-bar refrigerator.
                        </p>
                        <p className="text-gray-700 mb-4 leading-relaxed">
                            Eight of the 12 rooms are furnished with two comfortable single beds, which can be set up as a matrimonial bed, while the remaining five rooms feature one queen-size bed. The newly renovated rooms also include a walk-in dressing room and comfortable bathrooms with hot showers, perfect for relaxing after a day of diving.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            Enjoy the terrace surrounded by a lush garden, inviting you to unwind in the beautiful ambiance of Pura Vida.
                        </p>
                    </div>
                    <div>
                        <img
                            src="/img/rooms/deluxe-interior.jpg"
                            alt="Deluxe Room Interior"
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

                {/* Helpful Tips */}
                <div className="bg-blue-50 border-l-4 border-blue-600 rounded-lg p-6 mb-12">
                    <h3 className="text-xl font-bold mb-3">Helpful Tips</h3>
                    <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start gap-2">
                            <span className="text-blue-600 mt-1">•</span>
                            <span>Seahorse, Ghostpipe, and Pygmy have beachfront view</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-blue-600 mt-1">•</span>
                            <span>Cuttlefish and Leaf fish are single bungalows</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-blue-600 mt-1">•</span>
                            <span>Cuttlefish and Leaf fish are wheelchair accessible</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-blue-600 mt-1">•</span>
                            <span>
                                <a href="#" className="text-blue-600 hover:underline">Room virtual tour</a>
                            </span>
                        </li>
                    </ul>
                </div>

                {/* Reviews */}
                <div className="mb-12">
                    <h3 className="text-2xl font-bold mb-6">Guest Reviews</h3>
                    <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                        <div className="flex items-center gap-2 mb-3">
                            <div className="flex">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                                ))}
                            </div>
                            <span className="font-semibold">AnnaBred from Sweden</span>
                            <span className="text-gray-500 text-sm">January 20, 2016</span>
                        </div>
                        <p className="text-gray-700 leading-relaxed">
                            We stayed 8 nights at Pura Vida and it was great! The resort is small and cosy and the rooms are nice, clean, and spacious and had everything we needed. There is also a well-equipped gym available for the guests. We stayed in a deluxe room close to the pool and we were able to get internet access in our rooms. However, internet is quite unreliable but that seems to be a fact in most places. What made Pura Vida special was the staff, they were wonderful, greeting us every day with friendly smiles and warm hospitality. We can absolutely recommend Pura Vida if you are looking for a relaxed vacation and it is perfect if you are a diver. Sea Explorers is located on the resort and their staff is professional, helpful and also very friendly. We had some great dive trips with them! This was our first visit to the Philippines and we couldn't have gotten a better "first impression"!
                        </p>
                    </div>
                </div>

                {/* Pricing */}
                <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg p-8 mb-12">
                    <div className="grid md:grid-cols-3 gap-6 text-center">
                        <div>
                            <p className="text-sm uppercase tracking-wide mb-2">Room Rate</p>
                            <p className="text-3xl font-bold">PHP 8,000</p>
                            <p className="text-sm">per night</p>
                        </div>
                        <div>
                            <p className="text-sm uppercase tracking-wide mb-2">Extra Bed</p>
                            <p className="text-3xl font-bold">PHP 1,500</p>
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
                {/* <div className="mt-12 text-center">
                    <h3 className="text-2xl font-bold mb-4">Pura Vida on Instagram</h3>
                    <p className="text-gray-700 mb-4">
                        Follow us <a href="https://instagram.com/puravidadauin" className="text-blue-600 hover:underline">@puravidadauin</a>
                    </p>
                </div> */}
            </div>

            <Footer />
        </>
    );
}