import React from "react";
import Image from "next/image";
import transportImg from "@/public/images/about/team.jpg";

function AboutPage() {
  return (
    <section className='max-w-7xl mx-auto px-6 py-2 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>
      {/* Image */}
      <div className='relative w-full h-80 lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl'>
        <Image
          src={transportImg}
          alt='Our Caregiver Team'
          fill
          className='object-cover'
          priority
        />
      </div>

      {/* Text */}
      <div className='text-center lg:text-left'>
        <h1 className='text-4xl font-bold tracking-tight text-slate-800 sm:text-5xl'>
          About Us
        </h1>

        {/* Accent underline */}
        <div className='mt-3 mb-6 h-1 w-20 mx-auto lg:mx-0 bg-gradient-to-r from-teal-500 to-emerald-400 rounded-full'></div>

        <p className='text-lg leading-relaxed text-slate-600 '>
          With a team of{" "}
          <span className='font-semibold text-teal-600'>
            trained, trustworthy, and empathetic caregivers
          </span>
          , we are dedicated to enhancing quality of life and fostering a
          supportive environment where clients feel valued, respected, and truly
          cared for.
        </p>

        {/* Tagline / quote */}
        <blockquote className='mt-8 italic text-teal-700 font-medium text-xl'>
          “Compassionate excellence in senior care, centered on dignity and
          respect.”
        </blockquote>
      </div>
    </section>
  );
}

export default AboutPage;
