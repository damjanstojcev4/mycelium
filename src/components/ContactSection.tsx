'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Send, Loader2, CheckCircle, Clock, Globe, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const form = e.currentTarget;

    const payload = {
      name: (form.querySelector('#name') as HTMLInputElement).value,
      email: (form.querySelector('#email') as HTMLInputElement).value,
      company: (form.querySelector('#company') as HTMLInputElement).value,
      service: (form.querySelector('#service') as HTMLSelectElement).value,
      plan: (form.querySelector('#plan') as HTMLSelectElement).value,
      project: (form.querySelector('#message') as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch('https://x8ki-letl-twmt.n7.xano.io/api:OI2qP2jA/mycelium_site', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error('Request failed');

      setIsSubmitted(true);
      toast({ title: 'Message sent', description: "We'll get back to you within 24 hours." });
      form.reset();
      setTimeout(() => setIsSubmitted(false), 3000);
    } catch {
      toast({ title: 'Error', description: 'Something went wrong. Please try again.', variant: 'destructive' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-32 relative">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] glow-orb pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-16"
        >
          <span className="tag-chip mb-6">Contact</span>
          <h2 className="text-4xl md:text-6xl font-display font-medium mb-6 leading-[1.05] text-balance">
            Let's connect<br />
            <span className="gradient-text">your systems.</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl">
            Tell us about the integration, automation, or web project you have in mind. We reply within one business day.
          </p>
        </motion.div>

        <div className="grid grid-cols-12 gap-3 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="col-span-12 lg:col-span-7 bento-card p-8 md:p-10"
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-mono uppercase tracking-wider text-muted-foreground mb-2">Name</label>
                  <Input id="name" placeholder="Jane Doe" required className="bg-background/40 border-border h-11 rounded-xl" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-mono uppercase tracking-wider text-muted-foreground mb-2">Email</label>
                  <Input id="email" type="email" placeholder="jane@company.com" required className="bg-background/40 border-border h-11 rounded-xl" />
                </div>
              </div>

              <div>
                <label htmlFor="company" className="block text-xs font-mono uppercase tracking-wider text-muted-foreground mb-2">Company</label>
                <Input id="company" placeholder="Your company" className="bg-background/40 border-border h-11 rounded-xl" />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="service" className="block text-xs font-mono uppercase tracking-wider text-muted-foreground mb-2">Service</label>
                  <select id="service" required className="w-full h-11 px-3 rounded-xl bg-background/40 border border-border text-foreground focus:border-mycelium-lime focus:outline-none focus:ring-2 focus:ring-mycelium-lime/20">
                    <option value="">Select…</option>
                    <option value="automation">Workflow Automation</option>
                    <option value="integration">System Integration</option>
                    <option value="web">Web Development</option>
                    <option value="custom">Custom Solution</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="plan" className="block text-xs font-mono uppercase tracking-wider text-muted-foreground mb-2">Plan</label>
                  <select id="plan" required className="w-full h-11 px-3 rounded-xl bg-background/40 border border-border text-foreground focus:border-mycelium-lime focus:outline-none focus:ring-2 focus:ring-mycelium-lime/20">
                    <option value="">Select…</option>
                    <option value="starter">Starter</option>
                    <option value="professional">Professional</option>
                    <option value="enterprise">Enterprise</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-mono uppercase tracking-wider text-muted-foreground mb-2">Project</label>
                <Textarea id="message" placeholder="Tell us about your project, goals, and timeline…" rows={5} required className="bg-background/40 border-border resize-none rounded-xl" />
              </div>

              <Button type="submit" variant="hero" size="lg" className="w-full rounded-full" disabled={isSubmitting || isSubmitted}>
                {isSubmitting ? (<><Loader2 className="w-4 h-4 animate-spin" />Sending…</>) :
                  isSubmitted ? (<><CheckCircle className="w-4 h-4" />Message sent</>) :
                  (<>Send message<Send className="w-4 h-4" /></>)}
              </Button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="col-span-12 lg:col-span-5 flex flex-col gap-3"
          >
            <div className="bento-card-feature p-8 flex-1 flex flex-col justify-between min-h-[200px]">
              <span className="font-mono text-xs text-muted-foreground uppercase tracking-wider">Response time</span>
              <div>
                <Clock className="w-6 h-6 text-mycelium-lime mb-3" />
                <div className="text-3xl font-display font-medium mb-1">Within 24h</div>
                <p className="text-sm text-muted-foreground">Every business day.</p>
              </div>
            </div>

            <div className="bento-card p-8 flex-1 flex flex-col justify-between min-h-[200px]">
              <span className="font-mono text-xs text-muted-foreground uppercase tracking-wider">Working with</span>
              <div>
                <Globe className="w-6 h-6 text-mycelium-teal mb-3" />
                <div className="text-3xl font-display font-medium mb-1">Worldwide</div>
                <p className="text-sm text-muted-foreground">Remote-first, async-friendly.</p>
              </div>
            </div>

            <a
              href="mailto:hello@mycelium.dev"
              className="bento-card p-6 flex items-center justify-between group"
            >
              <div>
                <span className="font-mono text-xs text-muted-foreground uppercase tracking-wider">Or write directly</span>
                <div className="font-display font-medium mt-1">hello@mycelium.dev</div>
              </div>
              <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-mycelium-lime group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
