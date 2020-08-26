import React from "react";
import {getScriptUrl} from "./Boot";

function WidgetComponent(props)
{
    return (
        <script
            src={getScriptUrl()}
            pay-button={props.payButton}
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
    )
}

export default WidgetComponent;
