import Container from "../global/Container";
import DarkMode from "./DarkMode";
import Links from "./Links";
import Logo from "./Logo";

function Navbar() {
  return (
    <nav className='border-b border-gray-100'>
      <Container className='flex flex-col sm:flex-row sm:justify-between flex-wrap sm:items-center py-8'>
        <Logo />
        <div className='flex gap-4 items-center'>
          <Links />
          <DarkMode />
        </div>
      </Container>
    </nav>
  );
}

export default Navbar;
