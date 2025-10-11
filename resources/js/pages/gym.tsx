import { dashboard, login, register } from '@/routes';
import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';
import { NavFooter } from '@/components/nav-footer';
import { HotelNavbar } from '@/components/hotel-navbar';
import { Footer } from '@/components/footer';
import HeroSlider from '@/components/heroslider';
import { StickyImage } from '@/components/sticky-image';
import { Dumbbell, Heart, Clock, Phone, Calendar, Droplets, Wind, Award } from 'lucide-react';

export default function Gym() {
    const { auth } = usePage<SharedData>().props;

    return (
        <>
            <Head title="Vida Fit - Fitness Center">
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
                    src="/img/gym/gym_banner_bg.jpg"
                    alt="Vida Fit Fitness Center"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <div className="text-center text-white px-4">
                        <h1 className="text-5xl md:text-6xl font-bold mb-4">Vida Fit</h1>
                        <p className="text-xl md:text-2xl">Fitness Center</p>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 py-16">
                {/* Introduction */}
                <section className="mb-16">
                    <div className="bg-gradient-to-br from-blue-50 to-white p-8 md:p-12 rounded-2xl">
                        <h2 className="text-4xl font-bold mb-6 text-center">Free for All Guests</h2>
                        <p className="text-lg text-gray-700 leading-relaxed mb-6">
                            This is a free feature for all our guests in Pura Vida Beach & Dive Resort. Beside your daily dive adventures, excursions or just sunbathing you have the opportunity to do some cardio exercises, weightlifting or just simply some stretching in our air-conditioned fitness center.
                        </p>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            The gym is equipped with first class state of the art gym equipment made by Technogym. Inside the gym a changing room and a fresh hot and cold shower can be used after the exercise. Please bring some clean fitness shoes, which are only used inside.
                        </p>
                    </div>
                </section>

                {/* Features Grid */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold mb-8 text-center">Fitness Center Features</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow">
                            <Award className="w-12 h-12 mx-auto mb-4 text-blue-600" />
                            <h3 className="text-xl font-bold mb-3">Technogym Equipment</h3>
                            <p className="text-gray-700">State-of-the-art fitness machines</p>
                        </div>
                        <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow">
                            <Wind className="w-12 h-12 mx-auto mb-4 text-blue-600" />
                            <h3 className="text-xl font-bold mb-3">Air-Conditioned</h3>
                            <p className="text-gray-700">Cool, comfortable workout environment</p>
                        </div>
                        <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow">
                            <Droplets className="w-12 h-12 mx-auto mb-4 text-blue-600" />
                            <h3 className="text-xl font-bold mb-3">Hot & Cold Showers</h3>
                            <p className="text-gray-700">Changing room with fresh showers</p>
                        </div>
                        <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow">
                            <Dumbbell className="w-12 h-12 mx-auto mb-4 text-blue-600" />
                            <h3 className="text-xl font-bold mb-3">Complete Workout</h3>
                            <p className="text-gray-700">Cardio, weights & stretching areas</p>
                        </div>
                    </div>
                </section>

                {/* 360° Virtual Tour */}
                <section className="mb-16">
                    <h2 className="text-4xl font-bold mb-8 text-center">Take a Virtual Tour</h2>
                    <div className="bg-gray-100 rounded-2xl overflow-hidden shadow-xl">
                        <div className="relative" style={{ paddingBottom: '56.25%' }}>
                            <iframe 
                                src="https://www.google.com/maps/embed?pb=!4v1519451707501!6m8!1m7!1sCAoSLEFGMVFpcFBJUEQzamdGVUlOM25iY0I4MGRGejVDWl9FSGdZaTY2OWJERW8w!2m2!1d9.192451663559554!2d123.2696430100443!3f111.79!4f-1.7399999999999949!5f0.7820865974627469" 
                                className="absolute top-0 left-0 w-full h-full"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                title="Vida Gym 360° Virtual Tour"
                            />
                        </div>
                    </div>
                    <p className="text-center text-gray-600 mt-4 text-lg">
                        Drag to explore the gym in 360° view
                    </p>
                </section>

                {/* Gym Hours & Contact */}
                <section className="mb-16">
                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Gym Hours */}
                        <div className="bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-2xl shadow-lg">
                            <div className="flex items-center mb-6">
                                <Clock className="w-10 h-10 text-green-600 mr-4" />
                                <h3 className="text-3xl font-bold text-gray-800">Gym Hours</h3>
                            </div>
                            <div className="space-y-4">
                                <div className="bg-white p-4 rounded-lg shadow-sm">
                                    <div className="flex items-center mb-2">
                                        <Calendar className="w-5 h-5 text-blue-600 mr-3" />
                                        <h4 className="font-bold text-lg">Monday – Wednesday</h4>
                                    </div>
                                    <p className="text-gray-700 ml-8 text-lg">6:00 AM – 6:00 PM</p>
                                </div>
                                <div className="bg-white p-4 rounded-lg shadow-sm">
                                    <div className="flex items-center mb-2">
                                        <Calendar className="w-5 h-5 text-blue-600 mr-3" />
                                        <h4 className="font-bold text-lg">Thursday – Sunday</h4>
                                    </div>
                                    <p className="text-gray-700 ml-8 text-lg">
                                        6:00 AM – 10:00 AM<br />
                                        2:00 PM – 6:00 PM
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Contact */}
                        <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white p-8 rounded-2xl shadow-lg flex flex-col justify-center">
                            <div className="flex items-center mb-6">
                                <Phone className="w-10 h-10 mr-4" />
                                <h3 className="text-3xl font-bold">Contact Us</h3>
                            </div>
                            <p className="text-xl mb-4 text-blue-100">
                                Have questions about our fitness center?
                            </p>
                            <a 
                                href="tel:09173034007" 
                                className="text-3xl font-bold hover:text-blue-200 transition-colors inline-flex items-center"
                            >
                                <Phone className="w-6 h-6 mr-3" />
                                0917 303 4007
                            </a>
                            <p className="text-blue-200 mt-4">
                                Call us for any inquiries or to schedule a personal training session
                            </p>
                        </div>
                    </div>
                </section>

                {/* Important Note */}
                <section className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-lg mb-16">
                    <div className="flex items-start">
                        <Dumbbell className="w-6 h-6 text-yellow-600 mr-4 flex-shrink-0 mt-1" />
                        <div>
                            <h4 className="font-bold text-lg mb-2 text-yellow-900">Important Reminder</h4>
                            <p className="text-gray-700">
                                Please bring clean fitness shoes that are only used inside the gym. This helps us maintain a hygienic environment for all guests.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Call to Action */}
                <section className="text-center bg-gradient-to-br from-blue-600 to-blue-800 text-white p-12 rounded-2xl">
                    <h3 className="text-3xl font-bold mb-4">Ready to Stay Active?</h3>
                    <p className="text-xl mb-8 text-blue-100">
                        Book your stay and enjoy complimentary access to our world-class fitness facilities
                    </p>
                    <a
                        href="https://app-apac.thebookingbutton.com/properties/PuraVidaBeachandDiveResortdirect"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
                    >
                        Book Your Stay
                    </a>
                </section>
            </div>

            <Footer />
        </>
    );
}