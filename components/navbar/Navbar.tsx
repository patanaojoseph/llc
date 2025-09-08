import Container from "../global/Container";
import Links from "./Links";
import Logo from "./Logo";
import Social from "./Social";

function Navbar() {
  return (
    <nav className='bg-teal-800'>
      {/* Top section (Logo + Social) with bottom border inside Container */}
      <Container className='flex flex-col sm:flex-row sm:justify-between sm:items-center py-4 gap-4 sm:gap-0 border-b border-gray-200'>
        {/* Logo */}
        <div className='flex justify-center sm:justify-start w-full sm:w-auto'>
          <Logo />
        </div>

        {/* Social */}
        <div className='flex flex-col items-center sm:items-end gap-2 w-full sm:w-auto'>
          <Social />
        </div>
      </Container>

      {/* Links section with same width as Container */}
      <Container className='py-3 border-gray-200'>
        <Links />
      </Container>
    </nav>

    // <nav className='relative bg-gradient-to-br from-rose-500 via-rose-500/300 to-rose-500/200 shadow-lg '>
    //   {/* Top section (Logo + Social) with bottom border inside Container */}
    //   <Container className='relative flex flex-col lg:flex-row lg:justify-between lg:items-center py-6 gap-6 lg:gap-0 border-b border-blue-200/30 dark:border-slate-700/30'>
    //     {/* Logo */}
    //     <div className='flex justify-center lg:justify-start w-full lg:w-auto'>
    //       <Logo />
    //     </div>

    //     {/* Social */}
    //     <div className='flex flex-col items-center lg:items-end gap-2 w-full lg:w-auto'>
    //       <Social />
    //     </div>
    //   </Container>

    //   {/* Links section with same width as Container */}
    //   <Container className='relative py-4'>
    //     <Links />
    //   </Container>
    // </nav>

    // <nav className='relative bg-gradient-to-br from-rose-800 via-rose-400 to-rose-300 shadow-xl backdrop-blur-md'>
    //   {/* Top section (Logo + Social) */}
    //   <Container className='relative flex flex-col lg:flex-row lg:justify-between lg:items-center py-4 gap-6 lg:gap-0 border-b border-white/20 '>
    //     {/* Logo */}
    //     <div className='flex justify-center lg:justify-start w-full lg:w-auto'>
    //       <Logo />
    //     </div>

    //     {/* Social */}
    //     <div className='flex flex-col items-center lg:items-end gap-3 w-full lg:w-auto'>
    //       <Social />
    //     </div>
    //   </Container>

    //   {/* Navigation Links */}
    //   <Container className='relative py-5'>
    //     <Links />
    //   </Container>
    // </nav>
  );
}

export default Navbar;
