// import Link from "next/link";

// function Logo() {
//   return (
//     <Link
//       href='/'
//       className='group relative flex items-center space-x-4 transition-all duration-500 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:ring-offset-2 rounded-2xl p-2 -m-2'
//     >
//       {/* Animated Background Glow */}
//       <div className='absolute inset-0 rounded-2xl bg-gradient-to-r from-rose-500/5 via-transparent to-rose-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>

//       {/* Icon Container with Enhanced Animation */}
//       <div className='relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-rose-600 via-rose-700 to-rose-800 shadow-xl transition-all duration-500 group-hover:shadow-2xl group-hover:from-rose-500 group-hover:via-rose-600 group-hover:to-rose-700 group-hover:rotate-[2deg]'>
//         {/* Shimmer Effect */}
//         <div className='absolute inset-0 rounded-2xl bg-gradient-to-tr from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700'></div>

//         {/* Glass Effect */}
//         <div className='absolute inset-0 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20'></div>

//         {/* Pulsing Ring */}
//         <div className='absolute inset-0 rounded-2xl border-2 border-rose-400/30 animate-pulse'></div>

//         {/* Enhanced Heart Icon */}
//         <svg
//           className='h-7 w-7 text-white relative z-10 transition-transform duration-300 group-hover:scale-110'
//           fill='none'
//           stroke='currentColor'
//           viewBox='0 0 24 24'
//         >
//           <path
//             strokeLinecap='round'
//             strokeLinejoin='round'
//             strokeWidth={2.5}
//             d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
//           />
//         </svg>

//         {/* Small decorative dots */}
//         <div className='absolute -top-1 -right-1 h-2 w-2 rounded-full bg-green-400 animate-ping'></div>
//         <div className='absolute -top-1 -right-1 h-2 w-2 rounded-full bg-green-400'></div>
//       </div>

//       {/* Enhanced Text Content */}
//       <div className='flex flex-col leading-tight space-y-0.5'>
//         {/* Main Brand Name with Advanced Effects */}
//         <div className='flex items-center space-x-2'>
//           <span className='text-4xl font-black bg-gradient-to-r from-rose-800 via-rose-600 to-rose-700 bg-clip-text text-transparent tracking-tight relative'>
//             CES
//             {/* Subtle underline effect */}
//             <div className='absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-rose-600 to-rose-800 transition-all duration-500 group-hover:w-full'></div>
//           </span>

//           {/* Animated separator */}
//           <div className='flex flex-col space-y-0.5'>
//             <div className='h-1 w-1 rounded-full bg-rose-600 animate-bounce [animation-delay:0ms]'></div>
//             <div className='h-1 w-1 rounded-full bg-rose-500 animate-bounce [animation-delay:150ms]'></div>
//             <div className='h-1 w-1 rounded-full bg-rose-700 animate-bounce [animation-delay:300ms]'></div>
//           </div>
//         </div>

//         {/* Company Type with Enhanced Styling */}
//         <div className='flex items-center space-x-1'>
//           <span className='text-sm font-semibold text-gray-700 dark:text-gray-200 tracking-wider'>
//             Geriatric Care
//           </span>
//           <span className='px-2 py-0.5 text-xs font-bold text-white bg-gradient-to-r from-rose-600 to-rose-700 rounded-full shadow-sm'>
//             LLC
//           </span>
//         </div>

//         {/* Enhanced Tagline */}
//         <div className='flex items-center space-x-1'>
//           <div className='h-px w-6 bg-gradient-to-r from-rose-500 to-transparent'></div>
//           <span className='text-xs font-medium text-gray-600 dark:text-gray-300 italic'>
//             Compassionate Excellence in Senior Care
//           </span>
//         </div>

//         {/* Professional Credentials Indicator */}
//         <div className='flex items-center space-x-2 mt-1'>
//           <div className='flex space-x-1'>
//             <div className='h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse'></div>
//             <div className='h-1.5 w-1.5 rounded-full bg-rose-500'></div>
//             <div className='h-1.5 w-1.5 rounded-full bg-purple-500'></div>
//           </div>
//           <span className='text-xs font-medium text-gray-500 dark:text-gray-400'>
//             Licensed • Trusted • Professional
//           </span>
//         </div>
//       </div>

//       {/* Hover Effect Particles */}
//       <div className='absolute top-0 left-0 w-full h-full pointer-events-none'>
//         <div className='absolute top-2 left-8 w-1 h-1 bg-rose-400/40 rounded-full animate-ping opacity-0 group-hover:opacity-100 [animation-delay:100ms]'></div>
//         <div className='absolute bottom-3 right-6 w-1 h-1 bg-rose-500/40 rounded-full animate-ping opacity-0 group-hover:opacity-100 [animation-delay:300ms]'></div>
//         <div className='absolute top-1/2 right-2 w-0.5 h-0.5 bg-rose-300/60 rounded-full animate-ping opacity-0 group-hover:opacity-100 [animation-delay:500ms]'></div>
//       </div>
//     </Link>
//   );
// }

// export default Logo;

import Link from "next/link";

function Logo() {
  return (
    <Link
      href='/'
      className='group relative flex items-center space-x-4 transition-all duration-500 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:ring-offset-2 rounded-2xl p-2 -m-2'
    >
      {/* Animated Background Glow */}
      <div className='absolute inset-0 rounded-2xl bg-gradient-to-r from-rose-500/5 via-transparent to-rose-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>

      {/* Icon Container with Enhanced Animation */}
      <div className='relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-rose-600 via-rose-700 to-rose-800 shadow-xl transition-all duration-500 group-hover:shadow-2xl group-hover:from-rose-500 group-hover:via-rose-600 group-hover:to-rose-700 group-hover:rotate-[2deg]'>
        {/* Shimmer Effect */}
        <div className='absolute inset-0 rounded-2xl bg-gradient-to-tr from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700'></div>

        {/* Glass Effect */}
        <div className='absolute inset-0 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20'></div>

        {/* Pulsing Ring */}
        <div className='absolute inset-0 rounded-2xl border-2 border-rose-400/30 animate-pulse'></div>

        {/* Enhanced Shield with Cross Icon - Representing Protection & Healthcare */}
        <svg
          className='h-7 w-7 text-white relative z-10 transition-transform duration-300 group-hover:scale-110'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
        >
          {/* Shield outline */}
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.031 9-11.622 0-1.042-.133-2.052-.382-3.016z'
          />
          {/* Medical cross inside shield */}
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2.5}
            d='M12 8v8M8 12h8'
            className='opacity-90'
          />
        </svg>

        {/* Small decorative dots */}
        <div className='absolute -top-1 -right-1 h-2 w-2 rounded-full bg-green-400 animate-ping'></div>
        <div className='absolute -top-1 -right-1 h-2 w-2 rounded-full bg-green-400'></div>
      </div>

      {/* Enhanced Text Content */}
      <div className='flex flex-col leading-tight space-y-0.5'>
        {/* Main Brand Name with Advanced Effects */}
        <div className='flex items-center space-x-2'>
          <span className='text-4xl font-black bg-gradient-to-r from-rose-800 via-rose-600 to-rose-700 bg-clip-text text-transparent tracking-tight relative'>
            CES
            {/* Subtle underline effect */}
            <div className='absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-rose-600 to-rose-800 transition-all duration-500 group-hover:w-full'></div>
          </span>

          {/* Animated separator */}
          <div className='flex flex-col space-y-0.5'>
            <div className='h-1 w-1 rounded-full bg-rose-600 animate-bounce [animation-delay:0ms]'></div>
            <div className='h-1 w-1 rounded-full bg-rose-500 animate-bounce [animation-delay:150ms]'></div>
            <div className='h-1 w-1 rounded-full bg-rose-700 animate-bounce [animation-delay:300ms]'></div>
          </div>
        </div>

        {/* Company Type with Enhanced Styling */}
        <div className='flex items-center space-x-1'>
          <span className='text-sm font-semibold text-gray-700 dark:text-gray-200 tracking-wider'>
            Geriatric Care
          </span>
          <span className='px-2 py-0.5 text-xs font-bold text-white bg-gradient-to-r from-rose-600 to-rose-700 rounded-full shadow-sm'>
            LLC
          </span>
        </div>

        {/* Enhanced Tagline */}
        <div className='flex items-center space-x-1'>
          <div className='h-px w-6 bg-gradient-to-r from-rose-500 to-transparent'></div>
          <span className='text-xs font-medium text-gray-600 dark:text-gray-300 italic'>
            Compassionate Excellence in Senior Care
          </span>
        </div>

        {/* Professional Credentials Indicator */}
        <div className='flex items-center space-x-2 mt-1'>
          <div className='flex space-x-1'>
            <div className='h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse'></div>
            <div className='h-1.5 w-1.5 rounded-full bg-rose-500'></div>
            <div className='h-1.5 w-1.5 rounded-full bg-purple-500'></div>
          </div>
          <span className='text-xs font-medium text-gray-500 dark:text-gray-400'>
            Licensed • Trusted • Professional
          </span>
        </div>
      </div>

      {/* Hover Effect Particles */}
      <div className='absolute top-0 left-0 w-full h-full pointer-events-none'>
        <div className='absolute top-2 left-8 w-1 h-1 bg-rose-400/40 rounded-full animate-ping opacity-0 group-hover:opacity-100 [animation-delay:100ms]'></div>
        <div className='absolute bottom-3 right-6 w-1 h-1 bg-rose-500/40 rounded-full animate-ping opacity-0 group-hover:opacity-100 [animation-delay:300ms]'></div>
        <div className='absolute top-1/2 right-2 w-0.5 h-0.5 bg-rose-300/60 rounded-full animate-ping opacity-0 group-hover:opacity-100 [animation-delay:500ms]'></div>
      </div>
    </Link>
  );
}

export default Logo;
