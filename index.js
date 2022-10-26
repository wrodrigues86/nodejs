require('dotenv').config();
const express = require("express");
const app = new express();
const cors = require("cors");
const Error = require("./model/Erro");
const api = require('./rotas/api.js');
let porta = process.env.PORT || 8080;

app.use(cors());
app.listen(porta, () => {
    console.log(`Serviço rodando na porta ${porta}`);
});

app.use((req, res, next) => {
    // Só terá acesso se for enviado a chave da api
    if (process.env.KEY_API_AUTORIZATION != req.headers.key_api_autorization) {
        res.status(203).json(new Error(203, "Não autorizado"));
        return;
    }
    next();
})

app.use(api);
app.use((req, res, next) => {
    console.log('Finalizando em :', new Date().toLocaleDateString());
})
