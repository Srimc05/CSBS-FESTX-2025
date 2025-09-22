import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // for hamburger & close icons

export function Navbar() {
  const [active, setActive] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);

  const links = ["Home", "Events", "About", "Contact"];

  return (
    <nav className="fixed top-0 left-0 w-full bg-black backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-white font-bold text-xl">FESTX^4</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-6 font-medium">
          {links.map((link) => (
            <li
              key={link}
              onClick={() => setActive(link)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg cursor-pointer transition-all duration-300
                ${
                  active === link
                    ? "text-yellow-400 bg-yellow-400/10 shadow-[0_0_15px_rgba(255,215,0,0.6)]"
                    : "text-white hover:text-yellow-300"
                }`}
            >
              {link}
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-black/95 px-6 py-4">
          <ul className="flex flex-col space-y-4">
            {links.map((link) => (
              <li
                key={link}
                onClick={() => {
                  setActive(link);
                  setMenuOpen(false); // close menu on click
                }}
                className={`px-4 py-2 rounded-lg cursor-pointer transition-all duration-300
                  ${
                    active === link
                      ? "text-yellow-400 bg-yellow-400/10 shadow-[0_0_15px_rgba(255,215,0,0.6)]"
                      : "text-white hover:text-yellow-300"
                  }`}
              >
                {link}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
