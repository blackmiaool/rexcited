//import $ from "jquery";






function createElement(type, props, ...children) {
    if (!props) {
        props = {};
    }

    const instance = {
        type,
        props
    };
    if (props.key) {
        instance.key = props.key;
        delete props.key
    }
    if (props.ref) {
        instance.ref = props.ref;
        delete props.ref
    }
    if (children.length > 1) {
        instance.props.children = children;
    } else if (children.length === 1) {
        instance.props.children = children[0];
    }
    return instance;
}

export default createElement;
//window.React = exports;
