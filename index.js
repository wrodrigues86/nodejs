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

// FUNÇÕES FUTURAS
// GERENCIAMENTO DE CLIENTES
// EXEMPO:
// TELA DE LOGIN: USUARIO E SENHA
// SE FOR CLIENTE SÓ MOSTRA OS REGISTROS DELE
// SE FOR ADM, MSOTRA TUDO
// CADASTRO DE EMPRESA: 
// NOME, EMAIL, SENHA, DATA CADASTO, STATUS(ATIVADO/DESATIVADO), username, password, NOMEAMBIENTE, TIPO DE AMBIENTE(LOGIN/TEST), client_id, client_secret
// AO CDASTRAR SERÁ CRIADO UM TOKEN DE ACESSO AO SERVIÇO, ONDE O MESMO SERÁ PASSADO NAS REQUISIÇÕES
