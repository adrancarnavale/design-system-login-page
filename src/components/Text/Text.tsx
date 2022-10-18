import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';
import { ReactNode } from 'react';

export interface ITextProps {
  children: ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  asChild?: boolean;
}

export function Text({
  size = 'md',
  children,
  asChild,
  className,
}: ITextProps) {
  const Component = asChild ? Slot : 'span';

  return (
    <Component
      className={clsx(
        'text-gray-100',
        {
          'text-xs': size === 'sm',
          'text-sm': size === 'md',
          'text-md': size === 'lg',
        },
        className
      )}
    >
      {children}
    </Component>
  );
}
