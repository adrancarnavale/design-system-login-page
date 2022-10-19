import { Slot } from '@radix-ui/react-slot';
import clsx from 'clsx';
import { InputHTMLAttributes, ReactNode } from 'react';

export interface IEmailInputContainerProps {
  className?: string;
  children: ReactNode;
}

function EmailInputContainer({
  children,
  className,
}: IEmailInputContainerProps) {
  return (
    <div
      className={clsx(
        'flex items-center gap-3 h-12 py-4 px-3 rounded bg-gray-800 w-full focus-within:ring-2 ryng-cyan-300',
        className
      )}
    >
      {children}
    </div>
  );
}

EmailInputContainer.displayName = 'EmailInput.Container';

export interface IEmailInputIconProps {
  children: ReactNode;
  className?: string;
}

function EmailInputIcon({ children, className }: IEmailInputIconProps) {
  return (
    <Slot className={clsx('w-6 h-6 text-gray-400', className)}>{children}</Slot>
  );
}

EmailInputIcon.displayName = 'EmailInput.Icon';

export interface IEmailInputInputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

function EmailInputInput({ className, ...props }: IEmailInputInputProps) {
  return (
    <input
      type="email"
      className={clsx(
        'bg-transparent flex-1 text-gray-100 text-xs placeholder:text-gray-400 outline-none',
        className
      )}
      {...props}
    />
  );
}

EmailInputInput.displayName = 'EmailInput.Input';

export const EmailInput = {
  Container: EmailInputContainer,
  Icon: EmailInputIcon,
  Input: EmailInputInput,
};
