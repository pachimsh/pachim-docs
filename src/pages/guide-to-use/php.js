import ReactMarkdown from 'react-markdown'
import DocLayout from "../../components/docs/DocLayout";
import PHPContent from '../../components/docs/guide-to-use/php';
import CodeRender from '../../components/docs/layouts/codeRender';
import Head from "next/head";

export default function PHPGuide() {
    return (
        <DocLayout>
            <Head>
                <title>مستندات | راهنمای php</title>
            </Head>
            <h3 className="text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl" id="product-configuration">راهنمای استفاده از پکیج‌های PHP</h3>
            <p className="mt-4 text-lg text-gray-500">در این صفحه همه مواردی که باید در مورد پیکربندی محصولات PHP بدانید را برایتان توضیح داده‌ایم</p>
            <div className="mt-10 content-area prose-indigo max-w-none">
                <ReactMarkdown components={CodeRender} children={PHPContent()}/>
            </div>
        </DocLayout>
    )
}
