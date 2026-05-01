import { motion } from 'framer-motion';
import { Target, Lightbulb, Users, Shield } from 'lucide-react';

const values = [
  { icon: Target, title: 'Outcome over output', description: 'We measure success in business metrics — not lines of code.' },
  { icon: Lightbulb, title: 'Right tool, not new tool', description: 'We pick boring tech where it serves, novel tech where it wins.' },
  { icon: Users, title: 'Embedded partner', description: 'We work like part of your team, not an outside vendor.' },
  { icon: Shield, title: 'Built to last', description: 'Security, observability, and documentation — non-negotiables.' },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-12 gap-3">
          {/* Story */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="col-span-12 lg:col-span-7 bento-card p-10 lg:p-14 noise-overlay"
          >
            <span className="tag-chip mb-6">About</span>
            <h2 className="text-3xl md:text-5xl font-display font-medium mb-6 leading-[1.1] text-balance">
              Like mycelium under a forest —<br />
              <span className="text-muted-foreground italic font-light">the connective tissue is</span>{' '}
              <span className="gradient-text">where the work happens.</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Mycelium is a boutique studio focused on the unsexy, high-leverage layer between
              your tools — the integrations, automations, and quietly-running platforms that
              determine whether a business scales smoothly or spends every quarter firefighting.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We work with founders and ops leaders who are tired of duct-tape, ready to invest
              in something deliberate, and want a partner who treats their stack with the same
              care they would.
            </p>
          </motion.div>

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            className="col-span-12 lg:col-span-5 bento-card-feature p-10 flex flex-col justify-between min-h-[300px]"
          >
            <span className="font-mono text-xs text-muted-foreground uppercase tracking-wider">Mission</span>
            <p className="text-2xl md:text-3xl font-display font-medium leading-snug text-balance">
              "To build the invisible infrastructure that lets businesses run on{' '}
              <span className="gradient-text">autopilot, deliberately.</span>"
            </p>
          </motion.div>

          {/* Values */}
          {values.map((v, i) => {
            const Icon = v.icon;
            return (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
                viewport={{ once: true }}
                className="col-span-12 sm:col-span-6 lg:col-span-3 bento-card p-6"
              >
                <Icon className="w-5 h-5 text-mycelium-lime mb-4" />
                <h3 className="font-display font-medium mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground">{v.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
