// const p = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         resolve("resolved")
//     }, 5000)
// })

// const p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("resolved")
//     }, 10000)
// })



// // function getData() {
// //     p.then((res) => (console.log(res)))
// //     console.log("hi ra")
// // }
// // getData()



// // async await

// async function handlePromise() {
//     const val = await p
//     console.log(val)
//     console.log("hi ra")

//     const val1 = await p1
//     console.log(val1)
//     console.log("bye ra")
// }
// handlePromise()

// fetch api with async await


const API_URL = "https://api.github.com/users/Sai-nikhil2k5"

// normal funciton 

// fetch(API_URL)
//     .then((res) => {
//         console.log(res)
//         return res.json()
//     })
//     .then((json)=> console.log(json))

// async function handlePromise() {
//     try {
//         const data = await fetch(API_URL)
//         console.log(data)
//         const json = await data.json()
//         console.log(json)
//     }
//     catch (err){
//         console.log(err);
//     }
// }
// handlePromise()

// error handling 

async function handlePromise() {
        const data = await fetch(API_URL)
        console.log(data)
        const json = await data.json()
        console.log(json)
    
}
handlePromise().catch(err => console.log(err))

