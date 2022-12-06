const data = require('../data/products.json');
const { connect } = require('./mongo');
const { ObjectId } = require('mongodb')

const COLLECTION_NAME = 'products';

async function collection() {
    const client = await connect();
    return client.db('chopiphy').collection(COLLECTION_NAME);
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

async function addProduct(product){
    const db = await collection();
    const result = await db.insertOne(product)
    return product;
}

async function updateProduct(id, product){
    const db = await collection();
    delete product._id; // You can not change the _id. So it can not be part of the changes that you send to the database.
    const result = await db.findOneAndUpdate(
        { _id: new ObjectId(id) },
        { $set: product },
        { returnDocument: 'after' })
    return result.value;
}

async function deleteProduct(id){
    const db = await collection();
    const result = await db.deleteOne({ _id: new ObjectId(id) })
    return result;
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
    addProduct,
    updateProduct,
    deleteProduct,
    seed,
};