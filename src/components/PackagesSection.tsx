import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Check, Zap, Rocket, Crown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const packages = [
  {
    name: 'Starter',
    icon: Zap,
    price: '€799',
    period: 'per project',
    description: 'For small businesses needing a clean web presence or first automations.',
    features: [
      'Up to 3 workflow automations',
      'Up to 2 system integrations',
      'Single-page or landing site',
      'Responsive design',
      'Contact form automation',
      'Basic SEO setup',
      '30-day delivery',
      '1 revision round',
    ],
    popular: false,
  },
  {
    name: 'Professional',
    icon: Rocket,
    price: '€1,799',
    period: 'per project',
    description: 'Growing businesses that need automation plus a proper web presence.',
    features: [
      'Up to 10 workflow automations',
      'Up to 5 system integrations',
      'Multi-page site (up to 5)',
      'Performance-optimized build',
      'Custom internal dashboard',
      'Monitoring & error handling',
      '50-day delivery',
      '3 revision cycles',
      'Priority support',
    ],
    popular: true,
  },
  {
    name: 'Enterprise',
    icon: Crown,
    price: 'Custom',
    period: 'tailored quote',
    description: 'Custom-built automation and platforms for complex operations.',
    features: [
      'High-volume workflows',
      'Multi-system orchestration',
      'Custom web application',
      'Internal tools & portals',
      'Security & performance review',
      'Custom timeline & milestones',
      'Priority support + SLA',
      'Documentation & handover',
    ],
    popular: false,
  },
];

const PackagesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="packages" className="py-32 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] glow-orb pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16"
        >
          <span className="tag-chip mb-6">Engagement</span>
          <h2 className="text-4xl md:text-6xl font-display font-medium mb-6 leading-[1.05] text-balance">
            Three ways to<br />
            <span className="gradient-text">work with us.</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl">
            Transparent scopes, fixed pricing, no surprises. Start small or come straight to the deep end.
          </p>
        </motion.div>

        <div className="grid grid-cols-12 gap-3">
          {packages.map((pkg, index) => {
            const Icon = pkg.icon;
            return (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`col-span-12 md:col-span-4 ${pkg.popular ? 'bento-card-feature' : 'bento-card'} p-8 flex flex-col relative`}
              >
                {pkg.popular && (
                  <div className="absolute top-6 right-6">
                    <span className="tag-chip border-mycelium-lime/40 text-mycelium-lime">Most popular</span>
                  </div>
                )}

                <div
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 border ${
                    pkg.popular
                      ? 'bg-mycelium-lime/10 border-mycelium-lime/30 text-mycelium-lime'
                      : 'bg-secondary border-border text-muted-foreground'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                </div>

                <h3 className="text-2xl font-display font-medium mb-2">{pkg.name}</h3>
                <p className="text-sm text-muted-foreground mb-6 min-h-[3rem]">
                  {pkg.description}
                </p>

                <div className="mb-8 pb-8 border-b border-border/60">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-display font-medium">{pkg.price}</span>
                    <span className="text-sm text-muted-foreground">/ {pkg.period}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm">
                      <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 ${pkg.popular ? 'text-mycelium-lime' : 'text-mycelium-teal'}`} />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant={pkg.popular ? 'hero' : 'heroOutline'}
                  size="lg"
                  className="w-full rounded-full mt-auto"
                  asChild
                >
                  <a href="#contact">
                    {pkg.name === 'Enterprise' ? 'Request consultation' : 'Get started'}
                  </a>
                </Button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PackagesSection;
