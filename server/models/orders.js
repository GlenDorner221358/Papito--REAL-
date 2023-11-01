const mongoose = require('mongoose')

const OrdersSchema = mongoose.Schema({
    user: {
        type: String, 
        required: true
    },
    products: {
        type: [String],
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    amount: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model("Orders", OrdersSchema)