const express = require('express');
const router = express.Router();
const typesCtrl = require('../controllers/types');
const ensureLoggedIn = require('../config/ensureLoggedIn');

router.post('/sandwiches/:id/types', ensureLoggedIn, typesCtrl.create);
router.delete('/sandwiches/:id/types/:type_id', ensureLoggedIn, typesCtrl.delete);

module.exports = router;