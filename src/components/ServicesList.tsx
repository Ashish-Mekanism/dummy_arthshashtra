import { motion } from "framer-motion";
import {
  BarChart3,
  ClipboardList,
  Megaphone,
  ImageDown,
  Share2,
  HeartHandshake,
  Lightbulb,
  PieChart,
  CheckCircle
} from "lucide-react";

const services = [
  {
    id: 1,
    title: "Conduct Past Election Analysis",
    description:
      "Leverage historical data to identify patterns, strengths, and areas for improvement in your electoral strategy.",
    icon: <BarChart3 className="w-12 h-12 text-arthashastra-gold" />
  },
  {
    id: 2,
    title: "Execute Comprehensive Field Surveys",
    description:
      "Gather crucial ground-level insights through scientifically designed surveys that reveal voter preferences and concerns.",
    icon: <ClipboardList className="w-12 h-12 text-arthashastra-gold" />
  },
  {
    id: 3,
    title: "Plan and Execute Marketing Campaigns",
    description:
      "Develop targeted, multi-channel campaigns that effectively communicate your message to the right audience.",
    icon: <Megaphone className="w-12 h-12 text-arthashastra-gold" />
  },
  {
    id: 4,
    title: "Design Impactful Advertising Campaigns",
    description:
      "Create compelling visual narratives that resonate with voters and reinforce your campaign's central message.",
    icon: <ImageDown className="w-12 h-12 text-arthashastra-gold" />
  },
  {
    id: 5,
    title: "Amplify Influence Across All Social Media Platforms",
    description:
      "Maximize your digital presence with platform-specific strategies that engage supporters and expand your reach.",
    icon: <Share2 className="w-12 h-12 text-arthashastra-gold" />
  },
  {
    id: 6,
    title: "Foster Emotional Connection with Voters",
    description:
      "Build authentic relationships through storytelling and messaging that speaks to voters' values and aspirations.",
    icon: <HeartHandshake className="w-12 h-12 text-arthashastra-gold" />
  },
  {
    id: 7,
    title: "Develop Strategically Induced Policy Decisions",
    description:
      "Craft policy positions informed by data and aligned with both constituent needs and your political vision.",
    icon: <Lightbulb className="w-12 h-12 text-arthashastra-gold" />
  },
  {
    id: 8,
    title: "Deliver Data-Driven Results",
    description:
      "Transform complex analytics into actionable intelligence that guides decision-making throughout your campaign.",
    icon: <PieChart className="w-12 h-12 text-arthashastra-gold" />
  },
  {
    id: 9,
    title: "Ensure Best Possible Electoral Outcomes",
    description:
      "Integrate all strategic elements into a cohesive approach designed to maximize your chances of electoral success.",
    icon: <CheckCircle className="w-12 h-12 text-arthashastra-gold" />
  }
];

const ServiceCard = ({ service, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-arthashastra-darker p-6 rounded-lg border border-arthashastra-accent/20 hover:border-arthashastra-gold/40 transition-all duration-300 flex flex-col h-full group"
    >
      <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
        {service.icon}
      </div>
      <h3 className="text-xl font-playfair font-semibold mb-3 text-arthashastra-gold">
        {service.title}
      </h3>
      <p className="text-gray-300 flex-grow">{service.description}</p>
    </motion.div>
  );
};

const ServicesList = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-arthashastra-dark to-arthashastra-darker">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

        {/* <div className="mt-20 text-center">
          <h2 className="text-2xl md:text-3xl font-playfair font-semibold mb-6 text-white">Ready to Transform Your Campaign?</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
            Let Arthashastra Analytics be your partner in building a successful political strategy tailored to your unique campaign needs.
          </p>
          <a 
            href="#contact" 
            className="inline-block bg-arthashastra-gold text-arthashastra-dark font-medium px-8 py-3 rounded transition-all hover:bg-arthashastra-lightGold"
          >
            Get in Touch
          </a>
        </div> */}
      </div>
    </section>
  );
};

export default ServicesList;
