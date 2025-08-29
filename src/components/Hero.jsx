import { FaUserMd, FaCalendarAlt, FaMicroscope } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Hero({ onOpenBooking }) {
  return (
    <section className="relative overflow-hidden bg-[#F5F5F5]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-36 pb-0 grid md:grid-cols-2 gap-10 items-center">
        
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
              onClick={() => onOpenBooking("General Enquiry")}
              aria-label="Book an Appointment"
              className="bg-brand-pink hover:bg-pink-600 text-white px-6 py-3 rounded-lg shadow-md transition-colors duration-300 font-medium"
            >
              Book Appointment
            </button>

            <Link
              to="/services"
              aria-label="Explore Treatments"
              className="border border-brand-teal text-brand-teal px-6 py-3 rounded-lg shadow-md transition-colors duration-300 font-medium hover:bg-brand-teal hover:text-white"
            >
              Explore Treatments
            </Link>
          </div>
        </div>

        {/* RIGHT: Video */}
        <div className="p-3 bg-white rounded-xl shadow-md mt-6 md:mt-8">
          <video
            src="/rupanyavideo.mp4"
            autoPlay
            controls
            loop
            playsInline
            aria-label="Introduction video about Rupayna Clinic"
            className="w-full h-64 sm:h-80 md:h-96 object-cover rounded-xl shadow-lg border border-gray-200"
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="bg-brand-dark text-white mt-12">
        <div className="max-w-6xl mx-auto px-4 py-6 grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/20 text-center">
          
          {/* Combined Expertise */}
          <div className="py-4 sm:py-0">
            <div className="text-4xl mb-2 text-brand-pink"><FaCalendarAlt /></div>
            <p className="text-2xl font-bold">20+ Yrs</p>
            <p className="opacity-80">Combined Expertise</p>
          </div>
          
          {/* FDA Approved */}
          <div className="py-4 sm:py-0">
            <div className="text-4xl mb-2 text-brand-teal"><FaMicroscope /></div>
            <p className="text-2xl font-bold">US FDA</p>
            <p className="opacity-80">Approved Technology</p>
          </div>
          
          {/* Certified Doctors */}
          <div className="py-4 sm:py-0">
            <div className="text-4xl mb-2 text-rose-400"><FaUserMd /></div>
            <p className="text-2xl font-bold">4</p>
            <p className="opacity-80">Certified Specialists</p>
          </div>
        </div>
      </div>
    </section>
  );
}
