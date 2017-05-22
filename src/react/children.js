function only(children) {
    if (Array.isArray(children)) {
        return children[0];
    } else {
        if (children.type) {
            return children;
        } else {
            return children[Object.keys(children)[0]];
        }

    }

}

function isText(key) {
    return typeof key === "string" || typeof key === "number";
}

function traverse(children, cb, thisArg, addKey) {
    if (typeof children === 'object' && children && !children.type) { //map
        children = Object.keys(children).map((key) => {
            return children[key];
        });
    } else {
        children = [children];
    }

    const arr = [];
    children.forEach(function (child, i) {
        if (!child) {
            return;
        }

        function recursion(child, preKey, index) {
            let key = `${preKey}${index}`;

            if (isText(child)) { //text node                
                if (addKey) {
                    child.key = key;
                }

            } else if (Array.isArray(child)) { //array 
                child.forEach((ele, j) => {
                    return recursion(ele, `${key}:`, j);
                });
                return;
            } else {
                if (addKey) {
                    child = Object.assign({}, child);
                }

                if (child && isText(child.key)) {
                    key = `${preKey}\$${child.key}`;

                }
                if (addKey) {
                    child.key = key;
                }

            }
            arr.push(cb.call(thisArg, child));
        }
        recursion(child, ".", i);
    });

    return arr;
}

function map(children, cb, thisArg) {
    return traverse(children, cb, thisArg, true);
    //    console.log('map', children, cb)

}

function forEach(children, cb, thisArg) {
    traverse(children, cb, thisArg, false);
}

function count(children) {
    let count = 0;
    if (typeof children === "object" && children) {
        if (children.type) {
            count = 1;
        } else {
            for (const i in children) {
                count++;
            }
        }

    } else if (Array.isArray(children)) {
        count = children.length;
    }
    return count;
}
export default {
    only,
    forEach,
    map,
    count
};
