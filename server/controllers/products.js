const express = require('express');
const products = require('../models/products');

const app = express.Router();

app
    .get('/', (req, res, next) => {
        products.getProducts()
        .then(x=>res.status(200).send({products:x}))
        .catch(next)
        //res.status(200).send(products.getProducts());
    })
    .get('/:id', (req, res) => {

        products.getProduct(+req.params.id)
        .then(x=>res.status(200).send(x))
        .catch(next)
        if (product) {
            res.status(200).send(product);
        } else {
            res.status(404).send('Product not found');
        }
    });


module.exports = app;