//import $ from "jquery";






function createElement(type, config, ...children) {
    if (!config) {
        config = {};
    }

    const instance = {
        type,
        props: config
    };
    if (children) {
        instance.props.children = children;
    }
    return instance;
}

export default createElement;
//window.React = exports;
