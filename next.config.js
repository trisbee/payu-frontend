require('dotenv').config();

module.exports = {
    publicRuntimeConfig: {
        BACKEND_API_CREATE_ORDER: process.env.BACKEND_API_CREATE_ORDER,
        MODE: process.env.PAYU_ENV,
        MERCHANT_POS_ID: process.env.MERCHANT_POS_ID,
        MERCHANT_CURRENCY_CODE: process.env.MERCHANT_CURRENCY_CODE
    }
};