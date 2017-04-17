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
        value.forEach(function (child) {
            if (typeof child === "string" || typeof child === "number") {
                var content = document.createTextNode(child);
                $dom.append(content);
            } else if (Array.isArray(child)) {
                child.forEach(function (ele) {
                    $dom.append(create(ele));
                });
            } else {
                $dom.append(create(child));
            }
        });
    });

    function create(element) {
        var type = element.type,
            props = element.props;

        var dom = void 0;
        if (typeof type === "string") {
            var $dom = $(document.createElement(type));
            for (var attrName in props) {
                if (attrMap[attrName]) {
                    attrMap[attrName]($dom, props[attrName], attrName);
                } else {
                    $dom.attr(attrName, props[attrName]);
                }
            }
            dom = $dom[0];
        } else {
            dom = create(new type().render());
        }
        console.log(dom, element);
        dom[internalInstanceKey] = {
            _currentElement: element
        };
        return dom;
    }

    function update(dom, element) {
        var instance = dom[internalInstanceKey];
        console.log("instance", instance);
    }

    function render(element, target) {
        //    $dom.attr("data-reactroot", "");
        if (target.childNodes[0]) {
            update(target.childNodes[0], element);
        } else {
            var created = create(element);
            created.setAttribute('data-reactroot', "");
            target.appendChild(created);
        }

        //    const targetInstance = target.childNodes[0][internalInstanceKey];
        //    console.log(targetInstance)
    }
    var exports$1 = {
        render: render
    };

    //window.ReactDOM = exports;

    return exports$1;
});