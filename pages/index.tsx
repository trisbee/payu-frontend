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
    const { error, orderData, sig } = props;
    const appHost = publicRuntimeConfig.APP_HOST;
    const payBtnId = 'pay-button';

    if(error) {
        return (
            <Layout>
                <div className={'error-message'}>{error}</div>
            </Layout>
        )
    }

    return (
        <Layout>

            <form action={`${appHost}/api/processOrder`} method="POST">
                <button style={{display: orderData.widgetMode === 'use' ? 'none': 'block'}} id={payBtnId}>Pay now</button>
                {orderData.widgetMode === 'use' && (
                    <div id="payu-widget"/>
                )}
            </form>

            <WidgetComponent
                payButton={`#${payBtnId}`}
                merchantPosId={orderData.merchantPosId}
                shopName={orderData.shopName}
                totalAmount={orderData.totalAmount}
                currencyCode={orderData.currencyCode}
                customerLanguage={orderData.customerLanguage}
                customerEmail={orderData.customerEmail}
                widgetType={WidgetType.ccv}
                storeCard={orderData.storeCard}
                recurringPayment={orderData.recurringPayment}
                payUBrand={orderData.payUBrand}
                widgetMode={orderData.widgetMode}
                sig={sig}
            />

        </Layout>
    )
}

export async function getServerSideProps() {
    const { serverRuntimeConfig } = getConfig();
    const appHost = publicRuntimeConfig.APP_HOST;
    const secretKey = serverRuntimeConfig.MERCHANT_POS_SECOND_KEY_MD5;

    let error = null;
    const orderData = require("../tests/fixtures/mockData.json");

    if(appHost == null) {
        error = 'You have to define your `APP_HOST` in .env file';
    }

    if(secretKey == null || secretKey == 'xxx') {
        error = 'You have to define `MERCHANT_POS_SECOND_KEY_MD5` in your .env file. \n\n Find `Second key (MD5)` on your POS detail in PayU sandbox.';
    }

    const sig = Sig(orderData, secretKey);

    return {
        props: {
            orderData: orderData,
            sig: sig,
            error: error
        }
    }
}
