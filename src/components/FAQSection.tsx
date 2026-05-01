import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    q: 'How quickly can you start?',
    a: 'Discovery calls are usually within a week. Active build work typically begins 2–3 weeks after we agree on scope, depending on current capacity.',
  },
  {
    q: 'Do you work with non-technical founders?',
    a: 'Most of our clients are. We translate between technical reality and business outcomes, and we never put you in a position of approving something you don\'t understand.',
  },
  {
    q: 'What if my project doesn\'t fit a standard package?',
    a: 'Most don\'t, exactly. The Starter and Professional packages are starting points — we tailor scope during the design phase. Enterprise is fully custom from day one.',
  },
  {
    q: 'Who owns the code and accounts?',
    a: 'You do. Always. We build in your accounts (n8n, Xano, Vercel, etc.) and hand over full credentials, documentation, and admin access at launch.',
  },
  {
    q: 'Do you offer ongoing support?',
    a: 'Yes — optional retainers cover monitoring, small changes, and on-call response. We also do clean handovers if you have an in-house team taking over.',
  },
  {
    q: 'How do you price projects?',
    a: 'Fixed-price per project, agreed during design. No hourly billing surprises. If scope changes mid-project, we re-scope transparently before continuing.',
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-12 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="col-span-12 lg:col-span-4"
          >
            <span className="tag-chip mb-6">FAQ</span>
            <h2 className="text-4xl md:text-5xl font-display font-medium mb-6 leading-[1.05] text-balance">
              Common<br />
              <span className="gradient-text">questions.</span>
            </h2>
            <p className="text-muted-foreground">
              Don't see yours? <a href="#contact" className="text-mycelium-lime hover:underline">Just ask.</a>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="col-span-12 lg:col-span-8"
          >
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
                  className="bento-card px-6 border-border/60 hover:border-mycelium-lime/30"
                >
                  <AccordionTrigger className="text-left font-display font-medium text-base hover:no-underline py-5">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
