const express = require("express");
const router = express.Router();
const apiController = require('../controller/apiController');

// define o parse como application/json
router.use(express.json());

// define o parse como application/x-www-form-urlencoded
router.use(express.urlencoded({ extended: true }));

router.post('/:pathname/', apiController.criar);

router.get('/:pathname/', apiController.consultar);

router.put('/:pathname/', apiController.atualizar);

router.delete('/:pathname/', apiController.deletar);

module.exports = router;