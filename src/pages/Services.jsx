// src/pages/Services.jsx
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import servicesData from "../data/servicesData";
import ServiceCard from "../components/ServiceCard";

export default function Services({ onOpenBooking }) {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const initialConcern = params.get("concern");

  // Access categories properly
  const categories = servicesData.categories || [];

  const [activeCategory, setActiveCategory] = useState(
    initialConcern || categories[0]?.category
  );

  useEffect(() => {
    if (initialConcern) setActiveCategory(initialConcern);
  }, [initialConcern]);

  const currentCategory = categories.find(
    (c) => c.category === activeCategory
  );

  return (
    <section className="py-12 sm:py-16 bg-[#FFF5EF]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-10">
          Our Services
        </h2>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 sm:gap-4 justify-center mb-8 sm:mb-10">
          {categories.map((cat, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(cat.category)}
              className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-sm sm:text-base font-medium transition ${
                activeCategory === cat.category
                  ? "bg-black text-white"
                  : "bg-white border border-gray-300 hover:bg-gray-100"
              }`}
            >
              {cat.category}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        {currentCategory && (
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold text-center mb-2">
              {currentCategory.category}
            </h3>
            <p className="text-center text-gray-700 mb-6 sm:mb-8 text-sm sm:text-base">
              {currentCategory.about}
            </p>

            <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
              {currentCategory.services.map((s, i) => (
                <ServiceCard
                  key={s.id ?? s.name ?? i}
                  service={s}
                  category={currentCategory.category}
                  onOpenBooking={onOpenBooking}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
