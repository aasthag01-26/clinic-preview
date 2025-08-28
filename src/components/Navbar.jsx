import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar({ onOpenBooking }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/services", label: "Services" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-pink-700">
          Rupayna
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-6 items-center">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`transition-colors duration-300 ${
                location.pathname === item.path
                  ? "text-pink-700 font-semibold"
                  : "text-gray-700"
              } hover:text-pink-700`}
            >
              {item.label}
            </Link>
          ))}
          <button
            onClick={() => onOpenBooking("General Enquiry")}
            className="px-4 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors duration-300"
          >
            Book Now
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-300"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setMenuOpen(false)}
              className={`block px-4 py-3 border-b transition-colors duration-300 ${
                location.pathname === item.path
                  ? "text-pink-700 font-semibold"
                  : "text-gray-700"
              } hover:bg-gray-50`}
            >
              {item.label}
            </Link>
          ))}
          <button
            onClick={() => {
              onOpenBooking("General Enquiry");
              setMenuOpen(false);
            }}
            className="w-full px-4 py-3 bg-pink-600 text-white text-left hover:bg-pink-700 transition-colors duration-300"
          >
            Book Now
          </button>
        </div>
      )}
    </nav>
  );
}
