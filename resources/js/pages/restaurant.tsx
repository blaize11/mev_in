import { dashboard, login, register } from '@/routes';
import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';
import { NavFooter } from '@/components/nav-footer';
import { HotelNavbar } from '@/components/hotel-navbar';
import { Footer } from '@/components/footer';
import HeroSlider from '@/components/heroslider';
import { StickyImage } from '@/components/sticky-image';
import { Wine, Utensils, Users, Leaf, Wind } from 'lucide-react';

export default function Restaurant() {
    const { auth } = usePage<SharedData>().props;

    return (
        <>
            <Head title="Pura Vida Restaurant - Dining Excellence">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link
                    href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600"
                    rel="stylesheet"
                />
            </Head>
          
            <HotelNavbar />

            {/* Hero Image Section */}
            <div className="relative h-[60vh] overflow-hidden">
                <img
                    src="/img/restaurant/restaurantbanner.jpeg"
                    alt="Pura Vida Restaurant"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <div className="text-center text-white">
                        <h1 className="text-5xl md:text-6xl font-bold mb-4">Restaurant</h1>
                        <p className="text-xl md:text-2xl">Where Every Meal Becomes a Memory</p>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 py-16">
                {/* Introduction */}
                <section className="mb-16">
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                        We make sure that every bit of your stay is memorable and enjoyable. Food plays a big role and that's why we have carefully created a menu that caters to every taste.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                        Pura Vida Restaurant started as a small and simple restaurant way back 2004 that served exclusively to their guest divers. Since then, it has grown to be one of the best and favorite restaurants in Dauin frequently visited by families and is now serving to more diverse group of people.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        The newly built restaurant is located in between of Pura Vida and Vida Homes, overlooking the scenic view of the sea and the pool. The building is inspired by a Spanish colonial period. Its tables and chairs are made of well-crafted bamboos and indigenous hard wood. The accents, decors, chandeliers are made by local artisans.
                    </p>
                </section>

                {/* Dining Options */}
                <section className="mb-16">
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="text-center p-6 bg-blue-50 rounded-lg">
                            <Utensils className="w-12 h-12 mx-auto mb-4 text-blue-600" />
                            <h3 className="text-xl font-bold mb-3">Beachfront Tiki Huts</h3>
                            <p className="text-gray-700">Dine with your feet in the sand and enjoy the revitalizing sea breeze</p>
                        </div>
                        <div className="text-center p-6 bg-blue-50 rounded-lg">
                            <Users className="w-12 h-12 mx-auto mb-4 text-blue-600" />
                            <h3 className="text-xl font-bold mb-3">Cozy Outdoor Balcony</h3>
                            <p className="text-gray-700">Perfect for intimate dining with scenic views</p>
                        </div>
                        <div className="text-center p-6 bg-blue-50 rounded-lg">
                            <Wind className="w-12 h-12 mx-auto mb-4 text-blue-600" />
                            <h3 className="text-xl font-bold mb-3">Air-Conditioned Indoor</h3>
                            <p className="text-gray-700">Comfortable climate-controlled dining area</p>
                        </div>
                    </div>
                    <p className="text-center text-gray-700 mt-8 text-lg">
                        The dining area offers spacious and comfortable seating for families, groups of friends, travel groups and couples.
                    </p>
                </section>

                {/* Image Gallery Placeholder */}
                <section className="mb-16">
                    <div className="grid md:grid-cols-3 gap-4">
                        <div className="h-64 bg-gray-200 rounded-lg"></div>
                        <div className="h-64 bg-gray-200 rounded-lg"></div>
                        <div className="h-64 bg-gray-200 rounded-lg"></div>
                    </div>
                </section>

                {/* Menu Section */}
                <section className="mb-16 bg-gradient-to-br from-blue-50 to-white p-8 md:p-12 rounded-2xl">
                    <div className="flex items-center justify-center mb-6">
                        <Utensils className="w-10 h-10 text-blue-600 mr-4" />
                        <h2 className="text-4xl font-bold text-gray-800">Menu</h2>
                    </div>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                        Pura Vida Restaurant is a place where everyone can enjoy sumptuous food and experience the warm Filipino hospitality; a service with a smile. Our Menu offers a wide range of dishes, variety of all-time favorite Filipino food, other Asian and European inspired cuisines.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                        The daily and weekly specials are thoughtfully selected and prepared by our Chef. We strive to create fresh, healthy, tasty, enjoyable food made from local ingredients because we believe that what we eat is important for our health.
                    </p>
                    <div className="flex items-start bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                        <Leaf className="w-8 h-8 text-green-600 mr-4 flex-shrink-0 mt-1" />
                        <p className="text-gray-700">
                            To protect our environment, we use sustainable energy such as solar on our daily operation and we work hard to reduce carbon footprint.
                        </p>
                    </div>
                </section>

                {/* Menu Images Placeholder */}
                <section className="mb-16">
                    <div className="grid md:grid-cols-3 gap-4">
                        <div className="h-64 bg-gray-200 rounded-lg"></div>
                        <div className="h-64 bg-gray-200 rounded-lg"></div>
                        <div className="h-64 bg-gray-200 rounded-lg"></div>
                    </div>
                </section>

                {/* Wine Cellar Section */}
                <section className="bg-gradient-to-br from-purple-900 to-red-900 text-white p-8 md:p-12 rounded-2xl">
                    <div className="flex items-center justify-center mb-6">
                        <Wine className="w-10 h-10 text-purple-200 mr-4" />
                        <h2 className="text-4xl font-bold">Wine Cellar</h2>
                    </div>
                    <p className="text-lg text-purple-100 leading-relaxed mb-6 text-center max-w-3xl mx-auto">
                        Taste, feel and enjoy as you delight in every sip of your wine from Pura Vida Wine Cellar. All wines are carefully selected to complement your taste.
                    </p>
                    <p className="text-lg text-purple-100 leading-relaxed mb-8 text-center max-w-3xl mx-auto">
                        Treat yourself, make your leisure time more luxurious, dine and relish it with a nice glass of wine.
                    </p>
                    
                    {/* Quote */}
                    <div className="border-t border-purple-400/30 pt-8 mt-8">
                        <blockquote className="text-center">
                            <p className="text-xl italic text-purple-100 mb-4">
                                "Wine makes daily living easier, less hurried, with fewer tensions and more tolerance."
                            </p>
                            <footer className="text-purple-300">
                                — Benjamin Franklin, American author, scientist and politician (1706-1790)
                            </footer>
                        </blockquote>
                    </div>
                </section>

                {/* Call to Action */}
                <section className="text-center mt-16">
                    <h3 className="text-3xl font-bold mb-6">Ready to Dine with Us?</h3>
                    <a
                        href="https://app-apac.thebookingbutton.com/properties/PuraVidaBeachandDiveResortdirect"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-lg"
                    >
                        Reserve Your Table
                    </a>
                </section>
            </div>

            <Footer />
        </>
    );
}