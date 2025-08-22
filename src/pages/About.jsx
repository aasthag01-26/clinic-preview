export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="card">
          <h2 className="text-3xl font-bold text-brand-700">About Us</h2>
          <p className="mt-3 text-gray-700">
            Led by <strong>Dr. Kanchan Suthar (MD, PGDCC)</strong>, Glowshine offers
            advanced skin, hair and laser treatments with a compassionate,
            patient-first approach. We blend cutting-edge technology with
            Ayurveda-inspired wellness for safe, long-lasting results.
          </p>
          <ul className="mt-4 grid md:grid-cols-2 gap-3 list-disc pl-6 text-gray-700">
            <li>Acne & pigmentation solutions</li>
            <li>Anti-aging, Botox & fillers</li>
            <li>PRP/GFC for hair restoration</li>
            <li>Laser hair removal & tattoo removal</li>
            <li>Ayurveda therapies and detox</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
