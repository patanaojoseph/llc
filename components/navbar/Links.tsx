import Link from "next/link";
import { FaHome, FaUsers, FaPhoneAlt } from "react-icons/fa";
import { MdHealthAndSafety } from "react-icons/md";

function Links() {
  const navItems = [
    { href: "/", icon: FaHome, label: "Home", description: "Go to main page" },
    {
      href: "/services",
      icon: MdHealthAndSafety,
      label: "Services",
      description: "Our care services",
    },
    {
      href: "/about",
      icon: FaUsers,
      label: "About Us",
      description: "Learn about our mission",
    },
    {
      href: "/contact",
      icon: FaPhoneAlt,
      label: "Contact",
      description: "Get in touch with us",
    },
  ];

  return (
    <nav
      className='flex flex-wrap justify-center lg:justify-end gap-2 text-base'
      role='navigation'
      aria-label='Main navigation'
    >
      {navItems.map((item) => {
        const IconComponent = item.icon;
        return (
          <Link
            key={item.href}
            href={item.href}
            className='
              group relative flex items-center gap-2 px-5 py-2.5 
              rounded-lg transition-all duration-200 ease-out
              text-white/90 hover:text-white
              hover:bg-teal-600/80 focus:bg-teal-600/90
              focus:outline-none focus:ring-2 focus:ring-white/30
               hover:border-white/20
              shadow-sm hover:shadow-md
            '
            title={item.description}
            aria-label={`${item.label} - ${item.description}`}
          >
            <IconComponent
              className='h-5 w-5 opacity-80 group-hover:opacity-100 transition-opacity duration-200'
              aria-hidden='true'
            />
            <span
              className='
                text-lg  
                opacity-90 group-hover:opacity-100 
                transition-opacity duration-200
              '
            >
              {item.label}
            </span>

            {/* Subtle underline effect */}
            <span
              className='
                absolute bottom-1 left-1/2 transform -translate-x-1/2
                w-0 h-0.5 bg-white/60 rounded-full
                group-hover:w-3/4 transition-all duration-300
              '
            />
          </Link>
        );
      })}
    </nav>
  );
}

export default Links;
