import { Meta, StoryObj } from '@storybook/react';
import { Button, IButtonProps } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  args: {
    className: '',
    children: 'Lorem Ipsum',
    asChild: false,
  },
} as Meta<IButtonProps>;

export const Default: StoryObj<IButtonProps> = {
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
    asChild: {
      table: {
        disable: true,
      },
    },
    className: {
      table: {
        disable: true,
      },
    },
  },
};

export const Hovered: StoryObj<IButtonProps> = {
  args: {
    className: 'bg-cyan-300',
    children: 'Lorem Ipsum',
    asChild: false,
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
    asChild: {
      table: {
        disable: true,
      },
    },
    className: {
      table: {
        disable: true,
      },
    },
  },
};
