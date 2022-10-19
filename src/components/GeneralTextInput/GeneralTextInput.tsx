import { Slot } from '@radix-ui/react-slot';
import clsx from 'clsx';
import { InputHTMLAttributes, ReactNode } from 'react';

export interface IGeneralTextInputContainerProps {
  className?: string;
  children: ReactNode;
}

function GeneralTextInputContainer({
  children,
  className,
}: IGeneralTextInputContainerProps) {
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

GeneralTextInputContainer.displayName = 'GeneralTextInput.Container';

export interface IGeneralTextInputIconProps {
  children: ReactNode;
  className?: string;
}

function GeneralTextInputIcon({
  children,
  className,
}: IGeneralTextInputIconProps) {
  return (
    <Slot className={clsx('w-6 h-6 text-gray-400', className)}>{children}</Slot>
  );
}

GeneralTextInputIcon.displayName = 'GeneralTextInput.Icon';

export interface IGeneralTextInputInputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

function GeneralTextInputInput({
  className,
  ...props
}: IGeneralTextInputInputProps) {
  return (
    <input
      className={clsx(
        'bg-transparent flex-1 text-gray-100 text-xs placeholder:text-gray-400 outline-none',
        className
      )}
      {...props}
    />
  );
}

GeneralTextInputInput.displayName = 'GeneralTextInput.Input';

export const GeneralTextInput = {
  Container: GeneralTextInputContainer,
  Icon: GeneralTextInputIcon,
  Input: GeneralTextInputInput,
};
