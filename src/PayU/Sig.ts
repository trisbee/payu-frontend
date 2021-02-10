import { sha256 } from 'js-sha256';
import Order from "./Order";

/**
 *
 * Value of a signature providing secure communication.
 * Parameters need to be sorted alphabetically.
 *
 * see: http://developers.payu.com/en/payu_express.html#payu_express_widget
 *
 * @param orderData
 * @param privateKey
 * @constructor
 */
function Sig(orderData: Order, privateKey: string): string
{
    let valuesForSig = "";

    Object
        .keys(orderData)
        .sort()
        .map((key, index) => {
            valuesForSig+=orderData[key];
        });

    if(null !== privateKey) {
        valuesForSig+=privateKey;
    }

    return sha256(valuesForSig);
}

export default Sig;
