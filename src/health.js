export default function getHealthStatus(character) {
  if (!character || typeof character !== 'object') {
    throw new Error('Invalid character object');
  }

  const { health } = character;

  if (typeof health !== 'number' || Number.isNaN(health)) {
    throw new Error('Health must be a number');
  }

  if (health > 50) {
    return 'healthy';
  }
  if (health >= 15) {
    return 'wounded';
  }

  return 'critical';
}
