import React from 'react';
import { cn } from '../../utils/cn';

interface AvatarProps {
  src?: string;
  alt?: string;
  name?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

const Avatar: React.FC<AvatarProps> = ({ 
  src, 
  alt = 'Avatar', 
  name, 
  size = 'md',
  className
}) => {
  const sizeClasses = {
    sm: 'h-8 w-8 text-xs',
    md: 'h-10 w-10 text-sm',
    lg: 'h-12 w-12 text-base',
    xl: 'h-16 w-16 text-lg',
  };

  const initials = name
    ? name
        .split(' ')
        .map(part => part[0])
        .join('')
        .toUpperCase()
        .substring(0, 2)
    : '';

  return (
    <div className={cn(
      'relative rounded-full inline-flex items-center justify-center overflow-hidden bg-gray-200 text-gray-600 font-medium',
      sizeClasses[size],
      className
    )}>
      {src ? (
        <img 
          src={src} 
          alt={alt}
          className="h-full w-full object-cover"
          onError={(e) => {
            // If image fails to load, show initials instead
            (e.target as HTMLImageElement).style.display = 'none';
          }}
        />
      ) : initials ? (
        <span>{initials}</span>
      ) : (
        <span className="sr-only">{alt}</span>
      )}
    </div>
  );
};

export default Avatar;