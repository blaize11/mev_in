import React from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const slides = [
  {
    image: '/img/bane2.png',
    title: 'The Vacation Heaven',
    description:
      'Experience the pure bliss of island life with our breathtaking ocean views and tranquil surroundings.',
  },
  {
    image: '/img/bane1.png',
    title: 'The Best Place to Enjoy Your Vacation',
    description:
      'Relax, recharge, and reconnect with nature — Pura Vida is where paradise feels like home.',
  },
  {
    image: '/img/bane3.png',
    title: 'Enjoy Your Life',
    description:
      'Embrace every moment in comfort and style with our premium resort experiences.',
  },
];

// Custom Arrow Components
const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute left-8 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm p-3 rounded-full transition-all duration-300 group"
    aria-label="Previous slide"
  >
    <ChevronLeft className="w-6 h-6 text-white" />
  </button>
);

const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute right-8 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm p-3 rounded-full transition-all duration-300 group"
    aria-label="Next slide"
  >
    <ChevronRight className="w-6 h-6 text-white" />
  </button>
);

const HeroSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <section className="relative w-full h-screen overflow-hidden">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="relative w-full h-screen">
            {/* Zooming Background Image */}
            <motion.div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
              initial={{ scale: 1 }}
              animate={{ scale: 1.1 }}
              transition={{ 
                duration: 8, 
                ease: "linear"
              }}
            />
            <div className="absolute inset-0 bg-black/40" />
            <div className="relative flex flex-col justify-center items-center text-center h-full text-white px-6 z-10">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="h-1 w-16 bg-[#C19A6B] mx-auto mb-6 rounded" />
                <h2 className="text-4xl md:text-6xl font-bold mb-6">{slide.title}</h2>
                <p className="max-w-2xl mx-auto text-lg mb-10">{slide.description}</p>
                <a
                  href="#"
                  className="bg-[#C19A6B] text-white px-8 py-3 rounded-full hover:bg-[#a98356] transition"
                >
                  Read More
                </a>
              </motion.div>
            </div>
          </div>
        ))}
      </Slider>
      
      <style>{`
        .slick-dots {
          bottom: 30px;
        }
        .slick-dots li button:before {
          font-size: 12px;
          color: white;
          opacity: 0.5;
        }
        .slick-dots li.slick-active button:before {
          color: #C19A6B;
          opacity: 1;
        }
      `}</style>
    </section>
  );
};

export default HeroSlider;