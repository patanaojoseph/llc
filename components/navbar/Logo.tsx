import Link from "next/link";
import Image from "next/image";
import LogoImage from "@/public/images/logo/logo2.png";

function Logo() {
  return (
    <Link
      href='/'
      className='group relative flex items-center space-x-5 transition-all duration-500 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:ring-offset-2 rounded-3xl p-3 -m-3'
    >
      {/* Premium Background Glow */}
      <div className='absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/5 via-emerald-400/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700'></div>

      {/* Modern Icon Container */}
      <div className='relative items-center justify-center rounded-3xl bg-transparent  transition-all duration-300 group-hover:shadow-lg group-hover:from-teal-400 group-hover:to-emerald-500'>
        {/* Shield with Cross - Medical Care Symbol */}
        <Image
          src={LogoImage}
          alt='CES Geriatric Care Logo'
          width={300} // Larger source image for better quality
          height={300}
          sizes='(max-width: 640px) 80px, (max-width: 1024px) 100px, 120px'
          className='w-32 h-32 sm:w-32 sm:h-32 lg:w-32 lg:h-32 transition-transform duration-300 group-hover:scale-105'
          priority
        />
        {/* Professional Trust Indicators */}
        {/* <div className='flex items-center space-x-2'>
          <div className='flex space-x-1'>
            <div className='h-2 w-2 rounded-full bg-emerald-500 animate-pulse'></div>
            <div className='h-2 w-2 rounded-full bg-blue-500'></div>
            <div className='h-2 w-2 rounded-full bg-indigo-500'></div>
          </div>
          <span className='text-[9px] font-semibold text-slate-800 tracking-wide'>
            Licensed • Trusted • Caring
          </span>
        </div> */}
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
