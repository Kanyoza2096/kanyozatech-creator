import { useState, useEffect, useRef } from 'react';
import { Badge } from '@/components/ui/badge';

interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'database' | 'tools';
}

const skills: Skill[] = [
  // Frontend
  { name: 'React', level: 95, category: 'frontend' },
  { name: 'TypeScript', level: 90, category: 'frontend' },
  { name: 'Next.js', level: 88, category: 'frontend' },
  { name: 'Vue.js', level: 85, category: 'frontend' },
  { name: 'Tailwind CSS', level: 92, category: 'frontend' },
  
  // Backend
  { name: 'Node.js', level: 90, category: 'backend' },
  { name: 'Python', level: 85, category: 'backend' },
  { name: 'Express.js', level: 88, category: 'backend' },
  { name: 'Django', level: 80, category: 'backend' },
  { name: 'GraphQL', level: 82, category: 'backend' },
  
  // Database
  { name: 'PostgreSQL', level: 85, category: 'database' },
  { name: 'MongoDB', level: 88, category: 'database' },
  { name: 'Redis', level: 75, category: 'database' },
  { name: 'Supabase', level: 90, category: 'database' },
  
  // Tools
  { name: 'Docker', level: 80, category: 'tools' },
  { name: 'AWS', level: 75, category: 'tools' },
  { name: 'Git', level: 92, category: 'tools' },
  { name: 'Figma', level: 85, category: 'tools' },
];

const categoryColors = {
  frontend: 'electric',
  backend: 'cyber',
  database: 'accent',
  tools: 'primary'
};

const SkillBar = ({ skill, inView }: { skill: Skill; inView: boolean }) => {
  const [width, setWidth] = useState(0);
  
  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => setWidth(skill.level), 200);
      return () => clearTimeout(timer);
    }
  }, [inView, skill.level]);
  
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="font-medium text-foreground">{skill.name}</span>
        <span className="text-sm text-muted-foreground">{skill.level}%</span>
      </div>
      <div className="h-2 bg-secondary rounded-full overflow-hidden skill-progress">
        <div 
          className="h-full rounded-full transition-all duration-1000 ease-out"
          style={{ 
            width: `${width}%`,
            backgroundColor: `hsl(var(--${categoryColors[skill.category]}))`
          }}
        />
      </div>
    </div>
  );
};

const Skills = () => {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.3 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => observer.disconnect();
  }, []);
  
  const categories = [
    { name: 'Frontend', key: 'frontend' as const, icon: '⚛️' },
    { name: 'Backend', key: 'backend' as const, icon: '⚙️' },
    { name: 'Database', key: 'database' as const, icon: '🗄️' },
    { name: 'Tools', key: 'tools' as const, icon: '🛠️' },
  ];
  
  return (
    <section ref={sectionRef} id="skills" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 glass border-glass-border">
            💻 Technical Expertise
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Constantly evolving skill set focused on modern web development technologies
          </p>
        </div>
        
        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category) => (
            <div key={category.key} className="glass rounded-2xl p-6 hover:scale-105 transition-transform duration-300">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">{category.icon}</span>
                <h3 className="text-xl font-bold text-foreground">{category.name}</h3>
              </div>
              
              <div className="space-y-4">
                {skills
                  .filter(skill => skill.category === category.key)
                  .map((skill) => (
                    <SkillBar key={skill.name} skill={skill} inView={inView} />
                  ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* Additional Info */}
        <div className="text-center mt-16">
          <div className="glass rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 gradient-text">Always Learning</h3>
            <p className="text-muted-foreground leading-relaxed">
              Technology evolves rapidly, and so do I. Currently exploring AI/ML integration, 
              Web3 technologies, and advanced cloud architectures to stay at the forefront 
              of full-stack development.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;