function merge<T extends object, U extends object>(objA: T, objB: U) {
    return Object.assign(objA, objB);
}

const mergedObj = merge({ name: 'tibi' }, { age: 26 });

console.log(mergedObj.name);




interface Lengthy {
    length: number;
}

function countAndShow<T extends Lengthy>(element: T) {
    const len = element.length;
    return `Argument has ${len} elements`;
}

const count1 = countAndShow('TEST');
const count2 = countAndShow(['TEST']);

console.log(count1, count2);



function extractAndConvert<T extends object, K extends keyof T>(obj: T, key: K) {
    return obj[key];
}

const extracted = extractAndConvert({name: 'Tibi'}, 'name');

console.log(extracted);