import { Kekspress } from './kekspress';

describe('Kekspress', () => {
  describe('getPassengers', () => {
    test('should return 0 passengers if the Kekspress is empty', () => {
      const kekspress = new Kekspress(9);
      expect(kekspress.getPassengers()).toHaveLength(0);
    });
  });

  describe('nextStop', () => {});

  describe('board', () => {});

  describe('getOff', () => {});
});
