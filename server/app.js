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
      res.json(animals);
    } catch (err) {
      next(err);
    }
});

app.get('/api/animals/:id', async (req, res, next) => {
  try {
    const animal = await Animal.findById(req.params.id);
    if(!animal) res.sendStatus(404)
    else res.json(animal);
  } catch (err) {
    next(err);
  }
});

app.post('/api/animals', async (req, res, next) => {
  try {
    const animals = await Animal.create(req.body);
    res.sendStatus(201).json(animal);
  } catch (err) {
    next(err);
  }
});

module.exports = app;
