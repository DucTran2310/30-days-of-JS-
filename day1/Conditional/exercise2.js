// Write a code which can give grades to students according to theirs scores:
// 80-100, A
// 70-89, B
// 60-69, C
// 50-59, D
// 0-49, F

function checkScore(score) {
    if (score >= 90 && score <= 100) {
        return console.log('Grades A');
    } else if (score >= 70 && score <= 89) {
        return console.log('Grades B');
    } else if (score >= 60 && score <= 69) {
        return console.log('Grades C');
    } else if (score >= 50 && score <= 59) {
        return console.log('Grades D');
    } else if (score <= 49) {
        return console.log('Grades F');
    }
}

checkScore(66);

// Check if the season is Autumn, Winter, Spring or Summer.


function monthToSeason(month) {
    if (month === "September" || month === "October" || month === "November") {
        return console.log("Autumn");
    } else if (
        month === "December" ||
        month === "January" ||
        month === "February"
    ) {
        return console.log("Winter ");
    } else if (month === "June" || month === "August" || month === "July") {
        return console.log("summer");
    } else {
        return console.log("Month not found");
    }
}
monthToSeason("September");

// Check if a day is weekend day or a working day. Your script will take day as an input.

function isWorkDay(day) {
    if (day === "Saturday" || day === "Sunday") {
        return console.log(`${day} is a weekend day.`);
    } else if (
        day === "Monday" ||
        day === "Tuesday" ||
        day === "Wednesday" ||
        day === "Thursday" ||
        day === "Friday"
    ) {
        return console.log(`${day} is a working day.`);
    }
}
isWorkDay("Saturday");