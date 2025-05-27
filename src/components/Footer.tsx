import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();
  const location = useLocation();

  // Helper to navigate and scroll to section
  const handleNavToSection = (sectionId: string) => {
    if (location.pathname !== "/") {
      navigate(`/#${sectionId}`);
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-arthashastra-darker border-t border-arthashastra-gold/20 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <img
                src="/images/image.png"
                alt="Arthashastra Analytics Logo"
                className="h-10 mr-2"
              />
              <h3 className="text-xl font-playfair text-arthashastra-gold">
                Arthashastra Analytics
              </h3>
            </div>
            <p className="text-gray-400 text-sm">
              Strategy in data, Power in insight. A dynamic campaign management
              firm based in Gujarat.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-playfair text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <button
                  className="text-gray-400 hover:text-arthashastra-gold transition-colors text-sm border-b-2 border-transparent hover:border-arthashastra-gold bg-transparent p-0"
                  style={{ cursor: "pointer" }}
                  onClick={() => navigate("/")}
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  className="text-gray-400 hover:text-arthashastra-gold transition-colors text-sm border-b-2 border-transparent hover:border-arthashastra-gold bg-transparent p-0"
                  style={{ cursor: "pointer" }}
                  onClick={() => handleNavToSection("about")}
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  className="text-gray-400 hover:text-arthashastra-gold transition-colors text-sm border-b-2 border-transparent hover:border-arthashastra-gold bg-transparent p-0"
                  style={{ cursor: "pointer" }}
                  onClick={() => handleNavToSection("services")}
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  className="text-gray-400 hover:text-arthashastra-gold transition-colors text-sm border-b-2 border-transparent hover:border-arthashastra-gold bg-transparent p-0"
                  style={{ cursor: "pointer" }}
                  onClick={() => handleNavToSection("contact")}
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-playfair text-white mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 mr-2 text-arthashastra-gold"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                Gujarat, India
              </li>
              <li className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 mr-2 text-arthashastra-gold"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                contact@arthashastra.com
              </li>
              <li className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 mr-2 text-arthashastra-gold"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                +91 1234567890
              </li>
            </ul>

            <div className="mt-4 flex space-x-4">
              <a
                href="#"
                className="text-arthashastra-gold hover:text-arthashastra-lightGold"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-arthashastra-gold hover:text-arthashastra-lightGold"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.066 9.645c.183 4.04-2.83 8.544-8.164 8.544-1.622 0-3.131-.476-4.402-1.291 1.524.18 3.045-.244 4.252-1.189-1.256-.023-2.317-.854-2.684-1.995.451.086.895.061 1.298-.049-1.381-.278-2.335-1.522-2.304-2.853.388.215.83.344 1.301.359-1.279-.855-1.641-2.544-.889-3.835 1.416 1.738 3.533 2.881 5.92 3.001-.419-1.796.944-3.527 2.799-3.527.825 0 1.572.349 2.096.907.654-.128 1.27-.368 1.824-.697-.215.671-.67 1.233-1.263 1.589.581-.07 1.135-.224 1.649-.453-.384.578-.87 1.084-1.433 1.489z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-arthashastra-gold hover:text-arthashastra-lightGold"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-arthashastra-gold/10 text-center text-sm text-gray-500">
          <p>
            © {new Date().getFullYear()} Arthashastra Analytics. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
