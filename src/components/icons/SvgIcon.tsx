'use client';

interface SvgIconProps {
  name: string;
  className?: string;
  viewBox?: string;
}

export default function SvgIcon({ 
  name,
  className = 'h-4 w-4 text-purple-600',
  viewBox = '0 0 24 24'
}: SvgIconProps) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      className={className} 
      viewBox={viewBox} 
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <use href={`/svgs/${name}.svg`} />
    </svg>
  );
} 