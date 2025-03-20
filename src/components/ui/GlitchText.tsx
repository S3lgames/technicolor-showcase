
import React from 'react';

interface GlitchTextProps {
  text: string;
  className?: string;
  as?: React.ElementType;
  color?: 'blue' | 'purple' | 'green' | 'red';
}

const GlitchText: React.FC<GlitchTextProps> = ({
  text,
  className = '',
  as: Component = 'span',
  color = 'blue'
}) => {
  const colorClasses = {
    blue: 'text-cyber-blue',
    purple: 'text-cyber-purple',
    green: 'text-cyber-green',
    red: 'text-cyber-red'
  };
  
  return (
    <Component
      className={`glitch-wrapper ${colorClasses[color]} ${className}`}
      data-text={text}
    >
      {text}
    </Component>
  );
};

export default GlitchText;
