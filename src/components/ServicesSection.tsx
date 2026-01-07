import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Workflow, Code2, Cog, Layers, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: <Workflow className="w-8 h-8" />,
    title: 'Workflow Automation',
    description: 'Streamline your business processes with intelligent automation. We eliminate manual tasks and create efficient workflows that save time and reduce errors.',
    features: ['Process Mapping', 'Custom Triggers', 'Error Handling', 'Monitoring'],
  },
  {
    icon: <Layers className="w-8 h-8" />,
    title: 'System Integration',
    description: 'Connect your disparate systems into a unified ecosystem. We build bridges between your apps, databases, and services for seamless data flow.',
    features: ['API Development', 'Data Sync', 'Real-time Updates', 'Legacy Systems'],
  },
  {
    icon: <Code2 className="w-8 h-8" />,
    title: 'Web Development',
    description: 'Build modern, scalable web applications that deliver exceptional user experiences. From landing pages to complex enterprise solutions.',
    features: ['Responsive Design', 'Performance', 'Security', 'Scalability'],
  },
  {
    icon: <Cog className="w-8 h-8" />,
    title: 'Custom Solutions',
    description: 'When off-the-shelf doesn\'t cut it, we create tailored solutions. Custom APIs, microservices, and bespoke integrations for unique challenges.',
    features: ['Custom APIs', 'Microservices', 'Cloud Native', 'DevOps'],
  },
];

const ServiceCard = ({ service, index }: { service: typeof services[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="group relative"
    >
      <div className="card-glass rounded-2xl p-8 h-full hover:border-mycelium-lime/30 transition-all duration-500 hover:-translate-y-2">
        {/* Icon */}
        <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-mycelium-lime/20 to-mycelium-teal/20 flex items-center justify-center mb-6 text-mycelium-lime group-hover:scale-110 transition-transform duration-300">
          {service.icon}
        </div>

        {/* Content */}
        <h3 className="text-2xl font-display font-semibold mb-4">{service.title}</h3>
        <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>

        {/* Features */}
        <ul className="space-y-2 mb-6">
          {service.features.map((feature) => (
            <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
              <span className="w-1.5 h-1.5 rounded-full bg-mycelium-lime" />
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

const ServicesSection = () => {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: '-100px' });

  return (
    <section id="services" className="py-32 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="text-mycelium-lime text-sm font-medium tracking-wider uppercase mb-4 block">
            What We Do
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Services That <span className="gradient-text">Drive Results</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            From automation to web development, we provide comprehensive solutions that transform how your business operates.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
