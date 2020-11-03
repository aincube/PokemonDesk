import React from 'react';
import s from './Header.module.scss';
import logo from '../../assets/logo.svg';

// const menuitems = ['Home', 'Pokédex', 'Legendaries', 'Documentation'];

const Header = () => {
  return (
    <div className={s.header}>
      <img className={s.logo} src={logo} alt="Pokemon logo" />
      <ul className={s.navbar}>
        <li className={s.menuitem}>
          <a href="#Home">Home</a>
        </li>
        <li className={s.menuitem}>
          <a href="#Pokedex">Pokédex</a>
        </li>
        <li className={s.menuitem}>
          <a href="#Legendaries">Legendaries</a>
        </li>
        <li className={s.menuitem}>
          <a href="#Documentation">Documentation</a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
