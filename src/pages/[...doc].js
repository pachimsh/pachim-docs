import path from 'path';
import glob from 'glob';
import fs from 'fs';

import Head from "next/head";
import DocLayout from "../components/docLayout";
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import remarkToc from 'remark-toc'
import remarkNormalizeHeadings from 'remark-normalize-headings'
import remarkAutolinkHeadings from 'remark-autolink-headings'
import {rehype} from 'rehype'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import {h} from 'hastscript'
import {ArrowTopRightOnSquareIcon} from "@heroicons/react/24/outline";
import {useRouter} from "next/router";
import remarkDirective from 'remark-directive'
import {visit} from 'unist-util-visit'
import {unified} from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeFormat from "rehype-format";
import rehypeStringify from "rehype-stringify";

function DocumentationPage({ content , meta }) {
    const { query } = useRouter()


    console.log();
    return (
        <>
            <Head>
                <title>{meta.title}</title>
            </Head>
            <div className="mx-auto w-full px-4 sm:px-6 md:px-8 pb-24">
                <div className="content-area" dangerouslySetInnerHTML={{ __html : content }} />
                <a href={`https://github.com/pachim/pachim-docs/edit/main/src/docs/${query.doc.join('/')}.md`} className="text-gray-500 flex items-center hover:text-sky-700 mt-10">
                    <ArrowTopRightOnSquareIcon className="w-4 h-4 ml-2"/>
                    تغییر این صفحه در گیت‌هاب
                </a>
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
    let processedContent = await unified()
        .use(remarkToc , {
            heading : 'جدول محتوا'
        })
        .use(remarkParse)
        .use(remarkDirective)
        .use(myRemarkPlugin)
        .use(remarkRehype)
        .use(rehypeFormat)
        .use(rehypeStringify)
        .process(content)


    function myRemarkPlugin() {
        return (tree) => {
            visit(tree, (node) => {
                if (
                    node.type === 'textDirective' ||
                    node.type === 'leafDirective' ||
                    node.type === 'containerDirective'
                ) {
                    if( node.name === 'note') {
                        const data = node.data || (node.data = {})
                        const tagName = node.type === 'textDirective' ? 'span' : 'div'

                        node.attributes = {
                            ...node.attributes,
                            class : `alert ${node.attributes?.class}`
                        }

                        data.hName = 'div'
                        data.hProperties = h(tagName, node.attributes).properties
                    }

                    if( node.name === 'title') {
                        const data = node.data || (node.data = {})

                        data.hName = 'strong'
                        data.hProperties = h('strong', node.attributes).properties
                    }
                }
            })
        }
    }

    processedContent = await rehype()
        .data('settings', {fragment: true})
        .use(rehypeSlug)
        .use(rehypeAutolinkHeadings , {
            content(node) {
                return [
                    h('span.header-anchor' , '#')
                ]
            }
        })
        .process(processedContent.toString())

    return {
        props : {
            meta,
            content : processedContent.toString()
        }
    }
}


export default DocumentationPage;
