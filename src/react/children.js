function only(children) {
    return children[0];
}
//React.Children.map(children, function[(thisArg)])
//Invokes a function on every immediate child contained within children with this set to thisArg. If children is a keyed fragment or array it will be traversed: the function will never be passed the container objects. If children is null or undefined, returns null or undefined rather than an array.
function map(children, cb, thisArg) {
    if (children && children.length === 1 && children[0] === null) {
        return [];
    }
    console.log('childrenmap', arguments);
    if (Array.isArray(children)) {
        return children.map(cb, thisArg);
    } else if (typeof children === "object" && children) {
        const map = {}
        for (const i in children) {
            map[i] = cb.call(thisArg, children[i]);
        }
        return map;
    } else {
        return children;
    }
}

function forEach(children, cb, thisArg) {
    map.call(thisArg, children, cb, thisArg);
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