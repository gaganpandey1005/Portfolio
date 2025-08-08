import { useState, useEffect } from "react";
import { FaMoon } from "react-icons/fa";
import { GoSun } from "react-icons/go";
import { GiHamburgerMenu } from "react-icons/gi";

import { IoMdClose } from "react-icons/io";
import { useTheme } from "../../Context/ThemeContext";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);
  const isDark = theme === "dark";

  const navItems = [
    { id: "home", label: "Home", href: "#home" },
   
    { id: "projects", label: "Projects", href: "#projects" },
    { id: "tech", label: "Tech Stack", href: "#tech" },
    { id: "education", label: "Education", href: "#education" },
    
  ];

  // Close mobile menu when ESC key is pressed
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", handleEsc);

    // Prevent scrolling when mobile menu is open
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      window.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "auto";
    };
  }, [open]);

  // Handle clicking outside to close menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      const mobileMenu = document.getElementById("mobile-menu");
      if (open && mobileMenu && !mobileMenu.contains(event.target)) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  const handleItemClick = (itemId) => {
    setActive(itemId);
    setOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-4 py-3 ">
      {/* Desktop Navbar */}
      <nav
        className={`hidden md:flex justify-between items-center p-3 rounded-2xl shadow-lg transition-colors ${
          isDark ? "bg-gray-800 text-white" : "bg-white text-gray-800"
        }`}
        aria-label="Main navigation"
      >
        <div className="font-bold text-xl">
          <span className="text-pink-500">Portfolio</span>
        </div>

        <div className="flex items-center gap-6">
          <ul className="flex gap-6 font-medium">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  onClick={() => setActive(item.id)}
                  className={`px-2 py-1 rounded-lg transition-all hover:text-pink-500 ${
                    active === item.id
                      ? "border-b-2 border-pink-500 font-semibold"
                      : ""
                  }`}
                  aria-current={active === item.id ? "page" : undefined}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <button
            onClick={toggleTheme}
            className="p-2  rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
          >
            {isDark ? (
              <GoSun className="text-2xl " />
            ) : (
              <FaMoon className="text-2xl" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div className="md:hidden flex justify-end ml-1">
        <button
          onClick={() => setOpen(!open)}
          className={`p-3 z-50 rounded-full shadow-md ${
            isDark ? "bg-gray-800 text-white" : "bg-white text-gray-800"
          }`}
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          {open ? (
            <IoMdClose className="text-2xl" />
          ) : (
            <GiHamburgerMenu className="text-2xl" />
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity" />
      )}

      {/* Mobile Menu Panel */}
      <div
        id="mobile-menu"
        className={`md:hidden fixed top-0 right-0 h-screen z-40 transition-all duration-300 shadow-xl ${
          open ? "w-3/4 translate-x-0" : "w-3/4 translate-x-full"
        } ${isDark ? "bg-gray-800 text-white" : "bg-white text-gray-800"}`}
      >
        <div className=" flex-col p-6 h-full">
          <div className="flex justify-start mb-8 pt-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label={
                isDark ? "Switch to light mode" : "Switch to dark mode"
              }
            >
              {isDark ? (
                <GoSun className="text-2xl " />
              ) : (
                <FaMoon className="text-2xl" />
              )}
            </button>
          </div>

          <nav aria-label="Mobile navigation">
            <ul className="space-y-6 text-xl">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    onClick={() => handleItemClick(item.id)}
                    className={`block py-2 transition-colors hover:text-pink-500 ${
                      active === item.id ? "text-pink-500 font-semibold" : ""
                    }`}
                    aria-current={active === item.id ? "page" : undefined}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
