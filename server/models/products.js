const data = require('../data/products.json');
const { connect } = require('./mongo');

async function collection() {
    const client = await connect();
    return client.db('chopiphy').collection('products');
}

async function getProducts() {
    const db = await collection();
    const data = db.find().toArray();
    return data;
}

async function getProduct(id) {
    const db = await collection();
    const data = db.findOne({ _id:  id});
    return data;
    //return data.products.find(p => p.id === id);
}

module.exports = {
    getProducts,
    getProduct,
};