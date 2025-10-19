import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';
import { HotelNavbar } from '@/components/hotel-navbar';
import { Footer } from '@/components/footer';
import { Bed, Users, Coffee, Tv, Wind, Bath, Shield, Wheelchair, Star } from 'lucide-react';

export default function DolphinRoom() {
    const { auth } = usePage<SharedData>().props;

    const amenities = [
        { icon: Bed, text: '1 Queen size bed' },
        { icon: Bed, text: '2 Single beds' },
        { icon: Users, text: 'Veranda with outdoor chairs and table' },
        { icon: Bath, text: '1 Bathroom with 2 doors, hot & cold shower' },
        { icon: Wind, text: 'Quiet split-type air-conditioning' },
        { icon: Star, text: 'Hairdryer' },
        { icon: Coffee, text: 'Mini-bar refrigerator' },
        { icon: Coffee, text: 'Complimentary water carafe' },
        { icon: Coffee, text: 'Complimentary coffee & tea making facility' },
        { icon: Shield, text: 'In-room safe' },
        { icon: Tv, text: 'Flat screen cable TV' },
        { icon: Users, text: 'Good for four (4) persons' },
        { icon: Bed, text: 'Extra mattress/bed possible (with surcharge)' }
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
            name: 'Family Room (Moorish Idol & Blue Ring Octopus)',
            image: '/img/rooms/room_family_blue.jpg',
            link: '/family_room_octopus'
        }
    ];

    return (
        <>
            <Head title="Family Room (Dolphin) |">
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
                    src="/img/banner/family_room2.jpg"
                    alt="Family Room (Dolphin) at Pura Vida"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <div className="text-center text-white">
                        <h1 className="text-5xl font-bold mb-2">Family Room</h1>
                        <p className="text-xl">Dolphin</p>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 py-12">
                {/* Room Description */}
                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <Users className="w-6 h-6 text-blue-600" />
                            <span className="text-lg font-semibold">4 Guests</span>
                            <Bed className="w-6 h-6 text-blue-600 ml-4" />
                            <span className="text-lg font-semibold">3 Beds</span>
                        </div>
                        <h2 className="text-3xl font-bold mb-4">Family Room (Dolphin)</h2>
                        <p className="text-gray-700 mb-4 leading-relaxed">
                            The Dolphin Family Room is the largest room in Pura Vida, featuring one (1) queen size bed and two (2) single beds with a small partition in between. Located on the ground floor underneath the Suite, it is wheelchair accessible.
                        </p>
                        <p className="text-gray-700 mb-4 leading-relaxed">
                            A natively furnished terrace offers a soothing garden view. The room comes equipped with split-type air-conditioning, a mini-bar refrigerator, an in-room safe, complimentary water carafe, complimentary coffee and tea making facilities, and a flat-screen cable TV.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            The bathroom features a hot & cold shower and can be accessed from both sleeping areas, making it ideal for families or groups of 4-5 persons.
                        </p>
                    </div>
                    <div>
                        <img
                            src="/img/rooms/family_room2.jpg"
                            alt="Dolphin Room Interior"
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
                            <span>Dolphin room is very close to the Vida Spa & reception</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-blue-600 mt-1">•</span>
                            <span>Wheelchair accessible</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-blue-600 mt-1">•</span>
                            <span>Perfect for families and groups with 4-5 persons</span>
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
                            <span className="font-semibold">Karen from United States</span>
                        </div>
                        <h4 className="text-lg font-bold mb-2">"Pura Vida is a wonderful place to unwind."</h4>
                        <p className="text-gray-700 leading-relaxed">
                            Pura Vida is known for its Sea Explorers diving operation and their boats and staff were busy taking good care of their guests. Our family doesn't dive but we were quite content relaxing on the beach, cooling off in the ocean and the pool, and enjoying the spa. This is not Boracay, so if you are looking for a lot of people and hustle and bustle, look elsewhere. If you are looking for a wonderful place to unwind in a beautiful setting, this could be exactly what you are looking for.
                        </p>
                    </div>
                </div>

                {/* Pricing */}
                <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg p-8 mb-12">
                    <div className="grid md:grid-cols-3 gap-6 text-center">
                        <div>
                            <p className="text-sm uppercase tracking-wide mb-2">Room Rate</p>
                            <p className="text-3xl font-bold">PHP 12,000</p>
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

            </div>

            <Footer />
        </>
    );
}