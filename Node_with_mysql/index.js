const express = require('express')
const mysql = require('mysql')

// create connection

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'nodemysql'
})

// connect to database
db.connect(err => {
    if (err) {
        throw err;
    }
    console.log('MySql connected')
})
const app = express();

app.get('/createdb', (req, res) => {
    let sql = `CREATE DATABASE nodemysql`;
    db.query(sql, (err) => {
        if (err) {
            console.error(err);
            return res.status(500).send("Error creating database: " + err.message);
        }
        res.send("Database created");
    })
})

// create a table
app.get('/createemployee', (req, res) => {
    let sql = `CREATE TABLE employee(id int AUTO_INCREMENT, name VARCHAR(255), designation VARCHAR(255), PRIMARY KEY(id))`
    db.query(sql, (err) => {
        if (err) {
            console.error(err);
            return res.status(500).send("Error creating table: " + err.message);
        }
        res.send('Employee table created')
    })
})

// insert employee
app.get('/employee1', (req, res) => {
    let post = { name: 'Jake mandanna', designation: 'Clerk' }
    let sql = 'INSERT INTO employee SET ?'
    let query = db.query(sql, post, (err) => {
        if (err) {
            console.error(err);
            return res.status(500).send("Error adding employee: " + err.message);
        }
        res.send('employee added')
    })
})

// insert employee
app.get('/employee2', (req, res) => {
    let post = { name: 'Jake Sully', designation: 'Manager' }
    let sql = 'INSERT INTO employee SET ?'
    let query = db.query(sql, post, (err) => {
        if (err) {
            console.error(err);
            return res.status(500).send("Error adding employee: " + err.message);
        }
        res.send('employee added')
    })
})

// select employees
app.get('/getemployee', (_req, res) => {
    let sql = 'SELECT * FROM employee'
    let query = db.query(sql, (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).send("Error fetching employees: " + err.message);
        }
        console.log(results)
        res.send("Employee details fetched ")
    })
})
// update employee
app.get('/updateemployee/:id', (req, res) => {
    let newName = 'Updated Jet Lee'
    let sql = `UPDATE employee SET name = '${newName}' WHERE id = ${req.params.id}`
    let query = db.query(sql, (err) => {
        if (err) {
            console.error(err);
            return res.status(500).send("Error updating employee: " + err.message);
        }
        res.send('employee updated')
    })
})

// delete emploeye
app.get('/deleteemployee/:id', (req, res) => {
    let sql = `DELETE FROM employee WHERE id=${req.params.id}`
    let query = db.query(sql, (err) => {
        if (err) {
            throw err;
        }
        res.send('Employee deleted')
    })
})

app.listen('3000', () => {
    console.log("server started at 3000")
})