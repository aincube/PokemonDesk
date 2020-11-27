import getUrlWithParamsConfig from './getUrlWithParamsConfig';

describe('getUrlWithParams', () => {
  test('should get 2 parameteres - 1st endpoint config, 2nd empty object with query params and return object with all url parameters', () => {
    const url = getUrlWithParamsConfig('getPokemons', {});
    expect(url).toEqual({
      protocol: 'http',
      host: 'zar.hosthot.ru',
      pathname: '/api/v1/pokemons',
      query: {},
    });
  });

  test('should get 2 parameteres - 1st endpoint config, 2nd object with name query param and return object with all url parameters', () => {
    const url = getUrlWithParamsConfig('getPokemons', { name: 'Pikachu' });
    expect(url).toEqual({
      protocol: 'http',
      host: 'zar.hosthot.ru',
      pathname: '/api/v1/pokemons',
      query: { name: 'Pikachu' },
    });
  });
});
