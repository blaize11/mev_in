import { dashboard, login, register } from '@/routes';
import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';
import { NavFooter } from '@/components/nav-footer';
import { HotelNavbar } from '@/components/hotel-navbar';
import { Footer } from '@/components/footer';
import HeroSlider from '@/components/heroslider';
// import { StickyImage } from '@/components/sticky-image';

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
                    src="/img/spa/spabg.jpg"
                    alt="About Pura Vida"
                    className="w-full rounded-lg shadow-lg"
                />
                </div>



            {/* Hero Section */}
            <div className="relative bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 pt-24 pb-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                            Vida Spa
                        </h1>
                        <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                            A perfect oasis to relax and get pampered after an exciting day of diving, 
                            after exploring the island or just to enjoy the day. Located within our luscious 
                            garden in a quiet environment to give you the relaxing experience you are looking for.
                        </p>
                    </div>
                </div>
            </div>

            {/* Services Overview */}
            {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Treatments</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                        'Hand & Foot Reflexology',
                        'Aloe Vera Sunburn Massage',
                        'Swedish Massage',
                        'Aromatherapy',
                        'Shiatsu Massage',
                        'Thai Massage',
                        'Signature Massage "Vida Harmony"',
                        'Fruit Body Scrub',
                        'Hot Stone Therapy Massage',
                        'Healing Massage "Vida Ventosa"',
                        'Wellness Massage Package'
                    ].map((treatment, idx) => (
                        <div key={idx} className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                            <div className="flex items-center space-x-3">
                                <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                                <h3 className="text-lg font-semibold text-gray-800">{treatment}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div> */}

            {/* Massage Treatments with Images */}
            <div className="bg-gray-50 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Massage Treatments</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { name: 'Hand & Foot Reflexology', time: '60 Minutes', price: 'PHP 950', img: '/img/spa/spa.jpg' },
                            { name: 'Aloe Vera Sunburn Massage', time: '60 Minutes', price: 'PHP 990', special: true, img: '/img/spa/spa2.jpg' },
                            { name: 'Swedish Massage', time: '60 Minutes', price: 'PHP 990', img: '/img/spa/spa2.jpg' },
                            { name: 'Aromatherapy', time: '75 Minutes', price: 'PHP 1,400', img: '/img/spa/spa.jpg' },
                            { name: 'Shiatsu Massage', time: '60 Minutes', price: 'PHP 1,450', img: '/img/spa/spa2.jpg' },
                            { name: 'Thai Massage', time: '60 Minutes', price: 'PHP 1,450', img: '/img/spa/spa.jpg' },
                            { name: 'Signature Massage "Vida Harmony"', time: '75 Minutes', price: 'PHP 1,500', img: '/img/spa/spa2.jpg' },
                            { name: 'Fruit Body Scrub', time: '90 Minutes', price: 'PHP 1,950', img: '/img/spa/spa.jpg' },
                            { name: 'Hot Stone Therapy Massage', time: '90 Minutes', price: 'PHP 1,950', img: '/img/spa/spa2.jpg' },
                            { name: 'Healing Massage "Vida Ventosa"', time: '90 Minutes', price: 'PHP 1,950', img: '/img/spa/spa.jpg' }
                        ].map((treatment, idx) => (
                            <div key={idx} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group">
                                <div className="relative h-64 overflow-hidden">
                                    <img 
                                        src={treatment.img} 
                                        alt={treatment.name}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                    <div className="absolute bottom-4 left-4 right-4">
                                        <h3 className="text-white font-bold text-xl mb-1">
                                            {treatment.name}
                                            {treatment.special && <span className="ml-2 text-xs text-teal-300">**</span>}
                                        </h3>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-600 font-medium">{treatment.time}</span>
                                        <span className="text-2xl font-bold text-teal-600">{treatment.price}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Other Treatments */}
            <div className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Special Packages</h2>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Foot Spa Package */}
                        <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl shadow-lg p-8 border border-teal-100">
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Foot Spa with Manicure & Pedicure</h3>
                            <div className="flex justify-between items-center mb-4">
                                <span className="text-gray-600 font-medium">60 Minutes</span>
                                <span className="text-2xl font-bold text-teal-600">PHP 800</span>
                            </div>
                        </div>

                        {/* Wellness Package */}
                        <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl shadow-lg p-8 border border-emerald-100">
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Wellness Massage Package</h3>
                            <div className="flex justify-between items-center mb-6">
                                <span className="text-gray-600 font-medium">150 Minutes</span>
                                <span className="text-2xl font-bold text-emerald-600">PHP 3,000</span>
                            </div>
                            <ul className="space-y-2 text-gray-700 mb-4">
                                <li className="flex items-start">
                                    <span className="text-emerald-500 mr-2">•</span>
                                    <span>Foot Soaking</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-emerald-500 mr-2">•</span>
                                    <span>Body Scrub Massage with Coconut or Aloe Vera</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-emerald-500 mr-2">•</span>
                                    <span>Relaxation to Absorb Healthy Exfoliation</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-emerald-500 mr-2">•</span>
                                    <span>Hot Shower</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-emerald-500 mr-2">•</span>
                                    <span>Cup of Tea and Fresh Fruits</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-emerald-500 mr-2">•</span>
                                    <span>Choice of Massage: Vida Harmony, Swedish, or Aromatherapy</span>
                                </li>
                            </ul>
                            <div className="bg-white rounded-lg p-3 text-sm text-gray-600">
                                <span className="font-semibold">Upgrade:</span> Hot Stone massage +PHP 450
                            </div>
                            <p className="text-xs text-gray-500 mt-3">** Special treatment</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Daily Specials */}
            <div className="bg-gradient-to-br from-teal-600 to-emerald-600 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-white mb-4">Daily Wellness Specials</h2>
                        <p className="text-xl text-teal-50">10% OFF from 11:00 AM to 3:55 PM</p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {[
                            { day: 'Monday', treatment: 'Vida Harmony', original: 1500, discounted: 1350 },
                            { day: 'Tuesday', treatment: 'Swedish Massage', original: 990, discounted: 891 },
                            { day: 'Wednesday', treatment: 'Aromatherapy', original: 1400, discounted: 1260 },
                            { day: 'Thursday', treatment: 'Thai Massage', original: 1450, discounted: 1305 },
                            { day: 'Friday', treatment: 'Shiatsu Massage', original: 1450, discounted: 1305 },
                            { day: 'Saturday', treatment: 'Hand & Foot Reflexology', original: 950, discounted: 855 },
                            { day: 'Sunday', treatment: 'Hot Stone Massage', original: 1950, discounted: 1755 }
                        ].map((special, idx) => (
                            <div key={idx} className="bg-white rounded-xl shadow-xl p-6 hover:transform hover:scale-105 transition-all duration-300">
                                <div className="text-center">
                                    <div className="bg-teal-100 text-teal-800 font-bold text-sm px-3 py-1 rounded-full inline-block mb-3">
                                        {special.day}
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-4">{special.treatment}</h3>
                                    <div className="space-y-2">
                                        <p className="text-sm text-gray-500 line-through">PHP {special.original.toLocaleString()}</p>
                                        <p className="text-2xl font-bold text-teal-600">PHP {special.discounted.toLocaleString()}</p>
                                    </div>
                                    <div className="mt-3 text-xs text-emerald-600 font-semibold">SAVE 10%</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Important Note */}
            <div className="bg-amber-50 border-l-4 border-amber-400 py-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-start">
                        <div className="flex-shrink-0">
                            <svg className="h-6 w-6 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <div className="ml-3">
                            <p className="text-sm text-amber-800">
                                <span className="font-semibold">Important:</span> 20% cancellation fee applies on selected treatments & packages
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}