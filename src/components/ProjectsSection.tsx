
import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import GlitchText from './ui/GlitchText';

const projects = [
  {
    id: 1,
    title: 'Neural Interface',
    category: 'UI/UX Design',
    description: 'A futuristic dashboard for neural network monitoring with real-time data visualization.',
    color: 'blue'
  },
  {
    id: 2,
    title: 'Synthwave Dreams',
    category: 'Brand Identity',
    description: 'Complete brand identity for a retro-futuristic music production company.',
    color: 'purple'
  },
  {
    id: 3,
    title: 'CryptoVault',
    category: 'Web Application',
    description: 'Secure cryptocurrency dashboard with advanced authentication systems.',
    color: 'green'
  },
  {
    id: 4,
    title: 'Neon Nightlife',
    category: 'Photography',
    description: 'Urban photography series exploring city nights through a cyberpunk lens.',
    color: 'red'
  }
];

const ProjectsSection: React.FC = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  
  return (
    <section id="projects" className="relative py-24 overflow-hidden">
      <div className="cyber-grid absolute inset-0 opacity-20"></div>
      <div className="scanline"></div>
      
      <div className="container max-w-7xl mx-auto px-6 z-10 relative">
        <div className="flex flex-col md:flex-row items-start justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <GlitchText 
              text="PROJECTS" 
              as="h2" 
              color="purple"
              className="text-3xl md:text-4xl font-bold mb-6" 
            />
            <p className="text-lg text-gray-300">
              A showcase of my most recent work spanning UI/UX, brand design, and creative development projects.
            </p>
          </div>
          
          <a 
            href="#contact" 
            className="btn-cyber-green group inline-flex items-center gap-2 mt-4 md:mt-0"
          >
            All Projects
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className="relative transition-all duration-500 transform hover:-translate-y-2"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div 
                className={`neon-box neon-${project.color} p-6 h-full rounded-lg animate-fadeIn`}
                style={{ animationDelay: `${0.3 + index * 0.1}s` }}
              >
                <div className="mb-4 opacity-75 font-mono tracking-wide text-sm">
                  <span className={`text-cyber-${project.color}`}>0{project.id}</span>
                </div>
                
                <h3 className={`text-xl md:text-2xl font-orbitron mb-2 text-cyber-${project.color}`}>
                  {project.title}
                </h3>
                
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 rounded-full bg-cyber-black/50 text-xs font-mono border border-gray-700 text-gray-300">
                    {project.category}
                  </span>
                </div>
                
                <p className="text-gray-400 mb-6">
                  {project.description}
                </p>
                
                <div className="mt-auto">
                  <button className={`group flex items-center text-cyber-${project.color} font-mono text-sm transition-all duration-300`}>
                    <span className="mr-2">View Project</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
                
                {/* Decorative lines */}
                <div 
                  className={`absolute top-0 left-0 w-0 h-1 bg-cyber-${project.color} transition-all duration-700`}
                  style={{ width: hoveredProject === project.id ? '100%' : '0%' }}
                ></div>
                
                <div 
                  className={`absolute bottom-0 right-0 w-0 h-1 bg-cyber-${project.color} transition-all duration-700`}
                  style={{ width: hoveredProject === project.id ? '100%' : '0%' }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
