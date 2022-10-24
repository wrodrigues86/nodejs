const mongo = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/";

const connectDb = () => {
    mongo.connect(url).then(db => {
        return db;
    }).catch(erro => {
        return erro;
    });
};

export { connectDb };
