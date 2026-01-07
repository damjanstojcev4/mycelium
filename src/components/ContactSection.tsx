'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Send, Mail, MapPin, Phone, Loader2, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;

    const payload = {
      full_name: (form.querySelector('#name') as HTMLInputElement).value,
      email: (form.querySelector('#email') as HTMLInputElement).value,
      company_name: (form.querySelector('#company') as HTMLInputElement).value,
      help_with: (form.querySelector('#service') as HTMLSelectElement).value,
      project_about: (form.querySelector('#message') as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch(
        'https://x8ki-letl-twmt.n7.xano.io/api:ki47tPok/submit_inquiry',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        }
      );

      if (!res.ok) throw new Error('Request failed');

      setIsSubmitted(true);
      toast({
        title: 'Message sent!',
        description: "We'll get back to you within 24 hours.",
      });

      form.reset();
      setTimeout(() => setIsSubmitted(false), 3000);
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Something went wrong. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-32 relative">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-mycelium-lime/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-mycelium-lime text-sm font-medium tracking-wider uppercase mb-4 block">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Let's Build Something <span className="gradient-text">Amazing</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Ready to transform your business with powerful integrations? Let's discuss your project.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    placeholder="John Doe"
                    required
                    className="bg-card border-border focus:border-mycelium-lime"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@company.com"
                    required
                    className="bg-card border-border focus:border-mycelium-lime"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium mb-2">
                  Company
                </label>
                <Input
                  id="company"
                  placeholder="Your Company"
                  className="bg-card border-border focus:border-mycelium-lime"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium mb-2">
                  What can we help you with?
                </label>
                <select
                  id="service"
                  required
                  className="w-full h-10 px-3 rounded-lg bg-card border border-border text-foreground focus:border-mycelium-lime focus:outline-none focus:ring-2 focus:ring-mycelium-lime/20"
                >
                  <option value="">Select a service</option>
                  <option value="automation">Workflow Automation</option>
                  <option value="integration">System Integration</option>
                  <option value="web">Web Development</option>
                  <option value="custom">Custom Solution</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Tell us about your project
                </label>
                <Textarea
                  id="message"
                  placeholder="Describe your project, goals, and any specific requirements..."
                  rows={5}
                  required
                  className="bg-card border-border focus:border-mycelium-lime resize-none"
                />
              </div>

              <Button
                type="submit"
                variant="hero"
                size="xl"
                className="w-full"
                disabled={isSubmitting || isSubmitted}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Sending...
                  </>
                ) : isSubmitted ? (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    Message Sent!
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col justify-center"
          >
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-display font-semibold mb-4">
                  Ready to Connect Your Systems?
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Whether you're looking to automate workflows, integrate systems, or build a custom web solution, we're here to help.
                </p>
              </div>

              <div className="space-y-4">
                <a
                  href="mailto:hello@mycelium.dev"
                  className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-mycelium-lime/30 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-mycelium-lime/20 to-mycelium-teal/20 flex items-center justify-center text-mycelium-lime group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Email us at</div>
                    <div className="font-medium">hello@mycelium.dev</div>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-mycelium-lime/20 to-mycelium-teal/20 flex items-center justify-center text-mycelium-lime">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Based in</div>
                    <div className="font-medium">Remote - Worldwide</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-mycelium-lime/20 to-mycelium-teal/20 flex items-center justify-center text-mycelium-lime">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Response time</div>
                    <div className="font-medium">Within 24 hours</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
