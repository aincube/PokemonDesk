import React, { useMemo, useState } from 'react';
import Heading from '../../components/Heading';
import PokemonCard, { IPokemonCard } from '../../components/PokemonCard';

import s from './Pokedex.module.scss';
import useData from '../../hook/getData';

interface IPokeAPI {
  count?: number;
  limit?: number;
  offset?: number;
  pokemons: IPokemonCard[];
  total: number;
}

// interface IGetPokemons {
//   data: IPokeAPI;
//   isLoading: boolean;
//   isError?: boolean;
// }

// const usePokemons = () => {
//   const [data, setData] = useState<IPokeAPI>({ pokemons: [], total: 0 });
//   const [isLoading, setLoading] = useState<boolean>(true);
//   const [isError, setError] = useState<boolean>(false);

//   useEffect(() => {
//     const getPokemons = async () => {
//       setLoading(true);

//       try {
//         const result = await req('getPokemons');

//         setData(result);
//       } catch (error) {
//         setError(true);
//       } finally {
//         setLoading(false);
//       }
//     };

//     getPokemons();
//   }, []);

//   return {
//     data,
//     isLoading,
//     isError,
//   };
// };

const Pokedex = () => {
  const [searchValue, setSearchValue] = useState('');

  const query = useMemo(
    () => ({
      name: searchValue,
    }),
    [searchValue],
  );

  const { data, isLoading, isError } = useData<IPokeAPI>('getPokemons', query, [searchValue]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

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
      <div>
        <input type="text" value={searchValue} onChange={handleSearchChange} />
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
