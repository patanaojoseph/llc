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
  FaPhone,
  FaEnvelope,
  FaCalendarAlt,
  FaShieldAlt,
  FaCheckCircle,
} from "react-icons/fa";
import { IconType } from "react-icons";
import { StaticImageData } from "next/image";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import Link from "next/link";

// Import your service images
import personalCareImg from "@/public/images/services/personalCare.jpg";
import companionshipImg from "@/public/images/services/companionship.jpg";
import medicationImg from "@/public/images/services/medication.jpg";
import mealsImg from "@/public/images/services/meals.jpg";
import housekeepingImg from "@/public/images/services/housekeeping.jpg";
import transportImg from "@/public/images/services/transport.jpg";
import dementiaImg from "@/public/images/services/dementia.jpg";
import hospiceImg from "@/public/images/services/hospice.jpg";

// Define the Service type
interface Service {
  title: string;
  desc: string;
  fullDesc: string;
  image: StaticImageData;
  icon: IconType;
  color: string;
  bgColor: string;
  benefits: string[];
  availability: string;
}

// Define enhanced service data
const services: Service[] = [
  {
    title: "Personal Care",
    desc: "Support with bathing, grooming, and mobility to maintain dignity and comfort.",
    fullDesc:
      "Our personal care services are designed to help clients maintain their independence while ensuring their safety and dignity. We provide compassionate assistance with daily activities including bathing, showering, grooming, dressing, oral hygiene, and mobility support. Our trained caregivers understand the importance of preserving personal dignity and work closely with clients to provide care that respects their preferences and comfort levels. We also assist with toileting, incontinence care, and positioning to prevent pressure sores.",
    image: personalCareImg,
    icon: FaHeart,
    color: "from-rose-400 to-pink-500",
    bgColor: "bg-rose-50",
    benefits: [
      "Maintains dignity & independence",
      "Professional trained staff",
      "Customized care plans",
      "24/7 availability",
    ],
    availability: "Available 24/7",
  },
  {
    title: "Companionship",
    desc: "Friendly, engaging company to reduce loneliness and improve emotional well-being.",
    fullDesc:
      "Loneliness and social isolation can significantly impact mental and physical health. Our companionship services provide meaningful social interaction and emotional support to help clients stay connected and engaged. Our companions engage in conversations, play games, share meals, watch movies, and participate in hobbies together. We also provide encouragement for social activities, help maintain connections with friends and family, and offer a listening ear during difficult times.",
    image: companionshipImg,
    icon: FaHandHoldingHeart,
    color: "from-amber-400 to-orange-500",
    bgColor: "bg-amber-50",
    benefits: [
      "Reduces social isolation",
      "Engaging activities",
      "Emotional support",
      "Flexible scheduling",
    ],
    availability: "Flexible hours",
  },
  {
    title: "Medication Reminders",
    desc: "Gentle reminders to help clients stay on schedule with prescribed medications.",
    fullDesc:
      "Proper medication management is crucial for maintaining health and preventing complications. Our caregivers provide reliable medication reminders to help clients stay on schedule with their prescribed treatments. We maintain detailed medication logs, observe for side effects, and communicate with healthcare providers and family members about any concerns. While we don't administer medications, we ensure clients have easy access to their medications and understand the importance of taking them as prescribed.",
    image: medicationImg,
    icon: FaPills,
    color: "from-blue-400 to-indigo-500",
    bgColor: "bg-blue-50",
    benefits: [
      "Medication compliance",
      "Safety monitoring",
      "Healthcare coordination",
      "Family communication",
    ],
    availability: "As needed",
  },
  {
    title: "Meal Preparation",
    desc: "Nutritious and delicious meals prepared to meet dietary needs and preferences.",
    fullDesc:
      "Proper nutrition plays a vital role in maintaining health and energy levels. Our meal preparation services include planning nutritious meals that accommodate dietary restrictions, food preferences, and cultural considerations. We shop for fresh ingredients, prepare meals in the client's kitchen, and ensure proper food safety practices. Our caregivers can prepare everything from simple snacks to complete meals, and we're experienced in working with special diets including diabetic, low-sodium, heart-healthy, and pureed diets.",
    image: mealsImg,
    icon: FaUtensils,
    color: "from-emerald-400 to-teal-500",
    bgColor: "bg-emerald-50",
    benefits: [
      "Customized nutrition plans",
      "Dietary restriction support",
      "Fresh ingredients",
      "Cultural preferences",
    ],
    availability: "Daily service",
  },
  {
    title: "Light Housekeeping",
    desc: "Assistance with household tasks to keep living spaces safe and comfortable.",
    fullDesc:
      "A clean, organized living environment promotes safety, health, and peace of mind. Our light housekeeping services help maintain a comfortable home environment without overwhelming clients. We assist with tasks such as dusting, vacuuming, laundry, dishwashing, bed making, and organizing personal belongings. We also help with seasonal tasks like changing linens and organizing closets. Our goal is to create a safe, clean environment while respecting the client's personal space and preferences.",
    image: housekeepingImg,
    icon: FaBroom,
    color: "from-purple-400 to-violet-500",
    bgColor: "bg-purple-50",
    benefits: [
      "Safe living environment",
      "Organized spaces",
      "Regular maintenance",
      "Personal preferences respected",
    ],
    availability: "Weekly/Bi-weekly",
  },
  {
    title: "Transportation",
    desc: "Reliable transportation for errands, appointments, and social activities.",
    fullDesc:
      "Transportation services help clients maintain their independence and stay connected to their community. Our trained drivers provide safe, reliable transportation to medical appointments, grocery shopping, pharmacy visits, social activities, and religious services. We assist clients in and out of vehicles, help carry packages, and provide companionship during travel. Our drivers are familiar with accessibility needs and can accommodate wheelchairs, walkers, and other mobility aids.",
    image: transportImg,
    icon: FaCar,
    color: "from-cyan-400 to-blue-500",
    bgColor: "bg-cyan-50",
    benefits: [
      "Medical appointments",
      "Social activities",
      "Grocery shopping",
      "Mobility assistance",
    ],
    availability: "By appointment",
  },
  {
    title: "Dementia & Alzheimer's Care",
    desc: "Compassionate support tailored to memory care, promoting safety, comfort, and dignity.",
    fullDesc:
      "Caring for individuals with dementia and Alzheimer's disease requires specialized knowledge, patience, and compassion. Our memory care specialists are trained in techniques that promote comfort, reduce anxiety, and maintain dignity throughout the disease progression. We provide structured routines, cognitive stimulation activities, and emotional support tailored to each client's stage of memory loss. Our approach includes creating a safe environment, using validation therapy, managing behavioral changes, and supporting family members.",
    image: dementiaImg,
    icon: FaBrain,
    color: "from-pink-400 to-rose-500",
    bgColor: "bg-pink-50",
    benefits: [
      "Specialized training",
      "Cognitive stimulation",
      "Family support",
      "Structured routines",
    ],
    availability: "24/7 specialized care",
  },
  {
    title: "24-Hour & Hospice Support",
    desc: "Round-the-clock assistance and end-of-life care with empathy and respect.",
    fullDesc:
      "Our 24-hour care services provide continuous support for clients who need round-the-clock assistance, whether due to complex medical conditions or end-of-life care needs. Our hospice care specialists work closely with healthcare teams to provide comfort-focused care that honors the client's wishes and maintains dignity during their final journey. We provide emotional support to both clients and families, assist with pain management protocols, and help create peaceful, meaningful moments.",
    image: hospiceImg,
    icon: FaClock,
    color: "from-indigo-400 to-purple-500",
    bgColor: "bg-indigo-50",
    benefits: [
      "Continuous support",
      "End-of-life care",
      "Family support",
      "Dignity preservation",
    ],
    availability: "24/7 continuous care",
  },
];

function ServicesCarousel() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

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
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <div
                    className='group relative cursor-pointer'
                    onClick={() => setSelectedService(service)}
                  >
                    {/* Card container */}
                    <div className='relative bg-white rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 border border-slate-100'>
                      {/* Image container with overlay */}
                      <div className='relative w-full h-56 overflow-hidden'>
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
                          className={`absolute top-4 right-4 p-3 rounded-xl bg-gradient-to-r ${service.color} shadow-lg backdrop-blur-sm`}
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
                        <p className='text-slate-600 leading-relaxed text-sm mb-4'>
                          {service.desc}
                        </p>

                        {/* Availability badge */}
                        <div className='inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-teal-100 text-teal-700 mb-4'>
                          <FaClock className='mr-1 h-3 w-3' />
                          {service.availability}
                        </div>

                        {/* Learn more button */}
                        <div className='flex items-center text-teal-600 text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0'>
                          <span className='cursor-pointer hover:text-teal-700 transition-colors duration-200'>
                            Learn more
                          </span>
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
                </AlertDialogTrigger>

                {/* AlertDialog Content */}
                <AlertDialogContent className='w-full max-w-lg sm:max-w-xl lg:max-w-4xl p-0 gap-0 overflow-hidden'>
                  <div className='flex flex-col lg:flex-row max-h-[85vh]'>
                    {/* Image Section */}
                    <div className='lg:w-2/5 h-64 lg:h-auto relative'>
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        sizes='(max-width: 1024px) 100vw, 40vw'
                        className='object-cover'
                      />

                      {/* Gradient overlay */}
                      <div className='absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent' />

                      {/* Icon overlay */}
                      <div className='absolute top-6 left-6'>
                        <div
                          className={`p-4 rounded-2xl bg-gradient-to-r ${service.color} shadow-xl backdrop-blur-sm border border-white/20`}
                        >
                          <IconComponent className='h-7 w-7 text-white' />
                        </div>
                      </div>

                      {/* Trust badge */}
                      <div className='absolute bottom-6 left-6 flex items-center gap-2 bg-white/95 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg'>
                        <FaShieldAlt className='h-4 w-4 text-emerald-600' />
                        <span className='text-sm font-medium text-slate-700'>
                          Licensed & Insured
                        </span>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className='lg:w-3/5 p-8 overflow-y-auto bg-gradient-to-br from-slate-50 to-white'>
                      <div className='space-y-6'>
                        {/* Header */}
                        <AlertDialogHeader className='text-left space-y-3'>
                          <AlertDialogTitle className='text-3xl font-bold text-slate-800 flex items-center gap-3'>
                            {service.title}
                          </AlertDialogTitle>
                          <div className='flex items-center gap-4'>
                            <div
                              className={`h-1.5 w-20 bg-gradient-to-r ${service.color} rounded-full`}
                            />
                            <div className='flex items-center gap-2 text-sm text-slate-600'>
                              <FaClock className='h-4 w-4' />
                              <span>{service.availability}</span>
                            </div>
                          </div>
                          <AlertDialogDescription className='text-lg text-slate-700 font-medium leading-relaxed'>
                            {service.desc}
                          </AlertDialogDescription>
                        </AlertDialogHeader>

                        {/* Key Benefits */}
                        <div className='bg-white rounded-2xl p-6 shadow-sm border border-slate-100'>
                          <h3 className='text-xl font-bold text-slate-800 mb-4 flex items-center gap-2'>
                            <FaHeart className='h-5 w-5 text-teal-600' />
                            Key Benefits
                          </h3>
                          <div className='grid grid-cols-1 sm:grid-cols-2 gap-3'>
                            {service.benefits.map((benefit, idx) => (
                              <div
                                key={idx}
                                className='flex items-center gap-3 p-3 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors duration-200'
                              >
                                <FaCheckCircle
                                  className={`h-4 w-4 text-teal-600`}
                                />
                                <span className='text-slate-700 font-medium text-sm'>
                                  {benefit}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Full Description */}
                        <div>
                          <h3 className='text-xl font-bold text-slate-800 mb-4'>
                            About This Service
                          </h3>
                          <p className='text-slate-700 leading-relaxed'>
                            {service.fullDesc}
                          </p>
                        </div>

                        {/* Contact Info */}
                        <div className='bg-teal-50 rounded-2xl p-6 border border-teal-100'>
                          <p className='text-teal-800 font-medium text-center mb-4'>
                            <span className='font-bold'>
                              Need immediate assistance?
                            </span>{" "}
                            Our care coordinators are available 24/7 to help you
                            get started.
                          </p>
                          <div className='flex flex-wrap justify-center gap-2'>
                            <div className='flex items-center gap-2 text-teal-700 text-sm'>
                              <FaPhone className='h-4 w-4' />
                              <span className='font-medium'>
                                Call: 281-512-6064
                              </span>
                            </div>
                            <div className='flex items-center gap-2 text-teal-700 text-sm'>
                              <FaEnvelope className='h-4 w-4' />
                              <span className='font-medium'>
                                Email: Cesgeriatricare@yahoo.com
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Footer Actions */}
                  <AlertDialogFooter className='p-6 border-t border-slate-200 bg-white'>
                    <AlertDialogCancel
                      className={`bg-gradient-to-r ${service.color} text-white hover:opacity-90 flex items-center gap-2`}
                    >
                      Close
                    </AlertDialogCancel>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
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
