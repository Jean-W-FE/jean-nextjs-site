'use client';

import { motion, useSpring, useMotionValue } from 'framer-motion';
import { useEffect, useState } from 'react';

interface CursorFollowProps {
  enabled?: boolean;
  size?: 'small' | 'medium' | 'large';
  color?: 'primary' | 'purple' | 'white' | 'custom';
  customColor?: string;
  trailLength?: number;
}

export default function CursorFollow({ 
  enabled = true, 
  size = 'medium',
  color = 'primary',
  customColor,
  trailLength = 4
}: CursorFollowProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isPointer, setIsPointer] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // 尺寸配置
  const sizeConfig = {
    small: { baseSize: 8, increment: 3, stiffness: 150, damping: 20 },
    medium: { baseSize: 12, increment: 4, stiffness: 120, damping: 18 },
    large: { baseSize: 16, increment: 6, stiffness: 100, damping: 15 }
  };

  const config = sizeConfig[size];

  // 顏色配置
  const getColors = () => {
    switch (color) {
      case 'purple':
        return ['hsl(270, 70%, 60%)', 'hsl(270, 60%, 50%)', 'hsl(270, 50%, 40%)', 'hsl(270, 40%, 30%)'];
      case 'white':
        return ['rgba(255, 255, 255, 0.9)', 'rgba(255, 255, 255, 0.7)', 'rgba(255, 255, 255, 0.5)', 'rgba(255, 255, 255, 0.3)'];
      case 'custom':
        return Array(trailLength).fill(customColor || 'hsl(255, 60%, 60%)');
      default: // primary
        return ['hsl(255, 60%, 60%)', 'hsl(255, 60%, 60%)', 'hsl(255, 60%, 60%)', 'hsl(255, 60%, 60%)'];
    }
  };

  const colors = getColors();

  // 鼠標跟隨邏輯
  useEffect(() => {
    if (!enabled) return;

    const handleMouseMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    // 檢測可點擊元素
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isClickable = target.tagName === 'BUTTON' || 
                         target.tagName === 'A' || 
                         target.onclick !== null ||
                         target.style.cursor === 'pointer' ||
                         target.classList.contains('cursor-pointer');
      
      setIsPointer(isClickable);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [enabled, x, y]);

  // 創建跟隨圓圈
  const circles = Array.from({ length: trailLength }, (_, i) => {
    const circleSize = config.baseSize + (i * config.increment);
    const springConfig = {
      stiffness: config.stiffness - (i * 15),
      damping: config.damping + (i * 3),
      restDelta: 0.001
    };

    return {
      x: useSpring(x, springConfig),
      y: useSpring(y, springConfig),
      size: circleSize,
      color: colors[i] || colors[0],
      opacity: 1 - (i * 0.2),
      scale: isPointer ? 1.5 : 1
    };
  });

  if (!enabled || !isVisible) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[99999]">
      {circles.map((circle, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: circle.size,
            height: circle.size,
            x: circle.x,
            y: circle.y,
            // backgroundColor: circle.color,
            backgroundColor: 'transparent',
            border: `2px solid ${circle.color}`,
            opacity: circle.opacity,
            translateX: '-50%',
            translateY: '-50%',
            zIndex: 99999 - i,
            willChange: 'transform',
            contain: 'layout',
            pointerEvents: 'none'
          }}
          animate={{
            scale: circle.scale,
            opacity: circle.opacity
          }}
          transition={{
            scale: { duration: 0.2 },
            opacity: { duration: 0.3 }
          }}
          initial={{ scale: 0, opacity: 0 }}
        />
      ))}
    </div>
  );
}

// 简化版
export function SimpleCursorFollow() {
  return <CursorFollow enabled={true} size="medium" color="primary" />;
}

// 白色版本（适合深色背景）
export function WhiteCursorFollow() {
  return <CursorFollow enabled={true} size="medium" color="white" />;
}

// 紫色版本
export function PurpleCursorFollow() {
  return <CursorFollow enabled={true} size="medium" color="purple" />;
}

// 自定义版本
export function CustomCursorFollow({ color, size = 'medium' }: { color: string; size?: 'small' | 'medium' | 'large' }) {
  return <CursorFollow enabled={true} size={size} color="custom" customColor={color} />;
}