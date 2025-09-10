import Container from "../global/Container";
import Links from "./Links";
import Logo from "./Logo";
import { FaPhoneAlt } from "react-icons/fa";
import Social from "./Social";

function Navbar() {
  return (
    <nav className='bg-teal-800'>
      {/* Top section (Logo + Social) with bottom border inside Container */}
      <Container className='flex flex-col sm:flex-row sm:justify-between sm:items-center py-4 gap-4 sm:gap-0'>
        {/* Logo */}
        <div className='flex justify-center sm:justify-start w-full sm:w-auto'>
          <Logo />
        </div>

        {/* Links */}
        <div className='flex flex-col items-center sm:items-end gap-2 w-full sm:w-auto'>
          <Links />
          <Social />
        </div>
      </Container>
      {/* Sub-bar for contact emphasis */}
      <div className='bg-teal-700500 border-t border-gray-200 text-white text-sm sm:text-base font-medium py-2 text-center flex items-center justify-center gap-2 shadow-inner'>
        <FaPhoneAlt className='h-4 w-4 text-rose-100 animate-pulse' />
        <span className='text-xs '>
          Need Immediate Assistance? Call us: 281-512-6064
        </span>
      </div>
    </nav>
  );
}

export default Navbar;
