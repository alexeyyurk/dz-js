const hasLicence = true;
const age = 18;
const isDrunk = true;

const canDrive = hasLicence && age >= 18 && !isDrunk;
console.log(`Может водить автомобиль? ${canDrive ? 'может' : 'не может'}`);