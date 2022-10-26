require('dotenv').config();
const Form = require("../model/LoginSalesforce");

let ConnectRestApi = (request) => {

    let url = `${request.headers.instance_url}/services/apexrest${request.originalUrl}`;
    let body = JSON.stringify(request.body);
    let form = {};
    let options = {};
    let vheaders = {
        "Authorization": `${request.headers.authorization}`,
        "Content-Type": "application/json",
    }

    options = { 'method': request.method, 'url': url, 'headers': vheaders, body };

    // se for meotdo POST estive querendo pegar o token de acesso,
    // então entra no if
    if (request.method == 'POST') {
        if (request.params['pathname'] == 'acesstoken') {
            url = `${process.env.URL_LOGIN_PROD_SALESFORCE}/services/oauth2/token`;
            form = new Form();
            vheaders = {
                "Content-Type": "application/x-www-form-urlencoded",
                "Content-Type": "application/json",
            }
            options = { 'method': request.method, 'url': url, 'headers': vheaders, form };
        }
    }

    return options;
};

module.exports = ConnectRestApi;
