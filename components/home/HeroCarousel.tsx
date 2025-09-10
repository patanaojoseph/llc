"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image, { StaticImageData } from "next/image";

import hero1 from "@/public/images/hero/hero1.jpg";
import hero2 from "@/public/images/hero/hero2.jpg";
import hero3 from "@/public/images/hero/hero3.jpg";
import hero4 from "@/public/images/hero/hero4.jpg";
import hero5 from "@/public/images/hero/hero5.jpg";
import hero6 from "@/public/images/hero/hero6.jpg";

const images: StaticImageData[] = [hero1, hero2, hero3, hero4, hero5, hero6];

function HeroCarousel() {
  return (
    <div className='w-full'>
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{ clickable: true }}
        navigation
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className='w-full'
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <div className='relative w-full h-128 rounded-xl overflow-hidden shadow-lg'>
              <Image
                src={img}
                alt={`Hero ${index + 3}`}
                fill
                className='object-cover'
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default HeroCarousel;
