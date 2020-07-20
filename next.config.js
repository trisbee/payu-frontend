require('dotenv').config();

module.exports = {
    publicRuntimeConfig: {
        BACKEND_API_CREATE_ORDER: process.env.BACKEND_API_CREATE_ORDER,
        MERCHANT_MODE: process.env.MERCHANT_MODE
    }
};