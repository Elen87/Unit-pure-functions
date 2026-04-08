import getHealthStatus from '../health';

describe('getHealthStatus function', () => {
  describe('Status "healthy" (health > 50)', () => {
    test('returns "healthy" for health = 100', () => {
      expect(getHealthStatus({ name: 'Маг', health: 100 })).toBe('healthy');
    });

    test('returns "healthy" for health = 90', () => {
      expect(getHealthStatus({ name: 'Воин', health: 90 })).toBe('healthy');
    });

    test('returns "healthy" for health = 51', () => {
      expect(getHealthStatus({ name: 'Лучник', health: 51 })).toBe('healthy');
    });

    test('returns "healthy" for health = 75.5', () => {
      expect(getHealthStatus({ name: 'Паладин', health: 75.5 })).toBe('healthy');
    });
  });

  describe('Status "wounded" (15 ≤ health ≤ 50)', () => {
    test('returns "wounded" for health = 50', () => {
      expect(getHealthStatus({ name: 'Маг', health: 50 })).toBe('wounded');
    });

    test('returns "wounded" for health = 30', () => {
      expect(getHealthStatus({ name: 'Воин', health: 30 })).toBe('wounded');
    });

    test('returns "wounded" for health = 15', () => {
      expect(getHealthStatus({ name: 'Лучник', health: 15 })).toBe('wounded');
    });

    test('returns "wounded" for health = 25.5', () => {
      expect(getHealthStatus({ name: 'Разбойник', health: 25.5 })).toBe('wounded');
    });
  });

  describe('Status "critical" (health < 15)', () => {
    test('returns "critical" for health = 14', () => {
      expect(getHealthStatus({ name: 'Маг', health: 14 })).toBe('critical');
    });

    test('returns "critical" for health = 10', () => {
      expect(getHealthStatus({ name: 'Воин', health: 10 })).toBe('critical');
    });

    test('returns "critical" for health = 1', () => {
      expect(getHealthStatus({ name: 'Лучник', health: 1 })).toBe('critical');
    });

    test('returns "critical" for health = 0', () => {
      expect(getHealthStatus({ name: 'Маг', health: 0 })).toBe('critical');
    });

    test('returns "critical" for health = 5.5', () => {
      expect(getHealthStatus({ name: 'Воин', health: 5.5 })).toBe('critical');
    });
  });

  describe('Error handling', () => {
    test('throws error if health is not a number (string)', () => {
      expect(() => getHealthStatus({ name: 'Маг', health: '90' }))
        .toThrow('Health must be a number');
    });

    test('throws error if health is missing', () => {
      expect(() => getHealthStatus({ name: 'Маг' }))
        .toThrow('Health must be a number');
    });

    test('throws error if health = null', () => {
      expect(() => getHealthStatus({ name: 'Маг', health: null }))
        .toThrow('Health must be a number');
    });

    test('throws error if health = undefined', () => {
      expect(() => getHealthStatus({ name: 'Маг', health: undefined }))
        .toThrow('Health must be a number');
    });

    test('throws error if health = NaN', () => {
      expect(() => getHealthStatus({ name: 'Маг', health: NaN }))
        .toThrow('Health must be a number');
    });

    test('throws error if character is not an object', () => {
      expect(() => getHealthStatus(123)).toThrow('Invalid character object');
      expect(() => getHealthStatus('string')).toThrow('Invalid character object');
      expect(() => getHealthStatus(null)).toThrow('Invalid character object');
    });
  });
});
