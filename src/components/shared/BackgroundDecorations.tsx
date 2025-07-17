'use client';

import { motion } from 'framer-motion';

export interface BackgroundDecorationsProps {
  variant?: 'default' | 'contact' | 'about' | 'portfolio';
  className?: string;
}

export default function BackgroundDecorations({ 
  variant = 'default',
  className = ''
}: BackgroundDecorationsProps) {
  const getDecorations = (variant: BackgroundDecorationsProps['variant']) => {
    switch (variant) {
     default:
        return (
            <>
              <div className="fixed inset-0 -z-10">
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360]
                }}
                transition={{ 
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl"
              />
              <motion.div
                animate={{ 
                  scale: [1.2, 1, 1.2],
                  rotate: [360, 180, 0]
                }}
                transition={{ 
                  duration: 25,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-400/20 rounded-full blur-3xl"
              />
            </div>
          </>
        )
    }
  }

  return (
    <div className={`fixed inset-0 -z-10 overflow-hidden pointer-events-none ${className}`}>
      {getDecorations(variant)}
    </div>
  )
} 