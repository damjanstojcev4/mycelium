import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: 'E-commerce Automation Hub',
    description: 'Order processing, inventory sync, and shipping orchestration across five providers.',
    tags: ['n8n', 'Xano', 'Next.js'],
    category: 'Automation',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&auto=format&fit=crop&q=80',
    span: 'md:col-span-8 md:row-span-2',
  },
  {
    title: 'Enterprise Data Pipeline',
    description: 'Real-time data sync between SAP, Salesforce, and a custom data warehouse.',
    tags: ['SnapLogic', 'Real-time'],
    category: 'Integration',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80',
    span: 'md:col-span-4',
  },
  {
    title: 'SaaS Analytics Dashboard',
    description: 'A modern analytics dashboard with custom visualizations.',
    tags: ['Next.js', 'TypeScript'],
    category: 'Web Dev',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80',
    span: 'md:col-span-4',
  },
  {
    title: 'CRM Integration Suite',
    description: 'Bidirectional sync between Salesforce, HubSpot, and Slack via Zapier and custom APIs.',
    tags: ['Zapier', 'Salesforce', 'HubSpot'],
    category: 'Automation',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop&q=80',
    span: 'md:col-span-6',
  },
  {
    title: 'Lead Generation Workflow',
    description: 'Automated capture, enrichment, and routing pipeline that processes 5k+ leads/month.',
    tags: ['Next.js', 'Xano', 'n8n'],
    category: 'Automation',
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&auto=format&fit=crop&q=80',
    span: 'md:col-span-6',
  },
  {
    title: 'No-Code App Backend',
    description: 'Complete Xano backend powering a mobile app with auth, payments, and notifications.',
    tags: ['Xano', 'Mobile'],
    category: 'Backend',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&auto=format&fit=crop&q=80',
    span: 'md:col-span-12',
  },
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-16"
        >
          <span className="tag-chip mb-6">Selected Work</span>
          <h2 className="text-4xl md:text-6xl font-display font-medium mb-6 leading-[1.05] text-balance">
            Things we've<br />
            <span className="gradient-text">recently shipped.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-12 gap-3 auto-rows-[minmax(280px,auto)]">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true, margin: '-50px' }}
              className={`col-span-12 ${p.span} bento-card group cursor-pointer relative overflow-hidden`}
            >
              <div className="absolute inset-0 overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  className="w-full h-full object-cover opacity-25 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/85 to-card/30" />
              </div>

              <div className="relative h-full p-7 flex flex-col justify-between">
                <div className="flex items-start justify-between">
                  <span className="tag-chip">{p.category}</span>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-mycelium-lime group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
                </div>

                <div>
                  <h3 className="text-xl md:text-2xl font-display font-medium mb-2 group-hover:gradient-text transition-all text-balance">
                    {p.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 max-w-md">
                    {p.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {p.tags.map((t) => (
                      <span key={t} className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider">
                        {t}
                      </span>
                    )).reduce((prev, curr, idx) => idx === 0 ? [curr] : [...prev, <span key={`d${idx}`} className="text-muted-foreground/40">·</span>, curr], [] as React.ReactNode[])}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
