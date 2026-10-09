// "use strict"

function x() {
    console.log(this)
}
x()
window.x()

let person = {
    firstname: "peter",
    lastname: "parker",
    print: function (city, state) {
        console.log(this.firstname + " " + this.lastname + " " + city + " " + state)
    }
}
person.print("hkg", "india")

let person2 = {
    firstname: "steve",
    lastname: "roger"
}
person.print.call(person2, "hyd", "ind")

// this is called Function borrowing

// call
let name = {
    firstname: "peter",
    lastname:"parker"
}

let name2 = {
    firstname: "tony",
    lastname: "stark"
}

let printname = function (city, state) {
    console.log(this.firstname + " " + this.lastname + " " + city + " " + state)
}

printname.call(name,"nyc","usa")
printname.call(name2, "gujrat", "india")

// apply

printname.apply(name,["goa","india" ])



// bind
let bind = printname.bind(name2,"banglore", "india") 
console.log(bind)
bind() 
// this bind gives a function as ouput which can be  revoked afterwards



const obj = {
    a: 10,
    x: function () {
        console.log(this)
    }
}
obj.x()

// here this is used as a property and can acces the object's property

const obj2 = {
    a: 10,
    x: ()=> {
        console.log(this)
    }
}
obj2.x()

// here this is not used as a property and cannot acces  window object's property but access lexical context scope's property



// this inside a nested arrow function

const obj3 = {
    a: 10,
    x: function () {
       const y= ()=> {
            console.log(this)
        }
        y()
    }
}
obj3.x()