import { Link } from '@inertiajs/react';

export function Footer() {
  return (
    <footer className="footer-area bg-[#f8f8f8] text-gray-800 mt-12">
      <div className="container mx-auto px-6 py-12">
        {/* 🏝️ Main Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

          {/* 🏝️ Logo & About Section */}
          <div className="text-center sm:text-left">
            <Link href="/" className="inline-block mb-5">
              <img
                src="/logo.png"
                alt="Pura Vida Logo"
                className="h-20 w-auto mx-auto sm:mx-0 object-contain"
              />
            </Link>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base max-w-md mx-auto sm:mx-0">
              "Pura Vida" means "Pure Life" – and that's exactly what we want you
              to feel during your stay with us –{' '}
              <span className="italic">'la Pura Vida'</span>.
            </p>
          </div>

          {/* 📞 Contact Info */}
          <div className="text-center sm:text-left">
            <h6 className="text-lg font-semibold text-[#8B7355] mb-5">
              Contact Us
            </h6>
            <div className="space-y-3 text-gray-700 text-sm sm:text-base">
              <p className="flex flex-col sm:flex-row sm:items-start sm:gap-2 justify-center sm:justify-start">
                <i className="fa fa-map-marker mt-1 text-[#8B7355]" />
                <span>
                  <strong>Address:</strong> Washington Street, Dist. III, Dauin 6217, Philippines
                </span>
              </p>
              <p className="flex flex-col sm:flex-row sm:items-start sm:gap-2 justify-center sm:justify-start">
                <i className="fa fa-envelope mt-1 text-[#8B7355]" />
                <span>
                  <strong>Email Us:</strong>{' '}
                  <a
                    href="mailto:reservation@puravidadauin.com"
                    className="hover:text-[#8B7355] break-words"
                  >
                    reservation@puravidadauin.com
                  </a>
                </span>
              </p>
              <p className="flex flex-col sm:flex-row sm:items-start sm:gap-2 justify-center sm:justify-start">
                <i className="fa fa-phone mt-1 text-[#8B7355]" />
                <span>
                  <strong>Call Us:</strong> +63 (035) 400 6959 <br /> +63 (0)917 320 2284
                </span>
              </p>
            </div>
          </div>

          {/* 📨 Newsletter */}
          <div className="text-center sm:text-left">
            <h6 className="text-lg font-semibold text-[#8B7355] mb-5">
              Subscribe to our Newsletter
            </h6>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert('Thank you for subscribing!');
              }}
              className="flex flex-col sm:flex-row gap-3 sm:justify-start justify-center"
            >
              <input
                type="email"
                name="subscribe-email"
                id="subscribeemail"
                placeholder="Your E-mail"
                required
                className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-1 focus:ring-[#8B7355]"
              />
              <button
                type="submit"
                className="bg-[#8B7355] text-white rounded-lg px-5 py-2 hover:bg-[#a08764] transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* 📄 Footer Bottom */}
        <div className="text-center mt-10 border-t border-gray-200 pt-5 text-sm text-gray-600">
          <p>
            &copy; {new Date().getFullYear()} All rights reserved |{' '}
            <span className="font-semibold text-[#8B7355]">Pura Vida</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
