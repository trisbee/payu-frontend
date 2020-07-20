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
                    Welcome to Trisbee Payment
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
            `}
            </style>
        </div>
    );
}