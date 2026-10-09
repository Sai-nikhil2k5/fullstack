// class BankAccount or
const BankAccount = class { //nnamed class is thsi 
    customerName;
    accountNumber;
    balance;

    constructor(customerName, balance = 0) {
        this.customerName = customerName
        this.accountNumber = Date.now()
        this.balance = balance
    }

    deposit(amount) {
        this.balance += amount
    }

    withdraw(amount) {
        this.balance -= amount
    }
}

const nikhilAccount = new BankAccount("nikhil")

nikhilAccount.deposit(200)
console.log(nikhilAccount)