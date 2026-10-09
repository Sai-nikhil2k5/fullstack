//Closures

// function z() {
//     var s = 30
//     function x() {

//         var a = 10;
//         function y() {
//             a += 1000;
//             a -= 5
//             console.log(a,s)
//         }
//         y();

//     }
//     x();


function z() {
    var o = 10;
  return  function v() {
      var s = 30
      var a = 1000
        return function x() {

        var a = 10;
            return function y() {
                a += 1000;
                a -= 5
                console.log(a,o,s)
            }
      }
      

    }
}
(z()()()())

// }
// z();

//Set timeout

// function x() {

//     for (var i = 1; i <= 15; i++) {
//         setTimeout(function () {
//             console.log(i);
//         },i* 500);
//     }
// }
// x();

// here the function prints the i value which is repeated beacause, even before the settimeout to run, the loop ran and increased the value of i from 1 to 16 so when execuiton happens at 1*500 ms by then the valur of i is 16 , and the i is a "var" whcih refers to the reference of variable i but doesnt make a copy of that. so same reference is called 15 times

//so we use the let keyword which is block scoped.
// function x() {

//     for (let i = 1; i <= 15; i++) {
//         setTimeout(function () {
//             console.log(i);
//         }, i * 500);
//     }
// }
// x();
// or we can use the closure concept

// function x() {


//     for (var i = 1; i <= 15; i++) {
//         function y(i) {
//             setTimeout(function () {
//                 console.log(i);
//             }, i * 500);
//         }
//         y(i);
//     }
    
// }
// x();
