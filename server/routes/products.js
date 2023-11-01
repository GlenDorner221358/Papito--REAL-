const express = require('express')
const mongoose = require('mongoose')
const ProductsSchema = require('../models/products')
const path = require('path')
const router = express();

//Get All
router.get('/api/products/', async (req, res) => {
    const findProducts = await ProductsSchema.find();
    res.json(findProducts)
})

//Get Single
router.get('/api/products/:id', async (req, res) => {
    const findProducts = await ProductsSchema.findById(req.params.id);
    res.json(findProducts)
})

// Get by category 
router.get('/api/products/:category', async (req, res) => {
    const findProducts = await ProductsSchema.find({ category });
    res.json(findProducts)
})

//Update
router.put('/api/products/:id', async (req, res) => {
    const { id } = req.params.id
    await ProductsSchema.updateOne({_id: req.params.id} , req.body)
        .then(response => res.json(response))
        .catch(error => res.status(500).json(error))
})

//Create
router.post('/api/products/', async (req, res) => {
    
    const stationeryData = {
        name: req.body.name,
        category: req.body.category,
        price: req.body.price,
        stock: req.body.stock,
        image: req.body.image
    }
    console.log(stationeryData)
    const products = new ProductsSchema(stationeryData);
    console.log(products)
    await products.save()
        .then(response => res.json(response))
        .catch(error => res.status(500).json(error))
})

//Delete by id
router.delete('/api/products/:id', async (req, res) => {
    const { id } = req.params.id
    await ProductsSchema.findByIdAndDelete(req.params.id)
        .then(response => res.json(response))
        .catch(error => res.status(500).json(error))
})


module.exports = router