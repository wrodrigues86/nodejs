const request = require('request');
const InsertDb = require('../database/dbInsert');
const ConnectRestApi = require("../service/ConnectRestApi");
const Error = require("../model/Erro");

module.exports.chamaRequest = async (req, res, next) => {
    if (req.method != 'POST') {
        if (req.headers?.instance_url === undefined) {
            res.status(400).json(new Error(400, "instance_url não informado"));
            return;
        }
    }

    request(ConnectRestApi(req), async (error, response) => {
        res.setHeader('Content-Type', 'application/json');
        if (error) {
            throw new Error(error);
        } else {
            res.send(response.body);
            await InsertDb(req, response);
            next();
        }
    });
};