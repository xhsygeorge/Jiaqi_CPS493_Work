const data = require('../data/products.json');
const { connect } = require('./mongo');
const { ObjectId } = require('mongodb')

const COLLECTION_NAME = 'products';

async function collection() {
    const client = await connect();
    return client.db('chopiphy').collection('products');
}

async function getProducts(limit=30, skip=0) {
    const db = await collection();
    const data =await db.find().limit(limit).skip(skip).toArray();
    return {total:(await data).length, length: (await data).length, products:data};
}

async function getProduct(id) {
    const db = await collection();
    const data = db.findOne({ _id:  new ObjectId(id)});
    return data;
    //return data.products.find(p => p.id === id);
}

async function seed(){
    const db = await collection();
    db.deleteMany();
    db.insertMany(data.products);
    return 'success';
}

module.exports = {
    COLLECTION_NAME,
    collection,
    getProducts,
    getProduct,
    seed,
};