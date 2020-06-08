import getConfig from 'next/config';
import Sig from "../src/PayU/Sig";
import Layout from "../src/components/Layout";
import WidgetComponent from "../src/PayU/WidgetComponent";
import WidgetType from "../src/PayU/enum/WidgetType";
import WidgetMode from "../src/PayU/enum/WidgetMode";

const { publicRuntimeConfig } = getConfig();

export default function Home(props)
{
    const { order, sig } = props;
    return (
        <Layout>
            <WidgetComponent
                merchantPosId={publicRuntimeConfig.MERCHANT_POS_ID}
                shopName={order.shopName}
                totalAmount={order.totalAmount}
                currencyCode={order.currencyCode}
                customerLanguage={order.customerLanguage}
                customerEmail={order.customerEmail}
                widgetType={WidgetType.ccv}
                storeCard={true}
                recurringPayment={true}
                payUBrand={false}
                widgetMode={WidgetMode.pay}
                successCallback={"@todo"}
                sig={sig}
            />
        </Layout>
    )
}

export async function getStaticProps(context)
{
    const orderData = require("../tests/fixtures/mockData");
    const sig = Sig(orderData);

    return {
        props: {
            order: orderData,
            sig: sig
        }
    }
}