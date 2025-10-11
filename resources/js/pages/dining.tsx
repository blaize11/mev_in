import { dashboard, login, register } from '@/routes';
import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';
import { NavFooter } from '@/components/nav-footer';
import { HotelNavbar } from '@/components/hotel-navbar';
import { Footer } from '@/components/footer';
import HeroSlider from '@/components/heroslider';
import { StickyImage } from '@/components/sticky-image';

export default function Welcome() {
    const { auth } = usePage<SharedData>().props;

    return (
        <>
            <Head title="Vida Spa - Relax & Rejuvenate">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link
                    href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600"
                    rel="stylesheet"
                />
            </Head>
          
            <HotelNavbar />

            {/* Image Section */}
            <div>
                <img
                    src="/img/banner/361.jpg"
                    alt="About Pura Vida"
                    className="w-full rounded-lg shadow-lg"
                />
            </div>

            {/* Restaurant & Bar Cards */}
            <div className="container mx-auto px-4 py-16">
                <div className="grid md:grid-cols-2 gap-8">
                    {/* Restaurant Card */}
                    <div className="bg-white rounded-lg shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                        <img
                            src="/img/restaurant/resto2.jpg"
                            alt="Restaurant"
                            className="w-full h-64 object-cover"
                        />
                        <div className="p-6">
                            <h3 className="text-2xl font-semibold mb-3">Restaurant</h3>
                            <p className="text-gray-600 mb-4">
                                Experience exquisite culinary delights crafted by our expert chefs. 
                                Enjoy a perfect blend of local and international cuisine in an elegant atmosphere.
                            </p>
                            <Link
                                href="/restaurant"
                                className="inline-block bg-amber-600 text-white px-6 py-2 rounded hover:bg-amber-700 transition-colors"
                            >
                                View Menu
                            </Link>
                        </div>
                    </div>

                    {/* Bar Card */}
                    <div className="bg-white rounded-lg shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                        <img
                            src="/img/restaurant/wine.jpg"
                            alt="Bar"
                            className="w-full h-64 object-cover"
                        />
                        <div className="p-6">
                            <h3 className="text-2xl font-semibold mb-3">Bar</h3>
                            <p className="text-gray-600 mb-4">
                                Unwind with our signature cocktails and premium beverages. 
                                Our bar offers a sophisticated ambiance perfect for relaxation and socializing.
                            </p>
                            <Link
                                href="/bar"
                                className="inline-block bg-amber-600 text-white px-6 py-2 rounded hover:bg-amber-700 transition-colors"
                            >
                                Explore Drinks
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}