import { StoryObj, Meta } from '@storybook/react';

import { Landing } from './Landing';

const meta = {
    component: Landing,
    parameters: {
      zeplinLink: "https://app.zeplin.io/project/6593ed4622face6a292a2d6b/screen/6594167c8ba037b815ee0bba",
      layout: 'fullscreen',
    },
  } satisfies Meta<typeof Landing>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};