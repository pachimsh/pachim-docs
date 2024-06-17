import "./../../styles/globals.css";
import "./../../styles/content-area.css";
import Header from "../components/header";
import Footer from "../components/footer";
import Sidebar from "../components/sidebar";
export default function DashboardLayout({
    children, // will be a page or nested layout
  }) {
    return (
        <html dir="rtl">
          <head>
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
          </head>
        <body>
        <Header />
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="grid grid-cols-12 mt-10">
                    <div className="col-span-3">
                        <Sidebar />
                    </div>
                    <div className="flex flex-col col-span-9">

                        <div className="mx-auto w-full  px-4 sm:px-6 md:px-8">
                            {/* Replace with your content */}
                            { children }
                            {/* /End replace */}
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
            <noscript>
                <iframe
                    src={`https://www.googletagmanager.com/ns.html?id=GTM-TNNWXHS`}
                    height="0"
                    width="0"
                    style={{ display: "none", visibility: "hidden" }}
                />
            </noscript>
        </body>
    </html>

    )
  }
