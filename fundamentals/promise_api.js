const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("P1 succes")
        // reject("P1 failed")
    }, 1000)
})

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("P2 succes")
        // reject("P2 failed")
    }, 2000)
})

const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve("P3 succes")
        reject("P3 failed")
    }, 3000)
})


Promise.all([p1,p2,p3])
    .then((res) => {
        console.log("Promise.all",res)
    })
    .catch((err)=> {
    console.error("Promise.all",err)
    })

Promise.allSettled([p1, p2, p3])
    .then((res) => console.log("Promise.allSettled",res))
    .catch(err => {
        console.error("Promise.allSettled",err)
    })

    // Promise.race()

Promise.race([p1, p2, p3])
    .then((res) => {
    console.log("Promise.race",res)
    })
    .catch((err) => {
        console.error("Promise.race",err)
    })

// Promise.any()
    
Promise.any([p1, p2, p3])
    .then((res) => {
    console.log("Promise.any",res)
    })
    .catch((error)=> {
        console.error("Promise.any",error)
})
    