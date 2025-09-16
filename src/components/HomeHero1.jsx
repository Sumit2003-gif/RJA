import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import 'swiper/css';
import 'swiper/css/pagination';

const HomeHero1 = () => {
  const images = [
    "https://carajput.com/common-assets/images/slider-images/1.webp",
    "https://carajput.com/common-assets/images/slider-images/2.webp",
    "https://carajput.com/common-assets/images/slider-images/3.webp"
  ];

  // For scroll-triggered animation
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <div className="relative w-full h-[500px] md:h-[600px] lg:h-[700px]">
      {/* Swiper Image Slider */}
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        pagination={{ clickable: true }}
        className="w-full h-full"
      >
        {images.map((item, index) => (
          <SwiperSlide key={index}>
            <motion.img
              src={item}
              alt={`hero-${index}`}
              className="w-full h-full object-cover"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, ease: "easeInOut" }}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Overlay Text */}
      <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center text-white z-20 px-4">
        <motion.h1
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-3xl md:text-5xl font-bold mb-4 drop-shadow-lg"
        >
          Expert Financial & Legal Guidance You Can Trust
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="text-lg md:text-xl text-gray-200 drop-shadow-md"
        >
          Chartered Accountants | Company Law Advisors | Tax Consultants
        </motion.p>
      </div>
    </div>
  );
};

export default HomeHero1;
