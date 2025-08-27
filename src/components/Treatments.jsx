// src/components/ExploreTreatments.jsx
import { useNavigate } from "react-router-dom";

const categories = [
  { name: "Advanced Facials", image: "/content/Carbon Facial.png" },
  { name: "Skin Rejuvenation & Polishing", image: "/images/rejuvenation.jpg" },
  { name: "Laser Hair Reduction", image: "/content/laser.png" },
  { name: "Body Contouring", image: "/content/bodyslimming.png" },
  { name: "Injectable Treatments", image: "/content/injectabletreatment.png" },
  { name: "Chemical Peels", image: "/content/Chemical Peels.png" }
];

export default function ExploreTreatments() {
  const navigate = useNavigate();

  const handleClick = (category) => {
    navigate(`/services?category=${encodeURIComponent(category)}`);
  };

  return (
    <section className="py-12 bg-[#FFF5EF]">
      <h2 className="text-3xl font-bold text-center mb-8">Explore Our Treatments</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {categories.map((c, i) => (
          <div
            key={i}
            className="relative cursor-pointer rounded-2xl overflow-hidden shadow-lg"
            onClick={() => handleClick(c.name)}
          >
            <img src={c.image} alt={c.name} className="w-full h-56 object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <span className="text-white text-xl font-semibold">{c.name}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
