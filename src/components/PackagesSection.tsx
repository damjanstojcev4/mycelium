import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Check, Zap, Rocket, Crown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const packages = [
  {
  name: 'Starter',
  icon: <Zap className="w-6 h-6" />,
  price: '€799',
  period: 'per project',
  description: 'Best for small businesses needing basic automation or a simple web presence.',
  features: [
    // Automation & Integrations
    'Up to 3 workflow automations',
    'Up to 2 system integrations (Zapier, n8n, Make, APIs)',
    'Basic data sync or form automation',

    // Web Development
    'Single-page website or landing page',
    'Responsive design (mobile, tablet, desktop)',
    'Contact form with automation (email, CRM, Google Sheets, etc.)',
    'Basic SEO setup',

    // Delivery & Support
    '30-day delivery',
    '1 revision round',
    'Basic support (email)',
  ],
  popular: false,
},
{
  name: 'Professional',
  icon: <Rocket className="w-6 h-6" />,
  price: '€1,799',
  period: 'per project',
  description: 'Ideal for growing businesses that need automation and a professional web solution.',
  features: [
    // Automation & Integrations
    'Up to 10 workflow automations',
    'Up to 5 system integrations (Zapier, n8n, Xano, APIs)',
    'Advanced logic, conditions, and data handling',

    // Web Development
    'Multi-page website (up to 5 pages)',
    'Responsive & performance-optimized design',
    'Forms connected to automations or CRMs',
    'Basic on-page SEO setup',

    // Dashboards & Visibility
    'Custom internal dashboard',
    'Automation monitoring & error handling',

    // Delivery & Support
    '50-day delivery',
    '3 feedback & revision cycles',
    'Priority support',
    'Documentation included',
  ],
  popular: true,
}
,
  {
  name: 'Enterprise',
  icon: <Crown className="w-6 h-6" />,
  price: 'Custom',
  period: 'tailored quote',
  description: 'Custom-built automation and web systems for complex business operations.',
  features: [
    // Automation & Integrations
    'High-volume workflow automations',
    'Multiple system integrations (APIs, databases, CRMs, etc.)',
    'Advanced business logic & data orchestration',

    // Web & Platforms
    'Custom web application or platform',
    'Internal tools, dashboards, or portals',
    'Security & performance best practices',

    // Delivery & Governance
    'Custom delivery timeline',
    'Defined project scope & milestones',
    'Change requests handled separately',

    // Support & Reliability
    'Priority support',
    'Optional SLA & monitoring add-on',
    'Technical documentation & handover',
  ],
  popular: false,
}
,
];

const PackagesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="packages" className="py-32 relative">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-mycelium-lime/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-mycelium-lime text-sm font-medium tracking-wider uppercase mb-4 block">
            Packages
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Choose Your <span className="gradient-text">Plan</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Flexible pricing options designed to match your business needs and
            growth stage.
          </p>
        </motion.div>

        {/* Packages Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative rounded-3xl p-8 border transition-all duration-300 hover:-translate-y-2 flex flex-col ${
                pkg.popular
                  ? "bg-gradient-to-b from-mycelium-lime/10 to-mycelium-teal/5 border-mycelium-lime/30 shadow-lg shadow-mycelium-lime/10"
                  : "bg-card/50 border-border hover:border-mycelium-lime/20"
              }`}
            >
              {/* Popular Badge */}
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1.5 rounded-full bg-gradient-to-r from-mycelium-lime to-mycelium-teal text-mycelium-deep text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Icon */}
              <div
                className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${
                  pkg.popular
                    ? "bg-gradient-to-br from-mycelium-lime to-mycelium-teal text-mycelium-deep"
                    : "bg-gradient-to-br from-mycelium-lime/20 to-mycelium-teal/20 text-mycelium-lime"
                }`}
              >
                {pkg.icon}
              </div>

              {/* Package Info */}
              <h3 className="text-2xl font-display font-bold mb-2">
                {pkg.name}
              </h3>
              <p className="text-muted-foreground text-sm mb-6">
                {pkg.description}
              </p>

              {/* Price */}
              <div className="mb-8">
                <span className="text-4xl font-display font-bold">
                  {pkg.price}
                </span>
                <span className="text-muted-foreground ml-2">
                  / {pkg.period}
                </span>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check
                      className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                        pkg.popular
                          ? "text-mycelium-lime"
                          : "text-mycelium-teal"
                      }`}
                    />
                    <span className="text-sm text-muted-foreground">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button
                variant={pkg.popular ? "hero" : "heroOutline"}
                size="lg"
                className="w-full mt-auto"
                asChild
              >
                <a href="#contact">
                  {pkg.name === "Starter" && "Get Started"}
                  {pkg.name === "Professional" && "Start Your Project"}
                  {pkg.name === "Enterprise" && "Request a Consultation"}
                </a>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PackagesSection;
