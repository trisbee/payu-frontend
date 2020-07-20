import getConfig from "next/config";
import InlineWidgetProps from "./Widgets/InlineWidgetProps";
import { Mode } from "./enum/Mode";
import { getScriptUrl } from "./Boot";

function WidgetComponent(props)
{
    return (
        <>
            <button id="pay-button">Pay</button>
            <script
                src={getScriptUrl()}
                pay-button={'#pay-button'}
                merchant-pos-id={props.merchantPosId}
                shop-name={props.shopName}
                total-amount={props.totalAmount.toString()}
                currency-code={props.currencyCode.toString()}
                customer-language={props.customerLanguage.toString()}
                customer-email={props.customerEmail}
                widget-type={props.widgetType.toString()}
                widget-mode={props.widgetMode.toString()}
                store-card={props.storeCard.toString()}
                recurring-payment={props.recurringPayment.toString()}
                payu-brand={props.payUBrand.toString()}
                success-callback={props.successCallback}
                sig={props.sig}
            >
            </script>
        </>
    )
}

export default WidgetComponent;