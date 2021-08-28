//30. The following is a list of 10 students ages:
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

// Sort the array and find the min and max age
ages.sort();
console.log(ages);
// Find the min age and the max age
console.log('==== find the min and max age ===');
let minAge = ages[0];
console.log(minAge);

let lastIndexAge = ages.length - 1;
console.log(ages[lastIndexAge]);

// Find the median age(one middle item or two middle items divided by two);
console.log('=== find the median age ====')
let median = Math.round((ages.length - 1) / 2);
console.log(ages[median]);

// Find the average age(all items divided by number of items);
console.log('==== find the average ====');

const findAverage = (ages) => {
    let sum = 0;
    let average
    for (let i = 0; i < ages.length; i++) {
        sum = sum + ages[i];
        average = Math.round(sum / i);
    }

    return average
}

console.log(findAverage([19, 22, 19, 24, 20, 25, 26, 24, 25, 24]));

// Find the range of the ages(max minus min)
console.log('=== find the range, min minus max age ===');
let range = (ages[lastIndexAge]) - minAge;
console.log(range);

// Compare the value of (min - average) and (max - average), use abs() method
let value1 = Math.abs(minAge - 25);
console.log(value1)


//31. Find the middle country(ies) in the countries list
let middleCountriesIndex = Math.round((countries.length - 1) / 2);
console.log(countries[middleCountriesIndex]);

//32. Divide the countries list into two equal lists if it is even. If countries array is not even one more country for the first half.
console.log(countries.length);
let arrCountries2 = [];
/*if (countries.length % 2 === 0) {
    arrCountries1 = countries.slice(0, 5)
}*/

let arrCountries1 = countries.splice(0, 5);
console.log(arrCountries1);
console.log(countries);