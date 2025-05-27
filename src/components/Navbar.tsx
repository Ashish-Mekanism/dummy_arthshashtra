import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Helper to navigate and scroll to section
  const handleNavToSection = (sectionId: string) => {
    if (location.pathname !== "/") {
      navigate(`/#${sectionId}`);
      // Wait for navigation, then scroll
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
    setMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-arthashastra-navy/90 backdrop-blur-lg border-b border-arthashastra-gold/20">
      <div className="container mx-auto px-4 md:px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10">
              <img
                src="/images/image.png"
                alt="Arthashastra Analytics Logo"
                className="w-full h-auto"
              />
            </div>
            <h1 className="text-xl font-medium text-arthashastra-gold">
              Arthashastra Analytics
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#"
              className="text-white hover:text-arthashastra-gold transition-colors nav-link"
              onClick={() => navigate("/")}
            >
              Home
            </a>
            <a
              href="#about"
              className="text-white hover:text-arthashastra-gold transition-colors nav-link"
              onClick={(e) => {
                e.preventDefault();
                handleNavToSection("about");
              }}
            >
              About
            </a>
            <a
              href="#services"
              className="text-white hover:text-arthashastra-gold transition-colors nav-link"
              onClick={(e) => {
                e.preventDefault();
                handleNavToSection("services");
              }}
            >
              Services
            </a>
            <a
              href="#contact"
              className="text-white hover:text-arthashastra-gold transition-colors nav-link"
              onClick={(e) => {
                e.preventDefault();
                handleNavToSection("contact");
              }}
            >
              Contact
            </a>
            <Link
              to="/courses"
              className="text-white hover:text-arthashastra-gold transition-colors nav-link"
            >
              Courses
            </Link>
            {/* <Button className="bg-arthashastra-gold hover:bg-arthashastra-goldLight text-arthashastra-navy nav-button">
              Get Started
            </Button> */}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-arthashastra-gold"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <a
                href="#"
                className="text-white hover:text-arthashastra-gold transition-colors nav-link"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                Home
              </a>
              <a
                href="#about"
                className="text-white hover:text-arthashastra-gold transition-colors nav-link"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                About
              </a>
              <a
                href="#services"
                className="text-white hover:text-arthashastra-gold transition-colors nav-link"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                Services
              </a>
              <a
                href="#courses"
                className="text-white hover:text-arthashastra-gold transition-colors w-full text-center py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Courses
              </a>
              <a
                href="#contact"
                className="text-white hover:text-arthashastra-gold transition-colors nav-link"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                Contact
              </a>
              <Button className="bg-arthashastra-gold hover:bg-arthashastra-goldLight text-arthashastra-navy w-full nav-button">
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
