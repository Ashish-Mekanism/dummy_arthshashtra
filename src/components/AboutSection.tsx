import React from "react";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="py-20 md:pt-[18rem] md:pb-32 px-4 md:px-6 bg-arthashastra-charcoal"
    >
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 gold-underline inline-block">
            About Us
          </h2>
        </div>

        <div className="space-y-8 text-center md:text-justify">
          <h3 className="text-2xl md:text-3xl font-medium gold-text mb-6">
            Arthashastra Analytics
          </h3>

          <p className="text-lg leading-relaxed">
            We are a dynamic group based in Gujarat, focused on campaign
            management. Started by TISS and Delhi University Alumni,
            Arthashastra believes in all-round goals for elections. We realise
            the needs of different leaders and parties and make customized plans
            for our clients. Because each election is different and everyone has
            different needs.
          </p>

          <p className="text-lg leading-relaxed">
            Our team is diverse, just like our work. We plan, execute, and
            conduct election campaigns for both online and on-ground
            experiences.
          </p>

          <p className="text-xl md:text-2xl font-medium text-arthashastra-gold italic mt-12">
            Our experience, your victory.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
