const mongoose = require("mongoose");
const {ObjectId} = mongoose.Schema;

const cartItemSchema = new mongoose.Schema({
    product: {
        type: ObjectId,
        ref: "Product"
    },
    name: String,
    count: Number,
    price: Number
})

const orderSchema = new mongoose.Schema({
    products: [cartItemSchema],
    transaction_id: {},
    amount: {type: Number},
    address: String,
    updated: Date,
    user: {
        type: ObjectId,
        ref: "User"
    }
},{timestamps: true})

const cartItem = mongoose.model("CartItem", cartItemSchema);
const order = mongoose.model("Order", orderSchema);

module.exports = {order, cartItem}