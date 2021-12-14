const {StatusCodes} = require('http-status-codes')

const errorHandler = (err, req, res, next) => {
    let customError = {
        statusCode: err.statudCode || StatusCodes.INTERNAL_SERVER_ERROR,
        msg: err.message || "something went wrong try again later"
    };
    
    if(err.name === "ValidationError") {
        customError.msg = Object.values(err.errors)
            .map((item) => item.message)
            .join(', ')
        customeError.statusCode = 400;
    }

    if(err.code && err.code === 11000) {
        customeError.msg = `entered user email already exists: ${Object.keys(
            err.keyValue
        )} already exists: ${Object.values(
            err.keyValue
        )}, please enter a new ${Object.keys(err.keyValue)} `
    }
    if(err.name === "CastError") {
        customError.msg = `no item found with id: ${err.value}`
        customError.statusCode = 400
    }
    return res.status(customError.statusCode).json({ msg: customError.msg })
}

const errorHandlerMiddleware = async (err, req, res, next) => {
    console.log(err);
    return res.status(500).json({msg: 'Something went wrong'})
}

module.exports = errorHandlerMiddleware