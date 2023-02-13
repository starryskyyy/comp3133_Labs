const express = require('express');
const userModel = require('../models/Users');
const app = express();

/*  used create new restaurant to see data
app.post('/restaurant', async (req, res) => {
    const restaurant = new restaurantModel(req.body);
    
    try {
      await restaurant.save((err) => {
        if(err){
          res.send(err)
        }else{
          res.send(restaurant);
        }
      });
    } catch (err) {
      res.status(500).send(err);
    }
  });
*/

module.exports = app