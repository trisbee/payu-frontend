import Currency from "./enum/Currency";
import {SupportedLanguage} from "./enum/Language";

interface Order {
    totalAmount: Number,
    currencyCode: Currency,
    customerLanguage: SupportedLanguage,
    customerEmail: string,
    merchantPosId: string,
    shopName: string,
}

export default Order;