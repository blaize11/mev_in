import { Head, usePage } from "@inertiajs/react";
import { type SharedData } from "@/types";
import { HotelNavbar } from "@/components/hotel-navbar";
import { Footer } from "@/components/footer";


export default function About() {
  const { auth } = usePage<SharedData>().props;

  return (
    <>
      <Head title="About Us">
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
                  className="rounded-lg shadow-lg"
                />
              </div>

        {/* ABOUT US AREA */}
        <section className="about-us-area py-16">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
              {/* Text Section */}
              <div>
                <div className="mb-10">
                  <h2 className="text-4xl font-bold mb-6">About Us</h2>
                  <p className="text-gray-700 leading-relaxed">
                    “Pura Vida” means “Pure Life” — And that’s exactly what we
                    want you to feel during your stay with us — ‘la Pura Vida’.
                    The spacious beach resort is located in Dauin about 15 km
                    south of Dumaguete City on Negros Island and was opened at
                    the end of 2004. The facility is built from divers for
                    divers and is under Swiss-Filipino management.
                  </p>
                  <a
                    href="#"
                    className="inline-block mt-8 bg-[#8B7355] hover:bg-[#6d5a42] text-white px-6 py-3 rounded-md transition"
                  >
                    Read More
                  </a>
                </div>
              </div>

              {/* Image Section */}
              <div>
                <img
                  src="/img/banner/4.png"
                  alt="About Pura Vida"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* MILESTONES SECTION */}
        <section
          className="our-milestones bg-fixed bg-cover bg-center py-20 text-white"
          style={{ backgroundImage: "url('/img/banner/4.png')" }}
        >
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-6">Our Milestones</h2>
            <p className="max-w-3xl mx-auto mb-12 text-gray-200 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              malesuada lorem maximus mauris scelerisque, at rutrum nulla
              dictum. Ut ac ligula sapien. Suspendisse cursus faucibus finibus.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
              <div className="text-center">
                <i className="icon-cocktail-1 text-4xl mb-3"></i>
                <h2 className="text-3xl font-bold">231</h2>
                <p className="text-gray-300">Cocktails/day</p>
              </div>
              <div className="text-center">
                <i className="icon-swimming-pool text-4xl mb-3"></i>
                <h2 className="text-3xl font-bold">3</h2>
                <p className="text-gray-300">Pools</p>
              </div>
              <div className="text-center">
                <i className="icon-resort text-4xl mb-3"></i>
                <h2 className="text-3xl font-bold">79</h2>
                <p className="text-gray-300">Rooms</p>
              </div>
              <div className="text-center">
                <i className="icon-restaurant text-4xl mb-3"></i>
                <h2 className="text-3xl font-bold">25</h2>
                <p className="text-gray-300">Apartments</p>
              </div>
            </div>
          </div>
        </section>

        {/* OUR HOTEL SECTION */}
        <section className="our-hotels-area py-20">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-12">Our Hotel</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {/* Hotel Info 1 */}
              <div className="single-hotel-info bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="p-6 text-left">
                  <h6 className="mb-2">
                    <span className="fa fa-check text-[#8B7355] mr-2"></span>
                    Donec malesuada lorem maximus mauris
                  </h6>
                  <h6 className="mb-2">
                    <span className="fa fa-check text-[#8B7355] mr-2"></span>
                    Integer tempus ligula sem, id feugiat
                  </h6>
                  <h6>
                    <span className="fa fa-check text-[#8B7355] mr-2"></span>
                    Malesuada lorem maximus mauris scelerisque
                  </h6>
                </div>
                <img src="/img/about_us_img/1.jpg" alt="Hotel 1" />
              </div>

              {/* Hotel Info 2 */}
              <div className="single-hotel-info bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="p-6 text-left">
                  <h6 className="mb-2">
                    <span className="fa fa-check text-[#8B7355] mr-2"></span>
                    Tempus ligula sem, id feugiat quam
                  </h6>
                  <h6 className="mb-2">
                    <span className="fa fa-check text-[#8B7355] mr-2"></span>
                    Integer tempus ligula sem, id feugiat
                  </h6>
                  <h6>
                    <span className="fa fa-check text-[#8B7355] mr-2"></span>
                    Esuada lorem maximus mauris scelerisque
                  </h6>
                </div>
                  <img src="/img/about_us_img/2.jpg" alt="Hotel 2" />
              </div>

              {/* Hotel Info 3 */}
              <div className="single-hotel-info bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="p-6 text-left">
                  <h6 className="mb-2">
                    <span className="fa fa-check text-[#8B7355] mr-2"></span>
                    Tempus ligula sem, id feugiat quam
                  </h6>
                  <h6 className="mb-2">
                    <span className="fa fa-check text-[#8B7355] mr-2"></span>
                    Integer tempus ligula sem, id feugiat
                  </h6>
                  <h6>
                    <span className="fa fa-check text-[#8B7355] mr-2"></span>
                    Esuada lorem maximus mauris scelerisque
                  </h6>
                </div>
                  <img src="/img/about_us_img/3.jpg" alt="Hotel 3" />
              </div>
            </div>
          </div>
        </section>

        {/* TESTIMONIAL SECTION */}
        <section
          className="testimonial-area bg-gray-50 py-20"
          style={{
            backgroundImage: "url('/img/core-img/pattern.png')",
            backgroundRepeat: "repeat",
          }}
        >
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold">What Clients Say</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* Testimonial 1 */}
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Donec malesuada lorem maximus mauris scelerisque, at rutrum
                  nulla dictum. Ut ac ligula sapien. Suspendisse cursus
                  faucibus finibus.
                </p>
                <h6 className="font-semibold">
                  Michael Smith,{" "}
                  <span className="text-gray-500 font-normal">Client</span>
                </h6>
                <img
                  src="/img/logos/TripAdvisor.png"
                  alt="TripAdvisor"
                  className="mt-4 w-20"
                />
              </div>

              {/* Testimonial 2 */}
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Donec malesuada lorem maximus mauris scelerisque, at rutrum
                  nulla dictum. Ut ac ligula sapien. Suspendisse cursus
                  faucibus finibus.
                </p>
                <h6 className="font-semibold">
                  Nazrul Islam,{" "}
                  <span className="text-gray-500 font-normal">Developer</span>
                </h6>
                <img
                  src="/img/logos/TripAdvisor.png"
                  alt="TripAdvisor"
                  className="mt-4 w-20"
                />
              </div>
            </div>
          </div>
        </section>

        <Footer />

    </>
  );
}
