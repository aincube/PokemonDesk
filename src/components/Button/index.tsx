import React from 'react';

import cn from 'classnames';

import s from './Button.module.scss';

// enum BStyle {
//   small,
//   normal,
//   wide,
//   yellow,
//   green
// }

interface ButtonProps {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  // size?: BStyle.small | BStyle.normal | BStyle.wide;
  // color?: BStyle.green | BStyle.yellow;
  size?: 'small' | 'normal' | 'wide';
  color?: 'green' | 'yellow';
}

const Button: React.FC<ButtonProps> = ({ children, onClick, size, color }) => {
  const btnsize = size || 'normal';
  const btncolor = color || 'green';

  return (
    <button type="button" className={cn(s.root, s[btnsize], s[btncolor])} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
