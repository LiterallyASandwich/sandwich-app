const express = require('express');
const router = express.Router();
const factsCtrl = require('../controllers/facts');


router.post('/', factsCtrl.create);

router.get('/', factsCtrl.index);

module.exports = router;