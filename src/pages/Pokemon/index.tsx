import React from 'react';

export interface PokemonProps {
  id: number | string;
}

const Pokemon: React.FC<PokemonProps> = ({ id }) => {
  return <div>This is pokemon with id {id}</div>;
};

export default Pokemon;
