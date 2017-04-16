var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function (global, factory) {
    (typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? module.exports = factory() : typeof define === 'function' && define.amd ? define(factory) : global.ReactDOM = factory();
})(this, function () {
    'use strict';

    var internalInstanceKey = '__reactInternalInstance$' + Math.random().toString(36).slice(2);

    function regiterAttr(name, cb) {
        attrMap[name] = cb;
    }
    var attrMap = {};

    regiterAttr("className", function ($dom, value) {
        $dom.attr("class", value);
    });
    regiterAttr("children", function ($dom, value) {
        console.log("children", value);
        value.forEach(function (child) {
            if (typeof child === "string") {
                var content = document.createTextNode(child);
                $dom.append(content);
            } else {
                $dom.append(update(undefined, child));
            }
        });
    });

    function update(component, element) {
        if (component) {
            var instance = component[internalInstanceKey];
        } else {
            console.trace("element", element);
            var type = element.type,
                props = element.props;


            if (typeof type === "string") {
                var $dom = $(document.createElement(type));
                for (var attrName in props) {
                    if (attrMap[attrName]) {
                        attrMap[attrName]($dom, props[attrName], attrName);
                    } else {
                        $dom.attr(attrName, props[attrName]);
                    }
                }

                console.log($dom);
                return $dom;
            } else {
                console.log("type", type);
                return new element.type().render();
            }
        }
    }

    function render(element, target) {
        //    $dom.attr("data-reactroot", "");

        console.log("none");
        if (target.childNodes[0]) {
            update(target.childNodes[0], element);
        } else {
            target.appendChild(update(undefined, element)[0]);
        }

        var targetInstance = target.childNodes[0][internalInstanceKey];
        console.log(targetInstance);
        //    target.appendChild($dom[0]);
        //    console.log("render", arguments);
        //    if (typeof tag === "string") {
        //        instance.name = tag;
        //        const $dom = $(document.createElement(tag));
        //        for (const attrName in attrs) {
        //            if (attrMap[attrName]) {
        //                attrMap[attrName]($dom, attrs[attrName], attrName);
        //            } else {
        //                $dom.attr(attrName, attrs[attrName]);
        //            }
        //        }
        //        children.forEach(function (child) {
        //            if (typeof child === "string") {
        //                let content = document.createTextNode(child);
        //                $dom.append(content);
        //            } else {
        //                $dom.append(child);
        //            }
        //        });
        //        console.log($dom);
        //        return $dom;
        //    }
    }
    var exports$1 = {
        render: render
    };

    //window.ReactDOM = exports;

    return exports$1;
});