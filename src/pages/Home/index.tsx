import React from 'react';
import { navigate } from 'hookrouter';
import { LinkEnum } from '../../routes';

import Layout from '../../components/Layout';
import Heading from '../../components/Heading';
import Button from '../../components/Button';
import Parallax from '../../components/Parallax';

import s from './Home.module.scss';

const HomePage = () => {
  return (
    <div className={s.root}>
      <Layout className={s.contentWrap}>
        <div className={s.contentText}>
          <Heading size="xl">
            <b>Find</b> all your favorite <b>Pokemon</b>
          </Heading>
          <p>You can know the type of Pokemon, its strengths, disadvantages and abilities</p>
          <div className={s.btn}>
            <Button color="green" size="normal" onClick={() => navigate(LinkEnum.POKEDEX)}>
              See pokemons
            </Button>
          </div>
        </div>
        <div className={s.contentParallax}>
          <Parallax />
        </div>
      </Layout>
    </div>
  );
};

export default HomePage;
