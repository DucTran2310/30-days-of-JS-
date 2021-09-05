const skills = ['HTML', 'CSS', 'JS', 'React', 'Node', 'Python']
let age = 250;
let isMarried = true
const student = {
    firstName: 'Asabeneh',
    lastName: 'Yetayehe',
    age: 250,
    isMarried: true,
    skills: ['HTML', 'CSS', 'JS', 'React', 'Node', 'Python',]
}
const txt = `{
    "Alex": {
        "email": "alex@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 30
    },
    "Asab": {
        "email": "asab@asab.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Redux",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 25,
        "isLoggedIn": false,
        "points": 50
    },
    "Brook": {
        "email": "daniel@daniel.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux"
        ],
        "age": 30,
        "isLoggedIn": true,
        "points": 50
    },
    "Daniel": {
        "email": "daniel@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Python"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "John": {
        "email": "john@john.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux",
            "Node.js"
        ],
        "age": 20,
        "isLoggedIn": true,
        "points": 50
    },
    "Thomas": {
        "email": "thomas@thomas.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "Paul": {
        "email": "paul@paul.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    }
}`

// 1. Change skills array to JSON using JSON.stringify()
const skillsArray = JSON.stringify(skills);
console.log(skillsArray);

// 2. Stringify the age variable
console.log(JSON.stringify(age));

// Stringify the isMarried variable
console.log(JSON.stringify(isMarried));

// Stringify the student object
console.log(JSON.stringify(student));

// Stringify the students object with only firstName, lastName and skills properties
// tham số đầu là arr, tham số 2 là key value, tham số 3 để format
let newStudent = JSON.stringify(student, ['firstName', 'lastName', 'skills'], 2);
console.log(newStudent);

//Parse the txt JSON to object.
const txtObj = JSON.parse(txt, undefined, 2);
console.log(txtObj);

// Find the the user who has many skills from the variable stored in txt
const keys = Object.keys(txtObj);
let count = 0;
let user = '';
for (i = 0; i < keys.length; i++) {
    if (txtObj[keys[i]].skills.length > count) {
        count = txtObj[keys[i]].skills.length;
        user = keys[i];
    }
}
console.log(user);