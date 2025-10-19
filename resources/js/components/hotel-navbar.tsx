import { Link, usePage } from '@inertiajs/react';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export function HotelNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { url } = usePage<{ url: string }>(); // Explicit type for usePage

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Helper function to determine if a link is active
  const isActive = (href: string) => url === href;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 py-2 px-4 sm:px-8 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/25 backdrop-blur-sm shadow-md'
          : 'bg-white shadow-md'
      }`}
    >
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3">
          <img
            src="/logo.png"
            alt="Pura Vida Resort Logo"
            className="h-26 sm:h-30 w-auto object-contain"
          />
        </Link>

        {/* Hamburger Menu for Mobile */}
        <button
          className="sm:hidden text-gray-800 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>

        {/* Navigation Links and Book Button */}
        <div
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } sm:flex sm:items-center sm:space-x-6 absolute sm:static top-full left-0 right-0 bg-white sm:bg-transparent shadow-lg sm:shadow-none p-4 sm:p-0 transition-all duration-300`}
        >
          <ul className="list-none text-gray-800 font-medium sm:flex sm:space-x-6">
            {/* Home */}
            <li className="relative group">
              <Link
                href="/"
                className={`block px-6 py-4 sm:py-3 hover:text-white transition-all duration-300 ease-in-out relative bg-transition ${
                  isActive('/') ? 'bg-[#800000] text-white' : ''
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
            </li>

            {/* About */}
            <li className="relative group">
              <Link
                href="/about"
                className={`block px-6 py-4 sm:py-3 hover:text-white transition-all duration-300 ease-in-out relative bg-transition ${
                  isActive('/about') ? 'bg-[#800000] text-white' : ''
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
            </li>

            {/* Rooms */}
            <li className="relative group">
              <Link
                href="/room"
                className={`block px-6 py-4 sm:py-3 hover:text-white transition-all duration-300 ease-in-out relative bg-transition ${
                  isActive('/room') ? 'bg-[#800000] text-white' : ''
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Rooms
              </Link>
            </li>

            {/* Dining Dropdown */}
            {/* <li className="relative group">
              <Link
                href="/dining"
                className={`block px-6 py-4 sm:py-3 hover:text-white transition-all duration-300 ease-in-out relative bg-transition ${
                  isActive('/dining') ? 'bg-[#800000] text-white' : ''
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Dining
              </Link>
              <ul className="sm:group-hover:block sm:absolute hidden bg-white shadow-lg min-w-[200px] z-50 rounded-lg overflow-hidden sm:mt-2 ml-4 sm:ml-0">
                <li>
                  <Link
                    href="/restaurant"
                    className={`block px-6 py-3 hover:text-white transition-all duration-300 ease-in-out bg-transition ${
                      isActive('/restaurant') ? 'bg-[#800000] text-white' : ''
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Restaurant
                  </Link>
                </li>
                <li>
                  <Link
                    href="/bars"
                    className={`block px-6 py-3 hover:text-white transition-all duration-300 ease-in-out bg-transition ${
                      isActive('/bars') ? 'bg-[#800000] text-white' : ''
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    99er's Bar
                  </Link>
                </li>
              </ul>
            </li> */}

            {/* Services Dropdown */}
            {/* <li className="relative group">
              <Link
                href="/services"
                className={`block px-6 py-4 sm:py-3 hover:text-white transition-all duration-300 ease-in-out relative bg-transition ${
                  isActive('/services') ? 'bg-[#800000] text-white' : ''
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <ul className="sm:group-hover:block sm:absolute hidden bg-white shadow-lg min-w-[200px] z-50 rounded-lg overflow-hidden sm:mt-2 ml-4 sm:ml-0">
                <li>
                  <Link
                    href="/spa"
                    className={`block px-6 py-3 hover:text-white transition-all duration-300 ease-in-out bg-transition ${
                      isActive('/spa') ? 'bg-[#800000] text-white' : ''
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Spa
                  </Link>
                </li>
                <li>
                  <Link
                    href="/gym"
                    className={`block px-6 py-3 hover:text-white transition-all duration-300 ease-in-out bg-transition ${
                      isActive('/gym') ? 'bg-[#800000] text-white' : ''
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Gym
                  </Link>
                </li>
                <li>
                  <Link
                    href="/diving"
                    className={`block px-6 py-3 hover:text-white transition-all duration-300 ease-in-out bg-transition ${
                      isActive('/diving') ? 'bg-[#800000] text-white' : ''
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Diving
                  </Link>
                </li>
              </ul>
            </li> */}

            {/* Blog */}
            {/* <li className="relative group">
              <Link
                href="/blog"
                className={`block px-6 py-4 sm:py-3 hover:text-white transition-all duration-300 ease-in-out relative bg-transition ${
                  isActive('/blog') ? 'bg-[#800000] text-white' : ''
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
            </li> */}

            {/* Contact */}
            <li className="relative group">
              <Link
                href="/contact"
                className={`block px-6 py-4 sm:py-3 hover:text-white transition-all duration-300 ease-in-out relative bg-transition ${
                  isActive('/contact') ? 'bg-[#800000] text-white' : ''
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>

          {/* Book a Room Button */}
          <a
              href="https://www.booking.com/searchresults.html?ss=Coco+Grove+Beach+Resort%2C+Siquijor+Island%2C+Siquijor%2C+Visayas%2C+Philippines&ssne=Dauin&ssne_untouched=Dauin&efdco=1&label=gen173nr-10CAEoggI46AdIM1gEaLQBiAEBmAEzuAEXyAEM2AED6AEB-AEBiAIBqAIBuAK51NHHBsACAdICJGRhZWU5OGFjLTJiNzYtNGFjMy05OTc5LTFkZTNjNGRmZjc1MNgCAeACAQ&aid=304142&lang=en-us&sb=1&src_elem=sb&src=index&dest_id=1518524&dest_type=hotel&ac_position=0&ac_click_type=b&ac_langcode=en&ac_suggestion_list_length=5&search_selected=true&search_pageview_id=a8c8201ce0fe0089&ac_meta=GhBhOGM4MjAxY2UwZmUwMDg5IAAoATICZW46CmNvY28gZ3JvdmVAAEoAUAA%3D&group_adults=2&no_rooms=1&group_children=0"
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-4 sm:mt-0 sm:ml-8 bg-[#800000] text-white px-4 py-2 rounded-lg hover:bg-[#660000] transition-colors text-center font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Book a Room
            </a>

        </div>
      </div>

      {/* Custom CSS for Left-to-Right Background Transition */}
      <style jsx>{`
        .bg-transition {
          position: relative;
        }
        .bg-transition::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: #800000;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 300ms ease-in-out;
          z-index: -1;
        }
        .group:hover .bg-transition::before {
          transform: scaleX(1);
        }
        .bg-transition.active::before {
          transform: scaleX(1);
        }
        .bg-transition.active {
          background-color: transparent;
        }
        /* Ensure dropdown container stays white on hover */
        .group:hover ul {
          background-color: white !important;
        }
        /* Apply hover effect only to links within dropdown */
        .group:hover ul li a:hover::before {
          transform: scaleX(1);
        }
        .group:hover ul li a:hover {
          color: white;
        }
      `}</style>
    </nav>
  );
}