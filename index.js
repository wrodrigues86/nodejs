require('dotenv').config();
const express = require("express");
const app = new express();
const cors = require("cors");
const api = require('./rotas/api.js');
let porta = process.env.PORT || 8080;

app.use(cors());
app.listen(porta, () => {
    console.log(`Serviço rodando na porta ${porta}`);
});

try {
    app.use((req, res, next) => {
        next();
    })
} catch (e) {
    console.log(e);
    throw e;
}


app.use(api);
app.use((req, res, next) => {
    console.log('Finalizando em :', new Date().toLocaleDateString());
})
