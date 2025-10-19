import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';
import { HotelNavbar } from '@/components/hotel-navbar';
import { Footer } from '@/components/footer';
import { Bed, Users, Coffee, Tv, Wind, Bath, Wifi, Shield, Star } from 'lucide-react';

export default function Welcome() {
    const { auth } = usePage<SharedData>().props;

    const amenities = [
        { icon: Bed, text: '1 King sized bed' },
        { icon: Users, text: 'Living room area with sofa set' },
        { icon: Star, text: 'Private balcony with 2 sunbeds' },
        { icon: Bath, text: 'Large bathroom with whirlpool' },
        { icon: Bath, text: 'Hot & cold shower' },
        { icon: Wind, text: 'Quiet split type air-conditioning' },
        { icon: Star, text: 'Hairdryer' },
        { icon: Coffee, text: 'Mini bar refrigerator' },
        { icon: Coffee, text: 'Complimentary water carafe' },
        { icon: Coffee, text: 'Complimentary coffee & tea making facility' },
        { icon: Shield, text: 'In-room safe' },
        { icon: Tv, text: 'Flat screen cable TV' },
        { icon: Users, text: 'Good for two (2) persons' },
        { icon: Bed, text: 'Extra mattress/bed possible (with surcharge)' }
    ];

    const similarRooms = [
        {
            name: 'Honeymoon Suite Whale',
            image: '/img/rooms/honeymoon.jpg',
            link: '/honeymoon'
        },
        {
            name: 'Family Room (Dolphin)',
            image: '/img/rooms/family_room2.jpg',
            link: '/family_room_dolphin'
        },
        {
            name: 'Family Room (Moorish Idol & Blue Ring)',
            image: '/img/rooms/room_family_blue.jpg',
            link: '/family_room_octopus'
        }
    ];

    return (
        <>
            <Head title="Suite - Stargazer & Birds Nest | Pura Vida Beach & Dive Resort">
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
                    src="/img/banner/361.jpg"
                    alt="Suite Room at Pura Vida"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <div className="text-center text-white">
                        <h1 className="text-5xl font-bold mb-2">Suites</h1>
                        <p className="text-xl">Stargazer & Birds Nest</p>
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
                            <span className="text-lg font-semibold">2 Guests</span>
                        </div>
                        <h2 className="text-3xl font-bold mb-4">Luxury Suite Experience</h2>
                        <p className="text-gray-700 mb-4 leading-relaxed">
                            The resort features 2 suite rooms (Stargazer & Birds Nest) both located on the 2nd floor above the family rooms. The spacious balconies feature a small bar including a mini-bar refrigerator as well as 2 sunbeds which offer a nice view over the tropical garden towards the pool and sea.
                        </p>
                        <p className="text-gray-700 mb-4 leading-relaxed">
                            Each Suite has a living room furnished with a beautiful set of one double and two single sofa chairs and a table made of high quality bamboo.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            A King size bed, a flat screen TV as well as a split air con to cool down the Suite to your preferred temperature will ensure you a good rest during the night. But before you settle in to sleep, you can enjoy the big bathtub or a just a shower in the suites' comfortable and big bathroom which provides hot water as well as a double sink. Perfect for honeymooners, couples, and single travelers who simply want to pamper themselves.
                        </p>
                    </div>
                    <div>
                        <img
                            src="/img/rooms/suites2.jpg"
                            alt="Suite Interior"
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
                            <span>Both suites are very close to the Vida Spa</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-blue-600 mt-1">•</span>
                            <span>Suites are not accessible by wheelchair</span>
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
                            <span className="font-semibold">Floyd from United States</span>
                        </div>
                        <h4 className="text-lg font-bold mb-2">"No reason to leave"</h4>
                        <p className="text-gray-700 leading-relaxed">
                            Great food, quiet location, relaxing atmosphere. This was a weekend getaway from the hustle of Makati, and it was simply incredible. I booked a suite, which was actually the entire top floor of a townhouse. VERY well appointed for the location, and just a wonderful resort. Manicured lawns, GREAT food, and a little private beach area. It's set up most for those that dive, but it can be enjoyed by anyone. Spend a little extra and get a suite, well worth it!
                        </p>
                    </div>
                </div>

                {/* Pricing */}
                <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg p-8 mb-12">
                    <div className="grid md:grid-cols-3 gap-6 text-center">
                        <div>
                            <p className="text-sm uppercase tracking-wide mb-2">Room Rate</p>
                            <p className="text-3xl font-bold">PHP 10,000</p>
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