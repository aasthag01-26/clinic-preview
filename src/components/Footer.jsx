import { Phone, Mail, MapPin, Facebook, Instagram, MessageCircle } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Glowshine Clinic</h3>
          <p>Providing trusted dental care for over 15 years.</p>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
          <ul className="space-y-2">
            <li><a href="tel:+919876543210" className="flex items-center gap-2 hover:text-white"><Phone size={18}/> +91 98765 43210</a></li>
            <li><a href="mailto:info@glowshine.com" className="flex items-center gap-2 hover:text-white"><Mail size={18}/> info@glowshine.com</a></li>
            <li><a href="https://maps.google.com" target="_blank" className="flex items-center gap-2 hover:text-white"><MapPin size={18}/> New Delhi, India</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Follow Us</h4>
          <div className="flex gap-4">
            <a href="#" target="_blank" className="hover:text-white"><Facebook /></a>
            <a href="#" target="_blank" className="hover:text-white"><Instagram /></a>
            <a href="#" target="_blank" className="hover:text-white"><MessageCircle /></a>
          </div>
        </div>
      </div>

      <div className="text-center text-gray-500 mt-8">
        © {new Date().getFullYear()} Glowshine Clinic. All rights reserved.
      </div>
    </footer>
  )
}
