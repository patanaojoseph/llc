"use client";

import { useState } from "react";
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
  FaTimes,
} from "react-icons/fa";
import { IconType } from "react-icons";
import { StaticImageData } from "next/image";

// Import your service images
import personalCareImg from "@/public/images/services/personalCare.jpg";
import companionshipImg from "@/public/images/services/companionship.jpg";
import medicationImg from "@/public/images/services/medication.jpg";
import mealsImg from "@/public/images/services/meals.jpg";
import housekeepingImg from "@/public/images/services/housekeeping.jpg";
import transportImg from "@/public/images/services/transport.jpg";
import dementiaImg from "@/public/images/services/dementia.jpg";
import hospiceImg from "@/public/images/services/hospice.jpg";
import Link from "next/link";

// Define the Service type
interface Service {
  title: string;
  desc: string;
  fullDesc: string;
  image: StaticImageData;
  icon: IconType;
  color: string;
  bgColor: string;
}

// Define service data with icons and full descriptions
const services: Service[] = [
  {
    title: "Personal Care",
    desc: "Support with bathing, grooming, and mobility to maintain dignity and comfort.",
    fullDesc:
      "Our personal care services are designed to help clients maintain their independence while ensuring their safety and dignity. We provide compassionate assistance with daily activities including bathing, showering, grooming, dressing, oral hygiene, and mobility support. Our trained caregivers understand the importance of preserving personal dignity and work closely with clients to provide care that respects their preferences and comfort levels. We also assist with toileting, incontinence care, and positioning to prevent pressure sores, always maintaining the highest standards of hygiene and respect.",
    image: personalCareImg,
    icon: FaHeart,
    color: "from-rose-500 to-pink-600",
    bgColor: "bg-rose-50",
  },
  {
    title: "Companionship",
    desc: "Friendly, engaging company to reduce loneliness and improve emotional well-being.",
    fullDesc:
      "Loneliness and social isolation can significantly impact mental and physical health. Our companionship services provide meaningful social interaction and emotional support to help clients stay connected and engaged. Our companions engage in conversations, play games, share meals, watch movies, and participate in hobbies together. We also provide encouragement for social activities, help maintain connections with friends and family, and offer a listening ear during difficult times. This service is particularly valuable for clients who live alone or have limited social contact.",
    image: companionshipImg,
    icon: FaHandHoldingHeart,
    color: "from-amber-500 to-orange-600",
    bgColor: "bg-amber-50",
  },
  {
    title: "Medication Reminders",
    desc: "Gentle reminders to help clients stay on schedule with prescribed medications.",
    fullDesc:
      "Proper medication management is crucial for maintaining health and preventing complications. Our caregivers provide reliable medication reminders to help clients stay on schedule with their prescribed treatments. We maintain detailed medication logs, observe for side effects, and communicate with healthcare providers and family members about any concerns. While we don't administer medications, we ensure clients have easy access to their medications and understand the importance of taking them as prescribed. We also help organize pill boxes and coordinate with pharmacies for prescription refills.",
    image: medicationImg,
    icon: FaPills,
    color: "from-blue-500 to-indigo-600",
    bgColor: "bg-blue-50",
  },
  {
    title: "Meal Preparation",
    desc: "Nutritious and delicious meals prepared to meet dietary needs and preferences.",
    fullDesc:
      "Proper nutrition plays a vital role in maintaining health and energy levels. Our meal preparation services include planning nutritious meals that accommodate dietary restrictions, food preferences, and cultural considerations. We shop for fresh ingredients, prepare meals in the client's kitchen, and ensure proper food safety practices. Our caregivers can prepare everything from simple snacks to complete meals, and we're experienced in working with special diets including diabetic, low-sodium, heart-healthy, and pureed diets. We also encourage social dining experiences and help clients maintain their appetite and enjoyment of food.",
    image: mealsImg,
    icon: FaUtensils,
    color: "from-emerald-500 to-teal-600",
    bgColor: "bg-emerald-50",
  },
  {
    title: "Light Housekeeping",
    desc: "Assistance with household tasks to keep living spaces safe and comfortable.",
    fullDesc:
      "A clean, organized living environment promotes safety, health, and peace of mind. Our light housekeeping services help maintain a comfortable home environment without overwhelming clients. We assist with tasks such as dusting, vacuuming, laundry, dishwashing, bed making, and organizing personal belongings. We also help with seasonal tasks like changing linens and organizing closets. Our goal is to create a safe, clean environment while respecting the client's personal space and preferences. We focus on maintaining independence by involving clients in decisions about their living space organization.",
    image: housekeepingImg,
    icon: FaBroom,
    color: "from-purple-500 to-violet-600",
    bgColor: "bg-purple-50",
  },
  {
    title: "Transportation",
    desc: "Reliable transportation for errands, appointments, and social activities.",
    fullDesc:
      "Transportation services help clients maintain their independence and stay connected to their community. Our trained drivers provide safe, reliable transportation to medical appointments, grocery shopping, pharmacy visits, social activities, and religious services. We assist clients in and out of vehicles, help carry packages, and provide companionship during travel. Our drivers are familiar with accessibility needs and can accommodate wheelchairs, walkers, and other mobility aids. We also provide transportation for family visits and special occasions, helping clients maintain important relationships and participate in community life.",
    image: transportImg,
    icon: FaCar,
    color: "from-cyan-500 to-blue-600",
    bgColor: "bg-cyan-50",
  },
  {
    title: "Dementia & Alzheimer's Care",
    desc: "Compassionate support tailored to memory care, promoting safety, comfort, and dignity.",
    fullDesc:
      "Caring for individuals with dementia and Alzheimer's disease requires specialized knowledge, patience, and compassion. Our memory care specialists are trained in techniques that promote comfort, reduce anxiety, and maintain dignity throughout the disease progression. We provide structured routines, cognitive stimulation activities, and emotional support tailored to each client's stage of memory loss. Our approach includes creating a safe environment, using validation therapy, managing behavioral changes, and supporting family members. We focus on celebrating remaining abilities while providing gentle assistance with daily activities and maintaining meaningful connections.",
    image: dementiaImg,
    icon: FaBrain,
    color: "from-pink-500 to-rose-600",
    bgColor: "bg-pink-50",
  },
  {
    title: "24-Hour & Hospice Support",
    desc: "Round-the-clock assistance and end-of-life care with empathy and respect.",
    fullDesc:
      "Our 24-hour care services provide continuous support for clients who need round-the-clock assistance, whether due to complex medical conditions or end-of-life care needs. Our hospice care specialists work closely with healthcare teams to provide comfort-focused care that honors the client's wishes and maintains dignity during their final journey. We provide emotional support to both clients and families, assist with pain management protocols, and help create peaceful, meaningful moments. Our caregivers are trained in end-of-life care techniques and provide compassionate presence during difficult times, ensuring no one faces these challenges alone.",
    image: hospiceImg,
    icon: FaClock,
    color: "from-yellow-300 to-yellow-800",
    bgColor: "bg-yellow-50",
  },
];

function ServicesCarousel() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const openModal = (service: Service) => {
    setSelectedService(service);
    setIsModalOpen(true);
    // Prevent body scrolling when modal is open
    document.body.style.overflow = "unset";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
    // Restore body scrolling
    document.body.style.overflow = "unset";
  };

  return (
    <>
      <div className='w-full p-4 rounded-2xl'>
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
                <div
                  className='group relative cursor-pointer'
                  onClick={() => openModal(service)}
                >
                  {/* Card container */}
                  <div className='relative bg-white rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 border border-slate-100'>
                    {/* Image container with overlay */}
                    <div
                      className='relative w-full h-72 overflow-hidden cursor-pointer'
                      // onClick={() => openModal(service)}
                    >
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
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

                      {/* Learn more button */}
                      <div className='mt-4 flex items-center text-teal-600 text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0'>
                        <button
                          onClick={() => openModal(service)}
                          className='cursor-pointer hover:text-teal-700 transition-colors duration-200'
                        >
                          Learn more
                        </button>
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
                      </div>
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

      {/* Modal */}
      {isModalOpen && selectedService && (
        <div className='fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto'>
          {/* Backdrop */}
          <div
            className='fixed inset-0 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300'
            onClick={closeModal}
          />

          {/* Modal Content */}
          <div className='relative bg-white rounded-2xl max-w-4xl w-full shadow-2xl animate-in fade-in zoom-in-95 duration-300 my-8'>
            {/* Close Button */}
            <button
              onClick={closeModal}
              className='absolute top-4 right-4 z-20 p-2 rounded-full bg-white/95 hover:bg-white shadow-xl transition-all duration-300 hover:scale-110 hover:rotate-90 backdrop-blur-sm'
              aria-label='Close modal'
            >
              <FaTimes className='h-5 w-5 text-slate-600 hover:text-slate-800' />
            </button>

            {/* Modal Body */}
            <div className='flex flex-col lg:flex-row max-h-[90vh]'>
              {/* Image Section */}
              <div className='lg:w-1/2 h-64 lg:h-auto relative'>
                <Image
                  src={selectedService.image}
                  alt={selectedService.title}
                  fill
                  sizes='(max-width: 1024px) 100vw, 50vw'
                  className='object-cover'
                />

                {/* Icon overlay */}
                <div
                  className={`absolute top-6 left-6 p-4 rounded-xl bg-gradient-to-r ${selectedService.color} shadow-lg`}
                >
                  <selectedService.icon className='h-6 w-6 text-white' />
                </div>
              </div>

              {/* Content Section */}
              <div className='lg:w-1/2 p-8 overflow-y-auto'>
                <div className='space-y-6'>
                  {/* Title */}
                  <div>
                    <h2 className='text-3xl font-bold text-slate-800 mb-2'>
                      {selectedService.title}
                    </h2>
                    <div
                      className={`h-1 w-20 bg-gradient-to-r ${selectedService.color} rounded-full`}
                    />
                  </div>

                  {/* Short Description */}
                  <p className='text-lg text-slate-600 font-medium'>
                    {selectedService.desc}
                  </p>

                  {/* Full Description */}
                  <div className='prose prose-slate max-w-none'>
                    <p className='text-slate-700 leading-relaxed'>
                      {selectedService.fullDesc}
                    </p>
                  </div>

                  {/* Action Buttons */}
                  <div className='flex gap-4 pt-4 border-t border-slate-200'>
                    <Link
                      href='/contact'
                      className={`px-6 py-3 rounded-xl bg-gradient-to-r ${selectedService.color} text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105`}
                    >
                      Get Started
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ServicesCarousel;
