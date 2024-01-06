import { StoryObj, Meta } from '@storybook/react';

import { ProductImage } from './ProductImage';

const meta = {
    component: ProductImage,
    parameters: {
      layout: 'fullscreen',
    },
  } satisfies Meta<typeof ProductImage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};