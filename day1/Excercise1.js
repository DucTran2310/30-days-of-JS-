const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya',
];

const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB',
];

// Declare an empty array 
const arr = [];

// Declare an array with more than 5 number of elements
const arr1 = [1, 2, 3, 4, 5, 6]

//Find the length of your array
console.log(arr1.length);

// Get the first item, the middle item and the last item of the array
console.log(arr1[0]);
console.log(arr1.length - 1);
console.log(arr1.length / 2);

//Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
const arr2 = [
    1,
    'hentai',
    'abc',
    true,
    { car: ['BMW', 'Mec', 'VinFast'] },
    { country: 'Finland', city: 'Helsinki' },
];

console.log(arr2.length);
// Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
const itCompanies = [
    'Facebook',
    'Google',
    'Microsoft',
    'Apple',
    'IBM',
    'Oracle',
    'Amazon',
]
//Print the array using console.log()
itCompanies.forEach(company => console.log(company));
// Print out each company
console.log(itCompanies.toString());
// Change each company name to uppercase one by one and print them out
itCompanies.forEach(company => console.log(company.toUpperCase()));
// Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
itCompanies.splice(6, 1, " and Amazon are big IT companies.");
console.log(itCompanies.join(","));
// Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
const NewItCompanies = [
    'Facebook',
    'Google',
    'Microsoft',
    'Apple',
    'IBM',
    'Oracle',
    'Amazon',
]
NewItCompanies.forEach(company => {
    NewItCompanies.indexOf(company) === -1 ? console.log(" a company is not found") : console.log(company);
})
// Filter out companies which have more than one 'o' without the filter method
const moreOneO = (NewItCompanies) => {
    let arrFilter = [];
    for (let i = 0; i < NewItCompanies.length - 1; i++) {
        let moment = NewItCompanies[i].toString();
        let sum = 0;
        console.log(`This is index`, moment);
        for (let a = 0; a < moment.length - 1; a++) {
            if (moment[a] == "o") {
                console.log(`here`);
                sum += 1;
            }
        }
        if (sum >= 2) arrFilter.push(NewItCompanies[i]);
    }
    return arrFilter;
};

console.log(moreOneO(NewItCompanies));

// Sort the array using sort() method
console.log(NewItCompanies.sort());
// Reverse the array using reverse() method
console.log(NewItCompanies.reverse());
// Slice out the first 3 companies from the array
const NewItCompanies1 = [
    'Facebook',
    'Google',
    'Microsoft',
    'Apple',
    'IBM',
    'Oracle',
    'Amazon',
]
console.log(NewItCompanies1.slice(0, 3));
// Slice out the last 3 companies from the array
const NewItCompanies2 = [
    'Facebook',
    'Google',
    'Microsoft',
    'Apple',
    'IBM',
    'Oracle',
    'Amazon',
];
console.log(NewItCompanies2.slice(4, NewItCompanies2.length));
// Slice out the middle IT company or companies from the array
const NewItCompanies3 = [
    'Facebook',
    'Google',
    'Microsoft',
    'Apple',
    'IBM',
    'Oracle',
    'Amazon',
];
const middleItCompany = NewItCompanies3.slice(3, NewItCompanies3.length - 3);
console.log(middleItCompany);
