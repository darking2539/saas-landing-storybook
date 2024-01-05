import { StoryObj, Meta } from '@storybook/react';
import AccentureLogo from '../../assets/Accenture.svg'
import AppleLogo from '../../assets/Apple.svg'
import MicrosoftLogo from '../../assets/Microsoft.svg'
import GoogleLogo from '../../assets/Google.svg'
import BearingPointLogo from '../../assets/BearingPoint.svg'

import Logos from './Logos';

const meta = {
    component: Logos,
    parameters: {
      layout: 'fullscreen',
    },
  } satisfies Meta<typeof Logos>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Accenture: Story = {
  args: {
    LogoIcon: AccentureLogo,
  }
};

export const Apple: Story = {
  args: {
    LogoIcon: AppleLogo,
  }
};

export const Microsoft: Story = {
  args: {
    LogoIcon: MicrosoftLogo,
  }
};

export const Google: Story = {
  args: {
    LogoIcon: GoogleLogo,
  }
};

export const BearingPoint: Story = {
  args: {
    LogoIcon: BearingPointLogo,
  }
};


