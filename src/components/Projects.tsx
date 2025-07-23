import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { ExternalLink, Github, Eye } from 'lucide-react';
import project1 from '@/assets/project-1.jpg';
import project2 from '@/assets/project-2.jpg';
import project3 from '@/assets/project-3.jpg';

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  demoUrl: string;
  githubUrl: string;
  featured: boolean;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Analytics Dashboard Pro',
    description: 'Advanced data visualization platform with real-time analytics',
    longDescription: 'A comprehensive analytics dashboard built with React, D3.js, and Node.js. Features real-time data processing, interactive charts, and AI-powered insights. Handles millions of data points with optimized performance.',
    image: project1,
    technologies: ['React', 'TypeScript', 'D3.js', 'Node.js', 'PostgreSQL', 'Redis'],
    demoUrl: '#',
    githubUrl: '#',
    featured: true
  },
  {
    id: 2,
    title: 'E-Commerce Mobile App',
    description: 'Full-stack e-commerce solution with payment integration',
    longDescription: 'Modern e-commerce platform with React Native frontend and Node.js backend. Features include user authentication, payment processing, inventory management, and admin dashboard with real-time notifications.',
    image: project2,
    technologies: ['React Native', 'Express.js', 'Stripe', 'MongoDB', 'Socket.io'],
    demoUrl: '#',
    githubUrl: '#',
    featured: true
  },
  {
    id: 3,
    title: 'CryptoTrader Platform',
    description: 'Cryptocurrency trading platform with live market data',
    longDescription: 'Professional trading platform with WebSocket connections for real-time market data, advanced charting, portfolio management, and automated trading strategies. Built for high-frequency trading with minimal latency.',
    image: project3,
    technologies: ['Vue.js', 'Python', 'WebSocket', 'TradingView', 'Docker'],
    demoUrl: '#',
    githubUrl: '#',
    featured: false
  }
];

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <Card 
      className={`group glass border-glass-border overflow-hidden hover:scale-105 transition-all duration-500 ${
        project.featured ? 'md:col-span-2' : ''
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className={`absolute inset-0 bg-gradient-to-t from-background/80 to-transparent transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`} />
        
        {/* Overlay Actions */}
        <div className={`absolute inset-0 flex items-center justify-center gap-4 transition-all duration-300 ${
          isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <Button size="sm" className="electric-glow">
            <Eye className="w-4 h-4 mr-2" />
            Live Demo
          </Button>
          <Button size="sm" variant="outline" className="glass border-glass-border">
            <Github className="w-4 h-4 mr-2" />
            Code
          </Button>
        </div>
        
        {/* Featured Badge */}
        {project.featured && (
          <Badge className="absolute top-4 left-4 bg-cyber text-cyber-foreground">
            ⭐ Featured
          </Badge>
        )}
      </div>
      
      {/* Content */}
      <div className="p-6 space-y-4">
        <div>
          <h3 className="text-xl font-bold text-foreground mb-2">{project.title}</h3>
          <p className="text-muted-foreground">{project.description}</p>
        </div>
        
        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <Badge key={tech} variant="secondary" className="text-xs">
              {tech}
            </Badge>
          ))}
        </div>
        
        {/* Links */}
        <div className="flex gap-3 pt-2">
          <Button variant="outline" size="sm" className="flex-1 glass border-glass-border">
            <ExternalLink className="w-4 h-4 mr-2" />
            Demo
          </Button>
          <Button variant="outline" size="sm" className="flex-1 glass border-glass-border">
            <Github className="w-4 h-4 mr-2" />
            GitHub
          </Button>
        </div>
      </div>
    </Card>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 glass border-glass-border">
            🚀 Featured Work
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Recent <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of innovative solutions and cutting-edge applications I've built
          </p>
        </div>
        
        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
        
        {/* Call to Action */}
        <div className="text-center">
          <div className="glass rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Want to see more?</h3>
            <p className="text-muted-foreground mb-6">
              Check out my GitHub profile for more projects and contributions to open source
            </p>
            <Button className="electric-glow">
              <Github className="w-4 h-4 mr-2" />
              View All Projects
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;