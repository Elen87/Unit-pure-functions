// src/index.js
import getHealthStatus from './health';

const status = getHealthStatus({ name: 'Маг', health: 90 });
console.log(status); // 'healthy'

// Дополнительные примеры для проверки
console.log(getHealthStatus({ name: 'Воин', health: 30 })); // 'wounded'
console.log(getHealthStatus({ name: 'Лучник', health: 10 })); // 'critical'
