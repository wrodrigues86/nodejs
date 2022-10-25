require('dotenv').config();

//LoginSalesforce.js
module.exports = class form {
    constructor() {
        this.grant_type = process.env.GRANT_TYPE;
        this.client_id = process.env.CLIENT_ID;
        this.client_secret = process.env.CLIENT_SECRET;;
        this.username = process.env.vUSERNAME;
        this.password = process.env.PASSWORD;
    }
}