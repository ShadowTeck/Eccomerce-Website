const { Mongoose } = require("mongoose");
const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
    image: {
        type: String,
        required: [true, 'Must provide an image']
    },
    name: {
        type: String,
        required: [true, 'Must provide a name']
    },
    price: {
        type: Number,
        required: [true, 'Must provide a price']
    }
})

module.exports = mongoose.model("Product", productSchema)