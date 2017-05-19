function only(children) {
    return children[0];
}

function isText(key) {
    return typeof key === "string" || typeof key === "number";
}
//React.Children.map(children, function[(thisArg)])
//Invokes a function on every immediate child contained within children with this set to thisArg. If children is a keyed fragment or array it will be traversed: the function will never be passed the container objects. If children is null or undefined, returns null or undefined rather than an array.
function traverse(children, cb, thisArg, addKey) {
    if (typeof children === 'object' && children) {
        children = Object.keys(children).map((key) => {
            return children[key];
        });
    }

    const arr = [];
    children.forEach(function (child, i) {
        if (!child) {
            return;
        }

        function recursion(child, preKey, index) {
            let key = `${preKey}${index}`;

            if (isText(child)) { //text node
                child = Object.assign({}, child);
                if (addKey) {
                    child.key = key;
                }

            } else if (Array.isArray(child)) { //array 
                child.forEach((ele, j) => {
                    return recursion(ele, `${key}:`, j);
                });
                return;
            } else {
                child = Object.assign({}, child);
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
        for (const i in children) {
            count++;
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
