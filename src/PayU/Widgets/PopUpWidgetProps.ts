import Currency from "../enum/Currency";
import WidgetMode from "../enum/WidgetMode";
import WidgetType from "../enum/WidgetType";
import { SupportedLanguage } from "../enum/Language";
import BaseProps from "./BaseProps";

/**
 * 3.1 Pop-up widget
 *
 * This section provides information on the pop-up widget.
 * It may either use POST method or a callback function to provide output.
 *
 * See: http://developers.payu.com/en/payu_express.html#payu_express_front_widget
 */
class PopUpWidgetProps extends BaseProps
{
    /**
     * CSS selector of the payment button
     */
    payButton: string;
}

export default PopUpWidgetProps;
