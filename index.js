require('dotenv').config();
const express = require("express");
const app = new express();
const cors = require("cors");
let porta = process.env.PORT || 8080;

// https://acervolima.com/crie-um-aplicativo-simples-para-iniciantes-com-node-js-bootstrap-e-mongodb/
// https://www.hostinger.com.br/tutoriais/o-que-e-http-error-e-principais-codigos-http
const api = require('./rotas/api.js');

app.use(cors());
app.listen(porta, ()=>{
    console.log(`Serviço rodando na porta ${porta}`);
});

app.use((req, res, next) => {
    // Só terá acesso se for enviado a chave da api
    if(process.env.KEY_API_AUTORIZATION != req.headers.key_api_autorization){
        res.status(203).json({ errorMessage: "Não autorizado", statusCode : 203 });
        return;
    }
    next();
})

app.use(api);

app.use((req, res, next) => {
    console.log('Finalizando em :', new Date().toLocaleDateString());
})
