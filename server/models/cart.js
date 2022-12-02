const { getProduct } = require('./products');
// CartItem: { id: 1, quantity: 2, productId: 1, userId: 'mp@np.edu' }
const list = [];

const{ connect } = require('./mongo');

async function collection() {
    const client = await connect();
    return client.db('chopiphy').collection('COLLECTION_NAME');
}

const get = async (userId) => {
    const db = await collection();
    const data = await db.find({ userId }).toArray();
    return data
        .map((cartItem) => ({
            ...cartItem, 
            product: getProduct(cartItem.productId)
        }));
};

/**
 * 
 * @param {string} userId 
 * @param {number} productId 
 * @param {number} quantity 
 * @returns 
 */
const add = async (userId, productId, quantity) => {
    const db = await collection();
    let cartItem = db.findOne({userId, productId})
    // let cartItem = list.find((cartItem) => cartItem.userId === userId && cartItem.productId === productId);
    if (cartItem) {
        cartItem.quantity += quantity;
        db.updateOne({userId, productId},cartItem)
    } else {
        cartItem = { id: list.length + 1, quantity, productId, userId };
        // list.push(cartItem);
        await db.insertOne(cartItem)
    }
    return { ...cartItem, product: getProduct(productId) };
};


/**
 * 
 * @param {string} userId 
 * @param {number} productId 
 * @param {number} quantity 
 * @returns 
 */
const update = async (userId, productId, quantity) => {
    console.log(userId, productId, quantity);
  const index = list.findIndex((cartItem) => cartItem.userId === userId && cartItem.productId === productId);
  if (index !== -1) {
    if(quantity === 0) {
        const db = await collection();
        db.deleteOne({ userId,productId })
    //    list.splice(index, 1);
        return "null";
    } else {
        let cartItem = await db.findOne({userId, productId})
        cartItem.quantity = quantity;
        db.updateOne({ userId,productId }, cartItem);
    //    list[index].quantity = quantity;
    }
  }else {
        throw new Error('Cart item not found');
  }
  return { ...list[index], product: getProduct(productId) };
}

module.exports = { add, get, update }