const express = require('express')
const router = express.Router()
const {updateQuantity, getItem, getAllItems, deleteAllItems} = require('../controllers/cartController')

router.route('/').get(getAllItems).delete(deleteAllItems)
router.route('/:id').put(updateQuantity).get(getItem)

module.exports = router;