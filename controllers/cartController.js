//import models
const {BadRequestError, NotFoundError} = require('../error')
const {StatusCodes} = require('http-status-codes')


const updateQuantity = async (req, res) => {
    res.json({status: 200, results: 'success'})
}

const getItem = async (req, res) => {
    res.json({status: 200, results: 'success'})
}

const getAllItems = async (req, res) => {
    res.json({status: 200, results: 'success'})
}

const deleteAllItems = async (req, res) => {
    res.json({status: 200, results: 'success'})
}

module.exports = {updateQuantity, getItem, getAllItems, deleteAllItems}