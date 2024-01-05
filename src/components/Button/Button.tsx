import React from 'react'

export interface ButtonProps {
  onClick: (event: React.MouseEvent<HTMLElement>) => void;
  className: string;
  title: string;
}

export const Button = ({
  onClick,
  className,
  title,
  ...props
}: ButtonProps) => {

  const handleClick = React.useCallback(
    (event: React.MouseEvent<HTMLElement>) => {
      onClick?.(event);
    },
    []
  );

  return (
    <button className={className} onClick={handleClick} {...props}>{title}</button>
  )
}