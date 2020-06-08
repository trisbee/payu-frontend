import { sha256 } from 'js-sha256';

const EMAIL_REGEX = /^(?=.{6,254}$)[A-Za-z0-9_\-\.]{1,64}\@[A-Za-z0-9_\-\.]+\.[A-Za-z]{2,}$/;
const AMOUNT_REGEX = /^\d+(\.\d{1,2})?$/;

interface Order {
    currencyCode: string,
    customerEmail: string,
    customerLanguage: string,
    merchantPosId: string,
    shopName: string,
    totalAmount: string,
}

function Signer(orderData: Order): string
{
    if(!EMAIL_REGEX.test(orderData.customerEmail)) {
        throw new Error("ArgumentError: Invalid Email");
    }
    if(!AMOUNT_REGEX.test(orderData.totalAmount)) {
        throw new Error("ArgumentError: amount should contain digits with upto 2 decimal places");
    }

    let valuesForSig = "";
    Object.keys(orderData).map(function(key, index) {
        valuesForSig+=orderData[key];
    });

    return sha256(valuesForSig);
}

export default Signer;
