const request = require('request');
const InsertDb = require('../database/dbInsert');
const ConnectRestApi = require("../service/ConnectRestApi");

let criar = async (req, res, next) => {
    // chama o serviço do salesforce
    request(ConnectRestApi(req), async (error, response) => {
        if (error) throw new Error(error);
        res.setHeader('Content-Type', 'application/json');
        res.send(response.body);
        await InsertDb(req, response);
    });
    next();
};

let consultar = async (req, res, next) => {
    // chama o serviço do salesforce
    request(ConnectRestApi(req), async (error, response) => {
        if (error) throw new Error(error);
        res.setHeader('Content-Type', 'application/json');
        res.send(response.body);
        await InsertDb(req, response);
    });
    next();
};

let atualizar = async (req, res, next) => {
    // chama o serviço do salesforce
    request(ConnectRestApi(req), async (error, response) => {
        if (error) throw new Error(error);
        res.setHeader('Content-Type', 'application/json');
        res.send(response.body);
        await InsertDb(req, response);
    });
    next();
};

let deletar = async (req, res, next) => {
    // chama o serviço do salesforce
    request(ConnectRestApi(req), async (error, response) => {
        if (error) throw new Error(error);
        res.setHeader('Content-Type', 'application/json');
        res.send(response.body);
        await InsertDb(req, response);
    });
    next();
};

module.exports = {
    criar, consultar, atualizar, deletar
};