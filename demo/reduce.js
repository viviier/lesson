"use strict";
// reduce.js

/**
 * 
 * @param {Array} arr 
 * @param {Func} fn 
 */
function reduce(arr, fn) {
    var i = 0;
    var l = arr.length;
    var c = arr[i++];

    while(i < l) {
        c = fn.call(null, c, arr[i], i++);
    }

    return c;
}

// test2

/**
 * 
 * @param {Func} fn 
 */
Array.prototype.reduce = function(fn) {
    var t = this;
    var i = 0;
    var l = t.length;
    var c = t[i++];

    while(i < l) {
        c = fn.call(null, c, t[i], ++i);
    }

    return c;
}

// test
function sum(p, n) {
    return p + n;
}

console.log([1, 2, 3].reduce(sum));  // 6
console.log(reduce([1, 2, 3, 4], sum));  // 10


// exports
module.exports = {
    reduce
};