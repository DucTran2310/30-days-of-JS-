const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
]

// Use forEach to console.log each country in the countries array.
countries.forEach((country) => console.log(country.toUpperCase()));

// Use forEach to console.log each name in the names array.
names.forEach((name) => console.log(name));

// Use forEach to console.log each number in the numbers array.
numbers.forEach((number) => console.log(number));

// Use map to create a new array by changing each country to uppercase in the countries array.
const uppercaseCountries = countries.map((country) => country.toUpperCase());
console.log(uppercaseCountries);

// Use map to create an array of countries length from countries array.
const countryLength = countries.map((country) => country.length);
console.log(countryLength);

// Use map to create a new array by changing each number to square in the numbers array
const squaredNumbers = numbers.map((number) => number ** 2)
console.log(squaredNumbers)

// Use map to change to each name to uppercase in the names array
const uppercaseNames = names.map((name) => name.toUpperCase());
console.log(uppercaseNames);

// Use map to map the products array to its corresponding prices.
const pricesProducts = products.map((product) => product.price);
console.log(pricesProducts);

// Use filter to filter out countries containing land.
const filterNameCountries = countries.filter((country) => country.includes('land'));
console.log(filterNameCountries);

// Use filter to filter out countries having six character.
const filterCharacterCountries = countries.filter((country) => country.length = 6);
console.log(filterCharacterCountries);

// Use filter to filter out countries containing six letters and more in the country array.
const filterCharacterCountries1 = countries.filter(country => country.length >= 6);
console.log(filterCharacterCountries1);

// Use filter to filter out country start with 'E';
const filterStartCountry = countries.filter(country => country[0] === 'E');
console.log(filterStartCountry);

// Use filter to filter out only prices with values.
const filterPricesProperty = products.filter(product => !product.price.indexOf);
console.log(filterPricesProperty);

// Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.
function getStringLists(arr) {
    const stringFiltered = arr.filter((item) => typeof item === 'string')
    return stringFiltered
}
console.log(getStringLists([0, 'zero']))

// Use reduce to sum all the numbers in the numbers array.
let sum = 0;
const result = numbers.reduce((sum, item) => {
    return sum += item
});
console.log(result);

// Use reduce to concatenate all the countries and to produce this sentence: Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries
const countriesSentence = countries.reduce((acc, cur) => acc + ', ' + cur) + ' are north European countries.'
console.log(countriesSentence)

// Use some to check if some names' length greater than seven in names array
console.log(names.some(name => name.length > 7));

// Use every to check if all the countries contain the word land
console.log(countries.every(country => country.toLowerCase().includes('land')));

// Use find to find the first country containing only six letters in the countries array
const findCountry6Characters = countries.find(country => country.length === 6);
console.log(findCountry6Characters);

// Use findIndex to find the position of the first country containing only six letters in the countries array
const findIndexCountry = countries.findIndex(country => country.length === 6);
console.log(findIndexCountry);

// Use findIndex to find the position of Norway if it doesn't exist in the array you will get -1.
const findNorwayCountry = countries.findIndex(country => country === 'Norway');
console.log(findNorwayCountry);

// Use findIndex to find the position of Russia if it doesn't exist in the array you will get -1.
const findRussiaCountry = countries.findIndex(country => country === 'Russia');
console.log(findRussiaCountry);