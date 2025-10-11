import { Head, usePage } from "@inertiajs/react";
import { type SharedData } from "@/types";
import { HotelNavbar } from "@/components/hotel-navbar";
import { Footer } from "@/components/footer";

export default function Contact() {
  const { auth } = usePage<SharedData>().props;

  return (
    <>
      <Head title="Contact Us">
        <link rel="preconnect" href="https://fonts.bunny.net" />
        <link
          href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600"
          rel="stylesheet"
        />
      </Head>

      {/* Navbar */}
      <HotelNavbar />

      {/* Hero / Banner Image */}
      <div>
        <img
          src="/img/banner/361.jpg"
          alt="About Pura Vida"
          className="w-full h-[400px] object-cover rounded-lg shadow-lg"
        />
      </div>

      {/* CONTACT SECTION */}
      <section className="contact-information-area py-16">
        <div className="container mx-auto px-6">
          <div className="flex justify-center">
            <div className="w-full lg:w-4/5">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-semibold mb-4">
                  How can we help you?
                </h3>
                <p className="text-gray-600">
                  Feel free to reach out — we’d love to hear from you!
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* Left Contact Details */}
                <div>
                  <div className="space-y-5">
                    <div className="flex flex-col">
                      <p className="font-semibold">Address</p>
                      <p className="text-gray-600">
                        Washington Street, Dist. III, Dauin 6217, Negros
                        Oriental, Philippines
                      </p>
                    </div>

                    <div className="flex flex-col">
                      <p className="font-semibold">Phone</p>
                      <p className="text-gray-600">+63 (035) 400 6959</p>
                    </div>

                    <div className="flex flex-col">
                      <p className="font-semibold">Mobile</p>
                      <p className="text-gray-600">+63 (0)917 320 2284</p>
                    </div>

                    <div className="flex flex-col">
                      <p className="font-semibold">E-mail</p>
                      <p className="text-gray-600">
                        reservation@puravidadauin.com
                      </p>
                    </div>

                    <div className="flex flex-col">
                      <p className="font-semibold">Live Skype Chat</p>
                      <p className="text-gray-600">Available 24 Hours</p>
                    </div>
                  </div>
                </div>

                {/* Right Contact Form */}
                <div>
                  <h4 className="text-2xl font-semibold mb-6">Get in Touch</h4>
                  <form
                    onSubmit={(e) => e.preventDefault()}
                    className="space-y-4"
                  >
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#8B7355]"
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="E-mail"
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#8B7355]"
                    />
                    <input
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#8B7355]"
                    />
                    <textarea
                      name="message"
                      placeholder="Message"
                      rows={5}
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#8B7355]"
                    ></textarea>
                    <button
                      type="submit"
                      className="bg-[#8B7355] hover:bg-[#6d5a42] text-white font-medium px-6 py-3 rounded-md transition"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GOOGLE MAP SECTION */}
      <section className="map-area mb-20">
        <div className="container mx-auto px-6">
          <div className="w-full">
            <iframe
              src="https://www.google.com/maps?q=57RC%2BP8X%2C+Dauin%2C+Negros+Oriental&output=embed"
              width="100%"
              height="650"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              className="rounded-lg shadow-lg"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
}
