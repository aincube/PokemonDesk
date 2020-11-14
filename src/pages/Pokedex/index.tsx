import React, { useEffect, useState } from 'react';
import Heading from '../../components/Heading';
import PokemonCard, { IPokemonCard } from '../../components/PokemonCard';

import s from './Pokedex.module.scss';

interface IPokeAPI {
  count?: number;
  limit?: number;
  offset?: number;
  pokemons: IPokemonCard[];
  total: number;
}

const usePokemons = () => {
  const [data, setData] = useState<IPokeAPI>({ pokemons: [], total: 0 });
  const [isLoading, setLoading] = useState<boolean>(true);
  const [isError, setError] = useState<boolean>(false);

  useEffect(() => {
    const getPokemons = async () => {
      setLoading(true);
      try {
        const response = await fetch('http://zar.hosthot.ru/api/v1/pokemons?limit=9&offset=200');
        const result = await response.json();

        setData(result);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    getPokemons();
  }, []);

  return {
    data,
    isLoading,
    isError,
  };
};

const Pokedex = () => {
  const { data, isLoading, isError } = usePokemons();

  const ErrorMsg = <div>Error has occurred</div>;

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  if (isError) {
    return ErrorMsg;
  }

  return (
    <>
      <div className={s.message}>
        <Heading size="l">
          {/* {data ? data.total : ErrorMsg} <b>Pokemons</b> for you to choose your favorite */}
          {data.total} <b>Pokemons</b> for you to choose your favorite
        </Heading>
      </div>
      <div className={s.root}>
        {/* {data ? data.pokemons.map((item) => <PokemonCard key={item.id} card={item} />) : ErrorMsg} */}
        {data.pokemons.map((item) => (
          <PokemonCard key={item.id} card={item} />
        ))}
      </div>
    </>
  );
};

export default Pokedex;
