import { Phone, Mail, MapPin, Facebook, Instagram, MessageCircle } from "lucide-react";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-16">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        
        {/* Left - Brand */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-2">Rupayna Skincare</h2>
          <p className="text-gray-400">
            Providing trusted skincare and aesthetics with care & innovation.
          </p>
        </div>

        {/* Center - Contact */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Contact</h3>
          <p className="flex items-center gap-2">
            <Phone size={18} /> +919205661676
          </p>
          <p className="flex items-center gap-2">
            <Mail size={18} /> tanyagoyal18404@gmail.com
          </p>
          <p className="flex items-center gap-2">
            <MapPin size={18} /> New Delhi, India
          </p>
        </div>

        {/* Right - Social */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Follow Us</h3>
          <div className="flex gap-4">
            {/* <a href="#" className="hover:text-blue-400 flex items-center gap-2">
              <Facebook size={18} /> Facebook
            </a> */}
            <a href="https://www.instagram.com/purelyrupayna?igsh=bGYxcm1wZDNtdXRl" className="hover:text-blue-400 flex items-center gap-2">
              <Instagram size={18} /> Instagram
            </a>
            <a
  href="https://wa.me/919205661676"
  target="_blank"
  rel="noopener noreferrer"
  className="hover:text-blue-400 flex items-center gap-2"
>
  <MessageCircle size={18} /> WhatsApp
</a>

          </div>
        </div>
      </div>

      <div className="text-center text-gray-500 mt-8 border-t border-gray-700 pt-6">
        © 2025 Rupayna Skincare. All rights reserved.
      </div>
    </footer>
  );
}
