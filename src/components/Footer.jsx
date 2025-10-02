import React from "react";
import { Instagram, Youtube, Linkedin, MapPin, Mail } from "lucide-react";

const Footer = () => {
  const handleIframeMouseEnter = () => {
    // Hide custom cursor by adding a class to body
    document.body.classList.add("hide-custom-cursor");
  };

  const handleIframeMouseLeave = () => {
    // Show custom cursor by removing the class from body
    document.body.classList.remove("hide-custom-cursor");
  };

  return (
    <footer className="text-white bg-gradient-to-br from-[#0b0b0c] to-[#151414] py-8">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left section */}
        <div>
          <h1 className="mb-4 text-2xl font-bold text-yellow-400 font-fell-english">
            Locate us
          </h1>
          <div
            className="relative rounded-xl bg-black/40 backdrop-blur-sm overflow-hidden border border-yellow-500 shadow-md"
            onMouseEnter={handleIframeMouseEnter}
            onMouseLeave={handleIframeMouseLeave}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.181698741784!2d80.05483217631706!3d12.960222315125051!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52f596c7fb72c9%3A0x8e7a30529f9ef227!2sSri%20Sairam%20Engineering%20College!5e0!3m2!1sen!2sin!4v1758513431484!5m2!1sen!2sin"
              className="w-full h-[180px] sm:h-[200px] lg:h-[220px]"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Map to Sri Sairam Engineering College"
            ></iframe>
          </div>
        </div>

        {/* Right section */}
        <div className="flex flex-col justify-center font-fell-english gap-6">
          {/* Social Links */}
          <div>
            <h2 className="text-2xl font-semibold text-yellow-400 mb-4">
              Connect
            </h2>
            <div className="flex gap-4">
              <a
                target="_blank"
                href="https://www.instagram.com/sairam_festx/?igshid=MzRlODBiNWFlZA%3D%3D"
                aria-label="Instagram"
                className="p-2 rounded-full bg-white/10 text-gray-300 hover:text-white hover:bg-gradient-to-tr 
                  from-pink-500 via-red-500 to-yellow-500 
                  transition-all duration-300 transform hover:scale-110 shadow-md"
              >
                <Instagram size={32} />
              </a>

              <a
                target="_blank"
                href="https://www.youtube.com/@FESTXCSBS"
                aria-label="YouTube"
                className="p-2 rounded-full bg-white/10 text-gray-300 hover:text-white hover:bg-red-600 
                  transition-all duration-300 transform hover:scale-110 shadow-md"
              >
                <Youtube size={32} />
              </a>

              {/* <a
                href="#"
                aria-label="LinkedIn"
                className="p-2 rounded-full bg-white/10 text-gray-300 hover:text-white hover:bg-blue-600 transition-all duration-300 transform hover:scale-110 shadow-md"
              >
                <Linkedin size={40} />
              </a> */}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-semibold text-yellow-400 mb-4">
              Reach Out
            </h2>
            <div className="flex flex-col gap-3 text-gray-300">
              <div className="flex items-center gap-3 group cursor-pointer">
                <MapPin
                  size={20}
                  className="text-yellow-400 group-hover:scale-110 group-hover:text-yellow-300 transition-transform duration-300"
                />
                <p className="group-hover:text-white transition-colors duration-300">
                  Sai Leo Nagar, West Tambaram, Chennai - 600044, Tamil Nadu,
                  India
                </p>
              </div>
              <div className="flex items-center gap-3 group cursor-pointer">
                <Mail
                  size={20}
                  className="text-yellow-400 group-hover:scale-110 group-hover:text-yellow-300 transition-transform duration-300"
                />
                <p className="group-hover:text-white transition-colors duration-300">
                  festx@sairam.edu.in
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-6 border-t border-white/10 pt-4 text-center text-sm text-gray-400 font-fell-english">
        © {new Date().getFullYear()} FESTX’25 · Made by Team FESTX
      </div>
    </footer>
  );
};

export default Footer;
