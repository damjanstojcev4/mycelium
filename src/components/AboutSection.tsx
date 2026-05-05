import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Target, Lightbulb, Users, Shield } from 'lucide-react';

const values = [
  {
    icon: <Target className="w-6 h-6" />,
    title: 'Results-Driven',
    description: 'We focus on delivering measurable outcomes that directly impact your business growth.',
  },
  {
    icon: <Lightbulb className="w-6 h-6" />,
    title: 'Innovation First',
    description: 'We stay ahead of technology trends to bring you cutting-edge solutions.',
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: 'Partnership Approach',
    description: 'We work as an extension of your team, invested in your long-term success.',
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: 'Quality & Security',
    description: 'Every solution is built with security best practices and rigorous quality standards.',
  },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-32 relative bg-mycelium-deep">
      {/* Background Gradient */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-mycelium-lime/5 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Building Digital <span className="gradient-text">Connections</span> That Matter
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Like mycelium networks that connect forests underground, we create the invisible infrastructure that connects your business systems, enabling them to communicate, share data, and work together seamlessly.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Founded with a passion for elegant solutions, we specialize in turning complex integration challenges into streamlined, automated workflows. Our expertise spans from no-code platforms to enterprise-grade development, allowing us to find the perfect solution for every challenge.
            </p>

            {/* Mission Statement */}
            <div className="p-6 rounded-2xl bg-card border border-border">
              <h3 className="text-xl font-display font-semibold mb-3">Our Mission</h3>
              <p className="text-muted-foreground italic">
                "To empower businesses by creating seamless digital ecosystems where systems connect, data flows freely, and automation drives growth."
              </p>
            </div>
          </motion.div>

          {/* Values Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="p-6 rounded-2xl bg-card/50 border border-border hover:border-mycelium-lime/30 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-mycelium-lime/20 to-mycelium-teal/20 flex items-center justify-center text-mycelium-lime mb-4">
                  {value.icon}
                </div>
                <h3 className="text-lg font-display font-semibold mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
