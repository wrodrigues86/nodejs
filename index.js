require('dotenv').config();
const express = require("express");
const app = new express();
const cors = require("cors");
let porta = process.env.PORT || 8080;

// https://acervolima.com/crie-um-aplicativo-simples-para-iniciantes-com-node-js-bootstrap-e-mongodb/

const api = require('./rotas/api.js');

app.use(cors());
app.listen(porta, ()=>{
    console.log(`Serviço rodando na porta ${porta}`);
});

app.use((req, res, next) => {
    console.log('Iniciando em :', new Date().toLocaleDateString());
    next();
})

app.use(api);

app.use((req, res, next) => {
    console.log('Finalizando em :', new Date().toLocaleDateString());
})
