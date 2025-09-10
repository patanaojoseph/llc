"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import {
  FaHeart,
  FaHandHoldingHeart,
  FaPills,
  FaUtensils,
  FaBroom,
  FaCar,
  FaBrain,
  FaClock,
} from "react-icons/fa";

// Import your service images
import personalCareImg from "@/public/images/services/personalCare.jpg";
import companionshipImg from "@/public/images/services/companionship.jpg";
import medicationImg from "@/public/images/services/medication.jpg";
import mealsImg from "@/public/images/services/meals.jpg";
import housekeepingImg from "@/public/images/services/housekeeping.jpg";
import transportImg from "@/public/images/services/transport.jpg";
import dementiaImg from "@/public/images/services/dementia.jpg";
import hospiceImg from "@/public/images/services/hospice.jpg";

// Define service data with icons
const services = [
  {
    title: "Personal Care",
    desc: "Support with bathing, grooming, and mobility to maintain dignity and comfort.",
    image: personalCareImg,
    icon: FaHeart,
    color: "from-rose-500 to-pink-600",
    bgColor: "bg-rose-50",
  },
  {
    title: "Companionship",
    desc: "Friendly, engaging company to reduce loneliness and improve emotional well-being.",
    image: companionshipImg,
    icon: FaHandHoldingHeart,
    color: "from-amber-500 to-orange-600",
    bgColor: "bg-amber-50",
  },
  {
    title: "Medication Reminders",
    desc: "Gentle reminders to help clients stay on schedule with prescribed medications.",
    image: medicationImg,
    icon: FaPills,
    color: "from-blue-500 to-indigo-600",
    bgColor: "bg-blue-50",
  },
  {
    title: "Meal Preparation",
    desc: "Nutritious and delicious meals prepared to meet dietary needs and preferences.",
    image: mealsImg,
    icon: FaUtensils,
    color: "from-emerald-500 to-teal-600",
    bgColor: "bg-emerald-50",
  },
  {
    title: "Light Housekeeping",
    desc: "Assistance with household tasks to keep living spaces safe and comfortable.",
    image: housekeepingImg,
    icon: FaBroom,
    color: "from-purple-500 to-violet-600",
    bgColor: "bg-purple-50",
  },
  {
    title: "Transportation",
    desc: "Reliable transportation for errands, appointments, and social activities.",
    image: transportImg,
    icon: FaCar,
    color: "from-cyan-500 to-blue-600",
    bgColor: "bg-cyan-50",
  },
  {
    title: "Dementia & Alzheimer’s Care",
    desc: "Compassionate support tailored to memory care, promoting safety, comfort, and dignity.",
    image: dementiaImg,
    icon: FaBrain,
    color: "from-pink-500 to-rose-600",
    bgColor: "bg-pink-50",
  },
  {
    title: "24-Hour & Hospice Support",
    desc: "Round-the-clock assistance and end-of-life care with empathy and respect.",
    image: hospiceImg,
    icon: FaClock,
    color: "from-yellow-300 to-yellow-800",
    bgColor: "bg-yellow-50",
  },
];

function ServicesCarousel() {
  return (
    <div className='w-full'>
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop={true}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        navigation={{
          nextEl: ".swiper-button-next-custom",
          prevEl: ".swiper-button-prev-custom",
        }}
        spaceBetween={32}
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 24,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 32,
          },
        }}
        className='w-full pb-12'
      >
        {services.map((service, index) => {
          const IconComponent = service.icon;
          return (
            <SwiperSlide key={index}>
              <div className='group relative'>
                {/* Card container */}
                <div className='relative bg-white rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 border border-slate-100'>
                  {/* Image container with overlay */}
                  <div className='relative w-full h-56 overflow-hidden'>
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className='object-cover transition-transform duration-700 group-hover:scale-110'
                    />

                    {/* Gradient overlay */}
                    <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent' />

                    {/* Service icon */}
                    <div
                      className={`absolute top-4 right-4 p-3 rounded-xl bg-gradient-to-r ${service.color} shadow-lg`}
                    >
                      <IconComponent className='h-5 w-5 text-white' />
                    </div>

                    {/* Hover overlay */}
                    <div className='absolute inset-0 bg-teal-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
                  </div>

                  {/* Content */}
                  <div className='p-6'>
                    <h3 className='text-xl font-bold text-slate-800 mb-3 group-hover:text-teal-700 transition-colors duration-300'>
                      {service.title}
                    </h3>
                    <p className='text-slate-600 leading-relaxed text-sm'>
                      {service.desc}
                    </p>

                    {/* Learn more indicator */}
                    {/* <div className='mt-4 flex items-center text-teal-600 text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0'>
                      <span>Learn more</span>
                      <svg
                        className='ml-1 h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M9 5l7 7-7 7'
                        />
                      </svg>
                    </div> */}
                  </div>

                  {/* Bottom accent */}
                  <div
                    className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${service.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}
                  />
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      {/* Custom Navigation Buttons */}
      <div className='flex justify-center items-center gap-4 mt-8'>
        <button className='swiper-button-prev-custom group p-3 rounded-full bg-white shadow-lg border border-slate-200 hover:bg-teal-50 hover:border-teal-300 transition-all duration-300'>
          <svg
            className='h-5 w-5 text-slate-600 group-hover:text-teal-600 transition-colors duration-300'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M15 19l-7-7 7-7'
            />
          </svg>
        </button>

        <div className='flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-slate-200'>
          <div className='w-2 h-2 rounded-full bg-teal-400 animate-pulse' />
          <span className='text-sm font-medium text-slate-600'>
            Swipe to explore
          </span>
        </div>

        <button className='swiper-button-next-custom group p-3 rounded-full bg-white shadow-lg border border-slate-200 hover:bg-teal-50 hover:border-teal-300 transition-all duration-300'>
          <svg
            className='h-5 w-5 text-slate-600 group-hover:text-teal-600 transition-colors duration-300'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M9 5l7 7-7 7'
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default ServicesCarousel;
