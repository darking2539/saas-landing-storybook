import { StoryObj, Meta } from '@storybook/react';

import { LoginButton } from './LoginButton';

const meta = {
    component: LoginButton,
    parameters: {
      layout: 'fullscreen',
    },
  } satisfies Meta<typeof LoginButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};