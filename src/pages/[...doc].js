import path from 'path';
import glob from 'glob';
import fs from 'fs';

import Head from "next/head";
import DocLayout from "../components/docLayout";
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

function DocumentationPage({ content , meta }) {
    return (
        <>
            <Head>
                <title>{meta.title}</title>
            </Head>
            <div className="mx-auto w-full px-4 sm:px-6 md:px-8">
                <div className="content-area" dangerouslySetInnerHTML={{ __html : content }} />
            </div>
        </>
    )
}

DocumentationPage.getLayout = (page) => <DocLayout>{ page }</DocLayout>

export async function getStaticPaths() {
    let basePath = path.join(process.cwd(), '/src/docs').replaceAll('\\' , '/');
    let paths = glob.sync(basePath + '/**/*.md')

    paths = paths
        // remove base path
        .map(path => path.replace(basePath, ''))
        // remove .md from path
        .map(path => path.replace('.md', ''));

    return { paths : paths ?? [], fallback: false }
}

export async function getStaticProps({ params }) {
    let filePath = path.join(process.cwd(), '/src/docs/' ,`${params.doc.join('/')}.md`  )

    let file =  fs.readFileSync(filePath, 'utf8');

    const { data : meta, content } = matter(file);

    // Use remark to convert markdown into HTML string
    const processedContent = await remark()
        .use(html)
        .process(content);

    return {
        props : {
            meta,
            content : processedContent.toString()
        }
    }
}


export default DocumentationPage;
