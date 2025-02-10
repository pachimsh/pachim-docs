import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html dir="rtl">
            <Head />
            <body>
                <Main />
                <NextScript />
                <noscript>
                    <iframe
                        src={`https://www.googletagmanager.com/ns.html?id=GTM-TNNWXHS`}
                        height="0"
                        width="0"
                        style={{ display: "none", visibility: "hidden" }}
                    />
                </noscript>
            </body>
        </Html>
    )
}
