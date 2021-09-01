const a = [4, 5, 8, 9];
const b = [3, 4, 5, 7];
const countries = ["Finland", "Sweden", "Denmark", "Norway", "IceLand"];

// create an empty set
const testEmpty = new Set();
console.log(testEmpty.size);
console.log(testEmpty);

// Create a set containing 0 to 10 using loop
const setNumbers = new Set();
for (let i = 0; i < 11; i++) {
    setNumbers.add(i);
}
console.log(setNumbers);

// Remove an element from a set
setNumbers.delete(6);
console.log(setNumbers);

// Clear a set
setNumbers.clear();
console.log(setNumbers);

// Create a set of 5 string elements from array
const cars = ["Audi", "Ferrari", "Ford", "BMW", "Cadillac", "audi", "Audi"];
const setCars = new Set();
for (const car of cars) {
    setCars.add(car);
}
console.log(setCars);

// Create a map of countries and number of characters of a country

const setCountry = new Set();

countries.map(elem => {
    setCountry.add({ elem, length: elem.length });
});

console.log(setCountry);

// Find a union b
const c = [...a, ...b];
let A = new Set(a);
let B = new Set(b);
let C = new Set(c);

console.log(C);

// Find a intersection b
let intersection = a.filter((number) => B.has(number));
console.log(intersection);

// Find a with b
const setDifference = new Set();
// copy
const setCopyA = new Set(A);

for (const b of B) {
    // true or false
    if (setCopyA.has(b)) {
        setCopyA.delete(b);
    } else {
        setCopyA.add(b);
    }
}
console.log(setCopyA);