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