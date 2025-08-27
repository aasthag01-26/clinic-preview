import { FaWhatsapp, FaPhoneAlt, FaUserMd, FaCalendarAlt, FaMicroscope } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Hero({ onOpenBooking }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-[#F5E0D3] to-[#FFF5EF]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
        
        {/* LEFT: Text */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-brand-dark">
            Achieve Flawless Skin, Backed by Science
          </h1>
          <p className="mt-4 text-lg text-gray-700">
            Your journey to radiant confidence starts here.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-4">
            <button
              onClick={onOpenBooking}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow-md"
            >
              Book Appointment
            </button>

            <Link
              to="/services"
              className="bg-gray-200 px-6 py-3 rounded-lg hover:bg-gray-300"
            >
              Explore Treatments
            </Link>

            <a
              href="https://wa.me/917378626348"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg flex items-center gap-2"
            >
              <FaWhatsapp size={20} /> WhatsApp
            </a>

            <a
              href="tel:+917378626348"
              className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg flex items-center gap-2"
            >
              <FaPhoneAlt size={18} /> Call Now
            </a>
          </div>
        </div>

        {/* RIGHT: Video */}
        <div className="p-3 bg-white rounded-xl shadow-lg">
          <video
            src="content/rupanya video.mp4"
            autoPlay
            controls
            loop
            playsInline
            className="w-full h-80 md:h-96 object-cover rounded-xl shadow-xl border border-gray-200"
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      {/* Stats - Honest Trust Bar */}
      <div className="bg-brand-dark text-white mt-12">
        <div className="max-w-6xl mx-auto px-4 py-6 grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/20 text-center">
          
          {/* Combined Expertise */}
          <div className="py-4 sm:py-0">
            <div className="text-4xl mb-2"><FaCalendarAlt /></div>
            <p className="text-2xl font-bold">20+ Yrs</p>
            <p className="opacity-80">Combined Expertise</p>
          </div>
          
          {/* FDA Approved */}
          <div className="py-4 sm:py-0">
            <div className="text-4xl mb-2"><FaMicroscope /></div>
            <p className="text-2xl font-bold">US FDA</p>
            <p className="opacity-80">Approved Technology</p>
          </div>
          
          {/* Certified Doctors */}
          <div className="py-4 sm:py-0">
            <div className="text-4xl mb-2"><FaUserMd /></div>
            <p className="text-2xl font-bold">4</p>
            <p className="opacity-80">Certified Specialists</p>
          </div>
        </div>
      </div>
    </section>
  );
}
