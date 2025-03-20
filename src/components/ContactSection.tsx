
import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { toast } from 'sonner';
import GlitchText from './ui/GlitchText';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    setTimeout(() => {
      toast.success("Message sent successfully!");
      setFormData({ name: '', email: '', message: '' });
    }, 1000);
  };
  
  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      <div className="cyber-grid absolute inset-0 opacity-20"></div>
      <div className="scanline"></div>
      
      <div className="container max-w-7xl mx-auto px-6 z-10 relative">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <GlitchText 
              text="CONNECT" 
              as="h2" 
              color="red"
              className="text-3xl md:text-4xl font-bold mb-6 animate-fadeIn" 
            />
            
            <div className="space-y-6 animate-fadeIn" style={{ animationDelay: '0.2s' }}>
              <p className="text-lg text-gray-300">
                Ready to bring your vision to life? Let's collaborate and create something extraordinary together.
              </p>
              
              <div className="neon-box neon-red p-6 my-8 bg-black/50">
                <h3 className="text-xl font-orbitron mb-4 text-cyber-red">Contact Information</h3>
                
                <div className="space-y-4 font-mono">
                  <div className="flex items-center">
                    <span className="text-gray-500 mr-2">EMAIL:</span>
                    <a href="mailto:contact@cyberdesign.studio" className="text-gray-300 hover:text-cyber-red transition-colors">
                      contact@cyberdesign.studio
                    </a>
                  </div>
                  
                  <div className="flex items-center">
                    <span className="text-gray-500 mr-2">LOCATION:</span>
                    <span className="text-gray-300">Neo-Tokyo District</span>
                  </div>
                  
                  <div className="flex items-center">
                    <span className="text-gray-500 mr-2">SOCIALS:</span>
                    <div className="flex space-x-4">
                      <a href="#" className="text-gray-300 hover:text-cyber-blue transition-colors">TW</a>
                      <a href="#" className="text-gray-300 hover:text-cyber-purple transition-colors">IG</a>
                      <a href="#" className="text-gray-300 hover:text-cyber-green transition-colors">BE</a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="neon-box neon-purple p-6 font-mono text-sm animate-pulse-glow">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-cyber-purple rounded-full mr-3 animate-pulse"></div>
                  <p className="text-gray-300">
                    Currently available for freelance work and collaborations
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="animate-fadeIn" style={{ animationDelay: '0.3s' }}>
            <div className="neon-box neon-blue p-6 md:p-8 rounded-lg bg-black/50">
              <h3 className="text-xl font-orbitron mb-6 text-cyber-blue">Send Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-mono text-gray-400">
                    NAME
                  </label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-black/70 border border-cyber-blue/30 rounded-md px-4 py-3 text-white focus:border-cyber-blue focus:outline-none focus:ring-1 focus:ring-cyber-blue transition-colors"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-mono text-gray-400">
                    EMAIL
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-black/70 border border-cyber-blue/30 rounded-md px-4 py-3 text-white focus:border-cyber-blue focus:outline-none focus:ring-1 focus:ring-cyber-blue transition-colors"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-mono text-gray-400">
                    MESSAGE
                  </label>
                  <textarea 
                    id="message" 
                    name="message" 
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full bg-black/70 border border-cyber-blue/30 rounded-md px-4 py-3 text-white focus:border-cyber-blue focus:outline-none focus:ring-1 focus:ring-cyber-blue transition-colors"
                  />
                </div>
                
                <button 
                  type="submit" 
                  className="btn-cyber-blue w-full group flex items-center justify-center gap-2"
                >
                  <span>Send Message</span>
                  <Send className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
