import { Meta, StoryObj } from '@storybook/react';
import { Heading, IHeadingProps } from './Heading';

export default {
  title: 'Components/Heading',
  component: Heading,
  args: {
    children: 'Lorem ipsum.',
    className: '',
    size: 'md',
    asChild: false,
  },
} as Meta<IHeadingProps>;

export const Default: StoryObj<IHeadingProps> = {
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

export const CustomComponent: StoryObj<IHeadingProps> = {
  args: {
    asChild: true,
    children: <h3>Example of Heading with H3 tag</h3>,
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
