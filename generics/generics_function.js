"use strict";
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
const mergedObj = merge({ name: 'tibi' }, { age: 26 });
console.log(mergedObj.name);
function countAndShow(element) {
    const len = element.length;
    return `Argument has ${len} elements`;
}
const count1 = countAndShow('TEST');
const count2 = countAndShow(['TEST']);
console.log(count1, count2);
function extractAndConvert(obj, key) {
    return obj[key];
}
const extracted = extractAndConvert({ name: 'Tibi' }, 'name');
console.log(extracted);
