//import $ from "jquery";






function createElement(type, props, ...children) {
    if (!props) {
        props = {};
    }

    const instance = {
        type,
        props
    };
    if (children.length) {
        instance.props.children = children;
    }
    return instance;
}

export default createElement;
//window.React = exports;