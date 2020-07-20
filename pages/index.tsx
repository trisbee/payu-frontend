import React from "react";
import getConfig from 'next/config';
import Sig from "../src/PayU/Sig";
import Layout from "../src/components/Layout";
import WidgetComponent from "../src/PayU/WidgetComponent";
import WidgetType from "../src/PayU/enum/WidgetType";
import WidgetMode from "../src/PayU/enum/WidgetMode";
import BaseProps from "../src/PayU/Widgets/BaseProps";

const { publicRuntimeConfig } = getConfig();

export default function Home(props)
{
    const { orderData, sig } = props;

    return (
        <Layout>
            <WidgetComponent
                merchantPosId={orderData.merchantPosId}
                shopName={orderData.shopName}
                totalAmount={orderData.totalAmount}
                currencyCode={orderData.currencyCode}
                customerLanguage={orderData.customerLanguage}
                customerEmail={orderData.customerEmail}
                widgetType={WidgetType.ccv}
                storeCard={true}
                recurringPayment={true}
                payUBrand={true}
                widgetMode={WidgetMode.pay}
                successCallback={"todo"}
                sig={sig}
            />
        </Layout>
    )
}

Home.getInitialProps = async ({ query, req, res }) =>
{
    const orderData = require("../tests/fixtures/mockData.json");
    const sig = Sig(orderData);

    return {
        orderData: orderData,
        sig: sig
    }
};