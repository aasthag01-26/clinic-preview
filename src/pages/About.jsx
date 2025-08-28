// src/pages/About.jsx
export default function About() {
  return (
    <section id="about" className="bg-[#FFF5EF] py-12 md:py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* About Us */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
            About Us
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed">
            At <span className="font-semibold">Rupayna Skincare</span>, we believe in redefining skincare 
            with science-backed treatments, natural care, and modern dermatology solutions. 
            Our mission is to provide accessible, trustworthy, and effective skincare for everyone.
          </p>
        </div>

        {/* Founder Section */}
        <div
          id="founder"
          className="grid md:grid-cols-2 gap-10 items-center bg-white shadow-md rounded-2xl p-8"
        >
          {/* Founder Image */}
          <div className="flex justify-center">
            <img
              src="https://via.placeholder.com/350"
              alt="Shruti Sharma"
              className="rounded-2xl shadow-lg w-72 md:w-80 h-auto object-cover"
            />
          </div>

          {/* Founder Message */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Meet Our Founder
            </h2>
            <h3 className="text-lg md:text-xl font-semibold text-gray-700 mb-2">
              Shruti Sharma
            </h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Shruti Sharma founded{" "}
              <span className="font-semibold text-pink-600">Rupayna Skincare</span> 
              with a vision to bring safe, natural, and effective skincare solutions to everyone. 
              Her mission is to blend the goodness of traditional remedies with modern science, 
              offering products that truly care for your skin.
            </p>
            <p className="text-gray-600 leading-relaxed">
              She believes beauty is about confidence, self-care, and 
              staying true to who you are — and Rupayna Skincare is her way 
              of sharing that belief with the world.
            </p>
          </div>
        </div>

        {/* Doctors Section */}
        <div className="text-center mt-12">
          <h3 className="text-xl md:text-2xl font-semibold text-gray-800">
            Our Specialists
          </h3>
          <p className="text-gray-700 mt-2">Dr. Kanchan Suthar & Team</p>
        </div>
      </div>
    </section>
  );
}
