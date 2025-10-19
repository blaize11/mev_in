import { Head, Link, usePage } from '@inertiajs/react';
import { type SharedData } from '@/types';
import { HotelNavbar } from '@/components/hotel-navbar';
import { Footer } from '@/components/footer';

export default function Rooms() {
  const { auth } = usePage<SharedData>().props;

  return (
    <>
      <Head title="Rooms">
        <link rel="preconnect" href="https://fonts.bunny.net" />
        <link
          href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600"
          rel="stylesheet"
        />
      </Head>

      <HotelNavbar />

      <section className="accommodation-area py-20 bg-gray-50 pt-20 sm:pt-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Accommodation</h2>
            <ul className="space-y-2 text-lg text-gray-700 max-w-4xl mx-auto">
              <li className="flex items-start">
                <i className="fa fa-check text-blue-600 mt-1 mr-3"></i>
                <span>
                  Make yourself at home and enjoy your stay at our Filipino-inspired rooms, each named after a specific marine animal that lives in our area, like our unique clownfish room.
                </span>
              </li>
              <li className="flex items-start">
                <i className="fa fa-check text-blue-600 mt-1 mr-3"></i>
                <span>
                  All rooms and bungalows are designed for comfort, featuring high-quality beds, quiet split-type air-conditioning, mini bar refrigerator, safety vault, hot/cold shower, Cable TV, and a cosy veranda or balcony with a relaxing view of the ocean, pool, or lush garden.
                </span>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Honeymoon Suite Whale */}
            <RoomCard
              title="Honeymoon Suite Whale"
              image="img/rooms/honeymoon.jpg"
              view360Route="/honeymoon"
              bookingRoute="/honeymoon"
              features={[
                '1 King sized bed',
                'Living room area with sofa set',
                'Private balcony',
                'Large bathroom with bathtub',
                'Hot & cold shower',
                'Quiet split type air-conditioning',
              ]}
            />

            {/* Suite */}
            <RoomCard
              title="Suite"
              subtitle="2 Suites"
              image="img/rooms/suite_1.jpg"
              view360Route="/suite"
              bookingRoute="/suite"
              features={[
                '1 King sized bed',
                'Living room area with sofa set',
                'Private balcony with 2 sunbeds',
                'Large bathroom',
                'Good for two (2) persons',
                'Extra mattress/bed possible (with surcharge)',
              ]}
            />

            {/* Family Room (Dolphin) */}
            <RoomCard
              title="Family Room (Dolphin)"
              subtitle="1 Room"
              image="img/rooms/family_room2.jpg"
              view360Route="/family_room_dolphin"
              bookingRoute="/hotelrooms/family-room-dolphin"
              features={[
                '2 single beds and 1 Queen size bed',
                'Veranda with outdoor chairs and table',
                'Large Interior',
                'Mini-bar refrigerator',
                'Split-type air-conditioning',
                'Good for (4) persons',
                'Extra mattress/bed possible (with surcharge)',
              ]}
            />

            {/* Family Room (Moorish Idol & Blue Ring Octopus) */}
            <RoomCard
              title="Family Room (Moorish Idol & Blue Ring Octopus)"
              subtitle="1 Room"
              image="img/rooms/room_family_blue.jpg"
              view360Route="/family_room_octopus"
              bookingRoute="/hotelrooms/family-room-moorish-idol"
              features={[
                '1 Queen size bed',
                '2 Single beds',
                '2 individual verandas',
                '2 Bathrooms',
                'Connecting door inside',
                'Good for (4) persons',
              ]}
            />

            {/* Deluxe Rooms */}
            <RoomCard
              title="Deluxe Rooms"
              subtitle="13 Rooms"
              image="img/rooms/room_deluxe_1.jpg"
              view360Route="/deluxe_rooms"
              bookingRoute="/hotelrooms/deluxe-rooms"
              features={[
                '1 queen sized bed (5 rooms)',
                '2 single beds (8 rooms)',
                'Sea View, Pool View or Garden View',
                'Mini-bar refrigerator',
                'Quiet split-type air-conditioning',
                'Flat screen cable TV',
                'Furnished terrace with chairs and table',
                'In-room safe',
                'Hairdryer',
                'Complimentary water',
                'Complimentary coffee & tea making facility',
                'Good for two (2) persons',
              ]}
            />

            {/* Garden Rooms */}
            <RoomCard
              title="Garden Rooms"
              subtitle="10 Rooms"
              image="img/rooms/garden.jpg"
              view360Route="/garden_rooms"
              bookingRoute="/hotelrooms/garden-rooms"
              features={[
                '1 King sized bed (3 rooms)',
                '2 Single beds (7 rooms)',
                'Native Filipino Style Cottage',
                'Flat Screen Cable Television',
                'Quiet split-type air-conditioning',
                'Relaxing garden view',
                'Terrace with bamboo furniture',
                'Hot & cold shower',
                'In-room safe',
                'Mini-bar refrigerator',
                'Complimentary water',
                'Complimentary coffee & tea making facility',
                'Good for two (2) persons',
              ]}
            />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

// ✅ Reusable Room Card Component
type RoomCardProps = {
  title: string;
  subtitle?: string;
  image: string;
  features: string[];
  view360Route: string;
  bookingRoute: string;
};

function RoomCard({ title, subtitle, image, features, view360Route, bookingRoute }: RoomCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col">
      <div className="mb-4">
        <h3 className="text-2xl font-bold mb-2 text-gray-800">{title}</h3>
        {subtitle && <p className="text-gray-600 italic mb-4">{subtitle}</p>}
      </div>
      <div className="mb-4">
        <img src={image} alt={title} className="w-full h-64 sm:h-80 object-cover rounded-lg" />
      </div>
      <div className="flex-grow">
        <ul className="space-y-2 list-disc list-inside">
          {features.map((item, index) => (
            <li key={index} className="text-gray-700">
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-4 flex space-x-4 justify-center">
        <Link
          href={view360Route}
          className="bg-[#800000] text-white px-4 py-2 rounded-lg hover:bg-[#660000] transition-colors font-medium"
        >
          View Room
        </Link>
        {/* <Link
          href={bookingRoute}
          className="bg-[#800000] text-white px-4 py-2 rounded-lg hover:bg-[#660000] transition-colors font-medium"
        >
          Book Now
        </Link> */}
      </div>
    </div>
  );
}