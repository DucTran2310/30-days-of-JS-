const countries = [
    { country: "China", population: 1377422166, language: "Mandarin" },
    { country: "India", population: 1295210000, language: ["Indi", "English"] },
    { country: "United States of America", population: 323947000, language: "English" },
    { country: "Indonesia", population: 258705000, language: "Indonesian" },
    { country: "Brazil", population: 206135893, language: "Portuguese" },
    { country: "Pakistan", population: 194125062, language: ["Urdu", "English"] },
    { country: "Nigeria", population: 186988000, language: "English" },
    { country: "Bangladesh", population: 161006790, language: "Bengali" },
    { country: "Russian Federation", population: 146599183, language: "Russian" },
    { country: "Japan", population: 126960000, language: "Japanese" }
];

// Destructure the countries object print name, capital, population and languages of all countries
for (const { country, population, languages }
    of countries) {
    console.log(country, population, languages);
}

// A junior developer structure student name, skills and score in array of arrays which may not easy to read. 
// Destructure the following array name to name, skills array to skills, scores array to scores, JavaScript score to jsScore and React score to reactScore variable in one line.
const student = ['David', ['HTM', 'CSS', 'JS', 'React'],
    [98, 85, 90, 95]
];
const [name, skill, [, , jsScore, reactScore]] = student;
console.log(name, skill, jsScore, reactScore);

// Write a function called convertArrayToObject which can convert the array to a structure object.
const students = [
    ['David', ['HTM', 'CSS', 'JS', 'React'],
        [98, 85, 90, 95]
    ],
    ['John', ['HTM', 'CSS', 'JS', 'React'],
        [85, 80, 85, 80]
    ]
];

function convertArrayToObject(arr) {
    let object = [];
    for (a of arr) {
        let [name, skills, scores] = a;
        object.push({ name: name, skills: skills, scores: scores });
    };
    return object;
}

console.log(convertArrayToObject(students));

// Copy the student object to newStudent without mutating the original object. In the new object add the following ?
const student1 = {
    name: 'David',
    age: 25,
    skills: {
        frontEnd: [
            { skill: 'HTML', level: 10 },
            { skill: 'CSS', level: 8 },
            { skill: 'JS', level: 8 },
            { skill: 'React', level: 9 }
        ],
        backEnd: [
            { skill: 'Node', level: 7 },
            { skill: 'GraphQL', level: 8 },
        ],
        dataBase: [
            { skill: 'MongoDB', level: 7.5 },
        ],
        dataScience: ['Python', 'R', 'D3.js']
    }
};

// Add Bootstrap with level 8 to the front end skill sets
// Add Express with level 9 to the back end skill sets
// Add SQL with level 8 to the data base skill sets
// Add SQL without level to the data science skill sets

const newStudent = {...student1 };
newStudent.skills.frontEnd.push({ skill: 'Bootstrap', level: 8 });

newStudent.skills.backEnd.push({ skill: 'Express', level: 9 });

newStudent.skills.dataBase.push({ skill: 'SQL', level: 8 });

newStudent.skills.dataScience.push('SQL');

console.log('Edited New Student', newStudent.skills);