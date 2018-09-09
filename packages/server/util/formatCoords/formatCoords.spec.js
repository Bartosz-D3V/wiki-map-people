import Coords from '../../domain/Coords';
import formatCoords from './formatCoords';

describe('formatCoords function', () => {
  it('should convert string to Coords', () => {
    const coords = 'Point(13.733333333 51.033333333)';
    const expectedCoords = new Coords(13.733333333, 51.033333333);
    const actualCoords = formatCoords(coords);

    expect(actualCoords).toBeDefined();
    expect(actualCoords).toEqual(expectedCoords);
  });
});
