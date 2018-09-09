import SPARQLResult from '../../domain/SPARQLResult';
import Head from '../../domain/Head';
import Results from '../../domain/Results';
import WikiResultHead from '../../domain/WikiResultHead';
import PersonalInfo from '../../domain/PersonalInfo';
import Coords from '../../domain/Coords';
import formatWikiResponse from './formatWikiResponse';
import WikiData from '../../domain/WikiData';

const createMockSPARQLResult = (coords, article, fullName, pob) => {
  const head = new Head([]);
  const mockPersonData = new WikiData(
    new WikiResultHead('literal', coords),
    new WikiResultHead('literal', article),
    new WikiResultHead('literal', fullName),
    new WikiResultHead('literal', pob)
  );
  const wikiDataArr = [mockPersonData];
  const results = new Results(wikiDataArr);
  return new SPARQLResult(head, results);
};

describe('formatWikiResponse', () => {
  it('should return formatted wiki response', () => {
    const mockData = createMockSPARQLResult(
      'Point(13.733333333 51.033333333)',
      'mockURL',
      'Jack Sparrow',
      'Caribbean'
    );
    const expectedResults = [
      new PersonalInfo(
        new Coords(13.733333333, 51.033333333),
        'mockURL',
        'Jack Sparrow',
        'Caribbean'
      ),
    ];
    const actualResults = formatWikiResponse(mockData);

    expect(actualResults).not.toBeNull();
    expect(actualResults).toEqual(expectedResults);
  });
});
