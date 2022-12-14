import "./../../styles/globals.css";
import "./../../styles/content-area.css";

import React, { useEffect } from "react";
import Head from "next/head";
import NextNProgress from 'nextjs-progressbar';

function MyApp({ Component, pageProps }) {

    useEffect(() => {
        document.body.dir = 'rtl';
    }, []);

    const getLayout = Component.getLayout || ((page) => page)

      return (
        <>
          <Head>
                <link
                  href="https://fonts.googleapis.com/css2?family=Vazirmatn:wght@100;200;300;400;500;600;700;800;900&display=swap"
                  rel="stylesheet"
                />
                <link
                  href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800&display=swap"
                  rel="stylesheet"
                />
            <title>مستندات پَچیم</title>
            <script async src="https://www.googletagmanager.com/gtag/js?id=G-RLK36DH6JD"></script>
            <script type="text/javascript" src="/js/google-analytics.js" />
            <script async type="text/javascript" src="/js/pachim-support.js" />
          </Head>
          <>
              <NextNProgress />
              { getLayout(<Component {...pageProps} />) }
          </>
        </>
      );
}


export default MyApp;
