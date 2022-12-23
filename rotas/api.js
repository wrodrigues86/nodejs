const express = require("express");
const router = express.Router();
const apiController = require('../controller/apiController');

// define o parse como application/json
router.use(express.json());

// define o parse como application/x-www-form-urlencoded
router.use(express.urlencoded({ extended: true }));

try {
    router.use('/:pathname/', apiController.chamaRequest);
} catch (e) {
    console.log(e);
    throw e;
}

module.exports = router;