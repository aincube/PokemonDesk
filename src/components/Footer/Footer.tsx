import React from 'react';
import s from './Footer.module.scss';

const Footer = () => {
  return (
    <div className={s.footer}>
      <span>Make with</span>{' '}
      <span role="img" aria-label="heart">
        ❤️
      </span>
      <span className={s.footerright}>Ours Team</span>
    </div>
  );
};

export default Footer;
