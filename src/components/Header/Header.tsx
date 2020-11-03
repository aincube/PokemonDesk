import React from 'react';
import s from './Header.module.scss';
import logo from '../../assets/logo.svg';

// const menuitems = ['Home', 'Pokédex', 'Legendaries', 'Documentation'];

const Header = () => {
  return (
    <div className={s.header}>
      <img className={s.logo} src={logo} alt="Pokemon logo" />
    </div>
  );
};

export default Header;
