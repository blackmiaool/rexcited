import $ from "jquery";

function render(tag, attrs, content) {
    if (typeof tag === "String") {
        const $dom = $(document.createElement(tag));
        console.log($dom);
        return $dom;
    }
    console.log("render", arguments);
}
const exports = {
    render
}
export default exports;
//window.ReactDOM = exports;
