import { StoryObj, Meta } from '@storybook/react';

import { TopBar } from './TopBar';

const meta = {
    component: TopBar,
    parameters: {
      layout: 'fullscreen',
    },
  } satisfies Meta<typeof TopBar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};