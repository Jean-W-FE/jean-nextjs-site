'use client';

import { ReactNode, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface FullScreenScrollProps {
  children: ReactNode;
  className?: string;
  initial?: 'top' | 'center' | 'bottom';
  animate?: 'top' | 'center' | 'bottom';
  transition?: {    
    duration: number;
    ease: string;
  };
}

export default function FullScreenScroll({ children, className = '', initial = 'top', animate = 'center', transition = { duration: 0.5, ease: "easeInOut" } }: FullScreenScrollProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <motion.div 
      ref={containerRef}
      className={`w-full overflow-hidden ${className}`}
    >
      {children}
    </motion.div>
  );
}