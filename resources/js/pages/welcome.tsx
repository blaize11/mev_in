import { dashboard, login, register } from '@/routes';
import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';
import { HotelNavbar } from '@/components/hotel-navbar';
import { Footer } from '@/components/footer';
import HeroSlider from '@/components/heroslider';
// import { StickyImage } from '@/components/sticky-image';

import Room from '@/pages/room';

export default function Welcome() {
    const { auth } = usePage<SharedData>().props;

    return (
        <>
            <Head title="Welcome">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link
                    href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600"
                    rel="stylesheet"
                />
            </Head>
          
            <HotelNavbar></HotelNavbar>
            <HeroSlider></HeroSlider>

            {/* <StickyImage></StickyImage> */}
            

                        <Room></Room>s
            {/* <Footer /> */}
        </>
    );
}
