//Error.js
module.exports = class Error {
    constructor(errorCode, message) {
        this.errorCode = errorCode;
        this.message = message;
    }
}