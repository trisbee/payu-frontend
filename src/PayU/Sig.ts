import { sha256 } from 'js-sha256';
import Order from "./Order";

/**
 *
 * Value of a signature providing secure communication.
 *
 * see: http://developers.payu.com/en/payu_express.html#payu_express_widget
 *
 * @param orderData
 * @constructor
 */
function Sig(orderData: Order): string
{
    let valuesForSig = "";
    Object.keys(orderData).map(function(key, index) {
        valuesForSig+=orderData[key];
    });

    return sha256(valuesForSig);
}

export default Sig;
