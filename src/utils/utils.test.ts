import toCapitalizeFirstLetter from './utils';

describe('toCapitalizeFirstLetter', () => {
  test('should get 1 string and return same string with capitalized first letter and lowered the rest', () => {
    const string = toCapitalizeFirstLetter('pikAcHu');
    // expect(string).toMatch(/\b[A-Z]\b/g);
    expect(string).toEqual('Pikachu');
  });
});
