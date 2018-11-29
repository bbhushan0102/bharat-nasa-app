const express = require('express');
const router = express.Router();
const { Animal, Owner } = require('../models')

router.get('/animals', (req, res, next) => {
  Animal.find().populate('ownerId').then(animals => res.send({ animals }))
});

module.exports = router;