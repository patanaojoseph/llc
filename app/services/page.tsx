import ServicesCarousel from "./ServicesCarousel";

function ServicesPage() {
  return (
    <section className='relative py-4'>
      <div className='relative max-w-7xl mx-auto px-6'>
        {/* Enhanced heading section */}
        <div className='text-center max-w-4xl mx-auto mb-'>
          <h1 className='text-4xl md:text-4xl lg:text-4xl font-bold tracking-tight text-slate-700 mb-2'>
            Our{" "}
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-violet-300 via-violet-400 to-violet-500'>
              Services
            </span>
          </h1>

          <p className='text-md md:text-md leading-relaxed text-slate-600 max-w-3xl mx-auto'>
            Tailored geriatric care that nurtures independence, comfort, and
            peace of mind for seniors and their families.
          </p>
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
