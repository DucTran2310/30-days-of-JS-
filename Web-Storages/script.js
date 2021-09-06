//Store you first name, last name, age, country, city in your browser localStorage.

localStorage.setItem('firstName', 'Tran');
localStorage.setItem('lastName', 'Duc');
localStorage.setItem('age', 21);
localStorage.setItem('country', 'VietNam');
localStorage.setItem('city', 'Binh Phuoc');

console.log(localStorage);

// Create a student object. The student object will have first name, last name, age, skills, country, enrolled keys and values for the keys. 
// Store the student object in your browser localStorage.

const student = {
    firstName: 'Mai',
    lastName: 'Phuong',
    age: 21,
    skills: ['HTML', 'CSS', 'JS', 'React'],
    country: 'VietNam',
    enrolled: {
        HTML: true,
        CSS: true,
        JS: false
    }
}

const studentJson = JSON.stringify(student, undefined, 4);
localStorage.setItem('student', studentJson);
console.log(localStorage);

// Create an object called personAccount. 
// It has firstname, lastname, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. 
// Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.

const personAccount = {
    firstName: 'Giang',
    lastName: 'Su',
    incomes: 1000,
    expenses: 500,
    totalIncome: function() {
        return this.incomes;
    },
    totalExpense: function() {
        return this.expenses;
    },
    addIncomes: function(inc) {
        this.incomes += inc;
    },
    addExpense: function(exp) {
        this.expenses += exp;
    },
    accountBalance: function() {
        return this.incomes - this.expenses;
    },
    accountInfo: function() {
        console.log(`
            Name: ${this.firstName} ${this.lastName},
            AccountBalance: ${this.accountBalance()}
        `);
    },
};

personAccount.addIncomes(300);
personAccount.addExpense(400);
personAccount.accountInfo();

const personJson = JSON.stringify(personAccount, undefined, 4);
localStorage.setItem('person', personJson);
console.log(localStorage.getItem('person'));