require('dotenv').config();

module.exports = {
    publicRuntimeConfig: {
        APP_HOST: process.env.APP_HOST,
        BACKEND_API_CREATE_ORDER: process.env.BACKEND_API_CREATE_ORDER,
        MERCHANT_MODE: process.env.MERCHANT_MODE,
    },
    serverRuntimeConfig: {
        MERCHANT_POS_SECOND_KEY_MD5: process.env.MERCHANT_POS_SECOND_KEY_MD5,
    }
};
