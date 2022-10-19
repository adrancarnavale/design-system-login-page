import { Meta, StoryObj } from '@storybook/react';
import { Text } from '../Text/Text';
import { Checkbox, ICheckboxProps } from './Checkbox';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  args: {
    className: '',
    asChild: false,
  },
  decorators: [
    (Story) => {
      return (
        <div className="flex items-center gap-2">
          <Story />
          <Text size="sm">Lembrar de mim por 30 dias</Text>
        </div>
      );
    },
  ],
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
