import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, ArrowRight } from 'lucide-react';

const projects = [
  {
    title: 'E-commerce Automation Hub',
    description: 'Built a complete order processing system connecting Shopify, inventory management, and shipping providers using n8n workflows.',
    tags: ['n8n', 'Shopify', 'API Integration'],
    category: 'Automation',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&auto=format&fit=crop&q=80',
  },
  {
    title: 'Enterprise Data Pipeline',
    description: 'Designed and implemented a real-time data synchronization system for a Fortune 500 company using SnapLogic.',
    tags: ['SnapLogic', 'Enterprise', 'Real-time'],
    category: 'Integration',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80',
  },
  {
    title: 'SaaS Dashboard Platform',
    description: 'Developed a modern analytics dashboard using Next.js with real-time data updates and interactive visualizations.',
    tags: ['Next.js', 'React', 'TypeScript'],
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80',
  },
  {
    title: 'CRM Integration Suite',
    description: 'Created a seamless integration between Salesforce, HubSpot, and custom internal tools using Zapier and custom APIs.',
    tags: ['Zapier', 'Salesforce', 'HubSpot'],
    category: 'Automation',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop&q=80',
  },
  {
    title: 'Fintech Backend System',
    description: 'Built a secure, scalable backend for a payment processing platform using Spring Boot with microservices architecture.',
    tags: ['Spring Boot', 'Microservices', 'Security'],
    category: 'Development',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&auto=format&fit=crop&q=80',
  },
  {
    title: 'No-Code App Backend',
    description: 'Developed a complete backend infrastructure using Xano for a mobile application, handling authentication and data management.',
    tags: ['Xano', 'No-Code', 'Mobile'],
    category: 'Backend',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&auto=format&fit=crop&q=80',
  },
];

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="group"
    >
      <div className="card-glass rounded-2xl overflow-hidden hover:border-mycelium-lime/30 transition-all duration-500 hover:-translate-y-2">
        {/* Image */}
        <div className="relative h-56 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
          
          {/* Category Badge */}
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-mycelium-lime/20 text-mycelium-lime border border-mycelium-lime/30">
              {project.category}
            </span>
          </div>
          
          {/* Hover Icon */}
          <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="w-10 h-10 rounded-full bg-mycelium-lime flex items-center justify-center text-primary-foreground">
              <ExternalLink className="w-5 h-5" />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-display font-semibold mb-3 group-hover:text-mycelium-lime transition-colors">
            {project.title}
          </h3>
          <p className="text-muted-foreground mb-4 line-clamp-2">{project.description}</p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 rounded-md text-xs bg-secondary text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const PortfolioSection = () => {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: '-100px' });

  return (
    <section id="portfolio" className="py-32 relative">
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
            Our Work
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Explore some of our recent projects where we've helped businesses transform their operations through smart integrations and modern web solutions.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-mycelium-lime hover:gap-3 transition-all duration-300 text-lg font-medium"
          >
            Start your project with us <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSection;
