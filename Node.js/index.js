// var http = require('http');

// http.createServer(function (req, res) {
//     res.write("Hello Buddies this is my first node program");
//     res.end();
// }).listen(8080);

// console.log("Server is running at http://localhost:8080/");


const express = require('express')
const app = express()
const users = require('./Users')


// app.get('/', (req, res) => {
//     res.send("HEY BUDDIEs")
// })


app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/users', require('./routes/api/users'))

app.listen(8000, () => {
    console.log("server is running at http://localhost:8000/")
})
app.get('/users', (req, res) => {
    res.json(users);
})