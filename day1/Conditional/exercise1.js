// Get user input using prompt(“Enter your age:”). 
// If user is 18 or older , give feedback:'You are old enough to drive' 
// but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.
let userAge = Number(prompt("Enter your age:"));

function getUserInput(age) {
    if (age >= 18) {
        return console.log('You are old enough to drive');
    } else {
        return console.log(`You are left with ${18-age} years to drive`);
    }
}


getUserInput(userAge);

// Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). 
// Use prompt(“Enter your age:”) to get the age as input.

let yourAge = Number(prompt("Enter your age:"));

function compareAge(age) {
    if (age > 21) {
        return console.log(`You are older ${age -21} years than me`);
    } else if (age < 21) {
        return console.log(`You are ${ 21 -age } years than me`);
    } else {
        return console.log(`you are the same age as me`);
    }
};

compareAge(yourAge);

// If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in two ways


function greaterThan(a, b) {
    let answer = a > b ? `${a} is greater than ${b}` : `${a} is less than ${b}`;
    return console.log(answer);
};

greaterThan(4, 3);

// Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?

function checkEvenNumber(num) {
    let check = (num % 2) === 0 ? `${num} is the even number` : `${num} is the odd number`;
    return console.log(check);
};

checkEvenNumber(11);