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
