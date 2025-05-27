import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, Phone, User } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters."
  }),
  email: z.string().email({
    message: "Please enter a valid email address."
  }),
  phone: z.string().min(10, {
    message: "Please enter a valid phone number."
  }),
  message: z.string().optional()
});

const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: ""
    }
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);

    try {
      // await emailjs.send(
      //   "service_kvu49ow", // Replace with your EmailJS service ID
      //   "template_kxnqigw", // Replace with your EmailJS template ID
      //   {
      //     from_name: values.name,
      //     from_email: values.email,
      //     phone: values.phone,
      //     message: values.message || "",
      //     to_email: "ashish.dev@tech.mekanism.cc" // Replace with your email
      //   },
      //   "KQxqtEgO3yjqRKF5s" // Replace with your EmailJS public key
      // );

      toast({
        title: "Success!",
        description:
          "Your message has been sent successfully. We'll get back to you soon!"
      });
      form.reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section
      id="contact"
      className="py-24 md:py-32 relative overflow-hidden bg-arthashastra-darker"
    >
      <div
        className="absolute inset-0 bg-arthashastra-dark opacity-80"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')",
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
          {/* Contact Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-6 text-arthashastra-gold">
              Contact <span className="text-white">Us</span>
            </h1>
            <div className="w-32 h-1 bg-arthashastra-gold mx-auto mb-8"></div>
            <p className="text-xl text-white/90 mb-10 leading-relaxed max-w-3xl mx-auto">
              Have questions or ready to transform your political strategy? Get
              in touch with our team.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-2">
              <div className="space-y-8">
                <h2 className="text-2xl font-playfair font-semibold text-arthashastra-gold mb-6">
                  Reach Out To Us
                </h2>

                <div className="flex items-start space-x-4">
                  <div className="bg-arthashastra-darker p-3 rounded-full border border-arthashastra-gold/30">
                    <Mail className="h-6 w-6 text-arthashastra-gold" />
                  </div>
                  <div>
                    <h3 className="font-medium text-white mb-1">Email Us</h3>
                    <p className="text-white/70">
                      info@arthashastraanalytics.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-arthashastra-darker p-3 rounded-full border border-arthashastra-gold/30">
                    <Phone className="h-6 w-6 text-arthashastra-gold" />
                  </div>
                  <div>
                    <h3 className="font-medium text-white mb-1">Call Us</h3>
                    <p className="text-white/70">+91 98765 43210</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3 bg-arthashastra-dark p-8 rounded-lg border border-arthashastra-gold/20 shadow-xl">
              <h2 className="text-2xl font-playfair font-semibold text-arthashastra-gold mb-6">
                Send Us a Message
              </h2>

              <Form {...form}>
                <form
                  name="contact"
                  method="POST"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-6"
                >
                  <input type="hidden" name="form-name" value="contact" />
                  <p className="hidden">
                    <label>
                      Don’t fill this out: <input name="bot-field" />
                    </label>
                  </p>
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Full Name</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-arthashastra-gold/70" />
                            <Input
                              name="name"
                              placeholder="Enter your name"
                              className="pl-10 bg-arthashastra-darker border-arthashastra-gold/20 focus-visible:ring-arthashastra-gold/30 text-black"
                              {...field}
                            />
                          </div>
                        </FormControl>
                        <FormMessage className="text-red-400" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">
                          Email Address
                        </FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-arthashastra-gold/70" />
                            <Input
                              name="email"
                              placeholder="your@email.com"
                              className="pl-10 bg-arthashastra-darker border-arthashastra-gold/20 focus-visible:ring-arthashastra-gold/30 text-black"
                              {...field}
                            />
                          </div>
                        </FormControl>
                        <FormMessage className="text-red-400" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">
                          Phone Number
                        </FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-arthashastra-gold/70" />
                            <Input
                              name="phone"
                              placeholder="Enter your phone number"
                              className="pl-10 bg-arthashastra-darker border-arthashastra-gold/20 focus-visible:ring-arthashastra-gold/30 text-black"
                              {...field}
                            />
                          </div>
                        </FormControl>
                        <FormMessage className="text-red-400" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">
                          Message (Optional)
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            name="message"
                            placeholder="Tell us how we can help you..."
                            className="bg-arthashastra-darker border-arthashastra-gold/20 focus-visible:ring-arthashastra-gold/30 min-h-[120px] text-black"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="text-red-400" />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    className="w-full bg-arthashastra-gold hover:bg-arthashastra-lightGold text-arthashastra-dark font-medium"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
