'use client';

interface SvgIconProps {
  name: string;
  className?: string;
  viewBox?: string;
}

export default function SvgIcon({ 
  name,
  className = 'h-4 w-4 text-purple-600',
  viewBox = '0 0 20 20'
}: SvgIconProps) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      className={className} 
      viewBox={viewBox} 
      fill="currentColor"
    >
      <use href={`/svgs/${name}.svg#icon`} />
    </svg>
  );
} 