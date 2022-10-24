const InsertDb = require('../database/db.js');
const databaseName = "mydb";
const collectionName = "exemplo";

const InsertDb = (data) => {
    var dbo = connectDb.db(databaseName);
    dbo.collection(collectionName).insertOne(data, (err, res) => {
        if (err) throw err;
        connectDb.close();
    });
};

export { InsertDb };
