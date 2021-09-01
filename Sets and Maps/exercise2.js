const countriesLanguages = [
    { country: "English", count: 1268 },
    { country: "French", count: 277 },
    { country: "Arabic", count: 274 },
    { country: "Spanish", count: 538 },
    { country: "Japanese", count: 126 },
    { country: "Marathi", count: 95 },
    { country: "Hindi", count: 637 },
    { country: "Russian", count: 258 },
    { country: "Bengali", count: 265 },
    { country: "Portuguese", count: 252 },
    { country: "Dutch", count: 24 },
    { country: "German", count: 132 },
    { country: "Mandarin Chinese", count: 1120 },
    { country: "Swahili", count: 99 }
];

// How many languages are there in the countries object file.
const setCountry = new Set(countriesLanguages);

if (setCountry.size) {
    console.log(`There are ${setCountry.size} languages`)
} else {
    console.log("There are no countries")
};


const sort = [...(new Set(countriesLanguages))].sort((a, b) => b.count - a.count);
//console.log(sort)

const setB = new Set();

let a = 0;
while (a < 10) {
    setB.add(sort[a])
    a++;
}

console.log("The 10 most spoken languages");
console.log(setB)
console.log(`There are ${setB.size} countries`)