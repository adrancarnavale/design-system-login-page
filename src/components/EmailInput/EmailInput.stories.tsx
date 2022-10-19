import { Meta, StoryObj } from '@storybook/react';
import { Envelope } from 'phosphor-react';
import { EmailInput, IEmailInputContainerProps } from './EmailInput';

export default {
  title: 'Components/EmailInput',
  component: EmailInput.Container,
  args: {
    children: [
      <EmailInput.Icon>
        <Envelope />
      </EmailInput.Icon>,
      <EmailInput.Input placeholder="Type your e-mail address" />,
    ],
  },
  argTypes: {
    children: {
      disable: true,
    },
  },
} as Meta<IEmailInputContainerProps>;

export const Default: StoryObj<IEmailInputContainerProps> = {};

export const WithoutIcon: StoryObj<IEmailInputContainerProps> = {
  args: {
    children: <EmailInput.Input placeholder="Type your e-mail address" />,
  },
};
