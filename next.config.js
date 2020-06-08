require('dotenv').config();

module.exports = {
    publicRuntimeConfig: {
        BACKEND_API_CREATE_ORDER: process.env.BACKEND_API_CREATE_ORDER,
        MERCHANT_SHOP_NAME: process.env.MERCHANT_SHOP_NAME,
        MERCHANT_POS_ID: process.env.MERCHANT_POS_ID,
        MERCHANT_CURRENCY_CODE: process.env.MERCHANT_CURRENCY_CODE
    }
};