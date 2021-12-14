const { Mongoose } = require("mongoose");
const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
    cart: [
        {
            product: {
               name: {
                   type: String,
                   ref: "Product"
               } 
            },
            quantity: {
                type: Number,
                required: [true, 'Please provide a quantity']
            }
        }
    ]
})