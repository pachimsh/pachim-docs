
import Header from "./header";
import Footer from "./footer";
import Sidebar from "./sidebar";

export default function DocLayout({ children }) {

    return (
        <>
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
        </>
    )
}
