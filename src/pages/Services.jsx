// src/pages/Services.jsx
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import servicesData from "../data/servicesData";
import BookingModal from "../components/BookingModal";

export default function Services() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const initialConcern = params.get("concern");

  const [activeCategory, setActiveCategory] = useState(
    initialConcern || servicesData.categories[0].category
  );
  const [selectedService, setSelectedService] = useState(null); // now an object
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (initialConcern) {
      setActiveCategory(initialConcern);
    }
  }, [initialConcern]);

  const currentCategory = servicesData.categories.find(
    (c) => c.category === activeCategory
  );

  return (
    <section className="py-16 bg-[#FFF5EF]">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Our Services</h2>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-4 justify-center mb-10">
          {servicesData.categories.map((cat, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(cat.category)}
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                activeCategory === cat.category
                  ? "bg-black text-white"
                  : "bg-white border border-gray-300 hover:bg-gray-100"
              }`}
            >
              {cat.category}
            </button>
          ))}
        </div>

        {/* Category Content */}
        {currentCategory && (
          <div>
            <h3 className="text-2xl font-semibold text-center mb-4">
              {currentCategory.category}
            </h3>
            <p className="text-center text-gray-700 mb-8">
              {currentCategory.about}
            </p>

            <div className="grid gap-6 md:grid-cols-2">
              {currentCategory.services.map((s) => (
                <div
                  key={s.id ?? s.name}
                  className="p-6 rounded-2xl bg-white shadow-sm border hover:shadow-md transition"
                >
                  <img
                    src={s.image}
                    alt={s.name}
                    className="w-full h-40 object-cover rounded-lg mb-4"
                    onError={(e) => (e.target.style.display = "none")}
                  />
                  <h4 className="text-lg font-semibold">{s.name}</h4>
                  <p className="text-gray-600 mt-2">{s.price}</p>
                  <p className="text-gray-500 text-sm mt-2">{s.description}</p>

                  <button
                    onClick={() => {
                      // pass whole service object + category so modal can show price etc
                      setSelectedService({ ...s, category: currentCategory.category });
                      setIsModalOpen(true);
                    }}
                    className="mt-4 px-4 py-2 bg-black text-white rounded-xl hover:bg-gray-800"
                  >
                    Enquire
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Booking Modal */}
      {isModalOpen && selectedService && (
        <BookingModal
          isOpen={isModalOpen}
          onClose={() => {
            setIsModalOpen(false);
            setSelectedService(null);
          }}
          prefillService={selectedService}
        />
      )}
    </section>
  );
}
