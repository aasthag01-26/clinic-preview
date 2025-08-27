// src/pages/Services.jsx
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import servicesData from "../data/servicesData";
import ServiceDetails from "../components/ServiceDetails";

export default function Services({ onOpenBooking }) {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const initialConcern = params.get("concern");

  const [activeCategory, setActiveCategory] = useState(
    initialConcern || servicesData.categories[0]?.category
  );
  const [detailService, setDetailService] = useState(null);

  // Update activeCategory if URL has ?concern=...
  useEffect(() => {
    if (initialConcern) setActiveCategory(initialConcern);
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
            <h3 className="text-2xl font-semibold text-center mb-2">
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
                  {s.image && (
                    <img
                      src={s.image}
                      alt={s.name}
                      className="w-full h-40 object-cover rounded-lg mb-4"
                      onError={(e) => (e.currentTarget.style.display = "none")}
                    />
                  )}

                  <h4 className="text-lg font-semibold">{s.name}</h4>
                  {s.price && (
                    <p className="text-gray-600 mt-2">₹{s.price}</p>
                  )}
                  {s.description && (
                    <p className="text-gray-500 text-sm mt-2 line-clamp-3">
                      {s.description}
                    </p>
                  )}

                  <div className="flex gap-3 mt-4">
                    {/* WhatsApp / Email / Booking button */}
                    <button
                      onClick={() =>
                        onOpenBooking({
                          label: s.name,
                          price: s.price,
                          category: currentCategory.category,
                          id: s.id,
                        })
                      }
                      className="px-4 py-2 bg-black text-white rounded-xl hover:bg-gray-800"
                    >
                      Enquire
                    </button>

                    <button
                      onClick={() => setDetailService(s)}
                      className="px-4 py-2 border rounded-xl hover:bg-gray-100"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Service Details Modal */}
      {detailService && (
        <ServiceDetails
          service={detailService}
          onClose={() => setDetailService(null)}
          onBook={(svc) => {
            setDetailService(null);
            onOpenBooking({
              label: svc.name,
              price: svc.price,
              category: activeCategory,
              id: svc.id,
            });
          }}
        />
      )}
    </section>
  );
}
