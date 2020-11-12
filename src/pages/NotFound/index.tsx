import React from 'react';
import { navigate } from 'hookrouter';

import s from './NotFound.module.scss';

import TeamRocket from './assets/Team_Rocket_trio.png';
import Button from '../../components/Button';

const NotFoundPage = () => {
  return (
    <div className={s.root}>
      <div className={s.wrap}>
        <div className={s.text}>404</div>
        <div className={s.layer}>
          <img src={TeamRocket} alt="Team Rocket" />
        </div>
        <div className={s.subTitle}>
          <span>The rocket team</span> has won this time.
        </div>
      </div>
      <div className={s.ybutton}>
        <Button color="yellow" size="normal" onClick={() => navigate('/')}>
          Return
        </Button>
      </div>
    </div>
  );
};

export default NotFoundPage;
