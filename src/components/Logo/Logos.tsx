import React from 'react'
// import Accenture from '../../assets/Accenture.svg'

type LogoProps = {
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  LogoIcon: any;
  invert?: boolean;
  scale?: string;
}

export default function Logo({ onClick, LogoIcon, invert, scale }: LogoProps) {
  return (
    <div 
    className={`flex justify-center grayscale opacity-35 cursor-pointer object-cover w-full ${invert? "invert":""}`}
    style={{transform: `${scale? `scale(${scale})`:""}`}}>
      <img src={LogoIcon} onClick={onClick} />
    </div>
  )
}