import "./../../styles/globals.css";
import "./../../styles/content-area.css";
import "react-toastify/dist/ReactToastify.css";
import "@yaireo/tagify/dist/tagify.css"

import React, { useEffect } from "react";
import App from "next/app";
import Head from "next/head";
import {ToastContainer} from "react-toastify";


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
        <title>گردو | مدیریت سرور</title>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-RLK36DH6JD"></script>
        <script type="text/javascript" src="/js/google-analytics.js" />
        <script async type="text/javascript" src="/js/pachim-support.js" />
      </Head>
      <>
          { getLayout(<Component {...pageProps} />) }
          <ToastContainer
              position="bottom-right"
              autoClose={4000}
              style={{ fontFamily: "'Vazirmatn', 'Vazir', -apple-system, BlinkMacSystemFont, Segoe UI "}}
              newestOnTop={false}
              closeOnClick
              draggable
              rtl
              pauseOnHover
          />
      </>
    </>
  );
}

MyApp.getInitialProps = async (appContext) => {
  // calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(appContext);

  return { ...appProps }
}

export default MyApp;
