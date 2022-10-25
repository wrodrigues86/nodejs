const InsertDb = require('../database/dbInsert');

let criar = async (req, res, next) => {
    // chama o serviço do salesforce
    await InsertDb(req);
    res.json(req.body);
    next();
};

let consultar = async (req, res, next) => {
    // chama o serviço do salesforce
    await InsertDb(req);
    res.json(req.body);
    next();
};

let atualizar = async (req, res, next) => {
    // chama o serviço do salesforce
    await InsertDb(req);
    res.json(req.body);
    next();
};

let deletar = async (req, res, next) => {
    // chama o serviço do salesforce
    await InsertDb(req);
    res.json(req.body);
    next();
};

module.exports = {
    criar, consultar, atualizar, deletar
};