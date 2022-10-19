import { Slot } from '@radix-ui/react-slot';
import clsx from 'clsx';
import { ButtonHTMLAttributes, ReactNode } from 'react';

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children?: ReactNode;
  asChild?: boolean;
}

export function Button({
  className,
  children,
  asChild,
  ...props
}: IButtonProps) {
  const Component = asChild ? Slot : 'button';
  return (
    <Component
      className={clsx(
        'rounded-md bg-cyan-500 hover:bg-cyan-300 w-full max-w-[25rem] text-black px-4 py-3 font-semibold text-sm',
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
