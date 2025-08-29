import { useNavigate } from "react-router-dom";

const categories = [
  { name: "Advanced Facials", image: "/treatments/CarbonFacial.png" },
  { name: "Skin Rejuvenation & Polishing", image: "/treatments/skinrejuvenation.png" },
  { name: "Laser Hair Reduction", image: "/treatments/laser.png" },
  { name: "Body Contouring", image: "/treatments/bodyslimming.png" },
  { name: "Injectable Treatments", image: "public/treatments/injectabletreatment.png" },
  { name: "Chemical Peels", image: "/treatments/ChemicalPeels.png" },
];

export default function ExploreTreatments() {
  const navigate = useNavigate();

  const handleClick = (category) => {
    navigate(`/services?concern=${encodeURIComponent(category)}`);
  };

  return (
    <section className="py-12 bg-[#FFF5EF]">
      <h2 className="text-3xl font-bold text-center mb-8">Explore Our Treatments</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {categories.map((c, i) => (
          <div
            key={i}
            className="relative cursor-pointer rounded-2xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105"
            onClick={() => handleClick(c.name)}
          >
            <img
              src={c.image}
              alt={c.name}
              className="w-full h-56 object-cover transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <span className="text-white text-xl font-semibold">{c.name}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
