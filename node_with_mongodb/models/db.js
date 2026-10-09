const mongoose = require("mongoose")

mongoose.connect('mongodb://localhost:27017/LudentDB')
    .then(() => {
        console.log("connection succeeded");
    })
    .catch(err => {
        console.log("error while connecting: " + err);
    });

require('./ludent.model')