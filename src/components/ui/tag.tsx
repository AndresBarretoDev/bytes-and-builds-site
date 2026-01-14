import React from 'react';
import { cn } from '@/lib/utils';

interface TagProps {
  children: React.ReactNode;
  className?: string;
}

export const Tag = ({ children, className }: TagProps) => {
  return (
    <span className={cn(
      "bg-white/10 backdrop-blur-md text-white/90 px-2.5 py-1 rounded-md text-[10px] uppercase tracking-widest font-semibold border border-white/10 shadow-sm whitespace-nowrap transition-colors hover:bg-white/20",
      className
    )}>
      {children}
    </span>
  );
};

