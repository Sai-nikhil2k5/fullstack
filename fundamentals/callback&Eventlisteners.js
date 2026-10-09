// // callbacks are functions which are passed as arguments to other functions and are called later on
// setTimeout(b, 5000)
// function b() {
//     console.log("b")
// }


// function x(y) {
//     console.log("hi")
//     y();
// }

// x(function () {
//     console.log("callback function ")
// })


// function event() {
//     let count = 100

//     document.getElementById("clickme").addEventListener("click", function () {
//         console.log("button clicked", --count)
//     })
// }
// event();


// // for (let i = 0; i < 100000; i++) {
// //     var o = 1

// //     setTimeout(function b() {
// //         console.log(i,o)
// //     }, o * 500)
// //     o++
// // }

// // setTimeout(function () {
// //     console.log("hi ra nanna how are you are you fine today ")
// // }, 600)
// // the above 2 settimeout statements clash with each other and thus the second one which needs to be exefcuted at 500 ms is executed very much later by waiting in the call back queue until the first one finishes its execution.

console.log("start")
function y() {
    console.log("hello")
}
y()
y()
y()
y()
y()
y()
y()
y()
y()
y()
y()
y()
y()
y()

setTimeout(y, 0)

console.log("end")
