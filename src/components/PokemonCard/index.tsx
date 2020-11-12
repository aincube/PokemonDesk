import React from 'react';
import cn from 'classnames';

import s from './PokemonCard.module.scss';

import Heading from '../Heading';

export interface IPokemonCardStats {
  hp: number;
  attack: number;
  defense: number;
  'special-attack'?: number;
  'special-defense'?: number;
  speed: number;
}

// TODO: Maybe better to change type of abilities&types to enum type
export interface IPokemonCard {
  name_clean: string;
  abilities: string[];
  stats: IPokemonCardStats;
  types: string[];
  img: string;
  name: string;
  base_experience?: number;
  height?: number;
  id: number;
  is_default?: boolean;
  order: number;
  weight?: number;
}

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
        <Heading size="s">{card.name_clean}</Heading>
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
              {type}
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
