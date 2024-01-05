import { StoryObj, Meta } from '@storybook/react';

import { SignUpButton } from './SignUpButton';

const meta = {
    component: SignUpButton,
    parameters: {
      layout: 'fullscreen',
    },
  } satisfies Meta<typeof SignUpButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};