require('dotenv').config();
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = process.env.MONGO_URI ?? "";
const client = new MongoClient(uri,{useNewUrlparser: true, useUnifiedTopology: true, serverApi:ServerApiVersion.v1});
module.exports = {
    connect: ()=> client.connect()
}