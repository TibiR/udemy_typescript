"use strict";
// function type
function add(num1, num2) {
    return num1 + num2;
}
let sum;
sum = add;
console.log(sum(1, 2));
// class type
class Test {
    constructor(num1, num2) {
        this.num1 = num1;
        this.num2 = num2;
    }
    show() {
        if (this.num1 && this.num2) {
            console.log(this.num1 + this.num2);
        }
    }
}
let classVariable = Test;
const test = new classVariable(1, 2);
test.show();
