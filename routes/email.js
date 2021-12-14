const express = require('express')
const router = express.Router()
const {emailRecipt} = require('../controllers/productController')

router.route('/').post(emailRecipt)

module.exports = router;