// function type
function add(num1, num2) {
    return num1 + num2;
}
var sum;
sum = add;
console.log(sum(1, 2));
// class type
var Test = /** @class */ (function () {
    function Test(num1, num2) {
        this.num1 = num1;
        this.num2 = num2;
    }
    Test.prototype.show = function () {
        console.log(this.num1 + this.num2);
    };
    return Test;
}());
var classVariable = Test;
var test = new classVariable(1, 2);
test.show();
