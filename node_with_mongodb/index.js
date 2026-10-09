require('./models/db')

const express = require('express');
const path = require('path');
const handlebars = require('handlebars');
const { engine } = require('express-handlebars');
const { allowInsecurePrototypeAccess } = require("@handlebars/allow-prototype-access");
const bodyparser = require("body-parser");

const ludentController = require('./controllers/ludentController');

var app = express();

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

app.get('/', (req, res) => {
    res.send(`<h2>Welcome to ludents database</h2>
    <h3>Click here to get access to the <b> <a href="/ludent/list">DataBase</a> </b></h3>`);
});

app.set('views', path.join(__dirname, '/views'));

app.engine('hbs', engine({
    handlebars: allowInsecurePrototypeAccess(handlebars),
    extname: "hbs",
    defaultLayout: "mainLayout",
    layoutsDir: path.join(__dirname, "/views/layouts/")
}));

app.set('view engine', 'hbs');

app.use("/ludent", ludentController);

app.listen(3000, () => {
    console.log("server started at port 3000");
});

