const users = {
    Alex: {
        email: 'alex@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript'],
        age: 20,
        isLoggedIn: false,
        points: 30
    },
    Asab: {
        email: 'asab@asab.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
        age: 25,
        isLoggedIn: false,
        points: 50
    },
    Brook: {
        email: 'daniel@daniel.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
        age: 30,
        isLoggedIn: true,
        points: 50
    },
    Daniel: {
        email: 'daniel@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    John: {
        email: 'john@john.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
        age: 20,
        isLoggedIn: true,
        points: 50
    },
    Thomas: {
        email: 'thomas@thomas.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    Paul: {
        email: 'paul@paul.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
        age: 20,
        isLoggedIn: false,
        points: 40
    }
}

// Find the person who has many skills in the users object.
console.log(users.Asab.skills);

// Count logged in users,count users having greater than equal to 50 points from the following object.
function checkUsers() {
    let countLoggin = [];
    const entries = Object.entries(users);
    for (let i = 0; i < entries.length; i++) {
        if (entries[i][1].isLoggedIn === true) {
            countLoggin.push(entries[i][0]);
        }
    }
    return countLoggin;
}

console.log(checkUsers());

function checkPoints() {
    let countPoints = [];
    const entries = Object.entries(users);
    for (let i = 0; i < entries.length; i++) {
        if (entries[i][1].points = 50) {
            countPoints.push(entries[i][0]);
        }
    }
    return countPoints;
}

console.log(checkPoints());

//  Find people who are MERN stack developer from the users object.

function findMernDev() {
    let mern = [];
    const entries = Object.entries(users);
    for (let i = 0; i < entries.length; i++) {
        if (
            entries[i][1].skills.includes("MongoDB" && "Express" && "React" && "Node")
        ) {
            mern.push(entries[i][0]);
        }
    }
    return mern;
}
console.log(findMernDev());