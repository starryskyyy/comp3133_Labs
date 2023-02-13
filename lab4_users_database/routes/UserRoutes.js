const express = require('express');
const userModel = require('../models/Users');
const app = express();

app.post('/users', async (req, res) => {
    const data = req.body;
    
    userModel.insertMany(data, (err, result) => {
        if (err) {
            return res.status(500).send(err.message);
        }
        res.send(result);
    });
});

module.exports = app