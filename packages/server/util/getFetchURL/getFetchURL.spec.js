import getFetchURL from './getFetchURL';

describe('getFetchURL', () => {
  it('should return URL with query', () => {
    expect(getFetchURL('mock-query').indexOf('mock-query')).toBeGreaterThan(-1);
  });
});
