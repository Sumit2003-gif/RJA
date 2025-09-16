import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const linkClass = "block px-4 py-2 text-gray-800 hover:text-blue-500 transition duration-200";
  const activeClass = "text-blue-500 font-semibold";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`w-full fixed top-0 left-0 z-50 transition-shadow duration-300 ${
        scrolled ? "shadow-md" : "shadow-sm"
      } bg-white`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo + Company Info */}
        <motion.div
          className="flex items-center space-x-3"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <img
            src="https://carajput.com/common-assets/images/logo-rja.png"
            alt="Logo"
            className="w-12 h-12 object-contain"
          />
          <div className="text-sm leading-tight">
            <h1 className="font-bold text-gray-800">Rajput Jain & Associates</h1>
            <p className="text-gray-600 text-xs">Chartered Accountants</p>
            <p className="text-gray-500 text-xs">An ISO 9001:2008 Certified Firm</p>
          </div>
        </motion.div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 font-medium">
          {["/", "/about", "/blogs", "/contact"].map((path, idx) => {
            const labels = ["Home", "About", "Blog", "Contact"];
            return (
              <li key={path}>
                <NavLink
                  to={path}
                  end={path === "/"}
                  className={({ isActive }) => (isActive ? activeClass : linkClass)}
                >
                  {labels[idx]}
                </NavLink>
              </li>
            );
          })}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-800 hover:text-blue-500 transition"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white shadow-md"
          >
            <ul className="flex flex-col space-y-2 py-4 font-medium">
              {["/", "/about", "/blogs", "/contact"].map((path, idx) => {
                const labels = ["Home", "About", "Blog", "Contact"];
                return (
                  <li key={path}>
                    <NavLink
                      to={path}
                      end={path === "/"}
                      className={({ isActive }) => (isActive ? activeClass : linkClass)}
                      onClick={() => setIsOpen(false)}
                    >
                      {labels[idx]}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
