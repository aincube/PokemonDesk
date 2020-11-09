import React from 'react';
import Heading from '../Heading';

import s from './PokemonCard.module.scss';

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
  return (
    <div className={s.root}>
      <div className={s.infoWrap}>
        {/* TODO: Add support for className */}
        {/* <Heading size='xs' className={s.titleName}> */}
        <Heading size="xs">{card.name_clean}</Heading>
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
          <span className={s.label}>{card.types}</span>
        </div>
      </div>
      <div className={s.pictureWrap}>
        <img src={card.img} alt={card.name_clean} />
      </div>
    </div>
  );
};

export default PokemonCard;
