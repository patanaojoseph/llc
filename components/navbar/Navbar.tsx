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

// ============================================================================
// Updated Navbar with Mobile Responsiveness and Toggle Menu
// ============================================================================

"use client";

import { useState, useEffect } from "react";
import Container from "../global/Container";
import Links from "./Links";
import Logo from "./Logo";
import Social from "./Social";
import { FaBars, FaTimes } from "react-icons/fa";

// function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className='bg-violet-300 shadow-lg sticky top-0 z-50'>
//       {/* Top section */}
//       <Container className='flex items-center justify-between py-4'>
//         {/* Logo */}
//         <Logo />

//         {/* Desktop Links + Social */}
//         <div className='hidden sm:flex items-center gap-6'>
//           <Links />
//           <Social />
//         </div>

//         {/* Mobile Menu Button */}
//         <button
//           onClick={() => setIsOpen(!isOpen)}
//           className='sm:hidden text-white p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-white/50'
//           aria-label='Toggle navigation menu'
//         >
//           {isOpen ? (
//             <FaTimes className='w-6 h-6' />
//           ) : (
//             <FaBars className='w-6 h-6' />
//           )}
//         </button>
//       </Container>

//       {/* Mobile Dropdown Menu */}
//       {isOpen && (
//         <div className='sm:hidden bg-purple-400 text-white px-6 py-4 space-y-4 animate-slideDown'>
//           <Links />
//           <Social />
//         </div>
//       )}
//     </nav>
//   );
// }

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      <nav
        className={`sticky top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-gradient-to-r from-violet-300/95 via-violet-300/95 to-violet-400/95 backdrop-blur-xl shadow-2xl border-white/10"
            : "bg-gradient-to-r from-violet-50 via-violet-500 to-violet-800 shadow-lg"
        }`}
      >
        <Container
          className={`flex items-center justify-between transition-all duration-300 ${
            scrolled ? "py-2" : "py-3"
          }`}
        >
          {/* Logo */}
          <div className='transform transition-transform duration-300'>
            <Logo />
          </div>

          {/* Desktop Links + Social */}
          <div className='hidden lg:flex items-center gap-8'>
            <Links />
            <div className='w-px h-8 bg-white/20'></div>
            <Social />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className='lg:hidden text-white p-3 rounded-xl hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/30 transition-all duration-300 active:scale-95 backdrop-blur-sm border border-white/20'
            aria-label='Toggle navigation menu'
            aria-expanded={isOpen}
          >
            <div className='relative w-6 h-6'>
              <FaBars
                className={`absolute inset-0 w-6 h-6 transition-all duration-300 ${
                  isOpen
                    ? "opacity-0 rotate-90 scale-50"
                    : "opacity-100 rotate-0 scale-100"
                }`}
              />
              <FaTimes
                className={`absolute inset-0 w-6 h-6 transition-all duration-300 ${
                  isOpen
                    ? "opacity-100 rotate-0 scale-100"
                    : "opacity-0 -rotate-90 scale-50"
                }`}
              />
            </div>
          </button>
        </Container>

        {/* Mobile Dropdown Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className='bg-gradient-to-b from-violet-600/98 to-emerald-700/98 backdrop-blur-xl border-t border-white/10'>
            <Container className='px-6 py-8 space-y-8'>
              {/* Mobile Links */}
              <div className='space-y-2 animate-fade-in-up'>
                <Links />
              </div>

              {/* Elegant Divider */}
              <div className='relative py-4'>
                <div className='absolute inset-0 flex items-center'>
                  <div className='w-full border-t border-white/20'></div>
                </div>
                <div className='relative flex justify-center'>
                  <span className='bg-violet-600/90 px-4 text-xs font-semibold text-white/70 uppercase tracking-wider'>
                    Stay Connected
                  </span>
                </div>
              </div>

              {/* Mobile Social */}
              <div className='animate-fade-in-up animation-delay-200 flex justify-center'>
                <Social />
              </div>
            </Container>
          </div>
        </div>
      </nav>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className='fixed inset-0 bg-violet/50 z-40 lg:hidden backdrop-blur-sm transition-opacity duration-300'
          onClick={() => setIsOpen(false)}
          aria-hidden='true'
        />
      )}

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(15px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }
        .animation-delay-200 {
          animation-delay: 0.2s;
          opacity: 0;
        }
      `}</style>
    </>
  );
}

export default Navbar;

// ============================================================================
// Updated Navbar with Mobile Responsiveness and Toggle Menu
// ============================================================================
