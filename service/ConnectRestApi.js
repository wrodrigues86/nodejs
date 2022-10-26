require('dotenv').config();

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

    if (request.method == 'POST') {
        if (request.params['pathname'] == 'acesstoken') {
            form = request.body;
            url = `${form.login_url}/services/oauth2/token`;
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
