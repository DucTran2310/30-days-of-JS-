const personAccount = {
    firstName: 'AdStar',
    lastName: 'Tran',
    income: {
        salary: 2000,
        stocks: 300,
        freelancing: 700

    },
    expenses: {
        mortgage: 427,
        maintenance: 227,
        bills: 50,
        daycare: 165
    },
    totalIncome: function() {
        const income = Object.values(personAccount.income);
        let totalIncome = 0;
        for (const item in income) {
            totalIncome += income[item];

        }
        return totalIncome;

    },
    totalExpenses: function() {
        const expense = Object.values(personAccount.expenses);
        let totalExpenses = 0;
        for (const item in expense) {
            totalExpenses += expense[item];
        }
        return totalExpenses;
    },
    addIncome: function(type, amount) {
        personAccount.income[type] = amount;

    },
    addExpense: function(type, amount) {
        personAccount.expense[type] = amount;
    },
    accountBalance: function() {
        let totalExpenses = this.totalIncome();
        let totalIncome = this.totalExpenses();
        let accountBalance = totalExpenses - totalIncome;
        return accountBalance;
    },
    accountInfo: function() {
        console.log(`Person name is ${this.firstName} ${this.lastName}. His income is ${this.totalIncome()} per month and his expenses are ${this.totalExpenses()} per month. His account balance is ${this.accountBalance()}`);
    }



};
console.log(personAccount);
console.log(`${personAccount.firstName} total income is €${personAccount.totalIncome()} per month.`);
console.log(`${personAccount.firstName} total expenses are €${personAccount.totalExpenses()} per month.`);
console.log(`${personAccount.addIncome('bonus', 100)}`);
console.log(`${personAccount.firstName} account balance is €${personAccount.accountBalance()}.`);
console.log(personAccount.income);
console.log(`${personAccount.firstName} account balance is €${personAccount.accountBalance()}.`);