// import Container from "../global/Container";
// import Links from "./Links";
// import Logo from "./Logo";
// import { FaPhoneAlt } from "react-icons/fa";
// import Social from "./Social";

// function Navbar() {
//   return (
//     <nav className='bg-teal-800'>
//       {/* Top section (Logo + Social) with bottom border inside Container */}
//       <Container className='flex flex-col sm:flex-row sm:justify-between sm:items-center py-4 gap-4 sm:gap-0'>
//         {/* Logo */}
//         <div className='flex justify-center sm:justify-start w-full sm:w-auto'>
//           <Logo />
//         </div>

//         {/* Links */}
//         <div className='flex flex-col items-center sm:items-end gap-2 w-full sm:w-auto'>
//           <Links />
//           <Social />
//         </div>
//       </Container>
//       {/* Sub-bar for contact emphasis */}
//       <div className='bg-teal-700 border-t border-gray-200 text-white text-sm sm:text-base font-medium py-2 text-center flex items-center justify-center gap-2 shadow-inner'>
//         <FaPhoneAlt className='h-4 w-4 text-rose-100 animate-pulse' />
//         <span className='text-xs '>
//           Need Immediate Assistance? Call us: 281-512-6064
//         </span>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;

"use client";

import { useState } from "react";
import Container from "../global/Container";
import Links from "./Links";
import Logo from "./Logo";
import Social from "./Social";
import { FaPhoneAlt, FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='bg-teal-800 shadow-lg sticky top-0 z-50'>
      {/* Top section */}
      <Container className='flex items-center justify-between py-4'>
        {/* Logo */}
        <Logo />

        {/* Desktop Links + Social */}
        <div className='hidden sm:flex items-center gap-6'>
          <Links />
          <Social />
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className='sm:hidden text-white p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-white/50'
          aria-label='Toggle navigation menu'
        >
          {isOpen ? (
            <FaTimes className='w-6 h-6' />
          ) : (
            <FaBars className='w-6 h-6' />
          )}
        </button>
      </Container>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className='sm:hidden bg-teal-700 text-white px-6 py-4 space-y-4 animate-slideDown'>
          <Links />
          <Social />
        </div>
      )}

      {/* Sub-bar for contact emphasis */}
      {/* <div className='bg-teal-800 text-white text-sm sm:text-base font-medium py-2 text-center flex items-center justify-center gap-2 shadow-inner'>
        <FaPhoneAlt className='h-4 w-4 text-rose-100 animate-pulse' />
        <span className='text-xs sm:text-sm text-gray-300'>
          Need Immediate Assistance? Call us: 281-512-6064
        </span>
      </div> */}

      {/* Animations */}
    </nav>
  );
}

export default Navbar;
