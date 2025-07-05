'use client';

import * as React from 'react';
import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';

interface ThemeToggleProps {
  className?: string;
}

const ThemeToggle = ({ className = '' }: ThemeToggleProps) => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  // Prevent hydration mismatch
  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div
        className={`h-9 w-9 rounded-md border border-input bg-background ${className}`}
        aria-hidden="true"
      />
    );
  }

  const handleToggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleToggleTheme();
    }
  };

  const isLightMode = theme === 'light';
  const ariaLabel = isLightMode
    ? 'Cambiar a modo oscuro'
    : 'Cambiar a modo claro';

  return (
    <button
      onClick={handleToggleTheme}
      onKeyDown={handleKeyDown}
      className={`relative inline-flex h-9 w-9 items-center justify-center rounded-md border border-input bg-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ${className} `}
      aria-label={ariaLabel}
      title={ariaLabel}
      tabIndex={0}
      type="button"
    >
      <Sun
        className={`h-4 w-4 transition-all duration-300 ${
          isLightMode
            ? 'rotate-0 scale-100 opacity-100'
            : 'rotate-90 scale-0 opacity-0'
        }`}
        aria-hidden="true"
      />
      <Moon
        className={`absolute h-4 w-4 transition-all duration-300 ${
          isLightMode
            ? 'rotate-90 scale-0 opacity-0'
            : 'rotate-0 scale-100 opacity-100'
        }`}
        aria-hidden="true"
      />
      <span className="sr-only">{ariaLabel}</span>
    </button>
  );
};

export { ThemeToggle };
