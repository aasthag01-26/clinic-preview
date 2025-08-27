// src/components/StickyButtons.jsx
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

export default function StickyButtons() {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/917378626348"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-lg flex items-center justify-center transition-transform hover:scale-110"
      >
        <FaWhatsapp size={24} />
      </a>

      {/* Phone Button */}
      <a
        href="tel:+917378626348"
        className="bg-teal-600 hover:bg-teal-700 text-white p-4 rounded-full shadow-lg flex items-center justify-center transition-transform hover:scale-110"
      >
        <FaPhoneAlt size={22} />
      </a>
    </div>
  );
}
