// class BankAccount or
class BankAccount  { //unnamed class is thsi
    customerName;
    accountNumber;
    #balance;

    constructor(customerName, balance = 0) {
        this.customerName = customerName
        this.accountNumber = Date.now()
        this.#balance = balance
    }

    deposit(amount) {
        this.#balance += amount
        
    }

    withdraw(amount) {
        this.#balance -= amount
    }

    setBalance(amount) {
        if (isNaN(amount)) {
            throw new Error('Amount is invalid')
        }
        this.#balance = amount
    }
}


const nick = new BankAccount("nick", 2000)
nick.setBalance(333)
nick.deposit(34234)

console.log(nick)

class SavingAccount extends BankAccount { //unnamed class is thsi 
    customerName;
    accountNumber;
    balance;

    constructor(customerName, balance = 0) {
       super(customerName,balance)
    }

    #CalculateInterest(amount) {
        console.log("Interest is ",amount)
    }
    takeLoan(amount, amount1) {
        this.#CalculateInterest(amount1);
        console.log("loan took: ",amount)
    }
}

const sai=new SavingAccount("sainikhil",5000)
sai.takeLoan(3432432,2342343)
console.log(sai)