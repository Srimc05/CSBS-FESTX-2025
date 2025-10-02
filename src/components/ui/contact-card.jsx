import { Phone } from "lucide-react";

export default function ContactCard({ name, role, phone }) {
  return (
    <div
      className="relative border border-yellow-500 rounded-2xl p-4 lg:p-5 
      flex items-center justify-between 
      bg-black/40 backdrop-blur-sm
      hover:shadow-[0_0_20px_rgba(255,215,0,0.65)] hover:-translate-y-1.5 transition duration-300"
    >
      {/* Decorative glowing border */}
      <div className="absolute inset-0 rounded-2xl border-2 border-yellow-400 opacity-30 blur-md pointer-events-none"></div>

      {/* Left: Name */}
      <h2 className="text-2xl md:text-3xl lg:text-2xl font-semibold text-yellow-400 drop-shadow-md font-fell-english z-10 w-1/2">
        {name}
      </h2>

      {/* Right: Role + Phone */}
      <div className="flex flex-col items-start justify-center z-10 w-1/2">
        <p className="text-gray-300 text-base md:text-lg lg:text-base font-pirata mb-2 whitespace-nowrap">
          {role}
        </p>

        {phone && (
          <p className="flex items-center gap-2 text-gray-400 hover:text-yellow-400 hover:scale-105 transition text-sm md:text-base">
            <Phone size={18} className="shrink-0" />
            <a href={`tel:${phone}`} className="hover:underline">
              {phone}
            </a>
          </p>
        )}
      </div>
    </div>
  );
}
