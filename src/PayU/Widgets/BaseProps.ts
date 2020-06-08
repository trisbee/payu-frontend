import Currency from "../enum/Currency";
import {SupportedLanguage} from "../enum/Language";
import WidgetType from "../enum/WidgetType";
import WidgetMode from "../enum/WidgetMode";

class BaseProps
{
    /**
     * Id of a POS which will be used to create a payment
     */
    merchantPosId: string;

    /**
     * Name of a shop displayed to the Payer inside the widget
     */
    shopName: string;

    /**
     * Total amount of payment displayed to the Payer
     */
    totalAmount: Number;

    /**
     * Payment currency displayed to the Payer, must match the POS currency
     */
    currencyCode: Currency;

    /**
     * Language in which the widget will be displayed to the Payer. If the language parameter is missing or is incorrect, the default one - obtained from the Payer's browser configuration - will be used. Available parameters: bg, cs, de, en, es, fr, hu, it, pl, pt, ro, sk.
     */
    customerLanguage: SupportedLanguage;

    /**
     * Payer's email
     */
    customerEmail: string;

    /**
     * Optional value used for selecting type of widget. By default, the widget presents a card form. Provide a cvv value if you want to show the CVV widget.
     */
    widgetType: WidgetType;

    // @todo:
    // /**
    //  * CVV URL taken from redirectUri from OrderCreateResponse (when statusCode == WARNING_CONTINUE_CVV) or the query string parameter (refReqId=...) taken from continueUrl after a successful response from the bank (when 3DS was required).
    //  */
    // ccvUrl: string;
    //
    // /**
    //  * Callback function executed on successful authorization after the Payer has provided a CVV.
    //  */
    // ccvSuccessCallback: string;

    /**
     * Values: true/false (default: "false"). Enables multi-use tokens. Required for storing a token.
     */
    storeCard: boolean;

    /**
     * Values: true/false (default: "false"). Displays a recurring version of the Widget. Requires the storecard parameter set to "true".
     */
    recurringPayment: boolean;

    /**
     * Values: true/false (default: "true"). Displays widget without PayU branding (only for inline widget).
     */
    payUBrand: boolean;

    /**
     * Values: pay/use (default: "pay"). Configures widget buttons. "Pay" mode assumes payment to happen immediately after the widget is used. "Use" mode allows to capture card data without immediate payment.
     */
    widgetMode: WidgetMode;

    /**
     * Name of the callback function which will handle widget's output.
     */
    successCallback: string;

    /**
     * 	Value of a signature providing secure communication.
     */
    sig: string;
}

export default BaseProps;