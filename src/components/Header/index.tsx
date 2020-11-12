import React from 'react';
// import { Link } from 'react-router-dom';
import { A, usePath } from 'hookrouter';
import cn from 'classnames';
import s from './Header.module.scss';
import { GENERAL_MENU } from '../../routes';

import { ReactComponent as PokemonLogoSvg } from './assets/logo.svg';
// import App from '../../App';

const Header = () => {
  const path = usePath();

  return (
    <div className={s.root}>
      <div className={s.wrap}>
        <div className={s.pokemonLogo}>
          <PokemonLogoSvg />
        </div>
        <div className={s.menuWrap}>
          {GENERAL_MENU.map(({ title, link }) => (
            <A
              key={title}
              href={link}
              className={cn(s.menuLink, {
                [s.activeLink]: link === path,
              })}>
              {title}
            </A>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
