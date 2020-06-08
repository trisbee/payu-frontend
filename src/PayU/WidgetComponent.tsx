import getConfig from "next/config";
import InlineWidgetProps from "./Widgets/InlineWidgetProps";
import Environment from "./enum/Environment";
import {getScriptUrl} from "./Boot";

function WidgetComponent(props: InlineWidgetProps) {
    return (
        // @ts-ignore
        <script
            src={getScriptUrl()}
            merchant-pos-id={props.merchantPosId}
            shop-name={props.shopName}
            total-amount={props.totalAmount}
            currency-code={props.currencyCode}
            customer-language={props.customerLanguage}
            customer-email={props.customerEmail}
            store-card={props.storeCard}
            payu-brand={props.payUBrand}
            sig={props.sig}
        >
        </script>
    );
}

export default WidgetComponent;