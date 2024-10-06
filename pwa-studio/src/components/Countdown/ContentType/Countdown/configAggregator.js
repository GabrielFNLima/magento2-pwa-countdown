import { getAdvanced } from "@magento/pagebuilder/lib/utils";

export default (node, props) => {
    console.log('node',node)
    window.node = node;
    return {
        targetDate: node.childNodes[0].childNodes[0].attributes[1].value,
        ...getAdvanced(node),
    };
};
