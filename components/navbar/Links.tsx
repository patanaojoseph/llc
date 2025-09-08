import Link from "next/link";
import { FaHome, FaHeart, FaUsers, FaPhoneAlt } from "react-icons/fa";
import { MdElderly, MdHealthAndSafety } from "react-icons/md";

function Links() {
  const navItems = [
    {
      href: "/",
      icon: FaHome,
      label: "Home",
      color: "from-blue-500 to-blue-600",
    },
    {
      href: "/services",
      icon: MdHealthAndSafety,
      label: "Services",
      color: "from-emerald-500 to-emerald-600",
    },
    {
      href: "/about",
      icon: FaUsers,
      label: "About",
      color: "from-indigo-500 to-indigo-600",
    },
    {
      href: "/contact",
      icon: FaPhoneAlt,
      label: "Contact",
      color: "from-rose-500 to-rose-600",
    },
  ];

  return (
    <div className='flex flex-wrap justify-center lg:justify-end gap-4 text-sm'>
      {navItems.map((item) => {
        const IconComponent = item.icon;
        return (
          <Link
            key={item.href}
            href={item.href}
            className='group relative flex items-center gap-2 px-4 rounded-xl '
          >
            {/* Icon container with gradient */}
            <div
              className={`p-2 rounded-lg bg-gradient-to-r ${item.color} text-white shadow-sm  transition-all duration-300`}
            >
              <IconComponent className='h-4 w-4' />
            </div>

            {/* Label */}
            <span className='font-sans tracking-wide text-gray-100'>
              {item.label}
            </span>
          </Link>
        );
      })}
    </div>
  );
}

export default Links;
