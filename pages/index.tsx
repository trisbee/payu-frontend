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


            <form action="http://localhost:3000/api/processOrder" method="POST">
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
    const orderData = require("../tests/fixtures/mockData.json");
    const sig = Sig(orderData,  serverRuntimeConfig.MERCHANT_POS_SECOND_KEY_MD5);

    return {
        props: {
            orderData: orderData,
            sig: sig
        }
    }
}
