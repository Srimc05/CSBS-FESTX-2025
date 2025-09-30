import { Phone } from "lucide-react";

export default function ContactCard({ name, role, phone }) {
  return (
    <div
      className="relative border border-yellow-500 rounded-2xl py-2 px-3 lg:py-2 lg:px-3 flex flex-col items-center text-center
      bg-black/40 backdrop-blur-sm
      hover:shadow-[0_0_20px_rgba(255,215,0,0.65)] hover:-translate-y-1.5 transition duration-300"
    >
      {/* Decorative glowing border (extra shine) */}
      <div className="absolute inset-0 rounded-2xl border-2 border-yellow-400 opacity-30 blur-md"></div>

      {/* Name & Role */}
      <h2 className="text-2xl md:text-3xl lg:text-xl font-bold text-yellow-400 drop-shadow-md font-fell-english">
        {name}
      </h2>
      <p className="text-gray-300 text-lg md:text-xl lg:text-base font-pirata mb-3 mt-2">
        {role}
      </p>

      {/* Contact Icons */}
      <div className="flex flex-col gap-2 items-center text-base md:text-lg lg:text-sm">
        {phone && (
          <p className="flex items-center gap-2 text-gray-400 hover:text-yellow-400 hover:scale-105 transition">
            <Phone size={18} />
            <a href={`tel:${phone}`} className="hover:underline">
              {phone}
            </a>
          </p>
        )}
      </div>
    </div>
  );
}
