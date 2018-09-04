import MarkerUtil from './MarkerUtil';
import Coords from '../domain/Coords';

describe('MartkerUtil', () => {
  describe('formatCoords function', () => {
    it('should convert string to Coords', () => {
      const coords = 'Point(13.733333333 51.033333333)';
      const expectedCoords = new Coords(13.733333333, 51.033333333);
      const actualCoords = MarkerUtil.formatCoords(coords);

      expect(actualCoords).toBeDefined();
      expect(actualCoords).toEqual(expectedCoords);
    });
  });
});
