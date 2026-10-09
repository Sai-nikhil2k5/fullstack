// // MAP operation

// const arr1=[1,2,3,4,5,6,7]

// function multipy(i) {
//     return i*3
// }

// const res=arr1.map(multipy)
// console.log(res)

// // Map inline arrow function
// const res1=arr1.map((i)=> i*13)
// console.log(res1)




// // Filter operation

// const arr = [1, 2, 3, 4, 5, 6, 7]

// function isodd(i) {
//     return i%2!==0
// }
// const ouput2 = arr.filter(isodd)
// console.log(ouput2)

// // inline arrow function
// const output = arr.filter((i)=> i % 2 === 0)

// console.log(output)


// // Reduce operation

// const arr2 = [1, 2, 3, 4, 5, 6]

// const out = arr2.reduce((acc, val) =>{
//     acc =Math.max(acc,val)
//   return acc
// },0)
// console.log(out)


const users=[
    {firstname:"John",lastname:"Doe",age:23},
    {firstname:"Jane",lastname:"Smith",age:25},
    {firstname:"Mike",lastname:"williams",age:34},
    {firstname:"Sarah",lastname:"Brown",age:19},
]

// Map
const ouput1=users.map((x)=> x.firstname+x.lastname)
console.log(ouput1)

// Reduce
function g(acc, cur) {
    if (acc[cur.age]) {
        acc[cur.age]++
    }
    else {
        acc[cur.age] = 1
    }
    return acc
}
const output3 = users.reduce(g,{}) 
console.log(output3)
 

function f(acc, cur) {
    if(cur.age >= 25){
        acc.push(cur.firstname)
    }
    return acc
}
const output5 = users.reduce(f, [])
console.log(output5)

// Filter
const output4 = users
    .filter( (x) => (x.age > 21) )
    .map((x) => x.firstname)
console.log("output4",output4)
