import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar({ onOpenBooking }) {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/services", label: "Services" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-brand-600">Clinic</Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`hover:text-brand-600 transition ${
                location.pathname === link.path
                  ? "text-brand-600 font-semibold"
                  : "text-gray-700"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <button
            onClick={onOpenBooking}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 shadow-md"
          >
            Book Appointment
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {open && (
        <div className="md:hidden bg-white shadow-lg">
          <nav className="flex flex-col gap-4 p-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setOpen(false)}
                className={`text-left ${
                  location.pathname === link.path
                    ? "text-brand-600 font-semibold"
                    : "text-gray-700"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <button
              onClick={() => {
                onOpenBooking();
                setOpen(false);
              }}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full shadow-md"
            >
              Book Appointment
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
