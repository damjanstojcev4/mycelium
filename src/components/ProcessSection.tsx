import { motion } from 'framer-motion';
import { Compass, PencilRuler, Hammer, Rocket } from 'lucide-react';

const steps = [
  {
    n: '01',
    icon: Compass,
    title: 'Discover',
    description: 'A 30-min call to map your stack, surface bottlenecks, and align on outcomes. You leave with clarity, even if we don\'t work together.',
    duration: '~1 week',
  },
  {
    n: '02',
    icon: PencilRuler,
    title: 'Design',
    description: 'A written architecture proposal: tools chosen, data flows diagrammed, fixed scope and price. No surprises after this point.',
    duration: '1–2 weeks',
  },
  {
    n: '03',
    icon: Hammer,
    title: 'Build',
    description: 'Weekly demos, async updates, full visibility. We build in milestones so you see value compound, not just at the end.',
    duration: '4–8 weeks',
  },
  {
    n: '04',
    icon: Rocket,
    title: 'Launch & care',
    description: 'Phased rollout, monitoring, documentation, and a handover that actually transfers ownership. Optional retainer for what comes next.',
    duration: 'Ongoing',
  },
];

const ProcessSection = () => {
  return (
    <section id="process" className="py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-16"
        >
          <span className="tag-chip mb-6">How we work</span>
          <h2 className="text-4xl md:text-6xl font-display font-medium mb-6 leading-[1.05] text-balance">
            A predictable process,<br />
            <span className="gradient-text">not a black box.</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl">
            Four phases. Clear deliverables at each. You always know what's next and what it costs.
          </p>
        </motion.div>

        <div className="grid grid-cols-12 gap-3">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.n}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true, margin: '-50px' }}
                className="col-span-12 md:col-span-6 lg:col-span-3 bento-card p-7 group relative overflow-hidden"
              >
                <div className="absolute -top-2 -right-2 text-7xl font-display font-medium text-mycelium-lime/5 group-hover:text-mycelium-lime/10 transition-colors">
                  {step.n}
                </div>

                <div className="relative">
                  <div className="w-11 h-11 rounded-2xl bg-mycelium-lime/10 border border-mycelium-lime/20 flex items-center justify-center text-mycelium-lime mb-6">
                    <Icon className="w-5 h-5" />
                  </div>

                  <span className="font-mono text-xs text-muted-foreground uppercase tracking-wider block mb-2">
                    Phase {step.n}
                  </span>
                  <h3 className="text-xl font-display font-medium mb-3">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    {step.description}
                  </p>

                  <div className="pt-4 border-t border-border/60">
                    <span className="font-mono text-xs text-mycelium-lime">{step.duration}</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
