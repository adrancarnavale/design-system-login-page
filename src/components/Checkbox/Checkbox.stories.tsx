import { Meta, StoryObj } from '@storybook/react';
import { Checkbox, ICheckboxProps } from './Checkbox';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  args: {
    className: '',
    asChild: false,
  },
} as Meta<ICheckboxProps>;

export const Default: StoryObj<ICheckboxProps> = {
  argTypes: {
    className: {
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
