import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChartBar, Target, Vote, MessageSquare } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const CourseSection = () => {
  const [activeTab, setActiveTab] = useState("overview");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Module data with icons
  const modules = [
    {
      id: "module1",
      week: "Week 1",
      title: "Introduction to Political Consulting",
      icon: <Vote className="h-5 w-5 text-arthashastra-gold" />,
      content: [
        "History and Evolution of Political Consulting",
        "Roles & Responsibilities of a Political Consultant",
        "Types of Political Campaigns: Electoral, Advocacy, and Issue-Based",
        "Understanding Indian Political System & Electoral Process",
        "Political Ideologies and Party Structures"
      ]
    },
    {
      id: "module2",
      week: "Week 2",
      title: "Voter Psychology and Behaviour",
      icon: <Target className="h-5 w-5 text-arthashastra-gold" />,
      content: [
        "Political Demography & Voter Segmentation",
        "Understanding Voter Behavior, Trends & Turnouts",
        "Rural vs Urban Voter Patterns",
        "Caste, Religion, and Regional Influences",
        "Survey Techniques to Analyze Voter Sentiments"
      ]
    },
    {
      id: "module3",
      week: "Week 3",
      title: "Political Research and Data Analytics",
      icon: <ChartBar className="h-5 w-5 text-arthashastra-gold" />,
      content: [
        "Types of Political Research (Pre-poll, Exit Polls, Opinion Polls)",
        "Constituency Profiling Techniques",
        "Data Collection: Ground, Telephonic, Digital",
        "Interpreting Poll Data & Analytics",
        "Using Tools like Excel, Tableau, and Python for Data Insights"
      ]
    },
    {
      id: "module4",
      week: "Week 4",
      title: "Political Campaign Strategy",
      icon: <Target className="h-5 w-5 text-arthashastra-gold" />,
      content: [
        "Campaign Planning Framework",
        "Constituency War Room Setup",
        "Issue-Based Campaigning",
        "Manifesto Drafting and Messaging",
        "SWOT Analysis for Candidate & Opposition"
      ]
    },
    {
      id: "module5",
      week: "Week 5",
      title: "Digital Campaign Management",
      icon: <MessageSquare className="h-5 w-5 text-arthashastra-gold" />,
      content: [
        "Political Branding and Personal Positioning",
        "Social Media Campaign Planning (FB, Insta, X, WhatsApp)",
        "Content Creation: Memes, Reels, Shorts",
        "Crisis Management Online",
        "Tools: Canva, Meta Ad Manager, Google Ads, Telegram Bots"
      ]
    },
    {
      id: "module6",
      week: "Week 6",
      title: "Ground-Level Campaign Execution",
      icon: <Vote className="h-5 w-5 text-arthashastra-gold" />,
      content: [
        "Booth-Level Strategy and Cadre Management",
        "Door-to-Door Campaigns & Microtargeting",
        "Designing Political Yatras, Padayatras, and Rallies",
        "Volunteer Mobilization & Local Influencer Activation",
        "Event Management for Political Engagements"
      ]
    },
    {
      id: "module7",
      week: "Week 7",
      title: "Political Communication & Media Handling",
      icon: <MessageSquare className="h-5 w-5 text-arthashastra-gold" />,
      content: [
        "Public Speaking & Oratory for Candidates",
        "Press Release & Media Management",
        "TV Debates & Newsroom Strategy",
        "Building Media Relationships",
        "Speech Writing & Narrative Framing"
      ]
    },
    {
      id: "module8",
      week: "Week 8",
      title: "Ethics, Compliance, and Reporting",
      icon: <ChartBar className="h-5 w-5 text-arthashastra-gold" />,
      content: [
        "Election Commission Rules & Model Code of Conduct",
        "Legal Do's and Don'ts in Campaigns",
        "Political PR Ethics & Fake News Management",
        "Campaign Documentation & Reporting",
        "Case Studies: Success & Failures in Indian Politics"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-arthashastra-navy flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section
          id="courses"
          className="relative py-24 md:py-32 overflow-hidden"
        >
          <div
            className="absolute inset-0 bg-arthashastra-darker opacity-80"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')",
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
              className="max-w-5xl mx-auto"
            >
              {/* Course Hero Section */}
              <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-6 text-arthashastra-gold">
                  Learn <span className="text-white">From Us</span>
                </h1>
                <div className="w-32 h-1 bg-arthashastra-gold mx-auto mb-8"></div>
                <p className="text-xl text-white/90 mb-10 leading-relaxed max-w-3xl mx-auto">
                  Master political consulting with our comprehensive curriculum
                  designed for aspiring campaign professionals
                </p>
              </div>

              {/* Course Header Card */}
              <Card className="mb-16 bg-arthashastra-dark border border-arthashastra-gold/30 shadow-xl shadow-arthashastra-gold/5">
                <CardHeader className="text-center pb-2">
                  <CardTitle className="text-2xl md:text-3xl text-arthashastra-gold font-playfair">
                    2-Month Political Consulting Course Curriculum
                  </CardTitle>
                  <CardDescription className="text-white/70 text-base mt-2">
                    (Excluding Fundraising)
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="p-4 text-center bg-arthashastra-darker rounded-lg border border-arthashastra-gold/20">
                      <h3 className="text-arthashastra-gold font-medium mb-2">
                        Duration
                      </h3>
                      <p className="text-white">8 Weeks</p>
                    </div>
                    <div className="p-4 text-center bg-arthashastra-darker rounded-lg border border-arthashastra-gold/20">
                      <h3 className="text-arthashastra-gold font-medium mb-2">
                        Format
                      </h3>
                      <p className="text-white">
                        Hybrid (Online + Field Assignments)
                      </p>
                    </div>
                    <div className="p-4 text-center bg-arthashastra-darker rounded-lg border border-arthashastra-gold/20 col-span-1 md:col-span-2">
                      <h3 className="text-arthashastra-gold font-medium mb-2">
                        Target Audience
                      </h3>
                      <p className="text-white">
                        Political aspirants, consultants, campaign managers,
                        strategists, communication professionals
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Navigation Tabs */}
              <Tabs
                defaultValue="modules"
                className="mb-8"
                onValueChange={setActiveTab}
              >
                <TabsList className="grid w-full grid-cols-2 bg-arthashastra-darker">
                  <TabsTrigger
                    value="modules"
                    className="text-arthashastra-gold data-[state=active]:bg-arthashastra-gold data-[state=active]:text-arthashastra-dark"
                  >
                    Course Modules
                  </TabsTrigger>
                  <TabsTrigger
                    value="project"
                    className="text-arthashastra-gold data-[state=active]:bg-arthashastra-gold data-[state=active]:text-arthashastra-dark"
                  >
                    Final Project
                  </TabsTrigger>
                </TabsList>

                {/* Modules Content */}
                <TabsContent value="modules" className="border-none p-0 mt-8">
                  <div className="space-y-4">
                    <Accordion type="single" collapsible className="w-full">
                      {modules.map((module) => (
                        <AccordionItem
                          key={module.id}
                          value={module.id}
                          className="bg-arthashastra-dark border border-arthashastra-gold/20 mb-4 rounded-lg overflow-hidden"
                        >
                          <AccordionTrigger className="px-6 py-4 hover:bg-arthashastra-darker/50 transition-colors">
                            <div className="flex items-center space-x-3 text-left">
                              <div className="rounded-full p-2 bg-arthashastra-darker flex items-center justify-center">
                                {module.icon}
                              </div>
                              <div>
                                <p className="text-arthashastra-gold font-medium">
                                  {module.week}
                                </p>
                                <h3 className="text-lg font-playfair text-white">
                                  {module.title}
                                </h3>
                              </div>
                            </div>
                          </AccordionTrigger>
                          <AccordionContent className="px-6 pb-5 pt-2">
                            <ul className="space-y-2 ml-10">
                              {module.content.map((item, i) => (
                                <li key={i} className="text-white/80 list-disc">
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </div>
                </TabsContent>

                {/* Project Content */}
                <TabsContent value="project" className="border-none p-0 mt-8">
                  <Card className="bg-arthashastra-dark border border-arthashastra-gold/20">
                    <CardHeader>
                      <CardTitle className="text-arthashastra-gold font-playfair text-2xl">
                        Project Assignment (During Weeks 7–8)
                      </CardTitle>
                      <CardDescription className="text-white/80 text-base">
                        Design a complete campaign plan for a mock candidate in
                        a real constituency.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {[
                          {
                            title: "Research",
                            icon: (
                              <ChartBar className="h-5 w-5 text-arthashastra-gold" />
                            )
                          },
                          {
                            title: "Voter Segmentation",
                            icon: (
                              <Target className="h-5 w-5 text-arthashastra-gold" />
                            )
                          },
                          {
                            title: "Narrative Framing",
                            icon: (
                              <MessageSquare className="h-5 w-5 text-arthashastra-gold" />
                            )
                          },
                          {
                            title: "Campaign Calendar",
                            icon: (
                              <Vote className="h-5 w-5 text-arthashastra-gold" />
                            )
                          },
                          {
                            title: "Digital and Ground Strategy",
                            icon: (
                              <Target className="h-5 w-5 text-arthashastra-gold" />
                            )
                          },
                          {
                            title: "Final Presentation & Evaluation",
                            icon: (
                              <ChartBar className="h-5 w-5 text-arthashastra-gold" />
                            )
                          }
                        ].map((item, i) => (
                          <div
                            key={i}
                            className="bg-arthashastra-darker p-4 rounded-lg flex items-center space-x-3 border border-arthashastra-gold/10"
                          >
                            <div className="rounded-full p-2 bg-arthashastra-dark flex items-center justify-center">
                              {item.icon}
                            </div>
                            <span className="text-white">{item.title}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CourseSection;
