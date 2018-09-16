import PersonalInfo from 'shared/domain/PersonalInfo';
import Coords from 'shared/domain/Coords';
import SPARQLResult from '../../domain/SPARQLResult';
import Head from '../../domain/Head';
import Results from '../../domain/Results';
import WikiResultHead from '../../domain/WikiResultHead';
import formatWikiResponse from './formatWikiResponse';
import WikiData from '../../domain/WikiData';

const createMockSPARQLResult = (fullName, pob, coords, article) => {
  const head = new Head([]);
  const mockPersonData = new WikiData(
    new WikiResultHead('literal', fullName),
    new WikiResultHead('literal', pob),
    new WikiResultHead('literal', coords),
    new WikiResultHead('literal', article)
  );
  const wikiDataArr = [mockPersonData];
  const results = new Results(wikiDataArr);
  return new SPARQLResult(head, results);
};

describe('formatWikiResponse', () => {
  const mockData = createMockSPARQLResult(
    'Jack Sparrow',
    'Caribbean',
    'Point(13.733333333 51.033333333)',
    'mockURL'
  );
  it('should return formatted wiki response', () => {
    const expectedResults = [
      new PersonalInfo(
        'Jack Sparrow',
        'Caribbean',
        new Coords(13.733333333, 51.033333333),
        'mockURL'
      ),
    ];
    const actualResults = formatWikiResponse(mockData);

    expect(actualResults).not.toBeNull();
    expect(actualResults).toEqual(expectedResults);
  });
});
