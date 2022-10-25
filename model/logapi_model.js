const logapi_model = (
    requisicao,
    tiporequisicao,
    datarequisicao,
    request,
    response,
) => {
    return {
        requisicao: requisicao,
        tiporequisicao: tiporequisicao,
        datarequisicao: datarequisicao,
        request: request,
        response: response
    }
};

module.exports = logapi_model;