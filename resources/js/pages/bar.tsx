import { dashboard, login, register } from '@/routes';
import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';
import { NavFooter } from '@/components/nav-footer';
import { HotelNavbar } from '@/components/hotel-navbar';
import { Footer } from '@/components/footer';

export default function Bar() {
    const { auth } = usePage<SharedData>().props;

    return (
        <>
            <Head title="99er's Bar & Lounge - Pura Vida">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link
                    href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600"
                    rel="stylesheet"
                />
            </Head>
          
            <HotelNavbar />

            {/* Hero Image Section */}
            <div className="w-full">
                <img
                    src="/img/bar/barbanner.jpg"
                    alt="99er's Bar & Lounge"
                    className="w-full h-96 object-cover"
                />
            </div>

            {/* Main Content Section */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 text-gray-800">
                            99er's Bar & Lounge
                        </h1>

                        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                Welcome to 99er's bar and enjoy your drinks while listening to music or deep in the pool just right beside the bar with a scenic view of the ocean.
                            </p>
                            
                            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                We also have other amenities like billiard, foosball, dart, and a mini playground for the whole family.
                            </p>
                            
                            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                The bar offers coffee & different refresher from fresh fruit juices, shakes, cocktails, beers, wine, and spirits on your preferred choice. Our chef prepares delicious snacks like pizzas, sandwiches, burgers, and sumptuous local and international food cuisine – that is all fresh and made to order.
                            </p>
                            
                            <div className="bg-amber-50 border-l-4 border-amber-600 p-6 my-8">
                                <h3 className="text-xl font-bold text-amber-800 mb-2">DIVER's NIGHT</h3>
                                <p className="text-gray-700">
                                    Join us every <strong>Saturday</strong> from <strong>6:00 PM until 10:00 PM</strong> with Acoustic Band and happy hour between <strong>5:00 PM and 7:00 PM</strong>.
                                </p>
                            </div>
                        </div>

                        {/* Amenities Grid */}
                        <div className="grid md:grid-cols-2 gap-6 mb-8">
                            <div className="bg-white rounded-lg shadow-md p-6">
                                <h3 className="text-2xl font-semibold mb-4 text-gray-800">Beverages</h3>
                                <ul className="space-y-2 text-gray-700">
                                    <li className="flex items-start">
                                        <i className="fa fa-check text-amber-600 mt-1 mr-3"></i>
                                        <span>Fresh Fruit Juices & Shakes</span>
                                    </li>
                                    <li className="flex items-start">
                                        <i className="fa fa-check text-amber-600 mt-1 mr-3"></i>
                                        <span>Cocktails</span>
                                    </li>
                                    <li className="flex items-start">
                                        <i className="fa fa-check text-amber-600 mt-1 mr-3"></i>
                                        <span>Beers, Wine & Spirits</span>
                                    </li>
                                    <li className="flex items-start">
                                        <i className="fa fa-check text-amber-600 mt-1 mr-3"></i>
                                        <span>Coffee</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-white rounded-lg shadow-md p-6">
                                <h3 className="text-2xl font-semibold mb-4 text-gray-800">Food & Amenities</h3>
                                <ul className="space-y-2 text-gray-700">
                                    <li className="flex items-start">
                                        <i className="fa fa-check text-amber-600 mt-1 mr-3"></i>
                                        <span>Pizzas & Burgers</span>
                                    </li>
                                    <li className="flex items-start">
                                        <i className="fa fa-check text-amber-600 mt-1 mr-3"></i>
                                        <span>Local & International Cuisine</span>
                                    </li>
                                    <li className="flex items-start">
                                        <i className="fa fa-check text-amber-600 mt-1 mr-3"></i>
                                        <span>Billiard, Foosball & Dart</span>
                                    </li>
                                    <li className="flex items-start">
                                        <i className="fa fa-check text-amber-600 mt-1 mr-3"></i>
                                        <span>Mini Playground</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Contact Section */}
                        <div className="bg-[#800000] text-white rounded-lg shadow-lg p-8 text-center">
                            <h3 className="text-2xl font-semibold mb-4">Contact Us</h3>
                            <div className="space-y-2">
                                <p className="text-lg">
                                    <i className="fa fa-phone mr-2"></i>
                                    +63 917-320-2284 / +63 928-507-7167
                                </p>
                                <p className="text-lg">
                                    <i className="fa fa-envelope mr-2"></i>
                                    reservation@puravidadauin.com
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}