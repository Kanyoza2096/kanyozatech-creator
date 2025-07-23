import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import heroBackground from '@/assets/hero-bg.jpg';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'Full Stack Developer';
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    
    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-electric rounded-full animate-pulse" />
      <div className="absolute top-40 right-20 w-3 h-3 bg-cyber rounded-full animate-pulse delay-300" />
      <div className="absolute bottom-40 left-1/4 w-1 h-1 bg-electric-glow rounded-full animate-pulse delay-700" />
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div className="space-y-8">
          {/* Logo/Brand */}
          <div className="inline-block glass rounded-2xl px-8 py-4 mb-8">
            <h2 className="text-2xl font-bold gradient-text tracking-wider">
              KANYOZA<span className="text-cyber">TECH</span>
            </h2>
          </div>
          
          {/* Main heading with typing effect */}
          <h1 className="text-6xl md:text-8xl font-bold mb-6">
            <span className="block text-foreground">Hi, I'm a</span>
            <span className="block gradient-text typing-cursor">
              {displayText}
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Crafting innovative web solutions with cutting-edge technologies. 
            Passionate about creating seamless user experiences and scalable applications.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 electric-glow rounded-full px-8 py-6 text-lg font-semibold"
              onClick={() => scrollToSection('projects')}
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="glass border-glass-border hover:bg-glass rounded-full px-8 py-6 text-lg"
              onClick={() => scrollToSection('contact')}
            >
              Get In Touch
            </Button>
          </div>
          
          {/* Social links */}
          <div className="flex justify-center space-x-6 pt-8">
            <a 
              href="#" 
              className="p-3 glass rounded-full hover:scale-110 transition-transform duration-300 electric-glow"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="#" 
              className="p-3 glass rounded-full hover:scale-110 transition-transform duration-300 cyber-glow"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="#" 
              className="p-3 glass rounded-full hover:scale-110 transition-transform duration-300 electric-glow"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-electric" />
        </div>
      </div>
    </section>
  );
};

export default Hero;