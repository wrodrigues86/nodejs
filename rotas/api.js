const express = require("express");
const router = express.Router();
const apiController = require('../controller/apiController');

// define o parse como application/json
router.use(express.json());

// define o parse como application/x-www-form-urlencoded
router.use(express.urlencoded({ extended: true }));

router.use('/:pathname/', apiController.chamaRequest);

module.exports = router;