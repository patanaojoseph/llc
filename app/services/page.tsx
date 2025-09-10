import ServicesCarousel from "./ServicesCarousel";

function ServicesPage() {
  return (
    <section className='relative py-8 bg-gradient-to-b from-slate-50 to-white'>
      {/* Background decoration */}
      <div className='absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(14,116,144,0.05),transparent_50%)]' />

      <div className='relative max-w-7xl mx-auto px-6'>
        {/* Enhanced heading section */}
        <div className='text-center max-w-4xl mx-auto mb-16'>
          {/* <div className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-100/80 text-teal-700 text-sm font-medium mb-6'>
            <div className='w-2 h-2 rounded-full bg-teal-500 animate-pulse' />
            Comprehensive Care Solutions
          </div> */}

          <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-700 mb-6'>
            Our{" "}
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-teal-800'>
              Services
            </span>
          </h1>

          <p className='text-lg md:text-md leading-relaxed text-slate-600 max-w-3xl mx-auto'>
            Tailored geriatric care that nurtures independence, comfort, and
            peace of mind for seniors and their families.
          </p>

          {/* Decorative divider */}
          <div className='flex justify-center mt-4'>
            <div className='flex items-center gap-2'>
              <div className='w-12 h-px bg-gradient-to-r from-transparent to-teal-300' />
              <div className='w-3 h-3 rounded-full bg-teal-400/50' />
              <div className='w-8 h-px bg-teal-300' />
              <div className='w-2 h-2 rounded-full bg-teal-500' />
              <div className='w-8 h-px bg-teal-300' />
              <div className='w-3 h-3 rounded-full bg-teal-400/50' />
              <div className='w-12 h-px bg-gradient-to-l from-transparent to-teal-300' />
            </div>
          </div>
        </div>

        {/* Enhanced carousel container */}
        <div className='relative'>
          {/* Subtle glow effect */}
          <div className='absolute -inset-4 bg-gradient-to-r from-teal-100/20 via-transparent to-teal-100/20 rounded-3xl blur-xl' />

          <div className='relative bg-white/60 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-white/20'>
            <ServicesCarousel />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesPage;
