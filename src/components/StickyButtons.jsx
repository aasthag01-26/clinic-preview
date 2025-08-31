import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { Phone, MessageCircle } from "lucide-react";

export default function StickyButtons() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 flex flex-col items-end gap-3 z-50">
      {isOpen && (
        <div className="flex flex-col gap-3 mb-2">
          <a
            href="https://wa.me/919211315446"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 hover:bg-green-700 text-white p-3 sm:p-4 rounded-full shadow-lg flex items-center justify-center transition-transform hover:scale-110"
          >
            <FaWhatsapp size={20} />
          </a>
          <a
            href="tel:+919211315446"
            className="bg-teal-600 hover:bg-teal-700 text-white p-3 sm:p-4 rounded-full shadow-lg flex items-center justify-center transition-transform hover:scale-110"
          >
            <Phone className="w-5 h-5" />
          </a>
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Contact Options"
        className="bg-blue-600 hover:bg-blue-700 text-white p-4 sm:p-5 rounded-full shadow-lg flex items-center justify-center transition-transform hover:scale-110"
      >
        <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>
    </div>
  );
}
