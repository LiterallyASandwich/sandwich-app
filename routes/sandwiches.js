const express = require('express');
const router = express.Router();

const sandwichesCtrl = require('../controllers/sandwiches');
const ensureLoggedIn = require('../config/ensureLoggedIn');

router.get('/', sandwichesCtrl.index);

router.get('/new', ensureLoggedIn, sandwichesCtrl.new);

router.get('/:id', sandwichesCtrl.show);

router.post('/', ensureLoggedIn, sandwichesCtrl.create);

module.exports = router;