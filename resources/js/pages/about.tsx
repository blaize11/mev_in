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
            src="/img/bg-2.jpg"
            alt="About Pura Vida"
            className="rounded-lg shadow-lg h-[600px] w-full object-cover"
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
  “Maeve’s Place Inn” is where comfort meets charm — and that’s exactly what we 
  want you to feel during your stay with us. Nestled in the peaceful town of 
  Tubod, San Juan, Siquijor, Maeve’s Place Inn offers a relaxing escape surrounded 
  by nature and the island’s serene beauty. Whether you’re here to unwind, explore, 
  or simply feel at home, Maeve’s Place Inn welcomes you with warmth and hospitality.
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
              Over the years, Hotel 1 has grown from a humble getaway to a favorite
              destination for travelers seeking comfort and relaxation. With our
              exceptional amenities and warm hospitality, we continue to create
              memorable experiences for every guest who visits.
            </p>

            <div className="flex flex-wrap justify-center items-center gap-16 mt-10">
  {/* Pools */}
  <div className="flex flex-col items-center text-center">
    <i className="icon-swimming-pool text-6xl mb-4"></i>
    <h2 className="text-4xl font-extrabold">2</h2>
    <p className="text-gray-300 text-lg">Pools</p>
  </div>

  {/* Rooms */}
  <div className="flex flex-col items-center text-center">
    <i className="icon-resort text-6xl mb-4"></i>
    <h2 className="text-4xl font-extrabold">19</h2>
    <p className="text-gray-300 text-lg">Rooms</p>
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
                    Our pool offers a relaxing escape surrounded by lush greenery. Whether you want to take a refreshing swim or simply unwind by the water, it’s the perfect spot to enjoy the tropical ambiance.
                  </h6>
                  {/* <h6 className="mb-2">
                    <span className="fa fa-check text-[#8B7355] mr-2"></span>
                    Integer tempus ligula sem, id feugiat
                  </h6>
                  <h6>
                    <span className="fa fa-check text-[#8B7355] mr-2"></span>
                    Malesuada lorem maximus mauris scelerisque
                  </h6> */}
                </div>
                <img src="/img/about_us_img/1.jpg" alt="Hotel 1" />
              </div>

              {/* Hotel Info 2 */}
              <div className="single-hotel-info bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="p-6 text-left">
                  <h6 className="mb-2">
                    <span className="fa fa-check text-[#8B7355] mr-2"></span>
                   Cool off from the tropical heat with a refreshing swim. The pool’s clear waters and relaxing ambiance make it the heart of the resort — a favorite spot for guests to relax any time of day.
                  </h6>
                  {/* <h6 className="mb-2">
                    <span className="fa fa-check text-[#8B7355] mr-2"></span>
                    Integer tempus ligula sem, id feugiat
                  </h6>
                  <h6>
                    <span className="fa fa-check text-[#8B7355] mr-2"></span>
                    Esuada lorem maximus mauris scelerisque
                  </h6> */}
                </div>
                  <img src="/img/about_us_img/2.jpg" alt="Hotel 2" />
              </div>

              {/* Hotel Info 3 */}
              <div className="single-hotel-info bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="p-6 text-left">
                  <h6 className="mb-2">
                    <span className="fa fa-check text-[#8B7355] mr-2"></span>
                    Take a dip in our crystal-clear pool while gazing at the stunning ocean view. As the sun sets, the warm golden glow reflects on the water — creating a peaceful and romantic atmosphere you’ll never forget.
                  </h6>
                  {/* <h6 className="mb-2">
                    <span className="fa fa-check text-[#8B7355] mr-2"></span>
                    Integer tempus ligula sem, id feugiat
                  </h6>
                  <h6>
                    <span className="fa fa-check text-[#8B7355] mr-2"></span>
                    Esuada lorem maximus mauris scelerisque
                  </h6> */}
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
                  “Our stay at Maeve Inn was absolutely perfect! The rooms were spotless, the staff was incredibly kind, and the beach view was breathtaking. We’ll definitely come back again next summer!”
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
                  “I loved the relaxing atmosphere and the warm hospitality. The food was delicious, and the location is perfect for a peaceful getaway. Highly recommended for couples or families!”
                </p>
                <h6 className="font-semibold">
                  Nazrul Islam,{" "}
                  <span className="text-gray-500 font-normal">Client</span>
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
