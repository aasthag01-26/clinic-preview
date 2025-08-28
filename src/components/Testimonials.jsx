export default function Testimonials() {
  return (
    <section className="bg-white py-12 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-10 sm:mb-12">
          What Our Clients Say
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Testimonial Cards */}
          {[
            {
              text: "Rupayna Skincare completely transformed my skin. The staff is so caring and professional!",
              rating: "⭐⭐⭐⭐⭐",
              author: "— Aditi, New Delhi",
            },
            {
              text: "I had laser hair reduction and the results are amazing. Highly recommend this clinic!",
              rating: "⭐⭐⭐⭐⭐",
              author: "— Neha, Gurgaon",
            },
            {
              text: "The chemical peel treatment was gentle yet effective. My skin feels so fresh!",
              rating: "⭐⭐⭐⭐☆",
              author: "— Riya, Noida",
            },
          ].map((t, i) => (
            <div
              key={i}
              className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition"
            >
              <blockquote className="text-gray-600 italic">{t.text}</blockquote>
              <div className="mt-4">{t.rating}</div>
              <h4 className="font-semibold text-gray-700 mt-2">{t.author}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
