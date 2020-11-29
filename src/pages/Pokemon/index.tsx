import React from 'react';
import useData from '../../hook/getData';
import { IPokemonCard } from '../../interface/pokemons';

export interface PokemonProps {
  id: number | string;
}

const Pokemon: React.FC<PokemonProps> = ({ id }) => {
  const { data, isLoading, isError } = useData<IPokemonCard>('getPokemon', { id });

  const ErrorMsg = <div>Error has occurred</div>;

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  if (isError) {
    return ErrorMsg;
  }

  return <div>This is pokemon with name {data?.name}</div>;
};

export default Pokemon;
