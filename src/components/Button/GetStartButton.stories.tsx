import { StoryObj, Meta } from '@storybook/react';

import { GetStartButton } from './GetStartButton';

const meta = {
    component: GetStartButton,
    parameters: {
      layout: 'fullscreen',
    },
  } satisfies Meta<typeof GetStartButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};