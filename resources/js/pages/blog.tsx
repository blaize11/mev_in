import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';
import { HotelNavbar } from '@/components/hotel-navbar';
import { Footer } from '@/components/footer';
import { Calendar, Tag, Users, Waves } from 'lucide-react';
import React from 'react';

const blogPosts = [
  {
    id: 1,
    title: "Pura Vida celebrates 18th years Anniversary",
    date: "December 8, 2022",
    category: "News",
    excerpt: "We are grateful to be in service for 18 years. A big thanks to everyone who support and believe in us.",
    image: "/images/anniversary.jpg"
  },
  {
    id: 2,
    title: "Welcome Back – Chaos Divers Group",
    date: "December 3, 2022",
    category: "News",
    excerpt: "It was a pleasure to welcome you back in Dauin with a big smile and continue your journey to Sea Explorers Sipalay branch.",
    image: "/images/chaos-divers.jpg"
  },
  {
    id: 3,
    title: "Waterworld Group Rocks Pura Vida Dauin",
    date: "December 2, 2022",
    category: "News",
    excerpt: "Thank you so much for coming and choosing us as one of your travel destinations. We look forward to see accommodating you in the future.",
    image: "/images/waterworld.jpg"
  },
  {
    id: 4,
    title: "Koen Van Orshaegen Group invades Pura Vida",
    date: "March 28, 2019",
    category: "Recent guests",
    excerpt: "We are more than happy to have had the group of Koen Van Orshaegen here",
    image: "/images/koen-group.jpg"
  },
  {
    id: 5,
    title: "Blue Whale Sighting in Dauin!",
    date: "March 16, 2019",
    category: "News",
    excerpt: "Photos of the Blue Whale spotted on the way back from Apo Island",
    image: "/images/blue-whale.jpg"
  },
  {
    id: 6,
    title: "Another Successful IDC at Sea Explorers Dauin",
    date: "March 13, 2019",
    category: "Diving",
    excerpt: "Our Sea Explorers Dive center once again completed another",
    image: "/images/idc.jpg"
  },
  {
    id: 7,
    title: "Herbert & Gabriela Futterknecht group visits Pura Vida once again",
    date: "March 12, 2019",
    category: "Recent guests",
    excerpt: "Thank you to Herbert and Gabriela Futterknecht and their dive group for diving with us here at Dauin.",
    image: "/images/futterknecht.jpg"
  },
  {
    id: 8,
    title: "Resouchess Group in Pura Vida!",
    date: "March 15, 2018",
    category: "Recent guests",
    excerpt: "The Ressouches group from France visiting Pura Vida! Despite being delayed by one day due to a missed flight, the group of 29 people spent a wonderful time here at Pura Vida.",
    image: "/images/resouchess.jpg"
  },
  {
    id: 9,
    title: "PH Travel group invades Pura Vida!",
    date: "March 9, 2018",
    category: "Recent guests",
    excerpt: "The PH Travel group led by Per Lagerberg spent some wonderful weeks of diving here in Pura Vida Dauin.",
    image: "/images/ph-travel.jpg"
  },
  {
    id: 10,
    title: "Top 5 activities to do around Dauin",
    date: "February 7, 2018",
    category: "Travel",
    excerpt: "Dauin offers a great number of activities whether it is exploring the oceans or experiencing Filipino culture.",
    image: "/images/activities.jpg"
  },
  {
    id: 11,
    title: "10 reasons to become a diving instructor",
    date: "February 7, 2018",
    category: "Diving",
    excerpt: "Discover the amazing opportunities and adventures that come with becoming a certified diving instructor.",
    image: "/images/instructor.jpg"
  },
  {
    id: 12,
    title: "Jean Pierre Bettin Group Visit Pura Vida",
    date: "February 5, 2018",
    category: "News",
    excerpt: "Welcome to the Jean Pierre Bettin Group for their visit to our beautiful resort.",
    image: "/images/bettin.jpg"
  }
];

const categories = ["All", "News", "Recent guests", "Diving", "Travel"];

const popularPosts = [
  { title: "Top 5 activities to do around Dauin", date: "February 7, 2018" },
  { title: "10 reasons to become a diving instructor", date: "February 7, 2018" },
  { title: "Jean Pierre Bettin Group Visit Pura Vida", date: "February 5, 2018" }
];

export default function Blog() {
    const { auth } = usePage<SharedData>().props;
    const [selectedCategory, setSelectedCategory] = React.useState("All");
    const [visiblePosts, setVisiblePosts] = React.useState(6);

    const filteredPosts = selectedCategory === "All" 
        ? blogPosts 
        : blogPosts.filter(post => post.category === selectedCategory);

    const displayedPosts = filteredPosts.slice(0, visiblePosts);

    return (
        <>
            <Head title="Blog - Vida News">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link
                    href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600"
                    rel="stylesheet"
                />
            </Head>
          
            <HotelNavbar />

            <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
                {/* Hero Section */}
                <div className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center">
                            <h1 className="text-5xl font-bold mb-4">Vida News</h1>
                            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                                Stay updated with the latest stories, guest experiences, and diving adventures at Pura Vida Beach Resort
                            </p>
                        </div>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                        {/* Main Content */}
                        <div className="lg:col-span-3">
                            {/* Category Filter */}
                            <div className="mb-8 flex flex-wrap gap-3">
                                {categories.map(cat => (
                                    <button
                                        key={cat}
                                        onClick={() => {
                                            setSelectedCategory(cat);
                                            setVisiblePosts(6);
                                        }}
                                        className={`px-4 py-2 rounded-full transition-all ${
                                            selectedCategory === cat
                                                ? 'bg-blue-600 text-white shadow-lg'
                                                : 'bg-white text-gray-700 hover:bg-blue-50 border border-gray-200'
                                        }`}
                                    >
                                        {cat}
                                    </button>
                                ))}
                            </div>

                            {/* Blog Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                                {displayedPosts.map(post => (
                                    <article key={post.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                                        <div className="h-48 bg-gradient-to-br from-blue-400 to-cyan-300 flex items-center justify-center">
                                            <Waves className="w-16 h-16 text-white opacity-50" />
                                        </div>
                                        <div className="p-6">
                                            <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                                                <span className="flex items-center gap-1">
                                                    <Calendar className="w-4 h-4" />
                                                    {post.date}
                                                </span>
                                                <span className="flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                                                    <Tag className="w-3 h-3" />
                                                    {post.category}
                                                </span>
                                            </div>
                                            <h2 className="text-xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors">
                                                {post.title}
                                            </h2>
                                            <p className="text-gray-600 mb-4 line-clamp-3">
                                                {post.excerpt}
                                            </p>
                                            <Link
                                                href={`/blog/${post.id}`}
                                                className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700"
                                            >
                                                Read More →
                                            </Link>
                                        </div>
                                    </article>
                                ))}
                            </div>

                            {/* Load More */}
                            {visiblePosts < filteredPosts.length && (
                                <div className="text-center">
                                    <button
                                        onClick={() => setVisiblePosts(prev => prev + 6)}
                                        className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg"
                                    >
                                        Load More Posts
                                    </button>
                                </div>
                            )}
                        </div>

                        {/* Sidebar */}
                        <div className="lg:col-span-1">
                            {/* Categories Widget */}
                            <div className="bg-white rounded-xl shadow-md p-6 mb-8">
                                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                                    <Tag className="w-5 h-5 text-blue-600" />
                                    Categories
                                </h3>
                                <ul className="space-y-2">
                                    {["Diving", "News", "Recent guests", "Travel"].map(cat => (
                                        <li key={cat}>
                                            <button
                                                onClick={() => setSelectedCategory(cat)}
                                                className="w-full text-left px-3 py-2 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                                            >
                                                {cat}
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Popular Posts Widget */}
                            <div className="bg-white rounded-xl shadow-md p-6">
                                <h3 className="text-lg font-bold text-gray-900 mb-4">
                                    Popular Posts
                                </h3>
                                <ul className="space-y-4">
                                    {popularPosts.map((post, idx) => (
                                        <li key={idx} className="border-b border-gray-100 last:border-0 pb-4 last:pb-0">
                                            <Link
                                                href="#"
                                                className="text-gray-900 hover:text-blue-600 font-medium text-sm block mb-1"
                                            >
                                                {post.title}
                                            </Link>
                                            <span className="text-xs text-gray-500 flex items-center gap-1">
                                                <Calendar className="w-3 h-3" />
                                                {post.date}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Follow Us */}
                            <div className="bg-gradient-to-br from-blue-600 to-cyan-500 rounded-xl shadow-md p-6 mt-8 text-white">
                                <h3 className="text-lg font-bold mb-3">Follow Us</h3>
                                <p className="text-blue-100 text-sm mb-4">
                                    Stay connected for the latest updates and stories
                                </p>
                                <div className="flex gap-3">
                                    <a href="#" className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center hover:bg-white/30 transition-colors">
                                        <Users className="w-5 h-5" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}