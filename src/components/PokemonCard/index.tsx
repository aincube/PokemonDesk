import React from 'react';
import cn from 'classnames';
import { IPokemonCard } from '../../interface/pokemons';

import s from './PokemonCard.module.scss';

import Heading from '../Heading';
import toCapitalizeFirstLetter from '../../utils/utils';

interface PokemonCardProps {
  card: IPokemonCard;
}

const PokemonCard: React.FC<PokemonCardProps> = ({ card, ...rest }) => {
  // TODO: Make background color of card dependent on pokemon type
  //   const bgstyle = {};
  //   if(card.types.length < 2){
  //     bgstyle = { background: 'linear-gradient(270deg, #b33327 0.15%, #d93e30 100%);' }
  //   }
  //   else {
  //     bgstyle = { background: 'linear-gradient(270deg, #b33327 0.15%, #d93e30 100%);' }
  //   }

  return (
    <div className={s.root} key={card.id}>
      <div className={s.infoWrap}>
        {/* TODO: Add support for className */}
        {/* <Heading size='xs' className={s.titleName}> */}
        <Heading size="s">{toCapitalizeFirstLetter(card.name_clean)}</Heading>
        <div className={s.statWrap}>
          <div className={s.statItem}>
            <div className={s.statValue}>{card.stats.attack}</div>
            Attack
          </div>
          <div className={s.statItem}>
            <div className={s.statValue}>{card.stats.defense}</div>
            Defense
          </div>
        </div>
        <div className={s.labelWrap}>
          {card.types.map((type) => (
            <span key={type} className={cn(s.label, s[type as keyof typeof s])}>
              {toCapitalizeFirstLetter(type)}
            </span>
          ))}
        </div>
      </div>
      <div className={s.pictureWrap}>
        <img src={card.img} alt={card.name_clean} />
      </div>
    </div>
  );
};

export default PokemonCard;
