import Link from "next/link";

import {ArrowSmallLeftIcon} from "@heroicons/react/24/outline";
import Header from "../components/header";
import Footer from "../components/footer";


function NotFound() {
    return (
        <>
            <Header />
            <div className="flex min-h-full flex-col pt-16 pb-12">
                <main className="mx-auto flex w-full max-w-7xl flex-grow flex-col justify-center px-4 sm:px-6 lg:px-8">
                    <div className="py-24">
                        <div className="text-center">
                            <p className="text-lg font-bold text-sky-700">404</p>
                            <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">چنین صفحه‌ای یافت نشد</h1>
                            <p className="mt-4 text-base text-gray-500">متاسفم، چنین صفحه‌ای در مستندات پچّیم وجود ندارد.</p>
                            <div className="mt-6">
                                <Link href="/">
                                    <a  className="text-base flex items-center justify-center cursor-pointer font-medium text-sky-700 hover:text-sky-500">
                                        صفحه اصلی مستندات
                                        <ArrowSmallLeftIcon className="w-5 mr-1"/>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
            <Footer />
        </>
    )
}

export default NotFound;
