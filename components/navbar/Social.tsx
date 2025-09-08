import { FaFacebookSquare, FaLinkedin, FaLocationArrow } from "react-icons/fa";

function Social() {
  return (
    <div className='flex flex-col sm:items-end items-center gap-1 text-gray-600'>
      {/* Phone */}
      <a
        href='tel:+18325551234'
        className='flex items-center gap-2 font-semibold  transition-colors'
      >
        <FaFacebookSquare className='text-xs' />
        <span className='text-xs'>link@facebook.com</span>
      </a>

      {/* Email */}
      <a
        href='mailto:info@cescare.com'
        className='flex items-center gap-2 font-semibold  transition-colors'
      >
        <FaLinkedin className='text-xs' />
        <span className='text-xs'>info@cescare.com</span>
      </a>

      {/* Location */}
      <div className='flex items-center gap-2 font-semibold'>
        <FaLocationArrow className='text-xs' />
        <span className='text-xs text-center sm:text-right'>
          1234 Main St, Houston, TX
        </span>
      </div>

      {/* Company slogan */}
      <div className='text-xs font-medium italic text-center sm:text-right'>
        We can provide you quality services for local eldercare and senior
        services
      </div>
    </div>
  );
}

export default Social;
