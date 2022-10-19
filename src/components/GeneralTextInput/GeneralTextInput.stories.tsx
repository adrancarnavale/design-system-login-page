import { Meta, StoryObj } from '@storybook/react';
import { Envelope } from 'phosphor-react';
import {
  GeneralTextInput,
  IGeneralTextInputContainerProps,
} from './GeneralTextInput';

export default {
  title: 'Components/GeneralTextInput',
  component: GeneralTextInput.Container,
  args: {
    children: [
      <GeneralTextInput.Icon>
        <Envelope />
      </GeneralTextInput.Icon>,
      <GeneralTextInput.Input placeholder="Type your e-mail address" />,
    ],
  },
  argTypes: {
    children: {
      disable: true,
    },
  },
} as Meta<IGeneralTextInputContainerProps>;

export const Default: StoryObj<IGeneralTextInputContainerProps> = {};

export const WithoutIcon: StoryObj<IGeneralTextInputContainerProps> = {
  args: {
    children: <GeneralTextInput.Input placeholder="Type your e-mail address" />,
  },
};
