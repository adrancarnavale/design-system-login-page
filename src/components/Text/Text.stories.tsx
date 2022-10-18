import { Meta, StoryObj } from '@storybook/react';
import { Text, ITextProps } from './Text';

export default {
  title: 'Components/Text',
  component: Text,
  args: {
    children: 'Lorem ipsum.',
    className: '',
    size: 'md',
    asChild: false,
  },
} as Meta<ITextProps>;

export const Default: StoryObj<ITextProps> = {
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
  },
};

export const CustomComponent: StoryObj<ITextProps> = {
  args: {
    asChild: true,
    children: <p>Example of Text with Paragraph tag</p>,
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
  },
};
