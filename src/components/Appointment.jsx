export default function Popup() {
  return (
    <div className="space-y-8">
      {/* Video Popup */}
      <div className="bg-white border border-gray-300 rounded-xl p-6 mb-8 max-w-xl shadow-md mx-auto">
        <h3 className="text-xl font-semibold border-b border-gray-200 pb-2 mb-4">
          Video Popup
        </h3>
        <div className="relative pt-[56.25%]">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            title="Best Acne Results of Glow Shine"
            src="https://www.youtube.com/embed/z8-1tgeoyeM"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>

      {/* Book Appointment Form */}
      <div className="bg-white border border-gray-300 rounded-xl p-6 mb-8 max-w-xl shadow-md mx-auto">
        <h3 className="text-xl font-semibold border-b border-gray-200 pb-2 mb-4">
          Book An Appointment
        </h3>
        <form className="space-y-4">
          <input
            type="text"
            name="your-name"
            placeholder="Name"
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:outline-none"
          />

          <input
            type="email"
            name="your-email"
            placeholder="Email"
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:outline-none"
          />

          <input
            type="tel"
            name="your-phone"
            placeholder="Phone Number"
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:outline-none"
          />

          <textarea
            name="your-message"
            placeholder="Write Your Message (Optional)"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:outline-none"
          />

          <button
            type="submit"
            className="w-full bg-red-600 text-white py-3 px-6 rounded-lg font-bold cursor-pointer hover:bg-red-700 transition"
          >
            Request Callback
          </button>
        </form>
      </div>
    </div>
  );
}
