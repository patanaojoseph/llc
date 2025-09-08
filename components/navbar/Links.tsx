import Link from "next/link";
import { FaHome } from "react-icons/fa";
import { RiTeamFill } from "react-icons/ri";
import { MdMedicalServices } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";

function Links() {
  return (
    <div className='flex justify-center sm:justify-end gap-6 text-sm font-medium text-gray-600'>
      <Link
        href='/'
        className='flex items-center gap-1 text-gray-500 hover:text-rose-400 hover:underline transition-colors font-medium'
      >
        <FaHome className='h-4 w-4' />
        <span>Home</span>
      </Link>

      <Link
        href='/services'
        className='flex items-center gap-1 text-gray-500 hover:text-rose-400 hover:underline transition-colors font-medium'
      >
        <MdMedicalServices className='h-4 w-4' />
        <span>Services</span>
      </Link>
      <Link
        href='/about'
        className='flex items-center gap-1 text-gray-500 hover:text-rose-400 hover:underline transition-colors font-medium'
      >
        <RiTeamFill className='h-4 w-4' />
        <span>About</span>
      </Link>
      <Link
        href='/contact'
        className='flex items-center gap-1 text-gray-500 hover:text-rose-400 hover:underline transition-colors font-medium'
      >
        <BsFillTelephoneFill className='h-4 w-4' />
        <span>Contact</span>
      </Link>
    </div>
  );
}

export default Links;
