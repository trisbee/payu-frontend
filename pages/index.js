import Head from 'next/head';
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();

export default function Home()
{
    const language = "cs";

    return (
        <div className="container">
            <Head>
                <title>PayU payment</title>
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
            </Head>

            <main>

                <h1 className="title">
                    Welcome to Trisbee Payment
                </h1>

                <script
                    src="https://secure.payu.com/front/widget/js/payu-bootstrap.js"
                    merchant-pos-id={publicRuntimeConfig.MERCHANT_POS_ID}
                    shop-name={publicRuntimeConfig.MERCHANT_SHOP_NAME}
                    total-amount="9.99"
                    currency-code={publicRuntimeConfig.MERCHANT_CURRENCY_CODE}
                    customer-language={language}
                    widget-type="cvv"
                    cvv-url="https://secure.payu.com/api/v2/token/token.json?refReqId=c4b31c492b0a5aaa9eb12d07578286a0"
                    cvv-success-callback="cvvSuccess"
                    sig="e08f617240bac43954bcbb5782a0ce203a23717ba9760be71c9ea8cab127ad12">
                </script>
            </main>


            <style jsx global>{`
                html,
                body {
                  padding: 0;
                  margin: 0;
                  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
                    Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
                    sans-serif;
                }
        
                * {
                  box-sizing: border-box;
                }
            `}
            </style>
        </div>
    )
}
