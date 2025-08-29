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
    <nav className="fixed top-0 left-0 w-full bg-[#4A4A4A] shadow-md z-50">
      <div className="flex justify-between items-center px-8 py-4 text-white">
        
        {/* ✅ Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img
            src="/logorupayna.png"
            alt="Rupayna Logo"
            className="h-[80px] w-auto object-contain"
          />
        </Link>

        {/* ✅ Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`px-4 py-2 rounded-md transition-colors duration-300 ${
                location.pathname === item.path
                  ? "text-brand-pink font-semibold bg-white/10"
                  : "text-white"
              } hover:text-brand-teal`}
            >
              {item.label}
            </Link>
          ))}
          <button
            onClick={() => onOpenBooking("General Enquiry")}
            className="px-6 py-3 bg-brand-pink text-white rounded-lg shadow-md hover:bg-rose-600 transition-colors duration-300 font-medium"
          >
            Book Now
          </button>
        </div>

        {/* ✅ Mobile Hamburger */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-gray-800 transition-colors duration-300 text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* ✅ Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black shadow-lg">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setMenuOpen(false)}
              className={`block px-6 py-4 border-b border-gray-700 transition-colors duration-300 ${
                location.pathname === item.path
                  ? "text-brand-pink font-semibold bg-white/10"
                  : "text-white"
              } hover:bg-gray-900`}
            >
              {item.label}
            </Link>
          ))}
          <button
            onClick={() => {
              onOpenBooking("General Enquiry");
              setMenuOpen(false);
            }}
            className="w-full px-6 py-4 bg-brand-pink text-white text-left hover:bg-rose-600 transition-colors duration-300 font-medium"
          >
            Book Now
          </button>
        </div>
      )}
    </nav>
  );
}
