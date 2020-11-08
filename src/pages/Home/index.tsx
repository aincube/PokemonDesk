import React from 'react';
import { useHistory } from 'react-router-dom';
import Layout from '../../components/Layout';
import Button from '../../components/Button';
import Parallax from '../../components/Parallax';

import s from './Home.module.scss';

const HomePage = () => {
  const history = useHistory();

  return (
    <div className={s.root}>
      <Layout className={s.contentWrap}>
        <div className={s.contentText}>
          <h1>
            <b>Find</b> all your favorite <b>Pokemon</b>
          </h1>
          <p>You can know the type of Pokemon, its strengths, disadvantages and abilities</p>
          <Button color="green" size="normal" onClick={() => history.push('/Pokedex')}>
            See pokemons
          </Button>
        </div>
        <div className={s.contentParallax}>
          <Parallax />
        </div>
      </Layout>
    </div>
  );
};

export default HomePage;