const express = require('express');
const volleyball = require('volleyball');
const path = require('path');

const Animal = require('./db').models.animal;
const app = express();

app.use(volleyball);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('./client/public'));

app.get('/api/animals', async (req, res, next) => {
    try {
      const animals = await Animal.findAll();
      res.json(animals.map(({id, name}) => ({id, name})));
    } catch (err) {
      next(err);
    }
});

module.exports = app;