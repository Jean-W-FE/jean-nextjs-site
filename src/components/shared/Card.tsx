import { ReactNode } from 'react';

export interface CardProps {
    children: ReactNode;
    className?: string,
    size?: 'sm' | 'md' | 'lg',
    shadow?: 'sm' | 'md' | 'lg',
}
export const Card = ({ children, className, size = 'md', shadow = 'lg' }: CardProps):React.ReactNode => {
    const sizeClass = {
        sm: 'p-4',
        md: 'p-6',
        lg: 'p-8',
    }
    const shadowClass = {
        sm: 'shadow-sm',
        md: 'shadow-md',
        lg: 'theme-shadow-lg',
    }
    // bg-card rounded-2xl theme-shadow-lg p-8 hover:shadow-xl transition-shadow duration-300
    return (
        <div className={`bg-card rounded-2xl p-8 hover:shadow-xl transition-shadow duration-300 ${sizeClass[size]} ${shadowClass[shadow]} ${className}`}>
            {children}
            dsads
        </div>
    )
}