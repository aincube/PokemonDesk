// import React from 'react';

// import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useRoutes } from 'hookrouter';
import React from 'react';
import NotFoundPage from './pages/NotFound';

// import Header from './components/Header';
// import Footer from './components/Footer';

// import HomePage from './pages/Home';
// import Pokedex from './pages/Pokedex';
import routes from './routes';

const App = () => {
  // return (
  //   <BrowserRouter>
  //     <Header />
  //     <Switch>
  //       <Route exact path="/" component={HomePage} />
  //       <Route path="/Pokedex" component={Pokedex} />
  //     </Switch>
  //     <Footer />
  //   </BrowserRouter>
  // );
  const match = useRoutes(routes);
  return match || <NotFoundPage />;
};

export default App;
