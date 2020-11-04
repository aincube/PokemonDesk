import React from 'react';
// import cn from 'classnames';
import s from './App.module.scss';
import Header from './components/Header/Header';
import MainContent from './components/MainContent/MainContent';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <div className={s.main}>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
};

export default App;
