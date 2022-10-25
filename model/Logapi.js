//logapi_model.js
module.exports = class Logapimodel {
    constructor(requisicao, tiporequisicao, request, response) {
        this.requisicao = requisicao;
        this.tiporequisicao = tiporequisicao;
        this.datarequisicao = new Date();
        this.request = request;
        this.response = response;
    }
}