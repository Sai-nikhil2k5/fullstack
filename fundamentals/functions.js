// Function Statements or function Delcalrations

function x() {
    console.log("this is Function statement")
}
x()

// Function Expressions

var i = function () {
    console.log("this is funcn exp")
}
i()

// First class functions

function z(param) {
    param();
}

function b() {
    console.log("this is first order funciton")
}

z(b)

// z is first order or higher order functions  and b is call back funciton i.e, which is called by another function

function h() {
    return function () {
        console.log("this is higher order funciton")
    }
}
h()()
