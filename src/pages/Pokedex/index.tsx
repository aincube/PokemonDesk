import React, { useState } from 'react';
import Heading from '../../components/Heading';
import PokemonCard from '../../components/PokemonCard';

import s from './Pokedex.module.scss';
import useData from '../../hook/getData';
import { IPokeAPI, IPokemonCard } from '../../interface/pokemons';
import useDebounce from '../../hook/useDebounce';

interface IQuery {
  name?: string;
}

const Pokedex = () => {
  const [searchValue, setSearchValue] = useState('');
  const [query, setQuery] = useState<IQuery>({});

  const debouncedValue = useDebounce(searchValue, 500);

  const { data, isLoading, isError } = useData<IPokeAPI>('getPokemons', query, [debouncedValue]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    setQuery((state: IQuery) => ({
      ...state,
      name: e.target.value,
    }));
  };

  const ErrorMsg = <div>Error has occurred</div>;

  // TODO: Заменить на loader
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
          {!isLoading && data && data.total} <b>Pokemons</b> for you to choose your favorite
        </Heading>
      </div>
      <div>
        <input type="text" value={searchValue} onChange={handleSearchChange} />
      </div>
      <div className={s.root}>
        {/* {data ? data.pokemons.map((item) => <PokemonCard key={item.id} card={item} />) : ErrorMsg} */}
        {!isLoading && data && data.pokemons.map((item: IPokemonCard) => <PokemonCard key={item.id} card={item} />)}
      </div>
    </>
  );
};

export default Pokedex;
