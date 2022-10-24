const express = require("express");
const router = express.Router();
const InsertDb = require('../database/dbInsert');

// define o parse como application/json
router.use(express.json());

// InsertDb();

// define o parse como application/x-www-form-urlencoded
router.use(express.urlencoded({ extended: false }));

// a cada requisição gravar no mongodb
router.post('/:pathname1/?:pathname2/?:pathname3/?:pathname4/?:pathname5', (req, res, next) => {
    console.log('params:', req.params.pathname1);
    console.log('params:', req.params.pathname2);
    console.log('Request URL:', req.originalUrl);
    console.log('method URL:', req.method);
    console.log(req.body);
    res.json(req.body);
    next();
});

router.get('/:pathname', (req, res, next) => {
    console.log('params:', req.params.pathname);
    console.log('Request URL:', req.originalUrl);
    console.log('method URL:', req.method);
    console.log(req.body);
    res.json(req.body);
    next();
});

router.put('/:pathname', (req, res, next) => {
    console.log('params:', req.params.pathname1);
    console.log('Request URL:', req.originalUrl);
    console.log('body:', req.body);
    res.json(req.body);
    next();
});


router.delete('/:pathname', (req, res, next) => {
    console.log('params:', req.params.pathname);
    console.log('Request URL:', req.originalUrl);
    console.log('method URL:', req.method);
    console.log(req.body);
    res.json(req.body);
    next();
});

module.exports = router;