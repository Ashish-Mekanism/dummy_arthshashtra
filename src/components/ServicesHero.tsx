
import { motion } from "framer-motion";

const ServicesHero = () => {
  return (
    <section id="services" className="relative py-24 md:py-32 overflow-hidden">
      <div 
        className="absolute inset-0 bg-arthashastra-darker opacity-80"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1503248947681-3198a7abfcc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')",
          backgroundSize: "cover", 
          backgroundPosition: "center",
          mixBlendMode: "overlay"
        }}
      ></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-6 text-arthashastra-gold">
            Our <span className="text-white">Services</span>
          </h1>
          <div className="w-32 h-1 bg-arthashastra-gold mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-white/90 mb-10 leading-relaxed">
            From data-driven analysis to emotional storytelling, we deliver comprehensive political strategy services designed for electoral success.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesHero;
