import { Phone, Mail, MapPin, Instagram, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-12 sm:mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        
        {/* Brand */}
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
            Rupayna Skincare
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            Providing trusted skincare and aesthetics with care & innovation.
          </p>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Contact</h3>
          <p className="flex items-center justify-center md:justify-start gap-2">
            <Phone size={18} /> +91 9205661676
          </p>
          <p className="flex items-center justify-center md:justify-start gap-2">
            <Mail size={18} /> tanyagoyal18404@gmail.com
          </p>
          <p className="flex items-center justify-center md:justify-start gap-2">
            <MapPin size={18} /> New Delhi, India
          </p>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Follow Us</h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="https://www.instagram.com/purelyrupayna"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-400 flex items-center gap-2"
            >
              <Instagram size={18} /> Instagram
            </a>
            <a
              href="https://wa.me/919205661676"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-400 flex items-center gap-2"
            >
              <MessageCircle size={18} /> WhatsApp
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-gray-500 mt-8 border-t border-gray-700 pt-6 text-sm">
        © 2025 Rupayna Skincare. All rights reserved.
      </div>
    </footer>
  );
}
