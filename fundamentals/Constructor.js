function BankAccount(customerName, balance = 0) {
    this.customerName = customerName
    this.accountNumber = Math.floor(Math.random() * 1000000000)
    this.balance = balance

    // this.deposit = function (amount) {
    //     this.balance += amount
    // }
    // this.withdraw = (amount) => {
    //     this.balance -= amount
    // }
}

// const account1 = new BankAccount("abhi", 20000)
// const account2 = new BankAccount("nikhil", 150000)
// console.log(account1, account2)
// account1.deposit(1000)
// account1.withdraw(5000)
// console.log(account1.balance)

// ============

const accountForm = document.querySelector("#accountForm")
const customerName = document.querySelector("#customerName")
const balance = document.querySelector("#balance")


const depositForm = document.querySelector("#depositForm")
const accountNumber = document.querySelector("#accountNumber")
const amount = document.querySelector("#amount")

const accounts = [];

accountForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const account = new BankAccount(customerName.value, +balance.value)
    accounts.push(account)
    console.log(accounts)
})

depositForm.addEventListener('submit', (e) => {
    e.preventDefault();
    account = accounts.find((account) => account.accountNumber === +accountNumber.value)

    account.deposit(+amount.value)
    console.log(accounts)

})

// ========================

BankAccount.prototype.deposit = function (amount) {
    this.balance += amount
}
BankAccount.prototype.withdraw = function (amount) {
    this.balance -= amount
}

const nikhilAccount = new BankAccount('sainikhil', 50000)
const abhiAccount = new BankAccount('abhi', 50000)

nikhilAccount.deposit(2000)
abhiAccount.withdraw(5000)
console.log(nikhilAccount)
console.log(abhiAccount)
console.log(BankAccount.prototype)