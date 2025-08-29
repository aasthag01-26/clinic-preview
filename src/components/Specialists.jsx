export default function Specialists() {
  return (
    <section className="bg-gray-50 py-12 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-brand-dark mb-10 sm:mb-12">
          Meet Our <span className="text-brand-pink">Specialists</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {/* Doctor Card */}
          {[
            {
              img: "/doctor/doctor.jpg",
              name: "Dr. Shailesh Kumar",
              role: "Facial Aesthetic Surgeon | FAM PMU (USA)",
              desc: "Highly skilled in advanced cosmetic and minimally invasive facial procedures.",
            },
            {
              img: "/doctor/doctorkanchan.jpg",
              name: "Dr. Kanchan Suthar",
              role: "Dermatologist | Aesthetic Specialist",
              desc: "Expert in skin health, rejuvenation, and advanced aesthetics.",
            },
          ].map((doc, i) => (
            <div
              key={i}
              className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition"
            >
              <img
                src={doc.img}
                alt={doc.name}
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-lg sm:text-xl font-semibold text-brand-dark">
                {doc.name}
              </h3>
              <p className="text-brand-pink font-medium">{doc.role}</p>
              <p className="mt-3 text-gray-600 text-sm">{doc.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
