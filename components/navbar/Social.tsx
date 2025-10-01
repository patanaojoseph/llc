import { FaFacebookSquare, FaLinkedin, FaTelegram } from "react-icons/fa";
import { FaSquareThreads } from "react-icons/fa6";

function Social() {
  const socialLinks = [
    {
      href: "https://facebook.com/yourpage",
      icon: FaFacebookSquare,
      label: "Facebook",
      ariaLabel: "Visit our Facebook page",
      color:
        "hover:bg-blue-500/20 hover:border-blue-400/30 hover:text-blue-300",
      glowColor: "group-hover:shadow-blue-400/20",
    },
    {
      href: "https://www.threads.com/",
      icon: FaSquareThreads,
      label: "Threads",
      ariaLabel: "Follow us on Threads",
      color: "hover:bg-sky-500/20 hover:border-sky-400/30 hover:text-sky-300",
      glowColor: "group-hover:shadow-sky-400/20",
    },
    {
      href: "https://linkedin.com/company/yourcompany",
      icon: FaLinkedin,
      label: "LinkedIn",
      ariaLabel: "Connect with us on LinkedIn",
      color:
        "hover:bg-blue-600/20 hover:border-blue-500/30 hover:text-blue-300",
      glowColor: "group-hover:shadow-blue-500/20",
    },
    {
      href: "https://t.me/yourchannel",
      icon: FaTelegram,
      label: "Telegram",
      ariaLabel: "Join our Telegram channel",
      color:
        "hover:bg-cyan-500/20 hover:border-cyan-400/30 hover:text-cyan-300",
      glowColor: "group-hover:shadow-cyan-400/20",
    },
  ];

  return (
    <div className='flex flex-col lg:items-end items-center gap-2 text-gray-600'>
      <div className='flex items-center gap-2'>
        <div className='w-8 h-px bg-gradient-to-r from-transparent to-gray-600 hidden lg:block' />
        <span className='text-xs font-medium text-gray-600 tracking-wider uppercase'>
          Connect With Us
        </span>
        <div className='w-8 h-px bg-gradient-to-l from-transparent to-gray-600 lg:hidden' />
      </div>
      {/* Enhanced Social Links */}
      <div className='flex items-center gap-2'>
        {socialLinks.map((social, index) => {
          const IconComponent = social.icon;
          return (
            <a
              key={social.label}
              href={social.href}
              className={`
                group relative p-2 rounded-xl 
                bg-white/5 border border-white/10
                hover:bg-white/10 hover:border-white/20
                ${social.color}
                transition-all duration-300 ease-out
                focus:outline-none focus:ring-2 focus:ring-white/40
                focus:ring-offset-2 focus:ring-offset-teal-800
                backdrop-blur-sm hover:scale-110 active:scale-95
                hover:-translate-y-1
              `}
              title={`Follow us on ${social.label}`}
              aria-label={social.ariaLabel}
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <IconComponent
                className='
                  h-3 w-3 text-gray-500 
                  group-hover:text-teal-700/80 group-hover:scale-110
                  transition-all duration-300
                '
              />

              {/* Enhanced glow effect */}
              <div
                className={`
                  absolute inset-0 rounded-xl
                  group-hover:shadow-lg ${social.glowColor}
                  transition-all duration-300
                `}
              />

              {/* Ripple effect on hover */}
              <div
                className='
                  absolute inset-0 rounded-xl border border-transparent
                  group-hover:animate-pulse group-hover:border-white/20
                  transition-all duration-300
                '
              />
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default Social;
