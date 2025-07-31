import React from 'react';
import type { AvatarProps } from './Avatar.types';

const getInitials = (name: string): string => {
  return name
    .split(' ')
    .map(word => word.charAt(0).toUpperCase())
    .slice(0, 2)
    .join('');
};

export const Avatar: React.FC<AvatarProps> = ({ 
  name, 
  size = 'md', 
  isOnline 
}) => {
  const sizeClasses = {
    sm: 'w-8 h-8 text-xs',
    md: 'w-10 h-10 text-sm',
    lg: 'w-12 h-12 text-base'
  };

  const onlineIndicatorSizes = {
    sm: 'w-2 h-2',
    md: 'w-3 h-3',
    lg: 'w-4 h-4'
  };

  return (
    <div className="relative">
      <div className={`${sizeClasses[size]} bg-blue-500 text-white rounded-full flex items-center justify-center font-medium`}>
        {getInitials(name)}
      </div>
      {isOnline && (
        <div className={`absolute -bottom-1 -right-1 ${onlineIndicatorSizes[size]} bg-green-500 rounded-full border-2 border-white`}></div>
      )}
    </div>
  );
};