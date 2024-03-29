const connectDb = require('../database/db.js');
const Logapi = require("../model/Logapi");
require('dotenv').config();

const InsertDb = async (request, response) => {
    try {
        const setData = new Logapi(request.originalUrl, request.method, request.body, response.body);

        let db = connectDb.connection;
        db.collection(process.env.DB_COLLECTIONNAME).insertOne(setData, (err, collection) => {
            if (err) {
                throw err;
            }
        });
    } catch (e) {
        throw e;
    }
};

module.exports = InsertDb;
