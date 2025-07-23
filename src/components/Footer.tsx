import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:hello@kanyozatech.dev', label: 'Email' }
  ];

  const quickLinks = [
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative py-16 px-6 border-t border-glass-border">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background to-transparent" />
      
      <div className="relative max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold gradient-text">
              KANYOZA<span className="text-cyber">TECH</span>
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Passionate full-stack developer creating innovative web solutions 
              with cutting-edge technologies. Always pushing the boundaries of what's possible.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="p-2 glass rounded-full hover:scale-110 transition-all duration-300 electric-glow"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Quick Links</h4>
            <div className="space-y-2">
              {quickLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollToSection(link.href.replace('#', ''))}
                  className="block text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Get In Touch</h4>
            <div className="space-y-2 text-muted-foreground">
              <p>📧 hello@kanyozatech.dev</p>
              <p>📱 +1 (555) 123-4567</p>
              <p>📍 San Francisco, CA</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-glass-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm mb-4 md:mb-0">
              © {currentYear} KanyozaTech. All rights reserved.
            </p>
            <p className="text-muted-foreground text-sm flex items-center gap-1">
              Made with <Heart className="w-4 h-4 text-red-500 animate-pulse" /> using React & TypeScript
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;