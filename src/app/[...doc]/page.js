import path from 'path';
import glob from 'glob';
import fs from 'fs';

import Head from "next/head";
import DocLayout from "../../components/docLayout";
import matter from 'gray-matter';
import remarkToc from 'remark-toc'
import {rehype} from 'rehype'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import {h} from 'hastscript'
import {ArrowTopRightOnSquareIcon} from "@heroicons/react/24/outline";
import remarkDirective from 'remark-directive'
import {unified} from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeFormat from "rehype-format";
import rehypeStringify from "rehype-stringify";
import {processDirectiveAlertMessage} from "../../helpers";
import rehypeHighlight from 'rehype-highlight'
import remarkGfm from 'remark-gfm'
import nginx from 'highlight.js/lib/languages/nginx'

export async function generateStaticParams() {
    let basePath = path.join(process.cwd(), '/src/docs').replaceAll('\\' , '/');
    let paths = glob.sync(basePath + '/**/*.md')

    paths = paths
        // remove base path
        .map(path => path.replace(basePath, ''))
        // remove .md from path
        .map(path => path.replace('.md', ''));
    return paths
  }

async function  DocumentationPage({params}) {
    // console.log("params=",params);
    let filePath = path.join(process.cwd(), '/src/docs/' ,`${params.doc.join('/')}.md`  )
    let file =  fs.readFileSync(filePath, 'utf8');

    const { data : meta, content } = matter(file);

    // Use remark to convert markdown into HTML string
    let processedContent = await unified()
        .use(remarkGfm)
        .use(remarkToc , {
            heading : 'جدول محتوا'
        })
        .use(remarkParse)
        .use(remarkDirective)
        .use(processDirectiveAlertMessage)
        .use(remarkRehype, {allowDangerousHtml: true})
        .use(rehypeFormat)
        .use(rehypeStringify, {allowDangerousHtml: true})
        .process(content)

    processedContent = await rehype()
        .data('settings', {fragment: true})
        .use(rehypeSlug)
        .use(rehypeAutolinkHeadings , {
            content() {
                return [
                    h('span.header-anchor' , '#')
                ]
            }
        })
        .use(rehypeHighlight , {
            languages: { nginx }
        })
        .process(processedContent.toString())


    return (
        <>
            <Head>
                <title>{meta.title}</title>
            </Head>
            <div className="mx-auto w-full px-4 sm:px-6 md:px-8 pb-24">
                <div className="content-area" dangerouslySetInnerHTML={{ __html : processedContent.toString() }} />
                <a href={`https://github.com/pachimsh/pachim-docs/edit/main/src/docs/${params.doc.join('/')}.md`} className="text-gray-500 flex items-center hover:text-sky-700 mt-10">
                    <ArrowTopRightOnSquareIcon className="w-4 h-4 ml-2"/>
                    تغییر این صفحه در گیت‌هاب
                </a>
            </div>
        </>
    )
}







export default DocumentationPage;
