import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react"; // for hamburger & close icons

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const links = [
    { label: "Home", to: "/" },
    { label: "Events", to: "/events" },
    { label: "Contact Us", to: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-black backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-white font-bold text-xl">FESTX^4</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-6 font-medium">
          {links.map((link) => {
            const isActive = location.pathname === link.to;
            return (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                    isActive
                      ? "text-yellow-400 bg-yellow-400/10 shadow-[0_0_15px_rgba(255,215,0,0.6)]"
                      : "text-white hover:text-yellow-300"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-black/95 px-6 py-4">
          <ul className="flex flex-col space-y-4">
            {links.map((link) => {
              const isActive = location.pathname === link.to;
              return (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    onClick={() => setMenuOpen(false)}
                    className={`block px-4 py-2 rounded-lg transition-all duration-300 ${
                      isActive
                        ? "text-yellow-400 bg-yellow-400/10 shadow-[0_0_15px_rgba(255,215,0,0.6)]"
                        : "text-white hover:text-yellow-300"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </nav>
  );
}
