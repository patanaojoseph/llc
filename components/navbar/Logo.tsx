import Link from "next/link";

function Logo() {
  return (
    <Link
      href='/'
      className='group relative flex items-center space-x-5 transition-all duration-500 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:ring-offset-2 rounded-3xl p-3 -m-3'
    >
      {/* Premium Background Glow */}
      <div className='absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/5 via-emerald-400/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700'></div>

      {/* Modern Icon Container */}
      <div className='relative flex h-20 w-20 items-center justify-center rounded-3xl bg-transparent  transition-all duration-300 group-hover:shadow-lg group-hover:from-teal-400 group-hover:to-emerald-500'>
        {/* Shield with Cross - Medical Care Symbol */}
        <svg
          className=' text-white transition-transform duration-300 group-hover:scale-105'
          fill='currentColor'
          viewBox='0 0 24 24'
        >
          {/* Shield outline */}
          <path
            d='M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z'
            stroke='currentColor'
            strokeWidth='1.5'
            fill='none'
            opacity='0.9'
          />
          {/* Medical cross inside shield */}
          <path
            d='M10 8h4v2h-4v4h-2v-4H6v-2h2V6h2v2z'
            fill='currentColor'
            opacity='0.85'
          />
          {/* Small heart accent */}
          <path
            d='M15 16c0 .5-.2 1-.6 1.4L12 20l-2.4-2.6c-.4-.4-.6-.9-.6-1.4 0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5z'
            fill='currentColor'
            opacity='0.7'
          />
        </svg>
      </div>

      {/* Enhanced Text Content */}
      <div className='flex flex-col leading-tight space-y-0.5'>
        {/* Main Brand Name */}
        <div className='flex items-center space-x-3'>
          <span className='text-4xl font-black bg-gradient-to-r from-blue-500 via-blue-400 to-emerald-400 bg-clip-text text-transparent tracking-tight relative'>
            CES
            {/* Premium underline effect */}
            <div className='absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-blue-500 to-emerald-400 transition-all duration-700 group-hover:w-full'></div>
          </span>
        </div>

        {/* Enhanced Tagline */}
        <div className='flex items-center space-x-2'>
          {/* <div className='h-px w-8 bg-gradient-to-r from-blue-500 to-emerald-400'></div> */}
          <span className='text-xs text-slate-200 italic'>
            Compassionate Excellence in Senior Care
          </span>
        </div>

        {/* Company Type */}
        <div className='flex items-center space-x-2'>
          <span className='text-base font-semibold text-slate-300'>
            Geriatric Care
          </span>
          <span className='px-3 py-1 text-xs font-bold text-white bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full shadow-md'>
            LLC
          </span>
        </div>

        {/* Professional Trust Indicators */}
        <div className='flex items-center space-x-2'>
          <div className='flex space-x-1'>
            <div className='h-2 w-2 rounded-full bg-emerald-500 animate-pulse'></div>
            <div className='h-2 w-2 rounded-full bg-blue-500'></div>
            <div className='h-2 w-2 rounded-full bg-indigo-500'></div>
          </div>
          <span className='text-[9px] font-semibold text-slate-200 tracking-wide'>
            Licensed • Trusted • Caring
          </span>
        </div>
      </div>

      {/* Premium floating particles */}
      <div className='absolute inset-0 pointer-events-none'>
        <div className='absolute top-3 left-10 w-1 h-1 bg-blue-400/30 rounded-full animate-ping opacity-0 group-hover:opacity-100 [animation-delay:100ms]'></div>
        <div className='absolute bottom-4 right-8 w-1.5 h-1.5 bg-emerald-400/30 rounded-full animate-ping opacity-0 group-hover:opacity-100 [animation-delay:400ms]'></div>
        <div className='absolute top-1/2 right-4 w-0.5 h-0.5 bg-blue-300/40 rounded-full animate-ping opacity-0 group-hover:opacity-100 [animation-delay:700ms]'></div>
      </div>
    </Link>

    // <Link
    //   href='/'
    //   className='group relative flex items-center space-x-5 transition-all duration-500 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-rose-400/30 focus:ring-offset-2 rounded-3xl p-3 -m-3'
    // >
    //   {/* Icon */}
    //   <div
    //     className='relative flex h-16 w-16 items-center justify-center rounded-3xl
    //                 bg-gradient-to-br from-rose-300 via-rose-400 to-teal-400
    //               text-white shadow-md group-hover:shadow-lg transition-all duration-500'
    //   >
    //     {/* Soft halo glow */}
    //     <div className='absolute inset-0 rounded-3xl bg-white/10 blur-xl opacity-60 group-hover:opacity-80 transition-opacity'></div>

    //     <svg
    //       className='relative h-12 w-12 transition-transform duration-300 group-hover:scale-105'
    //       viewBox='0 0 24 24'
    //     >
    //       {/* Shield outline */}
    //       <path
    //         d='M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z'
    //         stroke='url(#shieldGradientRoseTeal)'
    //         strokeWidth='1.5'
    //         fill='none'
    //       />
    //       {/* Medical cross */}
    //       <path
    //         d='M10 8h4v2h-4v4h-2v-4H6v-2h2V6h2v2z'
    //         fill='url(#crossGradientTeal)'
    //       />
    //       {/* Heart accent */}
    //       <path
    //         d='M15 16c0 .5-.2 1-.6 1.4L12 20l-2.4-2.6c-.4-.4-.6-.9-.6-1.4 0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5z'
    //         className='animate-pulse'
    //         fill='url(#heartGradientRose)'
    //       />

    //       {/* Gradients */}
    //       <defs>
    //         <linearGradient
    //           id='shieldGradientRoseTeal'
    //           x1='0'
    //           y1='0'
    //           x2='1'
    //           y2='1'
    //         >
    //           <stop stopColor='#fb7185' /> {/* Rose */}
    //           <stop offset='1' stopColor='#2dd4bf' /> {/* Teal */}
    //         </linearGradient>
    //         <linearGradient id='crossGradientTeal' x1='0' y1='0' x2='1' y2='1'>
    //           <stop stopColor='#14b8a6' />
    //           <stop offset='1' stopColor='#06b6d4' />
    //         </linearGradient>
    //         <linearGradient id='heartGradientRose' x1='0' y1='0' x2='1' y2='1'>
    //           <stop stopColor='#f43f5e' />
    //           <stop offset='1' stopColor='#fb7185' />
    //         </linearGradient>
    //       </defs>
    //     </svg>
    //   </div>

    //   {/* Text Content */}
    //   <div className='flex flex-col leading-tight space-y-0.5'>
    //     {/* Brand Name */}
    //     <div className='flex items-center space-x-3'>
    //       <span className='text-4xl font-black bg-gradient-to-r from-emerald-400 via-teal-500 to-rose-400 bg-clip-text text-transparent tracking-tight relative'>
    //         CES
    //         <div className='absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-emerald-400 to-rose-400 transition-all duration-700 group-hover:w-full'></div>
    //       </span>
    //     </div>

    //     {/* Tagline */}
    //     <span className='text-xs text-slate-200 italic tracking-wide'>
    //       Compassionate Excellence in Senior Care
    //     </span>

    //     {/* Company Type */}
    //     <div className='flex items-center space-x-2'>
    //       <span className='text-base font-semibold text-slate-300 tracking-wider'>
    //         Geriatric Care
    //       </span>
    //       <span className='px-3 py-1 text-xs font-bold text-white bg-gradient-to-r from-rose-500 to-emerald-500 rounded-full shadow-md'>
    //         LLC
    //       </span>
    //     </div>

    //     {/* Trust Indicators */}
    //     <div className='flex items-center space-x-2'>
    //       <div className='flex space-x-1'>
    //         <div className='h-2 w-2 rounded-full bg-emerald-400 animate-pulse'></div>
    //         <div className='h-2 w-2 rounded-full bg-rose-400'></div>
    //         <div className='h-2 w-2 rounded-full bg-yellow-400'></div>
    //       </div>
    //       <span className='text-[9px] font-semibold text-slate-200 tracking-wide'>
    //         Licensed • Trusted • Caring
    //       </span>
    //     </div>
    //   </div>
    // </Link>
  );
}

export default Logo;
