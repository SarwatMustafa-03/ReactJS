import { useContext, useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import { BsSun, BsMoon } from "react-icons/bs";
import { ThemeContext } from "../context/theme-context";
import { NavLink } from "react-router-dom";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { toggleTheme, theme } = useContext(ThemeContext);
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
        { name: "Projects", path: "/projects" },

    { name: "Skills", path: "/skills" },
    { name: "Experience", path: "/experience" },
  
    { name: "Contact", path: "/contact" },
  ];

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      // Prevent scrolling
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.top = `-${window.scrollY}px`;
      document.body.style.width = "100%";
    } else {
      // Restore scrolling
      const scrollY = document.body.style.top;
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || "0") * -1);
      }
    }

    // Cleanup function to restore scroll on component unmount
    return () => {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
    };
  }, [isOpen]);

  // Theme-based styles - using direct theme comparison
  const isDark = theme === "dark";

  const logoStyles = isDark
    ? "bg-gradient-to-r from-[#6b6b6b] to-[#d3d3d3] bg-clip-text text-transparent"
    : "bg-gradient-to-r from-gray-900 to-black bg-clip-text text-transparent";

  const textStyles = isDark ? "text-gray-300" : "text-gray-800";
  const hoverTextStyles = isDark ? "hover:text-white" : "hover:text-black";
  const underlineStyles = isDark ? "after:bg-white" : "after:bg-black";

  return (
    <div>
      <nav
        className="fixed top-0 left-0 w-full z-50 transition-all duration-300"
        style={{
          backgroundColor:
            theme === "dark"
              ? "rgba(0, 0, 0, 0.3)"
              : "rgba(255, 255, 255, 0.95)",
          backdropFilter: "blur(12px)",
          borderBottom:
            theme === "dark"
              ? "1px solid rgba(255, 255, 255, 0.1)"
              : "1px solid rgba(0, 0, 0, 0.1)",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <h1
            className={`text-2xl font-bold cursor-pointer transition-all duration-300 ${logoStyles}`}
          >
            Portfolio
          </h1>

          {/* Desktop Menu */}
          <ul
            className={`hidden md:flex space-x-8 font-medium items-center ${textStyles}`}
          >
            {navLinks.map((link) => (
              <li
                key={link.name}
                className={`${hoverTextStyles} relative after:block after:h-[2px] after:w-0 ${underlineStyles} after:transition-all after:duration-300 hover:after:w-full transition-colors duration-300`}
              >
                <NavLink  to={link.path} className="py-2 px-1 block">
                  {link.name}
                </NavLink>
              </li>
            ))}


            {/* Theme Toggle Button */}
            <li>
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-full transition-all duration-300 ${isDark
                    ? "bg-gray-800 hover:bg-gray-700 text-yellow-400 hover:text-yellow-300"
                    : "bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-gray-700"
                  }`}
                aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
              >
                {isDark ? <BsSun size={18} /> : <BsMoon size={18} />}
              </button>
            </li>
          </ul>

          {/* Mobile Hamburger Button */}
          <button
            className={`md:hidden transition-colors duration-300 ${textStyles} ${hoverTextStyles}`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? (
              <RxCross1 size={28} className="cursor-pointer" />
            ) : (
              <GiHamburgerMenu size={28} className="cursor-pointer" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${isOpen
              ? "max-h-full opacity-100"
              : "max-h-0 opacity-0 overflow-hidden"
            }`}
        >
          <div
            style={{
              backgroundColor:
                theme === "dark" ? "rgba(0, 0, 0, 0.8)" : "#F3F3F4",
              backdropFilter: "blur(12px)",
              borderTop:
                theme === "dark"
                  ? "1px solid rgba(255, 255, 255, 0.1)"
                  : "1px solid rgba(0, 0, 0, 0.1)",
            }}
          >
            <ul
              className={`flex flex-col items-center py-6 space-y-6 font-medium ${textStyles}`}
            >
{navLinks.map((link) => (
  <li
    key={link.name}
    className={`${hoverTextStyles} relative after:block after:h-[2px] after:w-0 ${underlineStyles} after:transition-all after:duration-300 hover:after:w-full transition-colors duration-300`}
  >
    <NavLink
      to={link.path}
      onClick={() => setIsOpen(false)}
      className="py-2 px-4 block"
    >
      {link.name}
    </NavLink>
  </li>
))}

              {/* Mobile Theme Toggle */}
              <li
                className={`pt-4 border-t w-full flex justify-center ${isDark ? "border-white/20" : "border-gray-300/30"
                  }`}
              >
                <button
                  onClick={() => {
                    toggleTheme();
                    setIsOpen(false);
                  }}
                  className={`flex items-center space-x-2 p-3 rounded-full transition-all duration-300 ${isDark
                      ? "bg-gray-800 hover:bg-gray-700 text-yellow-400 hover:text-yellow-300"
                      : "bg-gray-100 hover:bg-gray-200 text-orange-600 hover:text-orange-700"
                    }`}
                  aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
                >
                  {isDark ? <BsSun size={18} /> : <BsMoon size={18} />}
                  <span className="text-sm font-medium">
                    {isDark ? "Light Mode" : "Dark Mode"}
                  </span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
