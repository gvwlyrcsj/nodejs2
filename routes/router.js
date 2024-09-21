const express = require('express');
const router = express.Router();
const Controller = require('../controller/Controller');

router.get('/', Controller.first);
router.get('/second', Controller.second);
router.get('/third', Controller.third);
router.get('/fourth', Controller.fourth);
router.get('/fifth', Controller.fifth);

module.exports = router;
