import React from 'react';
import { Link } from 'react-router-dom';
import s from './Header.module.scss';

import { ReactComponent as PokemonLogoSvg } from './assets/logo.svg';

interface IMenu {
  id: number;
  value: string;
  link: string;
}

const MENU: IMenu[] = [
  {
    id: 1,
    value: 'Home',
    link: '/',
  },
  {
    id: 2,
    value: 'Pokédex',
    link: '/Pokedex',
  },
  {
    id: 3,
    value: 'Legendaries',
    link: '/Legendaries',
  },
  {
    id: 4,
    value: 'Documentation',
    link: '/Documentation',
  },
];

const Header = () => {
  return (
    <div className={s.root}>
      <div className={s.wrap}>
        <div className={s.pokemonLogo}>
          <PokemonLogoSvg />
        </div>
        <div className={s.menuWrap}>
          {MENU.map(({ id, value, link }) => (
            <Link key={id} to={link} className={s.menuLink}>
              {value}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
