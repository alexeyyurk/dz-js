const positionLat = 10;
const positionLong = 20;
const adressLat = 80;
const adressLong = 50;

const distance = Math.sqrt((adressLong - positionLong) ** 2 + (adressLat - positionLat) ** 2);
console.log(distance);