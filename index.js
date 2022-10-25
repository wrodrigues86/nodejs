const express = require("express");
const app = new express();
const cors = require("cors");

const api = require('./rotas/api.js');

app.use(cors());
app.listen(555);

app.use((req, res, next) => {
    console.log('Time:', Date.now());
    next();
})

app.use(api);

app.use((req, res, next) => {
    console.log('Time:', Date.now());
})
