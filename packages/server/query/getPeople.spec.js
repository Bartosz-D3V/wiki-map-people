import getPeople from './getPeople';

describe('getPeople', () => {
  it('should be defined', () => {
    expect(getPeople).toBeDefined();
  });

  it('should return query with country name in it', () => {
    const query1 = getPeople('Canada');
    expect(query1.indexOf('Canada')).toBeGreaterThan(-1);

    const query2 = getPeople('United States of America');
    expect(query2.indexOf('United States of America')).toBeGreaterThan(-1);

    const query3 = getPeople('South Korea');
    expect(query3.indexOf('South Korea')).toBeGreaterThan(-1);
  });
});
