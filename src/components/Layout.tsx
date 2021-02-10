import Head from "next/head";


export default function Layout(props)
{
    return (
        <div className="container">
            <Head>
                <title>PayU payment</title>
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
            </Head>

            <main>
                <h1 className="title">
                    Sandbox checkout
                </h1>
                <div id={"content"}>
                    {props.children}
                </div>
            </main>

            <style>{`
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
                
                h1 {
                    text-align: center;
                }
                
                .error-message {
                    padding: 15px;
                    margin: 15px;
                    border: 1px solid red;
                    border-radius: 4px;
                    font-size: 18px;
                    font-weight: bold;
                    white-space: pre-line;
                }
                
                #payu-widget {
                  max-width: 450px;
                  margin: 0 auto;
                }
                
                #payu-widget > iframe {
                    border: 1px solid #9f9f9f !important;
                    border-radius: 4px;
                }
                
            `}
            </style>
        </div>
    );
}
