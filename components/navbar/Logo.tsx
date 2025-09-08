import Link from "next/link";

function Logo() {
  return (
    // <Link
    //   href='/'
    //   className='group relative flex items-center space-x-5 transition-all duration-500 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:ring-offset-2 rounded-3xl p-3 -m-3'
    // >
    //   {/* Premium Background Glow */}
    //   <div className='absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/5 via-emerald-400/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700'></div>

    //   {/* Icon Container - Senior Care Themed */}
    //   <div className='relative flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br from-blue-500 via-blue-600 to-emerald-500 shadow-2xl transition-all duration-500 group-hover:shadow-3xl group-hover:from-blue-400 group-hover:via-blue-500 group-hover:to-emerald-400 group-hover:rotate-[1deg]'>
    //     {/* Shimmer Effect */}
    //     <div className='absolute inset-0 rounded-3xl bg-gradient-to-tr from-transparent via-white/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700'></div>

    //     {/* Glass Effect */}
    //     <div className='absolute inset-0 rounded-3xl bg-white/15 backdrop-blur-sm border border-white/30'></div>

    //     {/* Caring Hands + Heart Icon - Perfect for Elder Care */}
    //     <svg
    //       className='h-8 w-8 text-white relative z-10 transition-transform duration-300 group-hover:scale-110'
    //       fill='none'
    //       stroke='currentColor'
    //       viewBox='0 0 24 24'
    //     >
    //       {/* Caring hands outline */}
    //       <path
    //         strokeLinecap='round'
    //         strokeLinejoin='round'
    //         strokeWidth={1.8}
    //         d='M7 21h10M12 3v18M8 7l4-4 4 4M8 13l4-4 4 4'
    //       />
    //       {/* Heart in center */}
    //       <path
    //         strokeLinecap='round'
    //         strokeLinejoin='round'
    //         strokeWidth={2.2}
    //         d='M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z'
    //         className='opacity-90'
    //       />
    //     </svg>

    //     {/* Trust indicators */}
    //     <div className='absolute -top-1.5 -right-1.5 h-3 w-3 rounded-full bg-emerald-400 animate-pulse'></div>
    //     <div className='absolute -top-1.5 -right-1.5 h-3 w-3 rounded-full bg-emerald-400'></div>
    //   </div>

    //   {/* Enhanced Text Content */}
    //   <div className='flex flex-col leading-tight space-y-0.5'>
    //     {/* Main Brand Name */}
    //     <div className='flex items-center space-x-3'>
    //       <span className='text-5xl font-black bg-gradient-to-r from-blue-700 via-blue-600 to-emerald-600 bg-clip-text text-transparent tracking-tight relative'>
    //         CES
    //         {/* Premium underline effect */}
    //         <div className='absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-blue-600 to-emerald-500 transition-all duration-700 group-hover:w-full'></div>
    //       </span>

    //       {/* Elegant separator */}
    //       <div className='flex flex-col space-y-0.5'>
    //         <div className='h-1.5 w-1.5 rounded-full bg-blue-500 animate-pulse [animation-delay:0ms]'></div>
    //         <div className='h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse [animation-delay:200ms]'></div>
    //         <div className='h-1.5 w-1.5 rounded-full bg-blue-600 animate-pulse [animation-delay:400ms]'></div>
    //       </div>
    //     </div>

    //     {/* Company Type */}
    //     <div className='flex items-center space-x-2'>
    //       <span className='text-base font-bold text-slate-700 dark:text-slate-200 tracking-wider'>
    //         Geriatric Care
    //       </span>
    //       <span className='px-3 py-1 text-xs font-bold text-white bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full shadow-md'>
    //         LLC
    //       </span>
    //     </div>

    //     {/* Enhanced Tagline */}
    //     <div className='flex items-center space-x-2 mt-1'>
    //       <div className='h-px w-8 bg-gradient-to-r from-blue-500 to-emerald-400'></div>
    //       <span className='text-sm font-medium text-slate-600 dark:text-slate-300 italic'>
    //         Compassionate Excellence in Senior Care
    //       </span>
    //     </div>

    //     {/* Professional Trust Indicators */}
    //     <div className='flex items-center space-x-3 mt-2'>
    //       <div className='flex space-x-1'>
    //         <div className='h-2 w-2 rounded-full bg-emerald-500 animate-pulse'></div>
    //         <div className='h-2 w-2 rounded-full bg-blue-500'></div>
    //         <div className='h-2 w-2 rounded-full bg-indigo-500'></div>
    //       </div>
    //       <span className='text-xs font-semibold text-slate-500 dark:text-slate-400 tracking-wide'>
    //         Licensed • Trusted • Caring
    //       </span>
    //     </div>
    //   </div>

    //   {/* Premium floating particles */}
    //   <div className='absolute inset-0 pointer-events-none'>
    //     <div className='absolute top-3 left-10 w-1 h-1 bg-blue-400/30 rounded-full animate-ping opacity-0 group-hover:opacity-100 [animation-delay:100ms]'></div>
    //     <div className='absolute bottom-4 right-8 w-1.5 h-1.5 bg-emerald-400/30 rounded-full animate-ping opacity-0 group-hover:opacity-100 [animation-delay:400ms]'></div>
    //     <div className='absolute top-1/2 right-4 w-0.5 h-0.5 bg-blue-300/40 rounded-full animate-ping opacity-0 group-hover:opacity-100 [animation-delay:700ms]'></div>
    //   </div>
    // </Link>

    <Link
      href='/'
      className='group relative flex items-center space-x-5 transition-all duration-500 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:ring-offset-2 rounded-3xl p-3 -m-3'
    >
      {/* Premium Background Glow */}
      <div className='absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/5 via-emerald-400/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700'></div>

      {/* Icon Container - Senior Care Themed */}
      <div className='relative flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br from-blue-500 via-blue-600 to-emerald-500 shadow-2xl transition-all duration-500 group-hover:shadow-3xl group-hover:from-blue-400 group-hover:via-blue-500 group-hover:to-emerald-400 group-hover:rotate-[1deg]'>
        {/* Shimmer Effect */}
        <div className='absolute inset-0 rounded-3xl bg-gradient-to-tr from-transparent via-white/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700'></div>

        {/* Glass Effect */}
        <div className='absolute inset-0 rounded-3xl bg-white/15 backdrop-blur-sm border border-white/30'></div>

        {/* Caring Hands + Heart Icon - Perfect for Elder Care */}
        <svg
          className='h-8 w-8 text-white relative z-10 transition-transform duration-300 group-hover:scale-110'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
        >
          {/* Caring hands outline */}
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={1.8}
            d='M7 21h10M12 3v18M8 7l4-4 4 4M8 13l4-4 4 4'
          />
          {/* Heart in center */}
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2.2}
            d='M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z'
            className='opacity-90'
          />
        </svg>

        {/* Trust indicators */}
        <div className='absolute -top-1.5 -right-1.5 h-3 w-3 rounded-full bg-emerald-400 animate-pulse'></div>
        <div className='absolute -top-1.5 -right-1.5 h-3 w-3 rounded-full bg-emerald-400'></div>
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

        {/* Company Type */}
        <div className='flex items-center space-x-2'>
          <span className='text-base font-bold text-slate-700 dark:text-slate-200 tracking-wider'>
            Geriatric Care
          </span>
          <span className='px-3 py-1 text-xs font-bold text-white bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full shadow-md'>
            LLC
          </span>
        </div>

        {/* Enhanced Tagline */}
        <div className='flex items-center space-x-2'>
          {/* <div className='h-px w-8 bg-gradient-to-r from-blue-500 to-emerald-400'></div> */}
          <span className='text-xs text-slate-200 italic'>
            Compassionate Excellence in Senior Care
          </span>
        </div>

        {/* Professional Trust Indicators */}
        <div className='flex items-center space-x-2'>
          {/* <div className='flex space-x-1'>
            <div className='h-2 w-2 rounded-full bg-emerald-500 animate-pulse'></div>
            <div className='h-2 w-2 rounded-full bg-blue-500'></div>
            <div className='h-2 w-2 rounded-full bg-indigo-500'></div>
          </div> */}
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
  );
}

export default Logo;
