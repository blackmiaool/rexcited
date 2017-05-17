function only(children) {
    return children[0];
}

function isText(key) {
    return typeof key === "string" || typeof key === "number";
}
//React.Children.map(children, function[(thisArg)])
//Invokes a function on every immediate child contained within children with this set to thisArg. If children is a keyed fragment or array it will be traversed: the function will never be passed the container objects. If children is null or undefined, returns null or undefined rather than an array.
function map(children, cb, thisArg) {
    console.log('map', children, cb)
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
                child.key = key;
            } else if (Array.isArray(child)) { //array 
                child.forEach((ele, j) => {
                    return recursion(ele, `${key}:`, j);
                });
                return;
            } else {
                child = Object.assign({}, child);
                if (child && isText(child.key)) {
                    key = `${preKey}\$${child.key}`;
                    child.key = key;
                } else {

                    child.key = key;
                }
            }
            arr.push(cb.call(thisArg, child));
        }
        recursion(child, ".", i);
    });
    console.log('arr', arr);
    return arr;
    //    
    //    if (children && children.length === 1 && children[0] === null) {
    //        return [];
    //    }
    //
    //    if (Array.isArray(children)) {
    //        return children.map(cb, thisArg);
    //    } else if (typeof children === "object" && children) {
    //        const map = {}
    //        for (const i in children) {
    //            map[i] = cb.call(thisArg, children[i]);
    //        }
    //        return map;
    //    } else {
    //        return children;
    //    }
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
