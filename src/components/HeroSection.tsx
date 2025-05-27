import React from "react";
import { ArrowRight } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center px-4 md:px-6 pt-24 md:pt-28 relative overflow-hidden">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left column with main content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-medium leading-tight">
                <span className="gold-text">Strategy In Data,</span>
                <br />
                <span className="text-white">Power In Insight</span>
              </h2>
              <p className="mt-6 text-lg text-arthashastra-text/80 max-w-md">
                Strategic campaign management and political analytics for
                leaders who demand results.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="#services"
                className="bg-gradient-to-r from-arthashastra-gold to-arthashastra-goldLight hover:opacity-90 text-arthashastra-navy font-medium py-3 px-8 rounded-md transition-all nav-button flex items-center justify-center gap-2"
              >
                Our Services
                <ArrowRight size={16} />
              </a>
              <a
                href="#contact"
                className="border border-arthashastra-gold text-arthashastra-gold hover:bg-arthashastra-gold/10 font-medium py-3 px-8 rounded-md transition-all nav-button"
              >
                Contact Us
              </a>
            </div>
          </div>

          {/* Right column with decorative elements */}
          <div className="hidden md:flex justify-center items-center relative">
            <div className="absolute w-64 h-64 rounded-full bg-gradient-to-br from-arthashastra-gold/30 to-arthashastra-gold/5 blur-3xl"></div>
            <div className="relative z-10 border border-arthashastra-gold/20 bg-arthashastra-navy/50 backdrop-blur-sm rounded-lg p-8 shadow-xl">
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-arthashastra-gold to-arthashastra-goldLight flex items-center justify-center text-arthashastra-navy font-bold">
                    01
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white">
                      Data-Driven Strategy
                    </h3>
                    <p className="text-sm text-arthashastra-text/70">
                      Analytics that deliver electoral success
                    </p>
                  </div>
                </div>

                <Separator className="bg-arthashastra-gold/20" />

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-arthashastra-gold to-arthashastra-goldLight flex items-center justify-center text-arthashastra-navy font-bold">
                    02
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white">
                      Targeted Campaigns
                    </h3>
                    <p className="text-sm text-arthashastra-text/70">
                      Customized for your unique needs
                    </p>
                  </div>
                </div>

                <Separator className="bg-arthashastra-gold/20" />

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-arthashastra-gold to-arthashastra-goldLight flex items-center justify-center text-arthashastra-navy font-bold">
                    03
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white">
                      Expert Execution
                    </h3>
                    <p className="text-sm text-arthashastra-text/70">
                      Online and on-ground solutions
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-arthashastra-gold/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-arthashastra-gold/5 rounded-full blur-3xl"></div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center">
        <a
          href="#about"
          className="text-arthashastra-gold animate-bounce nav-link"
          aria-label="Scroll to about section"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 5v14M19 12l-7 7-7-7" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
