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
              <title>مستندات پچیم</title>
              <meta name="robots" content="noindex"/>
              <script
                  type="text/javascript"
                  async
                  dangerouslySetInnerHTML={{
                      __html: `
              (function(w, d, s, l, i) {
                    w[l] = w[l] || []
                    w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" })
                    const f = d.getElementsByTagName(s)[0],
                      j = d.createElement(s),
                      dl = l != "dataLayer" ? "&l=" + l : ""
                    j.async = true
                    j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl
                    f.parentNode.insertBefore(j, f)
                  })(window,document,'script','dataLayer',"GTM-TNNWXHS")`,
                  }}
              />
              <script async type="text/javascript" src="/js/pachim-support.js" />
              <meta name="viewport" content="width=1440, initial-scale=1" />
              <link rel="shortcut icon" href="/img/pachim.ico"/>
          </Head>
          <>
              <NextNProgress />
              { getLayout(<Component {...pageProps} />) }
          </>
        </>
      );
}


export default MyApp;
