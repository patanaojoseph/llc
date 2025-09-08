import Container from "../global/Container";
import Links from "./Links";
import Logo from "./Logo";
import Social from "./Social";

function Navbar() {
  return (
    <nav>
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
      <Container className='py-3 border-b border-gray-200'>
        <Links />
      </Container>
    </nav>
  );
}

export default Navbar;
