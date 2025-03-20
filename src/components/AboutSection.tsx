
import React from 'react';
import GlitchText from './ui/GlitchText';

const AboutSection: React.FC = () => {
  const skills = [
    { name: 'UI/UX Design', level: 95 },
    { name: 'Web Development', level: 90 },
    { name: 'Branding', level: 85 },
    { name: '3D Modeling', level: 75 },
    { name: 'Animation', level: 80 }
  ];
  
  return (
    <section id="about" className="relative py-24 overflow-hidden bg-gradient-to-b from-cyber-black to-black">
      <div className="absolute inset-0 bg-cyber-grid opacity-10"></div>
      <div className="scanline"></div>
      
      <div className="container max-w-7xl mx-auto px-6 z-10 relative">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <GlitchText 
              text="ABOUT ME" 
              as="h2" 
              color="green"
              className="text-3xl md:text-4xl font-bold mb-6 animate-fadeIn" 
            />
            
            <div className="space-y-6 animate-fadeIn" style={{ animationDelay: '0.2s' }}>
              <p className="text-lg text-gray-300">
                I'm a multidisciplinary designer specializing in creating cyberpunk-inspired digital experiences that blend cutting-edge technology with bold, futuristic aesthetics.
              </p>
              
              <p className="text-lg text-gray-300">
                With over 7 years of experience in the digital design industry, I've worked with clients ranging from tech startups to established brands looking to push creative boundaries.
              </p>
              
              <div className="neon-box neon-blue p-5 my-8">
                <p className="font-mono text-cyber-blue">
                  "The future is already here — it's just not evenly distributed."
                </p>
                <p className="text-right text-sm text-gray-400 mt-2">— William Gibson</p>
              </div>
            </div>
            
            <div className="mt-8 animate-fadeIn" style={{ animationDelay: '0.4s' }}>
              <h3 className="text-xl font-orbitron mb-6 text-white">Technical Skills</h3>
              
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="font-mono text-gray-300">{skill.name}</span>
                      <span className="font-mono text-cyber-green">{skill.level}%</span>
                    </div>
                    <div className="h-1 bg-gray-800 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-cyber-blue to-cyber-green rounded-full"
                        style={{ 
                          width: `${skill.level}%`,
                          animationDelay: `${0.2 + index * 0.1}s`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2 flex justify-center animate-slideInRight" style={{ animationDelay: '0.2s' }}>
            <div className="relative">
              <div className="neon-box neon-green w-64 h-64 md:w-80 md:h-80 rounded-lg flex items-center justify-center p-1">
                <div className="absolute inset-0 bg-cyber-grid"></div>
                <div className="absolute inset-1 bg-cyber-black/90 rounded-lg flex items-center justify-center overflow-hidden">
                  {/* Designer avatar placeholder */}
                  <div className="relative w-full h-full">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-9xl font-orbitron text-cyber-green opacity-20">C</div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-cyber-green/20 to-transparent"></div>
                  </div>
                </div>
                
                {/* Decorative corners */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-cyber-green"></div>
                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-cyber-green"></div>
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-cyber-green"></div>
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-cyber-green"></div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24">
                <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-cyber-blue"></div>
                <div className="absolute bottom-0 left-0 w-full h-6 bg-cyber-black"></div>
              </div>
              
              <div className="absolute -bottom-6 -left-6">
                <div className="neon-box neon-purple px-4 py-2 font-mono text-xs text-cyber-purple">
                  DESIGNER:v.2077
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Additional about content */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="neon-box neon-blue p-6 animate-fadeIn" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-xl font-orbitron mb-4 text-cyber-blue">Design Philosophy</h3>
            <p className="text-gray-400">
              I believe in creating immersive experiences that blend form and function, where every pixel serves a purpose.
            </p>
          </div>
          
          <div className="neon-box neon-purple p-6 animate-fadeIn" style={{ animationDelay: '0.3s' }}>
            <h3 className="text-xl font-orbitron mb-4 text-cyber-purple">Work Process</h3>
            <p className="text-gray-400">
              My approach combines systematic research, iterative design, and cutting-edge technologies to deliver exceptional results.
            </p>
          </div>
          
          <div className="neon-box neon-green p-6 animate-fadeIn" style={{ animationDelay: '0.4s' }}>
            <h3 className="text-xl font-orbitron mb-4 text-cyber-green">Collaborations</h3>
            <p className="text-gray-400">
              I've partnered with forward-thinking brands across tech, entertainment, and fashion industries to create future-forward designs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
