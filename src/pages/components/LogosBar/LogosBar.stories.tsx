import { StoryObj, Meta } from '@storybook/react';

import { LogosBar } from './LogosBar';

const meta = {
    component: LogosBar,
    parameters: {
      layout: 'fullscreen',
    },
  } satisfies Meta<typeof LogosBar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};