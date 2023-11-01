const express = require('express')
const OrdersSchema = require('../models/orders')
const router = express();

//Get All
router.get('/api/orders/', async (req, res) => {
    const findOrders = await OrdersSchema.find();
    res.json(findOrders)
})

//Get Single
router.get('/api/orders/:id', async (req, res) => {
    const findOrders = await OrdersSchema.findById(req.params.id);
    res.json(findOrders)
})

//Update
router.put('/api/orders/:id', async (req, res) => {
    const { id } = req.params.id
    await OrdersSchema.updateOne({id} , req.body)
        .then(response => res.json(response))
        .catch(error => res.status(500).json(error))
})

//Create
router.post('/api/orders', async (req, res) => {
    const newOrder = new OrdersSchema(req.body);
    await newOrder.save()
        .then(response => res.json(response))
        .catch(error => res.status(500).json(error))
})

//Delete
router.delete('/api/orders/:id', async (req, res) => {
    const { id } = req.params.id
    await OrdersSchema.findByIdAndDelete(req.params.id)
        .then(response => res.json(response))
        .catch(error => res.status(500).json(error))
})


module.exports = router