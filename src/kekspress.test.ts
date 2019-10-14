import { Kekspress } from './kekspress';

describe('Kekspress', () => {
  describe('getPassengers', () => {
    test('should return 0 passengers if the Kekspress is empty', () => {
      const kekspress = new Kekspress(9);
      expect(kekspress.getPassengers()).toHaveLength(0);
    });
  });

  describe('nextStop', () => {
    test('should be undefined', () => {
      const kekspress = new Kekspress(9);
      expect(kekspress.nextStop(5)).toBeUndefined();
    });
  });

  describe('board', () => {
    test('should be undefined', () => {
      const kekspress = new Kekspress(9);
      expect(kekspress.board('Bob', 3)).toBeUndefined();
    });
  });

  describe('getOff', () => {
    test('should be undefined', () => {
      const kekspress = new Kekspress(9);
      expect(kekspress.getOff('Bob')).toBeUndefined();
    });
  });
});
