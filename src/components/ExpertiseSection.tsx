import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const technologies = [
  {
    name: 'n8n',
    description: 'Visual workflow automation',
    category: 'Automation',
    color: 'from-orange-500 to-red-500',
  },
  {
    name: 'Zapier',
    description: 'Connect apps, automate tasks',
    category: 'Automation',
    color: 'from-orange-400 to-orange-600',
  },
  {
    name: 'SnapLogic',
    description: 'Enterprise integration platform',
    category: 'Integration',
    color: 'from-blue-400 to-blue-600',
  },
  {
    name: 'Xano',
    description: 'No-code backend platform',
    category: 'Backend',
    color: 'from-purple-400 to-purple-600',
  },
  {
    name: 'Spring Boot',
    description: 'Java enterprise framework',
    category: 'Development',
    color: 'from-green-500 to-green-700',
  },
  {
    name: 'Next.js',
    description: 'React production framework',
    category: 'Development',
    color: 'from-gray-600 to-gray-800',
  },
];

const TechCard = ({ tech, index }: { tech: typeof technologies[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9, y: 30 }}
      animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.9, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <div className="card-glass rounded-2xl p-6 text-center hover:border-mycelium-lime/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-mycelium-lime/10">
        {/* Gradient Badge */}
        <div className={`inline-flex px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${tech.color} text-white mb-4`}>
          {tech.category}
        </div>
        
        {/* Tech Name */}
        <h3 className="text-xl font-display font-semibold mb-2 group-hover:text-mycelium-lime transition-colors">
          {tech.name}
        </h3>
        
        {/* Description */}
        <p className="text-sm text-muted-foreground">{tech.description}</p>
      </div>
    </motion.div>
  );
};

const ExpertiseSection = () => {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: '-100px' });

  return (
    <section id="expertise" className="py-32 relative bg-mycelium-deep">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Technology <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            We master the tools that power modern integrations and web applications, delivering robust solutions that scale.
          </p>
        </motion.div>

        {/* Tech Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {technologies.map((tech, index) => (
            <TechCard key={tech.name} tech={tech} index={index} />
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-20 border-t border-border"
        >
          {[
            { value: '30+', label: 'Projects Delivered' },
            { value: '20+', label: 'Happy Clients' },
            { value: '5+', label: 'Years Experience' },
            { value: '99%', label: 'Client Satisfaction' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-display font-bold gradient-text mb-2">
                {stat.value}
              </div>
              <div className="text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
