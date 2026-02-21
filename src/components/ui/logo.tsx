import Image from 'next/image';
import { cn } from '@/lib/utils';

interface LogoProps {
  variant?: 'default' | 'icon' | 'text';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  priority?: boolean;
}

const LOGO_SIZES = {
  sm: { width: 120, height: 40 },
  md: { width: 160, height: 53 },
  lg: { width: 200, height: 67 },
  xl: { width: 240, height: 80 },
} as const;

const Logo = ({
  variant = 'default',
  size = 'md',
  className,
  priority = false,
}: LogoProps) => {
  const { width, height } = LOGO_SIZES[size];

  if (variant === 'text') {
    return (
      <div
        className={cn(
          'text-brand-gradient font-heading',
          {
            'text-lg': size === 'sm',
            'text-xl': size === 'md',
            'text-2xl': size === 'lg',
            'text-3xl': size === 'xl',
          },
          className
        )}
      >
        Bytes & Builds
      </div>
    );
  }

  if (variant === 'icon') {
    const iconSize = Math.min(width, height);
    return (
      <div className={cn('relative', className)}>
        <Image
          src="/logos/logo-b.png"
          alt="Bytes & Builds"
          width={iconSize}
          height={iconSize}
          priority={priority}
          className="object-contain"
        />
      </div>
    );
  }

  return (
    <div className={cn('relative', className)}>
      <Image
        src="/logos/bytes-builds-logo.webp"
        alt="Bytes & Builds - Desarrollo Web y Automatización"
        width={width}
        height={height}
        priority={priority}
        className="object-contain w-auto h-auto"
      />
    </div>
  );
};

export { Logo };
