import {visit} from "unist-util-visit";
import {h} from "hastscript";


export const processDirectiveAlertMessage = () => {
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

export const deepFlatten = (items) => {
    const flatten = JSON.parse(JSON.stringify(items)) // deep copy of items;
    for (let i = 0; i < flatten.length; i++) {
        if (flatten[i].hasOwnProperty('children')) {
            flatten.splice(i + 1, 0, ...flatten[i].children)
            delete flatten[i].children
        }
    }

    return flatten
}

export const checkSidebarItemIsActive = (item , route) => {
    if(item?.href === route) {
        return true;
    }

    return !!(item?.children && deepFlatten(item.children).find(i => i.href === route));
}
