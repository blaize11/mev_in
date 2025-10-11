import { dashboard, login, register } from '@/routes';
import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';
import { NavFooter } from '@/components/nav-footer';
import { HotelNavbar } from '@/components/hotel-navbar';
import { Footer } from '@/components/footer';
import HeroSlider from '@/components/heroslider';
import { Shield, BookOpen, ShoppingBag, Package, Waves, Camera, Fish, Award, Instagram, ExternalLink } from 'lucide-react';

export default function Welcome() {
    const { auth } = usePage<SharedData>().props;

    return (
        <>
            <Head title="Sea Explorers - Diving in Negros">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link
                    href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600"
                    rel="stylesheet"
                />
            </Head>
          
            <HotelNavbar />

            {/* Hero Image Section */}
            <div>
                <img
                    src="/img/diving/divebanner.jpg"
                    alt="Sea Explorers Diving"
                    className="w-full rounded-lg shadow-lg"
                />
            </div>

            {/* PADI Career Development Center Badge */}
            <div className="bg-blue-600 text-white py-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <p className="text-2xl font-bold">★★★★★ PADI Career Development Center</p>
                </div>
            </div>

            {/* Main Content Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {/* Introduction */}
                <div className="mb-16">
                    <div className="flex justify-center mb-6">
                        <Award className="w-16 h-16 text-blue-600" />
                    </div>
                    <h1 className="text-4xl font-bold text-gray-900 mb-6 text-center">
                        Sea Explorers Philippines
                    </h1>
                    <p className="text-xl text-gray-700 text-center mb-4">
                        The Island hopping specialist in the Visayas with Dive Center branches in Dauin, Malapascua and Sipalay
                    </p>
                    <p className="text-2xl font-semibold text-blue-600 text-center mb-8">
                        Dive with a smile!
                    </p>
                    
                    {/* Explore Now Button */}
                    <div className="flex justify-center mb-12">
                        <a
                            href="https://www.sea-explorers.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-blue-600 text-white px-10 py-4 rounded-lg text-xl font-semibold hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg"
                        >
                            Explore Now
                            <ExternalLink className="w-6 h-6" />
                        </a>
                    </div>
                    

                </div>

                {/* Negros Diving Description */}
                <div className="mb-16">
                    <div className="flex items-center gap-3 mb-6">
                        <Waves className="w-8 h-8 text-blue-600" />
                        <h2 className="text-3xl font-bold text-gray-900">Discover Negros Island</h2>
                    </div>
                    <p className="text-lg text-gray-700 leading-relaxed mb-4">
                        Negros is the second largest island in the Visayas region, known as a "muck" diving area with lots of sand and very rare critters. The island is surrounded by marine reserves and more than 30 exciting dive sites that offer world-class macro and night dives.
                    </p>
                    <div className="bg-blue-50 p-6 rounded-lg mb-6">
                        <div className="flex items-center gap-3 mb-4">
                            <Fish className="w-8 h-8 text-blue-600" />
                            <h3 className="text-2xl font-bold text-gray-900">Apo Island</h3>
                        </div>
                        <p className="text-lg text-gray-700 leading-relaxed mb-4">
                            A 72-hectare volcanic island with unique rock formations, 650 documented species of fish and over 400 species of corals. In 2008, Sport Diver Magazine listed Apo Island as one of the top 100 diving spots in the world — and it still is!
                        </p>
                    </div>
                </div>

                {/* Facilities Section */}
                <div className="mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Facilities</h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-4">
                        We offer a very well-equipped facility with our own office, small retail shop, air-conditioned classroom and three storerooms for our guest's equipment directly on the beach. The dive center is located inside Pura Vida Beach & Dive Resort directly on the beach.
                    </p>
                    <div className="grid md:grid-cols-2 gap-6 mt-8">
                        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                            <div className="flex items-center gap-3 mb-3">
                                <Shield className="w-8 h-8 text-blue-600" />
                                <h3 className="text-xl font-bold text-gray-900">Safety Equipment</h3>
                            </div>
                            <p className="text-gray-700">O2 equipment, first aid kit, and comprehensive safety protocols</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                            <div className="flex items-center gap-3 mb-3">
                                <BookOpen className="w-8 h-8 text-blue-600" />
                                <h3 className="text-xl font-bold text-gray-900">Learning Resources</h3>
                            </div>
                            <p className="text-gray-700">Air-conditioned classroom and fish book library</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                            <div className="flex items-center gap-3 mb-3">
                                <ShoppingBag className="w-8 h-8 text-blue-600" />
                                <h3 className="text-xl font-bold text-gray-900">Retail Shop</h3>
                            </div>
                            <p className="text-gray-700">Souvenirs and diving accessories available</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                            <div className="flex items-center gap-3 mb-3">
                                <Package className="w-8 h-8 text-blue-600" />
                                <h3 className="text-xl font-bold text-gray-900">Equipment Storage</h3>
                            </div>
                            <p className="text-gray-700">Three dedicated storerooms for guest equipment</p>
                        </div>
                    </div>
                </div>

                {/* Diving Experience Section */}
                <div className="mb-16">
                    <div className="flex items-center gap-3 mb-6">
                        <Camera className="w-8 h-8 text-blue-600" />
                        <h2 className="text-3xl font-bold text-gray-900">The Diving Experience</h2>
                    </div>
                    <p className="text-lg text-gray-700 leading-relaxed mb-4">
                        Dauin offers an excellent area for courses as well as for all levels of certified divers. There are about 30 excellent & exciting dive sites that offer world-class macro and night dives – a paradise for underwater photographers.
                    </p>
                    <div className="bg-gray-100 p-6 rounded-lg">
                        <h3 className="text-xl font-bold text-gray-900 mb-3">Apo Island Day Trips</h3>
                        <p className="text-lg text-gray-700">
                            Several day trips a week to Apo Island where divers can make up to 3 dives during the trip. These sites are also excellent for snorkelers.
                        </p>
                    </div>
                </div>

                                    {/* Instagram Section */}
                    <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-8 rounded-lg text-center">
                        <div className="flex justify-center mb-4">
                            <Instagram className="w-12 h-12 text-pink-600" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Sea Explorers on Instagram</h3>
                        <p className="text-lg text-gray-700 mb-6">
                            Follow us <span className="font-semibold text-pink-600">@seaexplorersphilippines</span>
                        </p>
                        <a
                            href="https://www.instagram.com/seaexplorersphilippines/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-full font-semibold hover:from-purple-700 hover:to-pink-700 transition-all transform hover:scale-105 shadow-lg"
                        >
                            Explore Our Instagram
                            <ExternalLink className="w-5 h-5" />
                        </a>
                    </div>
            </div>

            <Footer />
        </>
    );
}