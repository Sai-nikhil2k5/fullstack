const radii = [2, 8, 4, 6]

// function maths() {
//     this.cal = function(param, radii) {
//         const output = []
//         for (var i = 0; i < radii.length; i++) {
//             output.push(param(radii[i]))
//         }
//         return output
//     }
// }
// function area(radius) {
//     return Math.PI*radius*radius
// }

// function diamerter(radius) {
//     return 2*radius
// }

// // console.log(cal(area, radii))
// // console.log(cal(diamerter,radii))

// var res = new maths()
// console.log(res.cal(area,radii))


Array.prototype.cal = function (param) {
    const output = []
    for (var i = 0; i < this.length; i++) {
        output.push(param(this[i]))
    }
    return output
}

const area =function (radius) {
    return Math.PI*radius*radius
}

const diameter = function (radius) {
    return 2 * radius
}

console.log(radii.cal(area))
console.log(radii.map(area))


// this above is the manual  implementation of map  