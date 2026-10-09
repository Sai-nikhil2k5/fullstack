const express = require('express');
var router = express.Router();
const mongoose = require("mongoose");
const Ludent = mongoose.model("Ludent");

router.get('/', (req, res) => {
    res.render('ludent/addOrEdit', {
        viewTitle: 'Insert Ludent'
    });
});

router.post('/', async (req, res) => {
    if (!req.body._id || req.body._id === '') {
        await insertRecord(req, res);
    } else {
        await updateRecord(req, res);
    }
});

async function insertRecord(req, res) {
    try {
        var ludent = new Ludent();
        ludent.fullName = req.body.fullName;
        ludent.email = req.body.email;
        ludent.mobile = req.body.mobile;
        ludent.city = req.body.city;
        await ludent.save();
        res.redirect('/ludent/list');
    } catch (err) {
        console.log("Error during insert: " + err);
        res.render('ludent/addOrEdit', {
            viewTitle: 'Insert Ludent',
            ludent: req.body
        });
    }
}

async function updateRecord(req, res) {
    try {
        await Ludent.findOneAndUpdate({ _id: req.body._id }, req.body, { new: true });
        res.redirect('/ludent/list');
    } catch (err) {
        console.log("Error during update: " + err);
        res.render('ludent/addOrEdit', {
            viewTitle: 'Update Ludent',
            ludent: req.body
        });
    }
}

router.get('/list', async (req, res) => {
    try {
        const docs = await Ludent.find();
        res.render('ludent/list', {
            list: docs
        });
    } catch (err) {
        console.log("Error in rendering list: " + err);
        res.redirect('/');
    }
});

router.get('/:id', async (req, res) => {
    try {
        const doc = await Ludent.findById(req.params.id);
        if (doc) {
            res.render("ludent/addOrEdit", {
                viewTitle: "Update Ludent",
                ludent: doc,
            });
        } else {
            res.redirect('/ludent/list');
        }
    } catch (err) {
        console.log("Error in finding record: " + err);
        res.redirect('/ludent/list');
    }
});

router.get('/delete/:id', async (req, res) => {
    try {
        await Ludent.findByIdAndDelete(req.params.id);
        res.redirect('/ludent/list');
    } catch (err) {
        console.log("Error during delete: " + err);
        res.redirect('/ludent/list');
    }
});

module.exports = router;
