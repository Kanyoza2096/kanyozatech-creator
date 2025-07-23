import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Mail, MapPin, Phone, Send, Github, Linkedin, Twitter } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message sent successfully!",
      description: "I'll get back to you as soon as possible.",
    });
    
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'hello@kanyozatech.dev',
      href: 'mailto:hello@kanyozatech.dev'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (555) 123-4567',
      href: 'tel:+15551234567'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'San Francisco, CA',
      href: '#'
    }
  ];

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' }
  ];

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 glass border-glass-border">
            📬 Get In Touch
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's Build Something <span className="gradient-text">Amazing</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how we can bring your ideas to life
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="glass border-glass-border p-8">
            <h3 className="text-2xl font-bold mb-6 text-foreground">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="glass border-glass-border focus:ring-electric"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="glass border-glass-border focus:ring-electric"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="glass border-glass-border focus:ring-electric"
                  placeholder="Project inquiry"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="glass border-glass-border focus:ring-electric resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full electric-glow"
              >
                {isSubmitting ? (
                  <>Sending...</>
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            {/* Info Cards */}
            <div className="space-y-4">
              {contactInfo.map((info) => (
                <Card key={info.label} className="glass border-glass-border p-6 hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary/20 rounded-full">
                      <info.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{info.label}</h4>
                      <a href={info.href} className="text-muted-foreground hover:text-primary transition-colors">
                        {info.value}
                      </a>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Social Links */}
            <Card className="glass border-glass-border p-6">
              <h4 className="font-semibold text-foreground mb-4">Follow Me</h4>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="p-3 glass rounded-full hover:scale-110 transition-all duration-300 electric-glow"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </Card>

            {/* Availability */}
            <Card className="glass border-glass-border p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <h4 className="font-semibold text-foreground">Available for Projects</h4>
              </div>
              <p className="text-muted-foreground text-sm">
                Currently accepting new client projects and collaborations. 
                Let's discuss how I can help bring your vision to life.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;