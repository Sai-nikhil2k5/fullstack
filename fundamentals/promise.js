const cart = ["shoes", "pants", "shirt"]


// createOrder(cart, function (orderId) {
//     proceedToPayment(orderId, function (paymentInfo) {
//         showOrder(paymentInfo, function () {
//             updatebalance()
//         })
//     })
// })

// this is called callback hell where each fucntion is passed as a callback to the previous fucntion
// this may call teh callback function or might not sometimes beacause there is no guarentee that the first higher order function is defined perfectly by a developper
// this may call the callback function two times or zero times
// this is very hard to handle the errors and exception in this callback hell

// so we use promise over here

// const promise = createOrder(cart)

// promise
//     .then(function (orderId) {
//         return proceedToPayment(orderId)
//     })
//     .then(function (paymentInfo) {
//         return showOrder(paymentInfo)
//     })
//     .then(function (paymentInfo) {
//         return updatebalance(paymentInfo)
//     })

// or 
createOrder(cart)
    .then(function (orderId) {
        console.log(orderId)
    return orderId
})
    .then(function (orderId) {
        return proceedToPayment(orderId)
    })
    .then(function (paymentInfo) {
        console.log(paymentInfo)
    })
    .catch(function (err) {
        console.log(err.message)
    })


function createOrder(cart) {
    const pr = new Promise(function (resolve, reject){
        // createOrder
        // validatecart
        // orderId

        if (!validcart()) {
        const err = Error("cart isnt valid")
        reject(err)
    }
    const orderId = 121212
    if (orderId) {
        setTimeout(function (){
            resolve(orderId)
        }, 5000)
    }
    })
    return pr
}

function proceedToPayment(orderId) {
    return new Promise(function (resolve, reject){
        resolve("paymentdone")
    })
}

function validcart() {
    return true
}
    



// this is how we use promise over here