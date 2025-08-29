import { Link } from "react-router-dom";

export default function Hero({ onOpenBooking }) {
  return (
    <section className="relative overflow-hidden bg-[#F5F5F5]">
      <div className="max-w-6xl mx-auto px-6 pt-32 pb-12 grid md:grid-cols-2 gap-10 items-center">
        
        {/* LEFT: Text */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">
            Achieve Flawless Skin, <br /> Backed by Science
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Your journey to radiant confidence starts here.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-4">
            <button
              onClick={() => onOpenBooking("General Enquiry")}
              className="bg-brand-teal hover:bg-teal-600 text-white px-6 py-3 rounded-lg shadow-md transition-colors duration-300 font-medium"
            >
              Book Appointment
            </button>

            <Link
              to="/services"
              className="border border-gray-800 text-gray-800 px-6 py-3 rounded-lg shadow-md transition-colors duration-300 font-medium hover:bg-gray-800 hover:text-white"
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
            className="w-full h-64 sm:h-80 md:h-96 object-cover rounded-xl shadow-lg border border-gray-200"
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
}
