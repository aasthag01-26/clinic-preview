import { Phone, Mail, MapPin, Instagram, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-gray-300 py-12 mt-12 sm:mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
        
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-3">
            Rupayna Skincare
          </h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            Providing trusted skincare and aesthetics with <span className="text-brand-pink font-medium">care</span> & <span className="text-brand-teal font-medium">innovation</span>.
          </p>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-brand-teal mb-4">Contact</h3>
          <p className="flex items-center justify-center md:justify-start gap-2 hover:text-brand-pink transition">
            <Phone size={18} /> +91 7378626348
          </p>
          <p className="flex items-center justify-center md:justify-start gap-2 hover:text-brand-pink transition">
            <Mail size={18} /> mohdamanat02@gmail.com
          </p>
          <p className="flex items-center justify-center md:justify-start gap-2 hover:text-brand-pink transition">
            <MapPin size={18} /> New Delhi, India
          </p>
          <p className="flex items-center justify-center md:justify-start gap-2 hover:text-brand-pink transition">
            <MapPin size={18} /> Mumbai, India
          </p>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-lg font-semibold text-brand-teal mb-4">Follow Us</h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="https://www.instagram.com/purelyrupayna"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brand-pink flex items-center gap-2 transition"
            >
              <Instagram size={18} /> Instagram
            </a>
            <a
              href="https://wa.me/917378626348"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brand-teal flex items-center gap-2 transition"
            >
              <MessageCircle size={18} /> WhatsApp
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-gray-500 mt-10 border-t border-gray-700 pt-6 text-sm">
        © 2025 Rupayna Skincare. <span className="text-gray-400">All rights reserved.</span>
      </div>
    </footer>
  );
}
