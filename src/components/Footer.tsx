import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter } from 'lucide-react';
import logo from '@/assets/mycelium-logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const links = {
    services: [
      { label: 'Workflow Automation', href: '#services' },
      { label: 'System Integration', href: '#services' },
      { label: 'Web Development', href: '#services' },
      { label: 'Custom Solutions', href: '#services' },
    ],
    company: [
      { label: 'About', href: '#about' },
      { label: 'Portfolio', href: '#portfolio' },
      { label: 'Contact', href: '#contact' },
    ],
    technologies: [
      { label: 'n8n', href: '#expertise' },
      { label: 'Zapier', href: '#expertise' },
      { label: 'SnapLogic', href: '#expertise' },
      { label: 'Next.js', href: '#expertise' },
    ],
  };

  const socialLinks = [
    { icon: <Twitter className="w-5 h-5" />, href: '#', label: 'Twitter' },
    { icon: <Linkedin className="w-5 h-5" />, href: '#', label: 'LinkedIn' },
    { icon: <Github className="w-5 h-5" />, href: '#', label: 'GitHub' },
  ];

  return (
    <footer className="bg-mycelium-deep border-t border-border">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-2">
            <img src={logo} alt="Mycelium" className="h-10 w-auto mb-4" />
            <p className="text-muted-foreground mb-6 max-w-sm">
              Where Systems Connect. We build seamless integrations and powerful web applications that transform how businesses operate.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  aria-label={link.label}
                  className="w-10 h-10 rounded-lg bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-mycelium-lime hover:border-mycelium-lime/30 transition-all duration-300"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              {links.services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {links.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div>
            <h4 className="font-display font-semibold mb-4">Technologies</h4>
            <ul className="space-y-3">
              {links.technologies.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Mycelium. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
