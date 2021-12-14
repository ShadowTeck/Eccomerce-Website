//Enviroment Setup
require('dotenv').config()
require('express-async-errors')
const axios = require('axios')

//App Cores
const express = require("express")
const app = express()
const fileUpload = require('express-fileupload')
const connectdb = require("./db/connect")

//cloudinary
const cloudinary = require("cloudinary").v2;
cloudinary.config({ 
    cloud_name: 'dyghannz1', 
    api_key: '993735259277896', 
    api_secret: 'qUea4PxLBCFeHnAoERTcun7Wsr8' 
  });

//Extra Security
const rateLimiter = require('express-rate-limit')
const helmet = require('helmet')
const cors = require('cors')
const xss = require('xss-clean')

//Routes
const cart = require('./routes/cart')
const products = require('./routes/products')
const email = require('./routes/email')

//Middleware
const notFound = require('./middleware/not-found')
const errorHandler = require('./middleware/error-handler')

//Var Declarations
const port = process.env.PORT || 3000;
const minutes = 1000 * 60


app
    // .set("trust proxy", 1)
    // .use(rateLimiter({
    //     windowMs: 15 * minutes,
    //     max: 100,
    // }))
    .use([express.urlencoded({extended: false})])

    .use(helmet())
    .use(cors())
    .use(xss())
    app.use(express.static('./public'))
    app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'))
    .get("/", (req, res) => res.send(`<h1>hell yeah it's working!!!</h1>`))

    .use('/api/v1/cart', cart)
    .use('/api/v1/products', products)
    .use('/api/v1/email', email)

    .use(notFound)

    const startApp = () => {
        try {
            connectdb(process.env.MONGO_URL)
            app.listen(port, () => {
                console.log(`listening @ ${port}`)
            });
        } catch (err) {
            console.log(err);
        }
    }

    startApp()