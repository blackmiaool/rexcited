const internalInstanceKey = '__reactInternalInstance$' + Math.random().toString(36).slice(2);


function regiterAttr(name, cb) {
    attrMap[name] = cb;
}
const attrMap = {};


regiterAttr("className", function ($dom, value) {
    $dom.attr("class", value);
});
regiterAttr("children", function ($dom, value) {
    value.forEach(function (child) {
        if (typeof child === "string" || typeof child === "number") {
            let content = document.createTextNode(child);
            $dom.append(content);
        } else if (Array.isArray(child)) {
            child.forEach((ele) => {
                $dom.append(create(ele));
            });
        } else {
            $dom.append(create(child));
        }
    });
});

function create(element) {
    const {
        type,
        props
    } = element;
    let dom;
    if (typeof type === "string") {
        const $dom = $(document.createElement(type));
        for (const attrName in props) {
            if (attrMap[attrName]) {
                attrMap[attrName]($dom, props[attrName], attrName);
            } else {
                $dom.attr(attrName, props[attrName]);
            }
        }
        dom = $dom[0];
    } else {
        dom = create((new type()).render());
    }
    console.log(dom, element);
    dom[internalInstanceKey] = {
        _currentElement: element
    }
    return dom;
}

function update(dom, element) {
    const instance = dom[internalInstanceKey];
    console.log("instance", instance);
}

function render(element, target) {
    //    $dom.attr("data-reactroot", "");
    if (target.childNodes[0]) {
        update(target.childNodes[0], element);
    } else {
        const created = create(element);
        created.setAttribute('data-reactroot', "");
        target.appendChild(created);
    }

    //    const targetInstance = target.childNodes[0][internalInstanceKey];
    //    console.log(targetInstance)
}
const exports = {
    render
}


export default exports;
//window.ReactDOM = exports;