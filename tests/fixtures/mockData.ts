import Order from "../../src/PayU/Order";
import Currency from "../../src/PayU/enum/Currency";
import {SupportedLanguage} from "../../src/PayU/enum/Language";

const orderData: Order = {
    currencyCode: Currency.PLN,
    customerLanguage: SupportedLanguage.cs,
    customerEmail: "dev@trisbee.com",
    merchantPosId: "145227",
    shopName: "Trisbee",
    totalAmount: 1.00,
};

export default orderData;