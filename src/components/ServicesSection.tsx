import { motion } from 'framer-motion';
import { Workflow, Layers, Code2, Cog, ArrowUpRight } from 'lucide-react';

const services = [
  {
    icon: Workflow,
    eyebrow: '01 / Automate',
    title: 'Workflow Automation',
    description: 'Replace manual handoffs with reliable, observable workflows. Triggers, branching, retries, alerting — handled.',
    features: ['n8n & Zapier', 'Make / Pipedream', 'Custom triggers', 'Error handling'],
    span: 'md:col-span-7',
    accent: 'lime',
  },
  {
    icon: Layers,
    eyebrow: '02 / Integrate',
    title: 'System Integration',
    description: 'Bridge CRMs, databases, APIs, and legacy systems into a single source of truth.',
    features: ['REST & GraphQL', 'Webhooks', 'Data sync', 'iPaaS'],
    span: 'md:col-span-5',
    accent: 'teal',
  },
  {
    icon: Code2,
    eyebrow: '03 / Build',
    title: 'Web Platforms',
    description: 'Production-grade Next.js front-ends and Spring Boot services. Performance and accessibility by default.',
    features: ['Next.js', 'Spring Boot', 'Xano backends', 'TypeScript'],
    span: 'md:col-span-5',
    accent: 'lime',
  },
  {
    icon: Cog,
    eyebrow: '04 / Tailor',
    title: 'Custom Solutions',
    description: 'When the off-the-shelf tool stops scaling, we design the bespoke service that takes its place.',
    features: ['Microservices', 'Internal tools', 'Cloud native', 'DevOps'],
    span: 'md:col-span-7',
    accent: 'teal',
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
          className="max-w-3xl mb-16"
        >
          <span className="tag-chip mb-6">Services</span>
          <h2 className="text-4xl md:text-6xl font-display font-medium mb-6 leading-[1.05] text-balance">
            Four practices,<br />
            <span className="text-muted-foreground italic font-light">one connected </span>
            <span className="gradient-text">system.</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl">
            Each engagement combines automation, integration, and engineering — sized to the problem in front of us.
          </p>
        </motion.div>

        <div className="grid grid-cols-12 gap-3">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true, margin: '-50px' }}
                className={`col-span-12 ${service.span} bento-card p-8 group cursor-default`}
              >
                <div className="flex items-start justify-between mb-8">
                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center border ${
                      service.accent === 'lime'
                        ? 'bg-mycelium-lime/10 border-mycelium-lime/20 text-mycelium-lime'
                        : 'bg-mycelium-teal/10 border-mycelium-teal/20 text-mycelium-teal'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-xs text-muted-foreground uppercase tracking-wider">
                    {service.eyebrow}
                  </span>
                </div>

                <h3 className="text-2xl md:text-3xl font-display font-medium mb-3 group-hover:gradient-text transition-all">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-8 leading-relaxed max-w-md">
                  {service.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {service.features.map((f) => (
                    <span key={f} className="tag-chip">{f}</span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
