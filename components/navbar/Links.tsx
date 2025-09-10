import Link from "next/link";
import { FaHome, FaUsers, FaPhoneAlt } from "react-icons/fa";
import { MdHealthAndSafety } from "react-icons/md";

function Links() {
  // const navItems = [
  //   {
  //     href: "/",
  //     icon: FaHome,
  //     label: "Home",
  //     color: "from-blue-500 to-blue-600",
  //   },
  //   {
  //     href: "/services",
  //     icon: MdHealthAndSafety,
  //     label: "Services",
  //     color: "from-emerald-500 to-emerald-600",
  //   },
  //   {
  //     href: "/about",
  //     icon: FaUsers,
  //     label: "About",
  //     color: "from-indigo-500 to-indigo-600",
  //   },
  //   {
  //     href: "/contact",
  //     icon: FaPhoneAlt,
  //     label: "Contact",
  //     color: "from-rose-500 to-rose-600",
  //   },
  // ];

  // return (
  //   <div className='flex flex-wrap justify-center lg:justify-end gap-4 text-sm'>
  //     {navItems.map((item) => {
  //       const IconComponent = item.icon;
  //       return (
  //         <Link
  //           key={item.href}
  //           href={item.href}
  //           className='group relative flex items-center gap-2 px-4 rounded-xl '
  //         >
  //           {/* Icon container with gradient */}
  //           <div
  //             className={`p-2 rounded-lg bg-gradient-to-r ${item.color} text-white shadow-sm  transition-all duration-300`}
  //           >
  //             <IconComponent className='h-4 w-4' />
  //           </div>

  //           {/* Label */}
  //           <span className='font-sans tracking-wide text-gray-100'>
  //             {item.label}
  //           </span>
  //         </Link>
  //       );
  //     })}
  //   </div>
  // );

  const navItems = [
    {
      href: "/",
      icon: FaHome,
      label: "Home",
      description: "Go to main page",
    },
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
              group relative flex items-center gap-3 px-5 py-2.5 
              rounded-full transition-all duration-200 ease-out
              hover:bg-teal-700/80 focus:outline-none 
              focus:ring-2 focus:ring-white/50 focus:bg-teal-700/80
              text-white/90 hover:text-white
              border border-white/10 hover:border-white/20
              backdrop-blur-sm
            '
            title={item.description}
            aria-label={`${item.label} - ${item.description}`}
          >
            {/* Minimalist icon */}
            <IconComponent
              className='h-4 w-4 opacity-80 group-hover:opacity-100 transition-opacity duration-200'
              aria-hidden='true'
            />

            {/* Clean label */}
            <span
              className='
              font-medium text-sm tracking-wide 
              opacity-90 group-hover:opacity-100 
              transition-opacity duration-200
              whitespace-nowrap
            '
            >
              {item.label}
            </span>

            {/* Subtle active indicator */}
            <div
              className='
              absolute bottom-0 left-1/2 transform -translate-x-1/2
              w-0 h-0.5 bg-white/60 rounded-full
              group-hover:w-3/4 transition-all duration-200
            '
            />
          </Link>
        );
      })}
    </nav>
  );
}

export default Links;
