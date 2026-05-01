import { Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const year = new Date().getFullYear();

  const links = {
    services: [
      { label: 'Workflow Automation', href: '#services' },
      { label: 'System Integration', href: '#services' },
      { label: 'Web Development', href: '#services' },
      { label: 'Custom Solutions', href: '#services' },
    ],
    company: [
      { label: 'About', href: '#about' },
      { label: 'Process', href: '#process' },
      { label: 'Work', href: '#portfolio' },
      { label: 'Contact', href: '#contact' },
    ],
    stack: [
      { label: 'n8n', href: '#expertise' },
      { label: 'Zapier', href: '#expertise' },
      { label: 'SnapLogic', href: '#expertise' },
      { label: 'Next.js', href: '#expertise' },
    ],
  };

  const socials = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Github, href: '#', label: 'GitHub' },
  ];

  return (
    <footer className="relative z-20 border-t border-border/60 mt-20">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10">
          <div className="col-span-2 lg:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 rounded-lg bg-mycelium-lime flex items-center justify-center">
                <div className="w-3 h-3 rounded-sm bg-mycelium-deep" />
              </div>
              <span className="text-lg font-display font-semibold">Mycelium</span>
            </a>
            <p className="text-sm text-muted-foreground mb-6 max-w-sm leading-relaxed">
              A boutique integration studio. Where systems connect, work flows.
            </p>
            <div className="flex gap-2">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-full bg-card/60 border border-border/60 flex items-center justify-center text-muted-foreground hover:text-mycelium-lime hover:border-mycelium-lime/40 transition-all"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {[
            { title: 'Services', items: links.services },
            { title: 'Company', items: links.company },
            { title: 'Stack', items: links.stack },
          ].map((col) => (
            <div key={col.title}>
              <h4 className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-4">{col.title}</h4>
              <ul className="space-y-2.5">
                {col.items.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="text-sm text-foreground/80 hover:text-mycelium-lime transition-colors">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-border/60 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs font-mono text-muted-foreground">© {year} MYCELIUM · ALL RIGHTS RESERVED</p>
          <div className="flex gap-6 text-xs font-mono text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors uppercase">Privacy</a>
            <a href="#" className="hover:text-foreground transition-colors uppercase">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
