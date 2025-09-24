import React from "react";
import { Link, useLocation } from "react-router-dom";

export function Navbar({ menuOpen, setMenuOpen }) {
  const location = useLocation();

  const links = [
    { label: "Home", to: "/" },
    { label: "Events", to: "/events" },
    { label: "Contact Us", to: "/contact" },
  ];

  return (
    <nav>
      {/* Compact centered pill navbar for desktop */}
      <div className="hidden md:flex nav-pirate">
        <ul className="nav-pirate__list">
          {links.map((link) => {
            const isActive = location.pathname === link.to;
            return (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className={`nav-pirate__link ${
                    isActive ? "nav-pirate__link--active" : ""
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Themed mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden nav-pirate__panel">
          <ul>
            {links.map((link) => {
              const isActive = location.pathname === link.to;
              return (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    onClick={() => setMenuOpen(false)}
                    className={
                      isActive
                        ? "nav-pirate__link nav-pirate__link--active"
                        : "nav-pirate__link"
                    }
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
