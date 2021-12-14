const {BadRequestError, NotFoundError} = require('../error')
const {StatusCodes} = require('http-status-codes')
const Product = require('../Models/Product')


const getAllProducts = async (req, res) => {
    const product = await Product.create(req.body);
    res.json({status: 200, results: product})
}

const emailRecipt = async (req, res) => {
    res.json({status: 200, results: 'success'})
}

module.exports = {getAllProducts, emailRecipt}