import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { Check } from 'phosphor-react';
import clsx from 'clsx';

export interface ICheckboxProps extends CheckboxPrimitive.CheckboxProps {
  className?: string;
}

export function Checkbox({ className, ...props }: ICheckboxProps) {
  return (
    <CheckboxPrimitive.Root
      className={clsx('w-6 h-6 p-[0.125rem] bg-gray-800 rounded', className)}
      {...props}
    >
      <CheckboxPrimitive.Indicator>
        <Check weight="bold" className="h-5 w-5 text-cyan-500" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
}
