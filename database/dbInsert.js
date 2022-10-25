const connectDb = require('../database/db.js');
const logapi_model = require("../model/logapi_model");
require('dotenv').config();

const InsertDb = async (data) => {

    let setData = logapi_model(
        data.originalUrl, 
        data.method, 
        new Date().toLocaleDateString(),
        '',
        ''
    );

    let db = connectDb.connection;
    db.collection(process.env.DB_COLLECTIONNAME).insertOne(setData, (err, collection) => {
        if (err) {
            throw err;
        }
    });
};

module.exports = InsertDb;
