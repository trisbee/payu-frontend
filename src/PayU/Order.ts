import Currency from "./enum/Currency";
import {SupportedLanguage} from "./enum/Language";

interface Order {
    currencyCode: Currency,
    customerLanguage: SupportedLanguage,
    customerEmail: string,
    merchantPosId: string,
    shopName: string,
    totalAmount: Number,
}

export default Order;