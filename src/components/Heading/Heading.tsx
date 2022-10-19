import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';
import { ReactNode } from 'react';

export interface IHeadingProps {
  children: ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  asChild?: boolean;
}

export function Heading({
  size = 'md',
  children,
  asChild,
  className,
}: IHeadingProps) {
  const Component = asChild ? Slot : 'h2';

  return (
    <Component
      className={clsx(
        'text-gray-100 font-bold',
        {
          'text-lg': size === 'sm',
          'text-xl': size === 'md',
          'text-2xl': size === 'lg',
        },
        className
      )}
    >
      {children}
    </Component>
  );
}
