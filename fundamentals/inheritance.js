function BankAccount(customerName, balance = 0){
    this.customerName = customerName
    this.accountNumber=Date.now()
    this.balance=balance
}


BankAccount.prototype.deposit = function (amount) {
    this.balance+=amount
}
BankAccount.prototype.withdraw = function (amount) {
    this.balance-=amount
}

function SavingAccount(customerName, balance = 0) {
    BankAccount.call(this,customerName,balance)
    this.transactionLimit = 5000;
    
}

SavingAccount.prototype = Object.create(BankAccount.prototype);

SavingAccount.prototype.takeLoan = function (amount) {
    console.log("Loan took: "+amount)
}

const nikhil = new SavingAccount("nikhil", 1000);
console.log(nikhil)
nikhil.takeLoan(23423423)