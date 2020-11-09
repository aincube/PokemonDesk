import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import HomePage from './pages/Home';
import Pokedex from './pages/Pokedex';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/Pokedex" component={Pokedex} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
