'use client';

import React from 'react';
import { motion } from 'motion/react';

interface GlowingCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
}

export function GlowingCard({ children, className = '', glowColor = 'purple' }: GlowingCardProps) {
  const glowClass = {
    purple: 'shadow-lg shadow-purple-500/30 border-purple-500/30',
    blue: 'shadow-lg shadow-blue-500/30 border-blue-500/30',
    orange: 'shadow-lg shadow-orange-500/30 border-orange-500/30',
  };

  return (
    <motion.div
      className={`relative rounded-xl border bg-black/50 backdrop-blur-sm p-6 transition-all duration-300 hover:scale-105 ${glowClass[glowColor as keyof typeof glowClass]} ${className}`}
      whileHover={{ 
        boxShadow: glowColor === 'purple' ? '0 0 30px rgba(168, 85, 247, 0.4)' : 
                   glowColor === 'blue' ? '0 0 30px rgba(59, 130, 246, 0.4)' : 
                   '0 0 30px rgba(249, 115, 22, 0.4)'
      }}
    >
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-orange-500/10" />
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
}