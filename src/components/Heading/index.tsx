import React from 'react';
import cn from 'classnames';
import s from './Heading.module.scss';

interface HeadingProps {
  // size: 'xl' | 'l' | 'm' | 's' | 'xs';
  size?: string;
}

const Heading: React.FC<HeadingProps> = ({ children, size }) => {
  let sizePoint;
  switch (size) {
    case 'xl':
      sizePoint = 1;
      break;
    case 'l':
      sizePoint = 2;
      break;
    case 'm':
      sizePoint = 3;
      break;
    case 's':
      sizePoint = 4;
      break;
    case 'xs':
      sizePoint = 5;
      break;
    default:
      sizePoint = 1;
  }

  return React.createElement(
    `h${sizePoint}`,
    {
      // TODO: Какого-то чёрта эта дрянь перестала работать!!!
      // className: cn(s.heading, s[`size${size.toUpperCase()}`]),
      className: cn(s.heading),
    },
    children,
  );
};

export default Heading;
