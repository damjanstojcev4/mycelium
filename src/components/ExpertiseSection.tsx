import { motion } from 'framer-motion';

const technologies = [
  { name: 'n8n', tag: 'Automation', mono: 'n8n.io' },
  { name: 'Zapier', tag: 'Automation', mono: 'zapier.com' },
  { name: 'SnapLogic', tag: 'iPaaS', mono: 'snaplogic.com' },
  { name: 'Xano', tag: 'Backend', mono: 'xano.com' },
  { name: 'Spring Boot', tag: 'Java', mono: 'spring.io' },
  { name: 'Next.js', tag: 'Frontend', mono: 'nextjs.org' },
];

const stats = [
  { value: '30+', label: 'Projects shipped' },
  { value: '99%', label: 'Client satisfaction' },
  { value: '12k+', label: 'Workflow runs / mo' },
  { value: '5+', label: 'Years building' },
];

const ExpertiseSection = () => {
  return (
    <section id="expertise" className="py-32 relative">
      <div className="absolute inset-0 dot-pattern opacity-40 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-16"
        >
          <span className="tag-chip mb-6">Stack</span>
          <h2 className="text-4xl md:text-6xl font-display font-medium mb-6 leading-[1.05] text-balance">
            The tools we<br />
            <span className="gradient-text">choose deliberately.</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl">
            We're tool-agnostic but opinionated. Below: the platforms we keep returning to because they earn it.
          </p>
        </motion.div>

        {/* Tech bento */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-20">
          {technologies.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              viewport={{ once: true }}
              className="bento-card p-6 group aspect-square flex flex-col justify-between"
            >
              <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider">
                {tech.tag}
              </span>
              <div>
                <div className="text-xl font-display font-medium mb-1 group-hover:gradient-text transition-all">
                  {tech.name}
                </div>
                <div className="font-mono text-[10px] text-muted-foreground/70">
                  {tech.mono}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats bento */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              viewport={{ once: true }}
              className="bento-card p-8"
            >
              <div className="text-4xl md:text-5xl font-display font-medium mb-2 gradient-text">
                {s.value}
              </div>
              <div className="text-sm text-muted-foreground">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
