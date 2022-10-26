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
        if (request.params['pathname'] == 'token') {
            form = request.body;
            url = `${form.login_url}/services/oauth2/token`;
            delete options.headers.Authorization;
            delete options.body;
            options.url = url;
            options.form = form;
        }
    }

    console.log(options);
    return options;
};

module.exports = ConnectRestApi;
