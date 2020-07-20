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
    const payBtnId = 'pay-button';

    return (
        <Layout>


            <button id={payBtnId}>Pay now</button>


            <WidgetComponent
                payButton={`#${payBtnId}`}
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
                widgetMode={WidgetMode.use}
                //successCallback={}
                sig={sig}
            />

        </Layout>
    )
}

export async function getServerSideProps() {
    const { serverRuntimeConfig } = getConfig();
    const orderData = require("../tests/fixtures/mockData.json");
    const sig = Sig(orderData,  serverRuntimeConfig.MERCHANT_POS_SECOND_KEY_MD5);

    return {
        props: {
            orderData: orderData,
            sig: sig
        }
    }
}