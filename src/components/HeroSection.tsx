import { motion } from 'framer-motion';
import { ArrowUpRight, Zap, GitBranch, Code2, Sparkles, Activity } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[600px] glow-orb pointer-events-none" />
      <div className="absolute inset-0 grid-pattern opacity-40 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-8"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-card/60 border border-border/60 backdrop-blur-sm">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-mycelium-lime opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-mycelium-lime" />
            </span>
            <span className="text-xs text-muted-foreground font-mono uppercase tracking-wider">
              Available for new projects
            </span>
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-center text-5xl md:text-7xl lg:text-8xl font-display font-medium mb-6 leading-[1.02] tracking-tight text-balance max-w-5xl mx-auto"
        >
          Where systems<br />
          <span className="italic font-light text-muted-foreground">connect, </span>
          <span className="gradient-text">work flows.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          A boutique integration studio building automations, APIs, and web platforms
          that turn fragmented tools into one quietly powerful system.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-3 justify-center mb-20"
        >
          <Button variant="hero" size="lg" asChild className="rounded-full">
            <a href="#contact" className="flex items-center gap-2">
              Start your project
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </Button>
          <Button variant="heroOutline" size="lg" asChild className="rounded-full">
            <a href="#portfolio">See selected work</a>
          </Button>
        </motion.div>

        {/* Bento preview grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-12 gap-3 max-w-6xl mx-auto"
        >
          {/* Big feature card */}
          <div className="col-span-12 md:col-span-7 bento-card-feature p-8 min-h-[280px] flex flex-col justify-between noise-overlay">
            <div className="flex items-start justify-between">
              <span className="tag-chip">
                <Sparkles className="w-3 h-3" /> Flagship
              </span>
              <ArrowUpRight className="w-5 h-5 text-mycelium-lime" />
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-display font-medium mb-3 text-balance">
                End-to-end automation that pays for itself in weeks.
              </h3>
              <p className="text-sm text-muted-foreground">
                n8n · Zapier · Xano · SnapLogic — orchestrated.
              </p>
            </div>
          </div>

          {/* Stat 1 */}
          <div className="col-span-6 md:col-span-5 bento-card p-6 min-h-[280px] md:min-h-0 flex flex-col justify-between">
            <span className="tag-chip"><Activity className="w-3 h-3" /> Impact</span>
            <div>
              <div className="text-5xl md:text-6xl font-display font-medium mb-1 gradient-text">12k+</div>
              <p className="text-sm text-muted-foreground">workflow runs orchestrated monthly</p>
            </div>
          </div>

          {/* Three small cards */}
          <div className="col-span-6 md:col-span-4 bento-card p-6 group">
            <Zap className="w-6 h-6 text-mycelium-lime mb-4" />
            <h4 className="font-display font-medium mb-1">Automation</h4>
            <p className="text-sm text-muted-foreground">Workflows that just run.</p>
          </div>
          <div className="col-span-6 md:col-span-4 bento-card p-6 group">
            <GitBranch className="w-6 h-6 text-mycelium-teal mb-4" />
            <h4 className="font-display font-medium mb-1">Integration</h4>
            <p className="text-sm text-muted-foreground">APIs that speak fluently.</p>
          </div>
          <div className="col-span-12 md:col-span-4 bento-card p-6 group">
            <Code2 className="w-6 h-6 text-mycelium-lime mb-4" />
            <h4 className="font-display font-medium mb-1">Web Platforms</h4>
            <p className="text-sm text-muted-foreground">Next.js · Spring Boot.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
