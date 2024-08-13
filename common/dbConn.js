var mongodb = require('mongodb')
async function getDB() {
    const MongoClient = mongodb.MongoClient
    const server = await MongoClient.connect('mongodb+srv://nit:nit@react.7hcffa7.mongodb.net/');
    const db = server.db("sms")
    return db;
}

module.exports = getDB;