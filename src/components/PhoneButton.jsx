import { Phone } from "lucide-react";

export default function PhoneButton() {
  return (
    <a
      href="tel:+917378626348"
      aria-label="Call Glowshine Clinic"
      className="fixed bottom-20 right-4 bg-green-600 text-white p-3 rounded-full shadow-lg hover:bg-green-700 transition z-50"
    >
      <Phone className="w-6 h-6" />
    </a>
  );
}
