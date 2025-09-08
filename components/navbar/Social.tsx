// import { FaFacebookSquare, FaLinkedin, FaLocationArrow } from "react-icons/fa";

// function Social() {
//   return (
//     <div className='flex flex-col sm:items-end items-center gap-1 text-gray-600'>
//       {/* Phone */}
//       <a
//         href='tel:+18325551234'
//         className='flex items-center gap-2 font-semibold  transition-colors'
//       >
//         <FaFacebookSquare className='text-xs' />
//         <span className='text-xs'>link@facebook.com</span>
//       </a>

//       {/* Email */}
//       <a
//         href='mailto:info@cescare.com'
//         className='flex items-center gap-2 font-semibold  transition-colors'
//       >
//         <FaLinkedin className='text-xs' />
//         <span className='text-xs'>info@cescare.com</span>
//       </a>

//       {/* Location */}
//       <div className='flex items-center gap-2 font-semibold'>
//         <FaLocationArrow className='text-xs' />
//         <span className='text-xs text-center sm:text-right'>
//           1234 Main St, Houston, TX
//         </span>
//       </div>

//       {/* Company slogan */}
//       <div className='text-xs font-medium italic text-center sm:text-right'>
//         We can provide you quality services for local eldercare and senior
//         services
//       </div>
//     </div>
//   );
// }

import {
  FaFacebookSquare,
  FaLinkedin,
  FaTwitter,
  FaTelegram,
} from "react-icons/fa";

function Social() {
  return (
    <div className='flex flex-col lg:items-end items-center gap-3 text-slate-200 '>
      {/* Contact Information */}
      {/* <div className='flex flex-col lg:items-end items-center gap-2'>
 
        <a
          href='tel:+18325551234'
          className='flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-blue-50 dark:hover:bg-slate-800 transition-all duration-300 hover:scale-105 group'
        >
          <div className='p-2 rounded-full bg-gradient-to-r from-blue-100 to-emerald-100 dark:from-blue-900/30 dark:to-emerald-900/30 group-hover:from-blue-200 group-hover:to-emerald-200'>
            <FaPhoneAlt className='text-sm text-blue-600 dark:text-blue-400' />
          </div>
          <span className='text-sm font-semibold'>(832) 555-1234</span>
        </a>


        <a
          href='mailto:info@cescare.com'
          className='flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-blue-50 dark:hover:bg-slate-800 transition-all duration-300 hover:scale-105 group'
        >
          <div className='p-2 rounded-full bg-gradient-to-r from-emerald-100 to-blue-100 dark:from-emerald-900/30 dark:to-blue-900/30 group-hover:from-emerald-200 group-hover:to-blue-200'>
            <FaEnvelope className='text-sm text-emerald-600 dark:text-emerald-400' />
          </div>
          <span className='text-sm font-semibold'>info@cescare.com</span>
        </a>

 
        <div className='flex items-center gap-3 px-3 py-2 rounded-lg'>
          <div className='p-2 rounded-full bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900/30 dark:to-purple-900/30'>
            <FaMapMarkerAlt className='text-sm text-indigo-600 dark:text-indigo-400' />
          </div>
          <span className='text-sm font-semibold text-center lg:text-right'>
            1234 Main St, Houston, TX
          </span>
        </div>
      </div> */}

      {/* Social Links */}
      <div className='flex items-center gap-2'>
        <a href='#' className='p-2 rounded-lg bg-blue-500 text-white'>
          <FaFacebookSquare className='text-sm' />
        </a>
        <a href='#' className='p-2 rounded-lg bg-blue-400 text-white'>
          <FaTwitter className='text-sm' />
        </a>
        <a href='#' className='p-2 rounded-lg bg-indigo-500 text-white'>
          <FaLinkedin className='text-sm' />
        </a>
        <a href='#' className='p-2 rounded-lg bg-blue-400 text-white'>
          <FaTelegram className='text-sm' />
        </a>
      </div>

      {/* Tagline */}
      <div className='text-xs font-medium italic text-center lg:text-right max-w-xs text-white leading-relaxed'>
        &quot;Providing compassionate, professional care for your loved ones
        with dignity and respect&quot;
      </div>
    </div>
  );
}

export default Social;
