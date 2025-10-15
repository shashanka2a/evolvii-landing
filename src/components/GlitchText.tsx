'use client';

import React, { useEffect, useState } from 'react';

interface GlitchTextProps {
  text: string;
  className?: string;
}

export function GlitchText({ text, className = '' }: GlitchTextProps) {
  const [glitchText, setGlitchText] = useState(text);
  
  useEffect(() => {
    const glitchChars = '!@#$%^&*()_+-=[]{}|;:,.<>?';
    let timeoutId: NodeJS.Timeout;
    
    const createGlitch = () => {
      if (Math.random() < 0.1) { // 10% chance to glitch
        const textArray = text.split('');
        const randomIndex = Math.floor(Math.random() * textArray.length);
        textArray[randomIndex] = glitchChars[Math.floor(Math.random() * glitchChars.length)];
        setGlitchText(textArray.join(''));
        
        setTimeout(() => setGlitchText(text), 100);
      }
      
      timeoutId = setTimeout(createGlitch, 2000 + Math.random() * 3000);
    };
    
    createGlitch();
    
    return () => clearTimeout(timeoutId);
  }, [text]);
  
  return (
    <div className={`relative ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-blue-500 to-orange-500 bg-clip-text text-transparent blur-sm opacity-50">
        {glitchText}
      </div>
      <div className="relative bg-gradient-to-r from-purple-400 via-blue-400 to-orange-400 bg-clip-text text-transparent drop-shadow-lg">
        {glitchText}
      </div>
      {/* Text shadow for better visibility */}
      <div className="absolute inset-0 text-white opacity-20 blur-sm">
        {glitchText}
      </div>
    </div>
  );
}