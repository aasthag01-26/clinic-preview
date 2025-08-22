const SERVICES = [
  { title: 'Skin Treatments', desc: 'Acne, scars, melasma, dark circles, anti-aging, peels', icon: '💠' },
  { title: 'Hair Solutions', desc: 'PRP/GFC, exosomes, dandruff & hair fall control', icon: '💇‍♀️' },
  { title: 'Laser Therapy', desc: 'Laser hair removal, Q-switch toning, tattoo removal', icon: '⚡' },
  { title: 'IV Therapy', desc: 'Skin boosters, Glutathione glow, wellness drips', icon: '💧' },
  { title: 'Ayurveda & Wellness', desc: 'Shirodhara, Kati/Janu Basti, Padabhyanga, Nasya', icon: '🌿' },
  { title: 'Surgical Care', desc: 'Mole/cyst/wart removal, ear lobe repair', icon: '🩺' },
];

export default function Services() {
  return (
    <section id="services" className="section">
      <div className="container">
        <h2 className="text-3xl font-bold text-brand-700 mb-6">Our Services</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s) => (
            <div key={s.title} className="card hover:shadow-lg transition">
              <div className="text-3xl">{s.icon}</div>
              <h3 className="mt-3 text-xl font-semibold text-brand-700">{s.title}</h3>
              <p className="mt-1 text-gray-600">{s.desc}</p>
              <a href="#contact" className="mt-4 inline-block text-brand-700 font-medium">Enquire →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
